// src/context/ToastContext.js

import React, { createContext, useState } from 'react';
import Toast from '../components/Toast'; // Toast 컴포넌트를 가져옴

// Toast 컨텍스트 생성
const ToastContext = createContext();

/**
 * ToastProvider 컴포넌트
 * 애플리케이션 전체에 Toast 메시지 표시 기능을 제공
 * @param {object} props - children 요소를 포함한 컴포넌트의 props
 */
export const ToastProvider = ({ children }) => {
  // Toast 상태 관리
  const [toastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success');

  /**
   * Toast 메시지 표시 함수
   * @param {string} msg - 표시할 메시지
   * @param {string} type - 메시지 타입 (success, error, info, warning)
   */
  const showToast = (msg, type = 'success') => {
    setMessage(msg);
    setType(type);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children} {/* 자식 컴포넌트 렌더링 */}
      <Toast message={message} visible={toastVisible} type={type} /> {/* Toast 컴포넌트 */}
    </ToastContext.Provider>
  );
};

export { ToastContext }; // ToastContext를 내보냄
