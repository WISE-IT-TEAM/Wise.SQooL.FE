// component/AnimatedSection.js
import React, { useRef } from 'react';
import useIntersection from '/hooks/useIntersection';

const AnimatedSection = ({ children }) => {
  // DOM 요소에 접근하기 위해 ref 생성
  const ref = useRef();

  // 요소가 화면에 보이는지 확인하기 위해 커스텀 훅 사용
  // '0px'는 인터섹션 관찰자에 사용할 루트 마진
  const isVisible = useIntersection(ref, '0px');

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
    {children}
    </div>
  );
};

export default AnimatedSection;