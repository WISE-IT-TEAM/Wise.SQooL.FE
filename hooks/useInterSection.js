// hooks/useIntersection.js
import { useEffect, useState } from 'react';

const useIntersection = (element, rootMargin) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element.current) return; // 요소가 존재하는지 확인

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
