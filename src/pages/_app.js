import React, { useEffect } from 'react';
import { SessionProvider } from "next-auth/react";
import '@/styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//code.tidio.co/m4b63z9kbvz8m74kd5lp88hjdhhvfrh4.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;