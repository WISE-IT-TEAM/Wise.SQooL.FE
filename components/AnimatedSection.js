
import React, { useRef } from 'react';
import useIntersection from '/hooks/useIntersection';

const AnimatedSection = ({ children }) => {
    const ref = useRef();
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