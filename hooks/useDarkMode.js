// src/hooks/useDarkMode.js

import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

/**
 * useDarkMode 훅
 * DarkModeContext를 사용하여 다크 모드 상태와 토글 함수를 반환
 * @returns {object} - isDarkMode (boolean)와 toggleDarkMode (function)를 포함하는 객체
 */
const useDarkMode = () => useContext(DarkModeContext);

export default useDarkMode;
