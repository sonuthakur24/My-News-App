import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faGlobe, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    // Add animation class to sections after component mounts
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('animate-fade-in-up');
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Head>
        <title>About - Social Engineering News Aggregator</title>
        <meta name="description" content="Learn more about our mission and how we aggregate news on social engineering." />
      </Head>
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-black transform hover:scale-105 transition-transform duration-300 ease-in-out">
          About Our Social Engineering News Aggregator
        </h1>
        
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 ease-in-out opacity-0">
          <h2 className="text-3xl font-semibold mb-6 flex items-center text-black">
            <FontAwesomeIcon icon={faShield} className="mr-4 text-blue-600" />
            Background
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In the digital age, social engineering attacks have become a significant concern. These attacks exploit human psychology to gain unauthorized access to sensitive information or systems. With the increasing use of social media and online platforms, the risk of social engineering attacks has grown exponentially. Our platform addresses the need for a comprehensive resource that aggregates news and information on social engineering attacks to raise awareness and promote education.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 ease-in-out opacity-0">
          <h2 className="text-3xl font-semibold mb-6 flex items-center text-black">
            <FontAwesomeIcon icon={faGlobe} className="mr-4 text-green-600" />
            Objective
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our objective is to design and develop a Social Engineering News Aggregator that collects, categorizes, and disseminates news and information on social engineering attacks. We aim to provide a valuable resource for individuals, organizations, and cybersecurity professionals to stay informed and vigilant.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 ease-in-out opacity-0">
          <h2 className="text-3xl font-semibold mb-6 flex items-center text-black">
            <FontAwesomeIcon icon={faUsers} className="mr-4 text-purple-600" />
            Purpose and Scope
          </h2>
          <ul className="list-none text-gray-700 leading-relaxed">
            {[
              "Raise awareness about social engineering attacks",
              "Promote education on cybersecurity",
              "Facilitate information sharing among stakeholders",
              "Develop a web-based platform for news aggregation",
              "Categorize and tag articles on social engineering attacks",
              "Provide user registration and subscription-based alerts",
              "Integrate with social media for information dissemination"
            ].map((item, index) => (
              <li key={index} className="mb-2 flex items-center">
                <span className="w-4 h-4 bg-purple-600 rounded-full mr-3 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-102 transition-all duration-300 ease-in-out opacity-0">
          <h2 className="text-3xl font-semibold mb-6 flex items-center text-black">
            <FontAwesomeIcon icon={faLightbulb} className="mr-4 text-yellow-600" />
            Achievements
          </h2>
          <ul className="list-none text-gray-700 leading-relaxed">
            {[
              "Comprehensive understanding of social engineering attacks and their impact",
              "Fully functional Social Engineering News Aggregator platform",
              "User-friendly interface for accessing and sharing information",
              "Contribution to cybersecurity through education and awareness promotion"
            ].map((item, index) => (
              <li key={index} className="mb-2 flex items-center">
                <span className="w-4 h-4 bg-yellow-600 rounded-full mr-3 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}