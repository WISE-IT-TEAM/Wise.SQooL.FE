// components/DarkModeToggle.js
import React from 'react';
import Image from "next/image";
import useStore from '../store/useStore';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useStore((state) => ({
  isDarkMode: state.isDarkMode,
  toggleDarkMode: state.toggleDarkMode,
  }));

  const toggleBtn = `p-1 rounded-lg hover:animate-pulse duration-300 ${isDarkMode ? 'bg-secondaryDark' : 'bg-secondaryLight'}`;

  return (
  <button onClick={toggleDarkMode} className={toggleBtn}>
      {isDarkMode ? (
      <Image src="/img/toggle_dark.svg" alt="Dark mode" width={24} height={24} />
      ) : (
      <Image src="/img/toggle_light.svg" alt="Light mode" width={24} height={24} />
      )}
  </button>
  );
};

export default DarkModeToggle;