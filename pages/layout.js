// layout.js
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import useStore from '../store/useStore';
import { useRouter } from 'next/router';
import layoutConditions from '../utils/layoutConditions';

const Layout = ({ children }) => {
  const isFullWidth = useStore((state) => state.isFullWidth);
  const router = useRouter();
  const { shouldShowFooter, useFullHeight } = layoutConditions(router.pathname);

  // 조건부로 클래스를 설정합니다.
  const containerClass = `font-body tracking-wide ${useFullHeight ? 'h-screen pt-nav' : 'min-h-screen'} ${isFullWidth ? 'w-full' : ''}`;

  return (
    <div className={containerClass}>
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
      </Head>
      <Navbar isFullWidth={isFullWidth} />
      <main className="h-full pb-8">
        {children}
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default Layout;