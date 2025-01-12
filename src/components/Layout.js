// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-2xl">Logo</div>
        <nav>
          <ul className="flex space-x-4">
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
