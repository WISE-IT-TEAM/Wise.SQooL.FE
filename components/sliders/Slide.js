// components/sliders/Slide.js
import React from 'react';

const Slide = ({ children }) => {
  return (
    <div className="flex-shrink-0 w-full box-border">
      {children}
    </div>
  );
};

export default Slide;