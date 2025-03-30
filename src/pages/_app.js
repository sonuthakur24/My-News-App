// filepath: /d:/sonu new/project/my-app/src/pages/_app.js
import React from 'react';
import { SessionProvider } from "next-auth/react";
import '@/styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;