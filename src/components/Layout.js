import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './Footer';

export default function Layout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by checking the presence of a token
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  const isActive = (path) => (router.pathname === path ? 'underline' : 'text-white');

  return (
    <div>
      <nav className="bg-blue-800 p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo1.jpg" alt="Logo" className="h-10 w-10 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110" />
            <span className="text-white text-lg font-bold transform transition-transform duration-300 hover:scale-110 hover:text-gray-300">
              Social Engineering News Aggregator
            </span>
          </div>
          <ul className="flex space-x-4 mx-auto">
            <li>
              <Link href="/" className={`${isActive('/')} hover:text-gray-300`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/news" className={`${isActive('/news')} hover:text-gray-300`}>
                News
              </Link>
            </li>
            <li className="relative">
              <button className={`${isActive('/learn')} hover:text-gray-300`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Learn
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-blue-500 text-white rounded shadow-lg z-20">
                  <li className="border-b border-gray-200">
                    <Link href="/learn/dos-ddos" className="block px-4 py-2 hover:bg-blue-400">
                      DoS & DDoS
                    </Link>
                  </li>
                  <li className="border-b border-gray-200">
                    <Link href="/learn/mitm" className="block px-4 py-2 hover:bg-blue-400">
                      MITM
                    </Link>
                  </li>
                  <li className="border-b border-gray-200">
                    <Link href="/learn/sql-injection" className="block px-4 py-2 hover:bg-blue-400">
                      SQL Injection
                    </Link>
                  </li>
                  <li className="border-b border-gray-200">
                    <Link href="/learn/dns-spoofing" className="block px-4 py-2 hover:bg-blue-400">
                      DNS Spoofing
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn/phishing" className="block px-4 py-2 hover:bg-blue-400">
                      Phishing
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/about" className={`${isActive('/about')} hover:text-gray-300`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`${isActive('/contact')} hover:text-gray-300`}>
                Contact
              </Link>
            </li>
          </ul>
          <ul className="flex space-x-4">
            {isLoggedIn ? (
              <>
                <li>
                  <Link href="/profile" className={`${isActive('/profile')} hover:text-gray-300`}>
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-white hover:text-gray-300">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className={`${isActive('/login')} hover:text-gray-300`}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className={`${isActive('/signup')} hover:text-gray-300`}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <main>{children}</main>
      <Footer />
    </div>
  );
}