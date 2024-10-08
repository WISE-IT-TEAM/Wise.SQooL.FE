// components/NavBar.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useStore from '../store/useStore';
import DarkModeToggle from './DarkModeToggle';
import { DarkLogo, LightLogo } from './IconSet'; // 아이콘 불러오기

const NavBar = ({ isFullWidth }) => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const container = `w-full py-3 text-xl font-bold fixed top-0 left-0 z-50 transition-colors duration-500
    ${scrolled ? (
      isDarkMode
        ? 'bg-slate-900 border-b-2 border-slate-800 opacity-90'
        : 'bg-slate-50 border-b-2 border-slate-200 opacity-90'
    ) : 'bg-transparent'}`;
  const navWrap = `${isFullWidth ? 'w-full px-6' : 'max-w-content-full'} mx-auto flex justify-between items-center transition-width duration-500`;
  const navList = `flex justify-center items-center gap-12`;
  const listItem = `${isDarkMode ? 'text-slate-50 hover:text-primaryDark' : 'text-slate-900 hover:text-primaryLight'} duration-500`;

  return (
    <nav className={container}>
      <div className={navWrap}>
        <div>
          <Link href="/">
            {isDarkMode ? (
              <DarkLogo width={128} height={34} title="Logo" />
            ) : (
              <LightLogo width={128} height={34} title="Logo" />
            )}
          </Link>
        </div>
        <div>
          <ul className={navList}>
            <li className={listItem}>
              <Link href="/">홈</Link>
            </li>
            <li className={listItem}>
              <Link href="/start">학습하기</Link>
            </li>
            <li className={listItem}>
              <Link href="/editor">에디터</Link>
            </li>
            <li className={listItem}>
              <Link href="/article">아티클</Link>
            </li>
            <li className={listItem}>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
