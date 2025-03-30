import { useSession } from 'next-auth/react';
import Head from 'next/head';

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Head>
          <title>Profile - Social Engineering News Aggregator</title>
          <meta name="description" content="Profile page" />
        </Head>
        <div className="bg-white p-8 rounded-xl shadow-2xl w-96 backdrop-filter backdrop-blur-lg bg-opacity-30">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">You are not logged in</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Profile - Social Engineering News Aggregator</title>
        <meta name="description" content="Profile page" />
      </Head>
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Profile</h2>
        <div className="flex flex-col items-center">
          <img
            src={session.user.image || '/default-profile.png'}
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mb-4 shadow-lg"
          />
          <p className="text-gray-700 mb-2 text-lg">
            <strong>Name:</strong> {session.user.name}
          </p>
          <p className="text-gray-700 mb-2 text-lg">
            <strong>Email:</strong> {session.user.email}
          </p>
          <p className="text-gray-700 mb-2 text-lg">
            <strong>Logged in as:</strong> {session.user.email}
          </p>
        </div>
      </div>
    </div>
  );
}