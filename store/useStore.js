// store/useStore.js

import { create } from 'zustand';

const useStore = create((set) => ({
  isDarkMode: false, // 다크 모드 상태
  isFullWidth: false, // 전체 너비 상태
  query: '', // SQL 쿼리 상태
  toastMessage: '', // 토스트 메시지 상태
  toastType: 'success', // 토스트 타입 상태

  // 다크 모드 토글 함수
  toggleDarkMode: () => set((state) => {
    const newMode = !state.isDarkMode;
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
    return { isDarkMode: newMode };
  }),

  // 다크 모드 설정 함수
  setDarkMode: (mode) => set(() => {
    if (mode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
    return { isDarkMode: mode };
  }),

  // 전체 너비 토글 함수
  toggleFullWidth: () => set((state) => ({
    isFullWidth: !state.isFullWidth
  })),

  // 전체 너비 설정 함수
  setFullWidth: (isFull) => set(() => ({
    isFullWidth: isFull
  })),

  // 전체 너비 리셋 함수
  resetFullWidth: () => set(() => ({
    isFullWidth: false
  })),

  // 쿼리 상태 설정 함수
  setQuery: (newQuery) => set(() => ({
    query: newQuery
  })),

  // 토스트 메시지 표시 함수
  showToast: (message, type = 'success') => set(() => ({
    toastMessage: message,
    toastType: type
  })),

  // 토스트 메시지 숨김 함수
  hideToast: () => set(() => ({
    toastMessage: ''
  })),
}));

export default useStore;
