// components/DarkModeToggle.js
import React, { useEffect } from 'react';
import useStore from '../store/useStore';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode, setDarkMode } = useStore((state) => ({
    isDarkMode: state.isDarkMode,
    toggleDarkMode: state.toggleDarkMode,
    setDarkMode: state.setDarkMode,
  }));

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      setDarkMode(true);
    } else if (savedMode === 'disabled') {
      setDarkMode(false);
    }
  }, [setDarkMode]);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
