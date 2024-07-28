// hooks/useDarkMode.js

import useStore from '../store/useStore';

/**
 * useDarkMode 훅
 * Zustand 스토어를 사용하여 다크 모드 상태와 토글 함수를 반환
 * @returns {object} - isDarkMode (boolean)와 toggleDarkMode (function)를 포함하는 객체
 */
const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useStore((state) => ({
    isDarkMode: state.isDarkMode,
    toggleDarkMode: state.toggleDarkMode,
  }));
  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;