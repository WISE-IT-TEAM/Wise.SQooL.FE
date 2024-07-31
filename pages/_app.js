// pages/_app.js
import '../styles/globals.css';
import React from 'react';
import Layout from './layout';
import Toast from '../components/Toast';
import useSystemDarkMode from '../hooks/useSystemDarkMode';

function MyApp({ Component, pageProps }) {
  useSystemDarkMode();

  return (
    <>
        <Layout>
          <Component {...pageProps} />
          <Toast />
        </Layout>
    </>
  );
}

export default MyApp;