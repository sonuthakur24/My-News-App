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
    const { articleId, userId } = req.body;

    console.log('Received data:', { articleId, userId });

    if (!articleId || !userId) {
      console.log('Missing articleId or userId');
      return res.status(400).json({ error: 'Article ID and User ID are required' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('appDatabase');
      const collection = db.collection('interactions');

      const result = await collection.updateOne(
        { articleId },
        { $addToSet: { likes: userId } },
        { upsert: true }
      );

      console.log('Like added successfully:', result);

      return res.status(200).json({ message: 'Like added successfully' });
    } catch (error) {
      console.error('Error adding like:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}