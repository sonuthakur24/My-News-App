import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      contact: formData.get('contact'),
      city: formData.get('city'),
      message: formData.get('message'),
    };

    try {
      const response = await axios.post('/api/contact', data);
      setSuccessMessage(response.data.message);
      setErrorMessages([]);
      e.target.reset();
      setShowPopup(true); // Show the popup on success
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSuccessMessage('');
      setErrorMessages([error.response?.data?.error || 'Failed to submit the form. Please try again.']);
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
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
          .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            color: black; /* Ensure text is black */
          }
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
          }
        `}</style>
      </Head>
      <div className="hero-bg flex items-center justify-center text-white"></div>
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-black">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black">Get in Touch</h2>
                <p className="text-gray-600 mt-2 text-black">
                  We'd love to hear from you! Whether you have a question, feedback, or a project to discuss, our team is ready to assist you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black">Email</h3>
                <a href="mailto:sonuthakursk24@gmail.com" className="text-blue-600 hover:underline">
                  sonuthakursk24@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black">Phone</h3>
                <p className="text-gray-600 text-black">+91 93 2212 1271</p>
                <p className="text-gray-600 text-black">+91 77 3814 1738</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    <i className="fab fa-facebook-square"></i> Facebook
                  </a>
                  <a href="#" className="text-blue-600 hover:underline">
                    <i className="fab fa-twitter-square"></i> Twitter
                  </a>
                  <a href="#" className="text-blue-600 hover:underline">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {errorMessages.length > 0 && <div className="error message">{errorMessages.join(', ')}</div>}
                <input type="text" name="name" placeholder="Name" className="w-full p-3 border rounded-lg text-black" required />
                <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg text-black" required />
                <input type="text" name="contact" placeholder="Contact Number" className="w-full p-3 border rounded-lg text-black" required />
                <input type="text" name="city" placeholder="City" className="w-full p-3 border rounded-lg text-black" required />
                <textarea name="message" placeholder="Message" rows="6" className="w-full p-3 border rounded-lg text-black" required></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <>
          <div className="popup-overlay" onClick={closePopup}></div>
          <div className="popup">
            <h2 className="text-xl font-bold mb-4">Success</h2>
            <p>{successMessage || 'Your message has been sent successfully!'}</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}