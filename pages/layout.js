// pages/layout.js
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import useStore from '../store/useStore';

const Layout = ({ children }) => {
  const isFullWidth = useStore((state) => state.isFullWidth);

  return (
    <div className='font-body tracking-wide'>
      <Head>
        <title>WISE SQooL</title>
        <meta name="description" content="한글 데이터로 배우는 마음 편한 SQLite!" />
        <meta property="og:title" content="WISE SQooL" />
        <meta property="og:description" content="한글 데이터로 배우는 마음 편한 SQLite!" />
        <meta property="og:image" content="/img/wise-meta-img.jpg" />
        <meta property="og:url" content="https://sqool.wiseit.kr" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WISE SQooL" />
        <meta name="twitter:description" content="한글 데이터로 배우는 마음 편한 SQLite!" />
        <meta name="twitter:image" content="/img/wise-meta-img-tw.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isFullWidth={isFullWidth} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
