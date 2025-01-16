import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Footer from './Footer'; // Import the Footer component

export default function Layout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-blue-800 p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <img src="/logo.png" alt="Logo" className="h-8" /> {/* Replace with your logo path */}
          </div>
          <ul className="flex space-x-4 mx-auto">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-white hover:text-gray-300">
                News
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                className="text-white hover:text-gray-300"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
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
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}