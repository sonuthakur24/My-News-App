// pages/about.js
import Head from 'next/head';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About - Social Engineering News Aggregator</title>
        <meta name="description" content="Learn more about our mission and how we aggregate news." />
      </Head>
      
      <main className="p-4">
        <p className="text-black">
          Our website aggregates news and updates related to social engineering attacks, trends, and research. We aim to keep users informed about the latest developments in the field.
        </p>
      </main>
    </div>
  );
}
