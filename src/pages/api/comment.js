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
  const client = await clientPromise;
  const db = client.db('appDatabase'); // Replace with your database name
  const collection = db.collection('comments');

  if (req.method === 'POST') {
    const { articleId, userId, comment } = req.body;

    if (!articleId || !userId || !comment) {
      return res.status(400).json({ error: 'Article ID, User ID, and comment are required' });
    }

    try {
      const result = await collection.updateOne(
        { articleId },
        { $push: { comments: { userId, comment, timestamp: new Date() } } },
        { upsert: true }
      );

      return res.status(200).json({ message: 'Comment added successfully' });
    } catch (error) {
      console.error('Error adding comment:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    const { articleId } = req.query;

    if (!articleId) {
      return res.status(400).json({ error: 'Article ID is required' });
    }

    try {
      const article = await collection.findOne({ articleId });
      const comments = article?.comments || [];

      return res.status(200).json({ comments });
    } catch (error) {
      console.error('Error fetching comments:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}