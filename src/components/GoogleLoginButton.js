import { useSession, signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function GoogleLoginButton() {
  const { data: session } = useSession();
  const callbackUrl = process.env.NEXT_PUBLIC_CALLBACK_URL || "https://my-news-app-zeta.vercel.app";

  if (!session) {
    return (
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="w-full flex items-center justify-center bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600 transition duration-300"
      >
        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        Sign in with Google
      </button>
    );
  }

  return (
    <div className="mt-4 text-center">
      <p className="text-gray-700 mb-2">You are logged in as {session.user.email}!</p>
      <button
        onClick={() => signOut({ callbackUrl })}
        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300"
      >
        Sign out
      </button>
    </div>
  );
}
