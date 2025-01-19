import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center space-x-4">
          <img src="/logo1.jpg" alt="Logo" className="h-10" /> {/* Replace with your logo path */}
          <div>
            <h2 className="text-lg font-bold">Social Engineering News Aggregator</h2>
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li>
            <Link href="/privacy-policy" legacyBehavior>
              <a className="hover:text-gray-300">Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" legacyBehavior>
              <a className="hover:text-gray-300">Terms of Service</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="hover:text-gray-300">Contact</a>
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.043.762.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.384 3.95 4.835-.414.112-.849.171-1.296.171-.317 0-.626-.031-.928-.088.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0h-20.46c-.974 0-1.77.796-1.77 1.77v20.459c0 .974.796 1.771 1.77 1.771h20.459c.974 0 1.771-.797 1.771-1.771v-20.459c0-.974-.797-1.77-1.771-1.77zm-13.539 20.452h-3.692v-10.452h3.692v10.452zm-1.846-11.938c-1.184 0-2.146-.962-2.146-2.146s.962-2.146 2.146-2.146 2.146.962 2.146 2.146-.962 2.146-2.146 2.146zm13.539 11.938h-3.692v-5.604c0-1.336-.026-3.057-1.863-3.057-1.863 0-2.149 1.454-2.149 2.957v5.704h-3.692v-10.452h3.538v1.428h.051c.492-.934 1.694-1.918 3.488-1.918 3.726 0 4.414 2.451 4.414 5.635v5.307z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}