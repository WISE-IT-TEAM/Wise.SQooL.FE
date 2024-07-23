// src/context/DarkModeContext.js

import { createContext, useState, useEffect } from 'react';

// Dark Mode 컨텍스트 생성
const DarkModeContext = createContext();

/**
 * DarkModeProvider 컴포넌트
 * 애플리케이션 전체에 다크 모드 상태와 토글 기능을 제공
 * @param {object} props - children 요소를 포함한 컴포넌트의 props
 */
export const DarkModeProvider = ({ children }) => {
  // 다크 모드 상태 관리
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 시스템의 다크 모드 설정을 확인
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    // 다크 모드 설정 변경 시 업데이트
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    // 로컬 저장소에서 다크 모드 설정을 가져와서 적용
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedMode === 'disabled') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  /**
   * 다크 모드를 토글하는 함수
   * 현재 모드와 반대되는 모드로 전환하고, 로컬 저장소에 상태를 저장
   */
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
      }
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext };