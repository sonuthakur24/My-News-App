import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Layout({ children }) {
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const learnDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  const isActive = (path) => (router.pathname === path ? 'underline' : 'text-white');

  const handleClickOutside = (event) => {
    if (learnDropdownRef.current && !learnDropdownRef.current.contains(event.target)) {
      setIsLearnDropdownOpen(false);
    }
    if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
      setIsProfileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLearnDropdown = () => {
    setIsLearnDropdownOpen(!isLearnDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsLearnDropdownOpen(false);
  };

  return (
    <div>
      <nav className="bg-blue-800 p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110" />
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
            <li className="relative" ref={learnDropdownRef}>
              <button className={`${isActive('/learn')} hover:text-gray-300`} onClick={toggleLearnDropdown}>
                Learn
              </button>
              {isLearnDropdownOpen && (
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
            {session ? (
              <div className="relative" ref={profileDropdownRef}>
                <button className="flex items-center text-white focus:outline-none" onClick={toggleProfileDropdown}>
                  <FontAwesomeIcon icon={faUserCircle} className="text-3xl" />
                  <span className="ml-2">{session.user.name}</span>
                </button>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    <Link href="/profile" legacyBehavior>
                      <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
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