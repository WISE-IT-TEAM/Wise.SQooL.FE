// layout.js
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import useStore from '../store/useStore';
import { useRouter } from 'next/router';

/**
 * Layout 컴포넌트
 * - 페이지의 기본 레이아웃을 설정합니다.
 * - 네비게이션 바, 메인 콘텐츠, 푸터를 포함합니다.
 *
 * Zustand 상태:
 * - `isFullWidth`: 페이지가 전체 너비로 표시되는지 여부를 관리합니다.
 * 
 * 조건부 레이아웃 설정:
 * - `shouldShowFooter`: 현재 페이지가 `/start`가 아닌 경우 푸터를 표시합니다.
 * - `useFullHeight`: 현재 페이지가 `/start` 또는 `/editor`인 경우 전체 화면 높이를 사용합니다.
 * - `applyNavPadding`: `pt-nav` 패딩을 적용해야 하는지 여부를 관리합니다.
 * 
 * @param {React.ReactNode} children - 페이지의 메인 콘텐츠로 렌더링될 컴포넌트들
 * @returns {JSX.Element} - 레이아웃을 구성하는 JSX 요소를 반환합니다.
 */
const Layout = ({ children }) => {
  const isFullWidth = useStore((state) => state.isFullWidth); // Zustand에서 상태 가져오기
  const router = useRouter();

  // 경로에 따라 레이아웃 조건을 설정합니다.
  const shouldShowFooter = router.pathname !== "/start"; // `/start` 페이지에서는 푸터를 숨깁니다.
  const useFullHeight = router.pathname === "/start" || router.pathname === "/editor"; router.pathname === "/404";
  const applyNavPadding = router.pathname !== "/"; // 메인 인덱스 페이지에서는 pt-nav를 적용하지 않음

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
