// hooks/useDarkMode.js
import { useEffect } from 'react';
import useStore from '../store/useStore';

/**
 * useDarkMode 훅
 * Zustand 스토어를 사용하여 다크 모드 상태와 토글 함수를 반환
 * @returns {object} - isDarkMode (boolean)와 toggleDarkMode (function)를 포함하는 객체
 */
const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode, setDarkMode } = useStore((state) => ({
    isDarkMode: state.isDarkMode,
    toggleDarkMode: state.toggleDarkMode,
    setDarkMode: state.setDarkMode,
  }));

  useEffect(() => {
    // 초기 상태 설정
    const darkModeSetting = localStorage.getItem('darkMode');
    if (darkModeSetting === 'enabled') {
      setDarkMode(true);
    } else if (darkModeSetting === 'disabled') {
      setDarkMode(false);
    } else {
      // 시스템 다크 모드 설정에 따라 초기 상태 설정
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkModeMediaQuery.matches) {
        setDarkMode(true);
      }
      darkModeMediaQuery.addListener((e) => setDarkMode(e.matches));
    }
  }, [setDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
