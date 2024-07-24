// components/NavBar.js

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useDarkMode from '../hooks/useDarkMode';

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // 스크롤 상태를 관리하기 위한 상태
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 이벤트 핸들러 등록 및 해제
  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  const container = `w-full py-4 text-xl font-bold fixed top-0 left-0 z-50 transition-colors duration-300 
    ${scrolled ? (
        isDarkMode 
        ? 'bg-slate-900 border-b-2 border-slate-800 opacity-90'
        : 'bg-slate-50 border-b-2 border-slate-200 opacity-90'
    ) : 'bg-transparent'}`;
  const navWrap = `max-w-content-full mx-auto flex justify-between items-center`;
  const navList = `flex justify-center items-center gap-12`;
  const listItem = `${isDarkMode ? 'text-slate-50 hover:text-primaryDark' : 'text-slate-900 hover:text-primaryLight'} duration-300`;
  const toggleBtn = `p-1 rounded-lg hover:animate-pulse duration-300 ${isDarkMode ? 'bg-secondaryDark' : 'bg-secondaryLight'}`;

  return (
    <nav className={container}>
      <div className={navWrap}>
        <div>
          <Link href="/">
            {isDarkMode ? (
              <Image src="/img/logo_dark.svg" alt="Logo" width={137} height={36} priority />
            ) : (
              <Image src="/img/logo_light.svg" alt="Logo" width={137} height={36} priority />
            )}
          </Link>
        </div>
        <div>
          <ul className={navList}>
            <li className={listItem}>
              <Link href="/">홈</Link>
            </li>
            <li className={listItem}>
              <Link href="/start">시작하기</Link>
            </li>
            <li className={listItem}>
              <Link href="/editor">에디터</Link>
            </li>
            <li className={listItem}>
              <Link href="/article">아티클</Link>
            </li>
            <li className={listItem}>
              <button onClick={toggleDarkMode} className={toggleBtn}>
                {isDarkMode ? (
                  <Image src="/img/toggle_dark.svg" alt="Dark mode" width={24} height={24} />
                ) : (
                  <Image src="/img/toggle_light.svg" alt="Light mode" width={24} height={24} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;