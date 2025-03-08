import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { articleId, userId, comment } = req.body;

    console.log('Received data:', { articleId, userId, comment });

    if (!articleId || !userId || !comment) {
      console.log('Missing articleId, userId, or comment');
      return res.status(400).json({ error: 'Article ID, User ID, and comment are required' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('appDatabase');
      const collection = db.collection('interactions');

      const result = await collection.updateOne(
        { articleId },
        { $push: { comments: { userId, comment } } },
        { upsert: true }
      );

      console.log('Comment added successfully:', result);

      return res.status(200).json({ message: 'Comment added successfully' });
    } catch (error) {
      console.error('Error adding comment:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}