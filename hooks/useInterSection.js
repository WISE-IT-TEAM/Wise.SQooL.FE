import { useEffect, useState } from 'react';

const useIntersection = (element, { rootMargin = '0px', threshold = 0.1 } = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold: Array.isArray(threshold) ? threshold : [threshold] // threshold를 배열로 설정
      }
    );

    const currentElement = element.current;
    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [element, rootMargin, threshold]);

  return isVisible;
};

export default useIntersection;
