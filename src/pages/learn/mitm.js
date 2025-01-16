import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faShieldAlt, faServer, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Quiz from '../../components/Quiz'; // Assuming you'll create this component

export default function Mitm() {
  const [image, setImage] = useState('');

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'Cybersecurity',
            client_id: 'zjKsVTPyuTxCeTiVgayeg6igk_IvglEtrRwhY2tsvHY', // Replace with your Unsplash API key
          },
        });
        setImage(response.data.urls.regular);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }

    fetchImage();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>MITM Attacks - Social Engineering News Aggregator</title>
        <meta name="description" content="Learn about MITM attacks and how to protect your website." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 text-red-600" />
          MITM Attacks
        </h1>

        {image && (
          <div className="mb-8">
            <img src={image} alt="Cybersecurity" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        )}

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">What are MITM Attacks?</h2>
          <p className="text-gray-700 leading-relaxed">
            Man-in-the-Middle (MITM) attacks are a type of cyberattack where the attacker secretly intercepts and relays 
            messages between two parties who believe they are directly communicating with each other. The attacker can 
            eavesdrop, alter, or inject false information into the communication.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            MITM attacks can occur in various forms, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Wi-Fi Eavesdropping: Intercepting data transmitted over unsecured Wi-Fi networks.</li>
            <li>Session Hijacking: Stealing session cookies to gain unauthorized access to a user's account.</li>
            <li>SSL Stripping: Downgrading HTTPS connections to HTTP to intercept sensitive information.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Impact of MITM Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            The effects of a MITM attack can be severe, depending on the nature of the intercepted communication. Here are 
            some of the primary impacts:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Data Theft: Sensitive information such as login credentials, financial data, and personal information can be stolen.</li>
            <li>Unauthorized Access: Attackers can gain unauthorized access to user accounts and systems.</li>
            <li>Data Manipulation: Information can be altered or injected with false data, leading to misinformation and potential harm.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Signs of a MITM Attack</h2>
          <p className="text-gray-700 leading-relaxed">
            Detecting a MITM attack can be challenging, but there are some signs that may indicate an attack is occurring:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Unusual Network Activity: Unexpected spikes in network traffic or unusual patterns.</li>
            <li>SSL Certificate Warnings: Browser warnings about invalid or untrusted SSL certificates.</li>
            <li>Slow Network Performance: Unexplained slowdowns in network speed and performance.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">How to Mitigate MITM Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            Preventing MITM attacks requires a combination of security measures and best practices:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Use HTTPS: Ensure all communication is encrypted using HTTPS.</li>
            <li>Secure Wi-Fi Networks: Use strong encryption and passwords for Wi-Fi networks.</li>
            <li>Implement VPNs: Use Virtual Private Networks (VPNs) to encrypt internet traffic.</li>
            <li>Regularly Update Software: Keep all software and systems up to date with the latest security patches.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            In conclusion, MITM attacks pose a significant threat to the security and privacy of online communications. 
            Understanding what MITM attacks are, recognizing the signs of an ongoing attack, and knowing their potential 
            impact is crucial for effective mitigation. By implementing proactive measures such as using HTTPS, securing 
            Wi-Fi networks, and using VPNs, you can significantly reduce the risk of these attacks.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Furthermore, regular software updates and a well-prepared response plan are key to quickly mitigating attacks 
            when they occur. Long-term strategies, including continuous education and training, strengthen your defense 
            against future threats. Ultimately, a combination of prevention, timely response, and ongoing vigilance ensures 
            that your communications remain secure and private, minimizing potential disruptions and maintaining a smooth 
            user experience. Stay proactive, stay protected.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Test Your Knowledge</h2>
          <Quiz topic="mitm" /> {/* Pass topic information to your quiz component */}
        </section>
      </main>
    </div>
  );
}