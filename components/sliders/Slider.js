// components/sliders/Slider.js
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import Slide from './Slide';
import SliderControls from './SliderControls';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1); // 첫 번째 슬라이드로 설정
  const [isPlaying, setIsPlaying] = useState(true); // 자동 플레이 상태
  const [transitionEnabled, setTransitionEnabled] = useState(true); // 트랜지션 상태
  const timeoutRef = useRef(null); // 타임아웃 참조

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = useCallback(() => {
    setTransitionEnabled(true);
    setCurrentSlide((prev) => (prev === slides.length + 1 ? 1 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setTransitionEnabled(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length : prev - 1));
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setTransitionEnabled(true);
    setCurrentSlide(index + 1);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      resetTimeout();
      timeoutRef.current = setTimeout(nextSlide, 5000); // 5초마다 다음 슬라이드로
    }
    return () => {
      resetTimeout(); // 컴포넌트 언마운트 시 타임아웃 클리어
    };
  }, [nextSlide, isPlaying, currentSlide]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange); // 이벤트 리스너 클리어
    };
  }, []);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleIndicatorClick = (index) => {
    goToSlide(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleTransitionEnd = () => {
    if (currentSlide === slides.length + 1) {
      setTransitionEnabled(false);
      setCurrentSlide(1);
    } else if (currentSlide === 0) {
      setTransitionEnabled(false);
      setCurrentSlide(slides.length);
    }
  };

  const slider = `max-w-content-full py-10 relative overflow-hidden scrollbar-hide cursor-grab`;
  const slidesWrapper = `flex ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}`;

  return (
    <div
      className={slider}
      {...handlers}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className={slidesWrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }} onTransitionEnd={handleTransitionEnd}>
        <Slide>{slides[slides.length - 1]}</Slide> {/* 무한 슬라이드를 위한 추가 슬라이드 */}
        {slides.map((slide, index) => (
          <Slide key={index}>{slide}</Slide>
        ))}
        <Slide>{slides[0]}</Slide> {/* 무한 슬라이드를 위한 추가 슬라이드 */}
      </div>
      <SliderControls
        currentSlide={currentSlide}
        slides={slides}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        handleIndicatorClick={handleIndicatorClick}
      />
    </div>
  );
};

export default Slider;