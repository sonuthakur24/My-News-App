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
  const collection = db.collection('likes');

  if (req.method === 'POST') {
    const { articleId, userId } = req.body;

    if (!articleId || !userId) {
      return res.status(400).json({ error: 'Article ID and User ID are required' });
    }

    try {
      const result = await collection.updateOne(
        { articleId },
        { $addToSet: { likes: userId } },
        { upsert: true }
      );

      return res.status(200).json({ message: 'Like added successfully' });
    } catch (error) {
      console.error('Error adding like:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    const { articleId } = req.query;

    if (!articleId) {
      return res.status(400).json({ error: 'Article ID is required' });
    }

    try {
      const article = await collection.findOne({ articleId });
      const likes = article?.likes || [];

      return res.status(200).json({ likes });
    } catch (error) {
      console.error('Error fetching likes:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}