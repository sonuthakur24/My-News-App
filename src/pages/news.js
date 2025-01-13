import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShareAlt, faComment } from '@fortawesome/free-solid-svg-icons';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('latest');
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [shares, setShares] = useState({});
  const [notification, setNotification] = useState('');

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'social engineering', // Initial query for social engineering-related news
            apiKey: '37b31121ec964de88eecb783de6cec91',
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  useEffect(() => {
    const filtered = articles.filter(article => {
      const title = article.title || ''; // Default to empty string if null
      const description = article.description || ''; // Default to empty string if null
      const query = searchQuery.toLowerCase();

      return (
        (!title.includes('[Removed]') && !description.includes('[Removed]')) &&
        (title.toLowerCase().includes(query) || description.toLowerCase().includes(query))
      );
    });
    setFilteredArticles(filtered);
  }, [searchQuery, articles, filterOption]);

  const handleLike = (index) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [index]: (prevLikes[index] || 0) + 1,
    }));
  };

  const handleComment = (index, comment) => {
    setComments(prevComments => ({
      ...prevComments,
      [index]: [...(prevComments[index] || []), comment],
    }));
  };

  const handleShare = (index, url) => {
    navigator.clipboard.writeText(url).then(() => {
      setNotification('Link copied to clipboard!');
      setShares(prevShares => ({
        ...prevShares,
        [index]: (prevShares[index] || 0) + 1,
      }));
      setTimeout(() => {
        setNotification('');
      }, 3000); // Hide notification after 3 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 shadow-lg" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Head>
        <title>News - Social Engineering News Aggregator</title>
        <meta name="description" content="Browse the latest news articles on social engineering." />
      </Head>
      
      <main className="p-4">
        {notification && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-lg">
            {notification}
          </div>
        )}
        <div className="flex items-center space-x-4 mb-4">
          <select
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
            className="p-1 border rounded-full text-black shadow-md"
            style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '150px' }}
          >
            <option value="latest">Latest</option>
            <option value="trending">Trending</option>
            <option value="most-viewed">Most Viewed</option>
          </select>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-full w-full text-black shadow-md"
            style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={article.urlToImage || '/images/placeholder.png'}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {article.title}
                  </a>
                </h3>
                <p className="text-gray-600">{article.description}</p>
                <div className="flex items-center space-x-4 mt-4">
                  <button onClick={() => handleLike(index)} className="text-blue-600 hover:underline flex items-center">
                    <FontAwesomeIcon icon={faThumbsUp} className="mr-1" /> Like ({likes[index] || 0})
                  </button>
                  <button onClick={() => handleShare(index, article.url)} className="text-blue-600 hover:underline flex items-center">
                    <FontAwesomeIcon icon={faShareAlt} className="mr-1" /> Share ({shares[index] || 0})
                  </button>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="p-2 border rounded-full w-full text-black shadow-md"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleComment(index, e.target.value);
                        e.target.value = '';
                      }
                    }}
                  />
                  <div className="mt-2">
                    {comments[index] && comments[index].map((comment, commentIndex) => (
                      <p key={commentIndex} className="text-gray-600 flex items-center">
                        <FontAwesomeIcon icon={faComment} className="mr-1" /> {comment}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
