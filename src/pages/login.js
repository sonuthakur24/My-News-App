import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GoogleLoginButton from '../components/GoogleLoginButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Redirect to profile if already logged in
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/profile');
    }
  }, [router]);

  useEffect(() => {
    async function fetchBackgroundImage() {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'cybersecurity',
            orientation: 'landscape',
            client_id: 'zjKsVTPyuTxCeTiVgayeg6igk_IvglEtrRwhY2tsvHY'
          }
        });
        setBackgroundImage(response.data.urls.regular);
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    }
    fetchBackgroundImage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      router.push('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to log in. Please check your credentials and try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Head>
        <title>Login - Social Engineering News Aggregator</title>
        <meta name="description" content="Login to access your account" />
      </Head>

      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Login
          </button>
        </form>
        <div className="mt-4">
          <GoogleLoginButton />
        </div>
        <p className="mt-4 text-center text-gray-700">
          Don't have an account?{' '}
          <Link href="/signup" legacyBehavior>
            <a className="text-blue-500 hover:underline">Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  );
}