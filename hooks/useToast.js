// src/hooks/useToast.js

import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';

/**
 * useToast 훅
 * ToastContext를 사용하여 토스트 메시지 표시 함수를 반환
 * @returns {function} - showToast 함수
 */
const useToast = () => useContext(ToastContext);

export default useToast;
