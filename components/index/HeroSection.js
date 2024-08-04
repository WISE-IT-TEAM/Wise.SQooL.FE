// components/index/HeroSection.js
import React from 'react';
import Link from 'next/link';
import useDarkMode from '../../hooks/useDarkMode';
import { HeroBtn, ScrollDown } from '../IconSet';
import styles from '../../styles/index.module.css';

const HeroSection = ({ scrollToContent }) => {
  const { isDarkMode } = useDarkMode();

  const hero = `h-screen flex flex-col justify-center items-center relative`;
  const heroIcon = `${isDarkMode ? 'fill-slate-900' : 'fill-slate-50'}`;
  const heroContent = `flex flex-col gap-10 justify-center items-center text-center`;
  const heroBtn = `w-auto inline-flex px-8 py-4 rounded-lg gap-2 ${isDarkMode ? 'bg-slate-50 text-slate-900 hover:bg-secondaryDark': 'bg-slate-900 text-slate-50 hover:bg-secondaryLight'} duration-300`;
  const scrollDownBtn = `w-16 h-16 flex justify-center item-center absolute bottom-10 animate-bounce hover:opacity-80 duration-300`;

  return (
    <div className={`${hero} ${isDarkMode ? styles.heroDark : styles.heroLight}`}>
      <section className={heroContent}>
        <h1 className='text-5xl leading-h1 text-center font-semibold'>한글 데이터로 배우는<br />마음 편한 SQLite!</h1>
        <Link href="/editor" legacyBehavior>
          <a className={heroBtn}>
            <HeroBtn width={24} height={25} className={heroIcon} />
            SQooL 에디터 실행
          </a>
        </Link>
        <button className={scrollDownBtn} onClick={scrollToContent}>
          <ScrollDown width={32} height={67} className='fill-slate-400 stroke-slate-400' />
        </button>
      </section>
    </div>
  );
};

export default HeroSection;
