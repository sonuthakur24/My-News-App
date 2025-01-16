import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-2xl">Logo</div>
        <nav className="flex-1">
          <ul className="flex justify-center space-x-5">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/news">
                News
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="focus:outline-none"
              >
                Learn
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                  <li className="border-b border-gray-200">
                    <Link href="/learn/dos-ddos" className="block px-4 py-2 hover:bg-gray-100">
                      DoS & DDoS
                    </Link>
                  </li>
                  <li className="border-b border-gray-200">
                    <Link href="/learn/phishing" className="block px-4 py-2 hover:bg-gray-100">
                      Phishing
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn/malware" className="block px-4 py-2 hover:bg-gray-100">
                      Malware
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
