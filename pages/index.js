// /index.js
import React, { useEffect, useState, useCallback } from 'react';
import HeroSection from '../components/index/HeroSection';
import ServiceSection from '../components/index/ServiceSection';
import TeamSection from '../components/index/TeamSection';
import styles from '../styles/index.module.css';

const Index = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [content, setContent] = useState(null);
  const NAVBAR_HEIGHT = 59;

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const categoryData = await getCategoryList();
        setCategories(categoryData.categories);

        const firstDocCategory = categoryData.categories.find(category => category.Tree === 'doc');
        if (firstDocCategory) {
          setSelectedCategoryId(firstDocCategory.Id);
          const contentData = await getContent(firstDocCategory.Id);
          setContent(contentData.document);
        }
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchInitialData();
  }, []);

  const handleSelectCategory = async (categoryId) => {
    setSelectedCategoryId(categoryId);
    try {
      const contentData = await getContent(categoryId);
      setContent(contentData.document);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const scrollToContent = () => {
    const content = document.getElementById('service-section');
    if (content) {
      const offsetTop = content.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleWheel = useCallback((event) => {
    if (event.deltaY > 0) { 
      scrollToContent();
    }
  }, []);

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