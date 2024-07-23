// src/hooks/useIntersection.js

import { useEffect, useState } from 'react';

/**
 * useIntersection 훅
 * 주어진 요소가 뷰포트에 교차되었는지를 감지하는 훅
 * @param {object} element - 관찰할 DOM 요소의 ref 객체
 * @param {string} rootMargin - IntersectionObserver의 rootMargin 옵션
 * @returns {boolean} - 요소가 뷰포트와 교차되었는지 여부를 나타내는 boolean 값
 */
const useIntersection = (element, rootMargin) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element.current) return; // 요소가 존재하는지 확인

    // IntersectionObserver 콜백 함수
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );

    const currentElement = element.current;
    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [element, rootMargin]); // element와 rootMargin을 종속성 배열에 추가

  return isVisible;
};

export default useIntersection;
