import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Quiz from '../../components/Quiz';

export default function DnsSpoofing() {
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
        <title>DNS Spoofing Attacks - Social Engineering News Aggregator</title>
        <meta name="description" content="Learn about DNS Spoofing attacks and how to protect your website." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 text-red-600" />
          DNS Spoofing Attacks
        </h1>

        {image && (
          <div className="mb-8">
            <img src={image} alt="Cybersecurity" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        )}

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">What are DNS Spoofing Attacks?</h2>
          <p className="text-gray-700 leading-relaxed">
            DNS Spoofing, also known as DNS cache poisoning, is a type of cyberattack where attackers corrupt the Domain Name System (DNS) 
            cache with false information. This causes DNS servers to return incorrect IP addresses, redirecting users to malicious websites 
            without their knowledge.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            DNS Spoofing attacks can occur in various forms, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Man-in-the-Middle Attacks: Intercepting and altering DNS responses between the user and the DNS server.</li>
            <li>DNS Cache Poisoning: Injecting false DNS records into the cache of a DNS resolver.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Impact of DNS Spoofing Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            The effects of a DNS Spoofing attack can be severe, depending on the nature of the redirected traffic. Here are 
            some of the primary impacts:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Data Theft: Redirecting users to malicious websites to steal sensitive information such as login credentials and financial data.</li>
            <li>Malware Distribution: Redirecting users to websites that distribute malware.</li>
            <li>Service Disruption: Causing legitimate websites to become inaccessible by redirecting traffic to incorrect IP addresses.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Signs of a DNS Spoofing Attack</h2>
          <p className="text-gray-700 leading-relaxed">
            Detecting a DNS Spoofing attack can be challenging, but there are some signs that may indicate an attack is occurring:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Unexpected Website Redirects: Being redirected to unfamiliar or suspicious websites.</li>
            <li>SSL Certificate Warnings: Browser warnings about invalid or untrusted SSL certificates.</li>
            <li>Slow Network Performance: Unexplained slowdowns in network speed and performance.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">How to Mitigate DNS Spoofing Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            Preventing DNS Spoofing attacks requires a combination of security measures and best practices:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Use DNSSEC: Implement DNS Security Extensions (DNSSEC) to ensure the authenticity of DNS responses.</li>
            <li>Regularly Update Software: Keep all software and systems up to date with the latest security patches.</li>
            <li>Monitor DNS Traffic: Regularly monitor DNS traffic for signs of suspicious activity.</li>
            <li>Use Secure DNS Resolvers: Use secure and trusted DNS resolvers to reduce the risk of DNS cache poisoning.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            In conclusion, DNS Spoofing attacks pose a significant threat to the security and privacy of online communications. 
            Understanding what DNS Spoofing attacks are, recognizing the signs of an ongoing attack, and knowing their potential 
            impact is crucial for effective mitigation. By implementing proactive measures such as using DNSSEC, regularly updating 
            software, and monitoring DNS traffic, you can significantly reduce the risk of these attacks.
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
          <Quiz topic="dns_spoofing" /> {/* Pass topic information to your quiz component */}
        </section>
      </main>
    </div>
  );
}