// pages/contact.js
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, send data to an API endpoint
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <style>{`
          .hero-bg {
            background-image: url('pixel.png') !important;
            background-size: cover;
            background-position: center;
            height: 100vh;
          }
          .message {
            display: none;
            margin-top: 10px;
            padding: 10px;
            border-radius: 5px;
          }
          .error { 
            background-color: #f8d7da;
            color: #721c24;
          }
          .success { 
            background-color: #d4edda;
            color: #155724;
          }
        `}</style>
      </Head>
      <div className="hero-bg flex items-center justify-center text-white">
        
      </div>
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-black">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black">Get in Touch</h2>
                <p className="text-gray-600 mt-2 text-black">We'd love to hear from you! Whether you have a question, feedback, or a project to discuss, our team is ready to assist you.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black">Email</h3>
                <a href="mailto:sonuthakursk24@gmail.com" className="text-blue-600 hover:underline">sonuthakursk24@gmail.com</a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black">Phone</h3>
                <p className="text-gray-600 text-black">+91 93 2212 1271</p>
                <p className="text-gray-600 text-black">+91 77 3814 1738</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-blue-600 hover:underline"><i className="fab fa-facebook-square"></i> Facebook</a>
                  <a href="#" className="text-blue-600 hover:underline"><i className="fab fa-twitter-square"></i> Twitter</a>
                  <a href="#" className="text-blue-600 hover:underline"><i className="fab fa-linkedin"></i> LinkedIn</a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="success message">{successMessage}</div>
                <div className="error message">{errorMessages.join(', ')}</div>
                <input type="text" name="name" placeholder="Name" className="w-full p-3 border rounded-lg text-black" />
                <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg text-black" />
                <input type="text" name="contact" placeholder="Contact Number" className="w-full p-3 border rounded-lg text-black" />
                <input type="text" name="city" placeholder="City" className="w-full p-3 border rounded-lg text-black" />
                <textarea name="message" placeholder="Message" rows="6" className="w-full p-3 border rounded-lg text-black"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
