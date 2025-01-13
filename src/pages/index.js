import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  const [headlines, setHeadlines] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchHeadlines() {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: '37b31121ec964de88eecb783de6cec91',
          },
        });
        setHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    }

    async function fetchImages() {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: 'tech', // Change the topic as needed
            client_id: 'zjKsVTPyuTxCeTiVgayeg6igk_IvglEtrRwhY2tsvHY', // Replace with your Unsplash API key
            per_page: 3,
          },
        });
        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchHeadlines();
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Social Engineering News Aggregator</title>
        <meta name="description" content="Stay informed about the latest social engineering news and trends." />
      </Head>
      <header className="relative">
      </header>
      <main className="p-4">
        <div id="controls-carousel" className="relative w-full mx-auto" data-carousel="static">
          {/* Carousel wrapper */}
          <Carousel 
            showThumbs={false} 
            autoPlay 
            infiniteLoop
            className="carousel-container"
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide relative">
                <img 
                  src={image.urls.regular} 
                  alt={image.alt_description}
                  className="carousel-image"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                  <h1 className="text-white text-4xl font-bold mb-4 animate-fade-in">
                    Welcome to
                  </h1>
                  <h2 className="text-white text-5xl font-bold mb-4 animate-slide-up">
                    Social Engineering News Aggregator
                  </h2>
                  <h3 className="text-white text-3xl font-semibold animate-fade-in">
                    (SENA)
                  </h3>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        {/* News headlines */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Top Headlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {headlines.slice(0, 3).map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={article.urlToImage || '/images/placeholder.png'}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-gray-600">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
