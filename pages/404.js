// pages/404.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useStore from '../store/useStore';

const Custom404 = () => {
  const { isDarkMode } = useStore();
  const useFullHeight = useStore((state) => state.useFullHeight);

  const container = `max-w-content-full flex flex-col gap-10 justify-center items-center mx-auto duration-500 h-full pt-nav ${useFullHeight ? `h-[calc(100vh-${totalOffset}px)]` : 'min-h-screen'}`;
  const headers = `text-2xl font-extrabold px-8 py-4 rounded-full duration-500 font-bold ${isDarkMode ? "bg-slate-50 text-slate-900" : "bg-slate-900 text-slate-50" } `
  const backBtn = `text-xl px-8 py-4 rounded-full duration-500 font-bold ${isDarkMode ? "bg-primaryDark text-slate-900 hover:bg-secondaryDark" : "bg-primaryLight text-slate-50 hover:bg-secondaryLight" }`

  return (
    <section className={container}>
      <h1 className={headers}>404 : 요청하신 페이지를 찾을 수가 없어요!😥</h1>
      <Image 
        src="/img/Mamba.png" 
        alt="모든 것을 집어삼키는 스큘 맘바"
        width={800} 
        height={474} 
        style={{ objectFit: 'fit' }} 
      />
      <div>
        <p className='text-xl text-center font-bold'>
          행운의 스큘맘바가 나타났다! 스큘맘바가 페이지를 호로록 먹어버렸어요!<br/>
          이 페이지를 찾으신 당신, 행복해져라 얍~✨
        </p>
      </div>
      <Link href="/">
        <span className={backBtn}>홈으로 돌아가기</span>
      </Link>
    </section>
  );
};

export default Custom404;