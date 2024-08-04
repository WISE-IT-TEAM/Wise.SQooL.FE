// components/DarkModeToggle.js
import React from 'react';
import useStore from '../store/useStore';
import { DarkToggle, LightToggle } from './IconSet'; // 아이콘 불러오기


const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useStore((state) => ({
  isDarkMode: state.isDarkMode,
  toggleDarkMode: state.toggleDarkMode,
  }));

  const toggleBtn = `p-1 rounded-lg hover:animate-pulse duration-300 ${isDarkMode ? 'bg-secondaryDark' : 'bg-secondaryLight'}`;

  return (
  <button onClick={toggleDarkMode} className={toggleBtn}>
      {isDarkMode ? (
        <DarkToggle width={24} height={24} title="Dark Mode" />
      ) : (
        <LightToggle width={24} height={24} title="Light Mode" />
      )}
  </button>
  );
};

export default DarkModeToggle;