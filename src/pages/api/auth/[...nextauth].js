// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Get these from Google Cloud Console
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }),
    // ...add more providers here
  ],
});
