import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDarkMode } from '../context/DarkModeContext';
import TeamMember from '../components/TeamMember';
import teamMembers from '../data/teamMembers';
import styles from '../styles/index.module.css';

const Index = () => {
  const { isDarkMode } = useDarkMode();
  const hero = `h-screen flex flex-col justify-center items-center relative`
  const heroContent = `flex flex-col gap-10 justify-center items-center text-center`
  const heroBtn = `w-auto inline-flex px-8 py-4 rounded-lg gap-2 ${isDarkMode ? 'bg-slate-50 text-slate-900 hover:bg-secondaryDark': 'bg-slate-900 text-slate-50 hover:bg-secondaryLight'} duration-300`
  const scrollDownBtn = `w-16 h-16 flex justify-center item-center absolute bottom-10 hover:opacity-60 duration-300`

  const scrollToContent = () => {
    const content = document.getElementById('main-content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth'});
    }
  };

  useEffect(() => {
    const handScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');  
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handScroll);

    return () => {
      window.removeEventListener('scroll', handScroll);
    };
  }, []);


  return (
    <div>
      <div className={`${hero} ${isDarkMode ? styles.heroDark : styles.heroLight}`}>
        <section className={heroContent}>
          <h1 className='text-5xl leading-h1 text-center font-semibold'>한글 데이터로 배우는<br />마음편한 SQLite!</h1>
          <Link href="/editor" legacyBehavior>
            <a className={heroBtn}>
              {isDarkMode ? (
                <Image src="/img/code_dark.svg" alt="" width={24} height={25}/>
              ) : (
                <Image src="/img/code_light.svg" alt="" width={24} height={25}/>
              )}
              SQooL 에디터 실행
            </a>
          </Link>
          <button className={scrollDownBtn} onClick={scrollToContent}>
            {isDarkMode ? (
                <Image src="/img/scroll_down_dark.svg" alt="" width={32} height={67}/>
              ) : (
                <Image src="/img/scroll_down_light.svg" alt="" width={32} height={67}/>
            )}
          </button>
        </section>
      </div>
      <div id="main-content" className={styles.content}>
        <section>
          <h2>여기엔 일단 서비스 소개가 들어가야 하고!</h2>
          
        </section>
        <section>
          <h2>팀 와이즈 잇 - WISE IT</h2>
          <article>
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                avatarDark={member.avatarDark}
                avatarLight={member.avatarLight}
                email={member.email}
                github={member.github}
              />
            ))}
          </article>
        </section>
      </div>
    </div>
    
  );
}

export default Index;