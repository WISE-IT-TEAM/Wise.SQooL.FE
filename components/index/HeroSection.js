// components/index/HeroSection.js
import React from 'react';
import Link from 'next/link';
import useStore from '../../store/useStore'; 
import { HeroBtn, ScrollDown } from '../IconSet'; 
import styles from '../../styles/index.module.css'; 

/**
 * HeroSection 컴포넌트
 * - 메인 페이지의 히어로 섹션을 담당하는 컴포넌트입니다.
 * - 다크 모드에 따라 스타일이 동적으로 변경됩니다.
 * - SQooL 에디터로 이동하는 버튼과 페이지 아래로 스크롤하는 버튼을 포함합니다.
 * - Zustand를 사용하여 전역 다크 모드 상태를 관리합니다.
 *
 * @param {function} scrollToContent - 페이지 아래로 스크롤하는 함수입니다.
 */
const HeroSection = ({ scrollToContent }) => {
  const { isDarkMode } = useStore();

  const hero = `h-screen flex flex-col justify-center items-center relative`;
  const heroIcon = `${isDarkMode ? 'fill-slate-900' : 'fill-slate-50'}`;
  const heroContent = `flex flex-col gap-10 justify-center items-center text-center`;
  const heroBtn = `w-auto inline-flex px-8 py-4 rounded-lg gap-2 ${
    isDarkMode
      ? 'bg-slate-50 text-slate-900 hover:bg-secondaryDark'
      : 'bg-slate-900 text-slate-50 hover:bg-secondaryLight'
  } duration-500`;

  const scrollDownBtn = `w-16 h-16 flex justify-center items-center absolute bottom-10 animate-bounce hover:opacity-80 duration-500`;

  return (
    <div className={`${hero} ${isDarkMode ? styles.heroDark : styles.heroLight}`}>
      <section className={heroContent}>
        <h1 className='text-5xl leading-h1 text-center font-semibold'>
          한글 데이터로 배우는<br />마음 편한 SQLite!
        </h1>
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
