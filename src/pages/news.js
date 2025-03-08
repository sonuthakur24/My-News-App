import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { faThumbsUp, faShareAlt, faComment, faSearch, faFilter, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';

export default function News() {
  const { data: session } = useSession();
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('latest');
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [shares, setShares] = useState({});
  const [notification, setNotification] = useState('');
  const [categories, setCategories] = useState([
    'All Categories',
    'Phishing',
    'Ransomware',
    'Data Breach',
    'MITM Attacks',
    'Social Engineering',
    'Cybersecurity',
    'Hacking',
    'Malware',
    'Privacy',
    'Encryption'
  ]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const defaultImageUrl = 'https://via.placeholder.com/150'; // Default image URL

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'social engineering', // Initial query for social engineering-related news
            apiKey: '37b31121ec964de88eecb783de6cec91',
          },
        });
        const articlesWithCategories = response.data.articles.map(article => ({
          ...article,
          category: categorizeArticle(article),
          tags: generateTags(article),
          urlToImage: article.urlToImage || defaultImageUrl, // Use default image if urlToImage is not available
        }));
        setArticles(articlesWithCategories);
        setCategories([...new Set([...categories, ...articlesWithCategories.map(article => article.category)])]);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  useEffect(() => {
    let filtered = articles;

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.description.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedCategory && selectedCategory !== 'All Categories') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Apply date range filter
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      filtered = filtered.filter(article => {
        const publishedDate = new Date(article.publishedAt);
        return publishedDate >= start && publishedDate <= end;
      });
    }

    setFilteredArticles(filtered);
  }, [searchQuery, articles, selectedCategory, startDate, endDate]);

  const categorizeArticle = (article) => {
    const title = article.title.toLowerCase();
    const description = article.description.toLowerCase();
    if (title.includes('phishing') || description.includes('phishing')) return 'Phishing';
    if (title.includes('ransomware') || description.includes('ransomware')) return 'Ransomware';
    if (title.includes('data breach') || description.includes('data breach')) return 'Data Breach';
    if (title.includes('MITM Attacks') || description.includes('MITM Attacks')) return 'Data Breach';
    // Add more categories as needed
    return 'Other';
  };

  const generateTags = (article) => {
    const text = `${article.title} ${article.description}`.toLowerCase();
    const potentialTags = ['cybersecurity', 'hacking', 'malware', 'privacy', 'encryption', 'social engineering'];
    return potentialTags.filter(tag => text.includes(tag));
  };

  const fetchInteractions = async (articleId) => {
    try {
      const response = await axios.get('/api/getInteractions', { params: { articleId } });
      const { likes, comments } = response.data || {};
      setLikes(prevLikes => ({ ...prevLikes, [articleId]: likes || [] }));
      setComments(prevComments => ({ ...prevComments, [articleId]: comments || [] }));
    } catch (error) {
      console.error('Error fetching interactions:', error);
    }
  };

  const handleLike = async (index, articleId) => {
    if (!session) {
      setNotification('You need to be logged in to like an article.');
      setTimeout(() => setNotification(''), 3000);
      return;
    }

    try {
      console.log('Session data:', session); // Log session data
      console.log('Article ID:', articleId); // Log article ID
      console.log('User Email:', session.user.email); // Log user email
      await axios.post('/api/like', { articleId, userId: session.user.email });
      setLikes(prevLikes => ({
        ...prevLikes,
        [articleId]: (prevLikes[articleId] || []).concat(session.user.email),
      }));
    } catch (error) {
      console.error('Error liking article:', error);
    }
  };

  const handleComment = async (index, articleId, comment) => {
    if (!session) {
      setNotification('You need to be logged in to comment on an article.');
      setTimeout(() => setNotification(''), 3000);
      return;
    }

    try {
      await axios.post('/api/comment', { articleId, userId: session.user.email, comment });
      setComments(prevComments => ({
        ...prevComments,
        [articleId]: (prevComments[articleId] || []).concat({ userId: session.user.email, comment }),
      }));
    } catch (error) {
      console.error('Error commenting on article:', error);
    }
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

  useEffect(() => {
    articles.forEach(article => {
      fetchInteractions(article.url);
    });
  }, [articles]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>News - Social Engineering News Aggregator</title>
        <meta name="description" content="Browse the latest news articles on social engineering." />
      </Head>
      
      <main className="container mx-auto p-6">
        {notification && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-lg">
            {notification}
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center w-full md:w-6/12 mb-4 md:mb-0">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border rounded-full w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-wrap items-center space-x-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faFilter} className="text-gray-500 mr-2" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 border rounded-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500 mr-2" />
              <label className="mr-2 text-black">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-2 border rounded-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500 mr-2" />
              <label className="mr-2 text-black">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="p-2 border rounded-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-black">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  {article.title}
                </a>
              </h3>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <div className="mt-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  {article.category}
                </span>
                {article.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <button onClick={() => handleLike(index, article.url)} className="text-blue-600 hover:text-blue-800 flex items-center">
                  <FontAwesomeIcon icon={faThumbsUp} className="mr-1" /> Like ({(likes[article.url] || []).length})
                </button>
                <button onClick={() => handleShare(index, article.url)} className="text-blue-600 hover:text-blue-800 flex items-center">
                  <FontAwesomeIcon icon={faShareAlt} className="mr-1" /> Share ({shares[index] || 0})
                </button>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="p-2 border rounded-full w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleComment(index, article.url, e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
                <div className="mt-2">
                  {(comments[article.url] || []).map((comment, commentIndex) => (
                    <p key={commentIndex} className="text-gray-600 flex items-center">
                      <FontAwesomeIcon icon={faComment} className="mr-1" /> {comment.comment}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}