import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faShieldAlt, faServer, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Quiz from '../../components/Quiz'; // Assuming you'll create this component

export default function Phishing() {
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
        <title>Phishing Attacks - Social Engineering News Aggregator</title>
        <meta name="description" content="Learn about Phishing attacks and how to protect your website." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 text-red-600" />
          Phishing Attacks
        </h1>

        {image && (
          <div className="mb-8">
            <img src={image} alt="Cybersecurity" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        )}

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">What are Phishing Attacks?</h2>
          <p className="text-gray-700 leading-relaxed">
            Phishing attacks are a type of cyberattack where attackers disguise themselves as trustworthy entities to deceive 
            individuals into providing sensitive information such as login credentials, financial information, or personal data. 
            These attacks are typically carried out through email, social media, or other online communication channels.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Phishing attacks can occur in various forms, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Email Phishing: Sending fraudulent emails that appear to be from legitimate sources.</li>
            <li>Spear Phishing: Targeting specific individuals or organizations with personalized messages.</li>
            <li>Whale Phishing: Targeting high-profile individuals such as executives or public figures.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Whale-Phishing Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            Whale-phishing attacks, also known as whaling, are a type of phishing attack that targets high-profile individuals 
            such as executives, CEOs, or public figures. These attacks are highly personalized and often involve extensive 
            research on the target to create convincing and tailored messages.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The goal of whale-phishing attacks is to deceive the target into providing sensitive information, authorizing 
            financial transactions, or clicking on malicious links that can lead to further compromise of their accounts or systems.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Spear-Phishing Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            Spear-phishing attacks are a more targeted form of phishing where attackers focus on specific individuals or 
            organizations. Unlike generic phishing attacks, spear-phishing messages are personalized and often include 
            information relevant to the target, making them more convincing and harder to detect.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The objective of spear-phishing attacks is to trick the target into revealing confidential information, such as 
            login credentials or financial details, or to install malware on their devices.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">How to Mitigate Phishing Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            Preventing phishing attacks requires a combination of security measures and best practices:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Educate Employees: Regularly train employees to recognize and report phishing attempts.</li>
            <li>Use Email Filters: Implement email filters to detect and block phishing emails.</li>
            <li>Enable Multi-Factor Authentication: Use multi-factor authentication to add an extra layer of security to accounts.</li>
            <li>Verify Requests: Always verify requests for sensitive information through a separate communication channel.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            In conclusion, phishing attacks pose a significant threat to individuals and organizations, often leading to data theft, 
            financial loss, and reputational damage. Understanding what phishing attacks are, recognizing the signs of an ongoing attack, 
            and knowing their potential impact is crucial for effective mitigation. By implementing proactive measures such as educating 
            employees, using email filters, and enabling multi-factor authentication, you can significantly reduce the risk of these attacks.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Furthermore, regular training and a well-prepared response plan are key to quickly mitigating attacks when they occur. 
            Long-term strategies, including continuous education and training, strengthen your defense against future threats. 
            Ultimately, a combination of prevention, timely response, and ongoing vigilance ensures that your communications remain 
            secure and private, minimizing potential disruptions and maintaining a smooth user experience. Stay proactive, stay protected.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Test Your Knowledge</h2>
          <Quiz topic="phishing" /> {/* Pass topic information to your quiz component */}
        </section>
      </main>
    </div>
  );
}