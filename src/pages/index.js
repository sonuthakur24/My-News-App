// pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  const featuredArticles = [
    { title: "Featured Article 1", description: "Brief description for featured article 1", thumbnail: " " },
    { title: "Featured Article 2", description: "Brief description for featured article 2", thumbnail: " " },
    // Add more featured articles as needed
  ];

  const categories = ["Phishing", "Baiting", "Pretexting"];
  const recentUpdates = ["Update 1", "Update 2", "Update 3"];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Social Engineering News Aggregator</title>
        <meta name="description" content="Stay informed about the latest social engineering news and trends." />
      </Head>
      
      <main className="p-4 flex">
        <section className="flex-1">
          <h2 className="text-xl font-bold mb-4 text-black">Featured News</h2>
          <div className="grid gap-4">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white p-4 rounded shadow flex">
                <img src={article.thumbnail} alt={article.title} className="w-1/4 h-auto mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-black">{article.title}</h3>
                  <p className="text-black">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <aside className="w-1/4 ml-4">
          <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="font-bold text-black">Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="text-black">{category}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-black">Recent Updates</h3>
            <ul>
              {recentUpdates.map((update, index) => (
                <li key={index} className="text-black">{update}</li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>Contact Information | Social Media Links</p>
        <p>&copy; 2025 Social Engineering News Aggregator</p>
      </footer>
    </div>
  );
}
