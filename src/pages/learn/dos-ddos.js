import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Quiz from '../../components/Quiz';

export default function DosDdos() {
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
        <title>DoS and DDoS Attacks - Social Engineering News Aggregator</title>
        <meta name="description" content="Learn about DoS and DDoS attacks and how to protect your website." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 text-red-600" />
          DoS and DDoS Attacks
        </h1>

        {image && (
          <div className="mb-8">
            <img src={image} alt="Cybersecurity" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        )}

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">What are DoS and DDoS Attacks?</h2>
          <p className="text-gray-700 leading-relaxed">
            Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) attacks are cyberattacks that aim to make a 
            network or online service unavailable to its intended users. In a Distributed-Denial-of-Service (DDoS) attack, 
            a website, server, or network is overwhelmed with huge traffic or requests, preventing legitimate users from 
            accessing it. Unlike a simple denial of service (DoS) attack, which uses a single source, a DDoS attack leverages 
            multiple systems often compromised devices or "botnets" to launch an attack from numerous locations simultaneously.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The goal of a DDoS attack is to disrupt normal website functionality by exhausting server resources such as bandwidth, 
            CPU, or RAM. Attackers often exploit vulnerabilities in systems, protocols, or applications to intensify their impact. 
            Common types of DDoS attack on website include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Volume-Based Attacks: Use high traffic volume to clog bandwidth (e.g., UDP floods).</li>
            <li>Protocol Attacks: Exploit server protocols to exhaust resources (e.g., SYN floods).</li>
            <li>Attacks on Application Layers: Target specific applications or services (e.g., HTTP floods).</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Impact of DDoS Attacks on Websites</h2>
          <p className="text-gray-700 leading-relaxed">
            The effects of a DDoS attack on website can be wide-ranging and damaging, depending on its intensity and duration. 
            Here are some of the primary impacts:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Website Downtime and Inaccessibility</li>
            <li>Financial Losses</li>
            <li>Damage to Brand Reputation</li>
            <li>Increased Operational Costs</li>
            <li>Security Vulnerabilities</li>
            <li>Poor User Experience</li>
            <li>Strained IT Resources</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Signs Your Website is Under a DDoS Attack</h2>
          <p className="text-gray-700 leading-relaxed">
            Detecting a DDoS (Distributed Denial of Service) attack early is crucial for minimizing its impact on your website. 
            These attacks can be stealthy at first, slowly overwhelming your website’s resources until it becomes completely 
            inaccessible. Here are the key signs that your website might be under a DDoS attack:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Sudden and Unusual Traffic Spikes</li>
            <li>Slow Website Performance or Timeouts</li>
            <li>Frequent Server Crashes or Errors</li>
            <li>Increased Bounce Rate</li>
            <li>Abnormal Traffic Patterns</li>
            <li>Website Unavailability for Legitimate Users</li>
            <li>Unusual Activity in Server Logs</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">How to Mitigate and Resolve DDoS Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            Dealing with DDoS (Distributed Denial of Service) attacks requires a strategic approach, from prevention to response. 
            As we've seen, DDoS attacks can cripple a website by overwhelming its server with malicious traffic, leading to downtime, 
            financial loss, and reputational damage. However, knowing how to mitigate and resolve these attacks can significantly 
            reduce their impact. Let’s see some prevention techniques, detection methods, immediate response actions, and long-term 
            solutions for mitigating and resolving DDoS attacks.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            In conclusion, DDoS attack on website pose a significant threat to websites, often leading to downtime, financial loss, 
            and reputational damage. Understanding what DDoS attacks are, recognizing the signs of an ongoing attack, and knowing 
            their potential impact on your site is crucial for effective mitigation. By implementing proactive measures such as using 
            CDNs, firewalls, and DDoS protection services, you can significantly reduce the risk of these attacks.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Furthermore, real-time detection tools and a well-prepared response plan are key to quickly mitigating attacks when they 
            occur. Long-term strategies, including AI-based solutions and regular infrastructure updates, strengthen your site’s defense 
            against future threats. Ultimately, a combination of prevention, timely response, and ongoing vigilance ensures that your 
            website remains resilient against DDoS attack on website, minimizing potential disruptions and maintaining a smooth user 
            experience. Stay proactive, stay protected.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Test Your Knowledge</h2>
          <Quiz topic="dos_ddos" /> {/* Pass topic information to your quiz component */}
        </section>
      </main>
    </div>
  );
}