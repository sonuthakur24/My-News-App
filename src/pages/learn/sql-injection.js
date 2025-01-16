import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Quiz from '../../components/Quiz';

export default function SqlInjection() {
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
        <title>SQL Injection Attacks - Social Engineering News Aggregator</title>
        <meta name="description" content="Learn about SQL Injection attacks and how to protect your website." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 text-red-600" />
          SQL Injection Attacks
        </h1>

        {image && (
          <div className="mb-8">
            <img src={image} alt="Cybersecurity" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        )}

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">What are SQL Injection Attacks?</h2>
          <p className="text-gray-700 leading-relaxed">
            SQL Injection (SQLi) attacks are a type of cyberattack where attackers exploit vulnerabilities in a website's 
            database layer by injecting malicious SQL code into input fields. This allows attackers to manipulate the 
            database, retrieve sensitive information, and potentially gain unauthorized access to the system.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            SQL Injection attacks can occur in various forms, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Classic SQL Injection: Exploiting vulnerabilities in user input fields to execute arbitrary SQL commands.</li>
            <li>Blind SQL Injection: Extracting data by sending SQL queries and observing the application's behavior.</li>
            <li>Union-based SQL Injection: Using the UNION operator to combine the results of two or more SELECT statements.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Impact of SQL Injection Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            The effects of a SQL Injection attack can be severe, depending on the nature of the compromised data. Here are 
            some of the primary impacts:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Data Theft: Attackers can retrieve sensitive information such as login credentials, financial data, and personal information.</li>
            <li>Unauthorized Access: Attackers can gain unauthorized access to user accounts and systems.</li>
            <li>Data Manipulation: Attackers can alter or delete data, leading to data integrity issues.</li>
            <li>Reputational Damage: Organizations may suffer reputational damage if their customers' data is compromised.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Signs of a SQL Injection Attack</h2>
          <p className="text-gray-700 leading-relaxed">
            Detecting a SQL Injection attack can be challenging, but there are some signs that may indicate an attack is occurring:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Unexpected Database Errors: Errors such as "SQL syntax error" or "database connection error" may indicate an attack.</li>
            <li>Unusual Database Activity: Unexpected spikes in database activity or unusual patterns.</li>
            <li>Unauthorized Data Access: Access to data that should be restricted or confidential.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">How to Mitigate SQL Injection Attacks</h2>
          <p className="text-gray-700 leading-relaxed">
            Preventing SQL Injection attacks requires a combination of security measures and best practices:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Use Prepared Statements: Use prepared statements with parameterized queries to prevent SQL injection.</li>
            <li>Validate User Input: Validate and sanitize all user inputs to ensure they do not contain malicious code.</li>
            <li>Implement Web Application Firewalls: Use web application firewalls (WAFs) to detect and block SQL injection attempts.</li>
            <li>Regularly Update Software: Keep all software and systems up to date with the latest security patches.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            In conclusion, SQL Injection attacks pose a significant threat to the security and integrity of databases, often leading to data theft, 
            unauthorized access, and data manipulation. Understanding what SQL Injection attacks are, recognizing the signs of an ongoing attack, 
            and knowing their potential impact is crucial for effective mitigation. By implementing proactive measures such as using prepared statements, 
            validating user input, and implementing web application firewalls, you can significantly reduce the risk of these attacks.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Furthermore, regular software updates and a well-prepared response plan are key to quickly mitigating attacks when they occur. 
            Long-term strategies, including continuous education and training, strengthen your defense against future threats. 
            Ultimately, a combination of prevention, timely response, and ongoing vigilance ensures that your databases remain 
            secure and private, minimizing potential disruptions and maintaining a smooth user experience. Stay proactive, stay protected.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Test Your Knowledge</h2>
          <Quiz topic="sql_injection" /> {/* Pass topic information to your quiz component */}
        </section>
      </main>
    </div>
  );
}