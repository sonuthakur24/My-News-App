// pages/news.js
import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'social engineering', // Initial query for social engineering-related news
            apiKey: '37b31121ec964de88eecb783de6cec91', // Use your API key here
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    const title = article.title || ''; // Default to empty string if null
    const description = article.description || ''; // Default to empty string if null
    // Exclude articles with unwanted text
    return !title.includes('[Removed]') && !description.includes('[Removed]');
  });

  return (
    <div className="min-h-screen bg-gray-100 shadow-lg" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Head>
        <title>News - Social Engineering News Aggregator</title>
        <meta name="description" content="Browse the latest news articles on social engineering." />
      </Head>
      
      <main className="p-4">
        <input
          type="text"
          placeholder="Search articles..."
          className="p-2 border rounded-full mb-4 w-full text-black shadow-md"
          style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredArticles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded mb-4"
                style={{ aspectRatio: '1 / 1' }}
              />
              <h2 className="text-xl font-bold text-black">{article.title}</h2>
              <p className="text-sm text-gray-500">{article.publishedAt}</p>
              <p className="text-black">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Read more
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
