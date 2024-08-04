// pages/index.js
import React, { useEffect, useCallback } from 'react';
import HeroSection from '../components/index/HeroSection';
import ServiceSection from '../components/index/ServiceSection';
import TeamSection from '../components/index/TeamSection';
import styles from '../styles/index.module.css';

const Index = () => {
  const NAVBAR_HEIGHT = 59; // 네비게이션 바 높이

  // 컨텐츠로 스크롤하는 함수
  const scrollToContent = () => {
    const content = document.getElementById('service-section');
    if (content) {
      const offsetTop = content.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // 휠 스크롤 이벤트 핸들러 함수
  const handleWheel = useCallback((event) => {
    if (event.deltaY > 0) { // 휠을 아래로 스크롤할 때만
      scrollToContent();
    }
  }, []);

  // 휠 스크롤 이벤트 핸들러 설정
  useEffect(() => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

  return (
    <>
      <div id="hero-section" className={styles.hero}>
        <HeroSection scrollToContent={scrollToContent} />
      </div>
      <div id="service-section" className={styles.content}>
        <ServiceSection />
      </div>
      <div id="team-section">
        <TeamSection />
      </div>
    </>
  );
};

export default Index;