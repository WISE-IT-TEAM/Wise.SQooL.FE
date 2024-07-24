// components/sliders/SliderControls.js
import React from 'react';
import { SlidePlay, SlidePause } from '../IconSet'; // 아이콘 불러오기
import useDarkMode from '../../hooks/useDarkMode';

const SliderControls = ({ currentSlide, slides, isPlaying, togglePlayPause, handleIndicatorClick }) => {
  const { isDarkMode } = useDarkMode();

  const controlContainer = `p-2 rounded-full ${isDarkMode ? 'bg-slate-50' : 'bg-slate-900' } bg-opacity-5 absolute bottom-14 left-1/2 transform -translate-x-1/2 flex gap-2 items-center`;
  const indicatorStyle = `w-6 h-6 text-xs ${isDarkMode ? 'text-slate-50' : 'text-slate-900'} border-none cursor-pointer`;
  const activeIndicatorStyle = `font-extrabold ${isDarkMode ? 'text-subDark' : 'text-subLight'}`;
  

  return (
    <div className={controlContainer}>
      {slides.map((_, index) => (
        <button
          key={index}
          className={`${indicatorStyle} ${index + 1 === currentSlide ? activeIndicatorStyle : ''}`}
          onClick={() => handleIndicatorClick(index)}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={togglePlayPause} className="bg-transparent text-white border-none cursor-pointer">
        {isPlaying ? <SlidePause width={24} height={24} className={`${isDarkMode ? 'fill-slate-400' : 'fill-slate-400'}`} title="자동 슬라이드 멈춤" />
          : <SlidePlay width={24} height={24} className="fill-slate-400" title="자동 슬라이드 시작"/>}
      </button>
    </div>
  );
};

export default SliderControls;