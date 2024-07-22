import React, { useEffect } from 'react';
import HeroSection from '../components/index/HeroSection';
import ServiceSection from '../components/index/ServiceSection';
import TeamSection from '../components/index/TeamSection';
import styles from '../styles/index.module.css';

const Index = () => {
  // 컨텐츠로 스크롤하는 함수
  const scrollToContent = () => {
    const content = document.getElementById('main-content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 스크롤 이벤트 핸들러 함수
  const handleScroll = () => {
    const navbar = document.querySelector('nav');
    console.log('scrolling', window.scrollY); // 스크롤 위치 로그 출력
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
      console.log('scrolled class added'); // 클래스 추가 시 로그 출력
    } else {
      navbar.classList.remove('scrolled');
      console.log('scrolled class removed'); // 클래스 제거 시 로그 출력
    }
  };

  // 스크롤 이벤트 핸들러 설정
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log('Event listener added'); // 이벤트 리스너 추가 시 로그 출력
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('Event listener removed'); // 이벤트 리스너 제거 시 로그 출력
    };
  }, []);

  return (
    <div>
      <HeroSection scrollToContent={scrollToContent} />
      <div id="main-content" className={styles.content}>
        <ServiceSection />
        <TeamSection />
      </div>
    </div>
  );
};

export default Index;