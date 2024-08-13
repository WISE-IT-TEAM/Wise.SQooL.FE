// store/useStore.js

// Zustand를 이용한 글로벌 상태 관리 훅입니다.
// 이 훅은 다크 모드, 전체 너비 토글, 쿼리 상태, 토스트 메시지 등을 관리합니다.

import { create } from 'zustand';

const useStore = create((set) => ({
  isDarkMode: false, // 다크 모드 상태
  isFullWidth: false, // 전체 너비 상태
  setFullWidth: (fullWidth) => set({ isFullWidth: fullWidth }),
  resetFullWidth: () => set({ isFullWidth: false }), // 페이지 전환 시 호출할 함수
  query: '', // SQL 쿼리 상태
  setQuery: (newQuery) => set(() => ({ query: newQuery })), // 쿼리 상태 설정 함수

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

  toastMessage: '', // 토스트 메시지 상태
  toastType: 'success', // 토스트 타입 상태

  // 토스트 메시지 표시 함수
  showToast: (message, type = 'success') => set(() => ({ toastMessage: message, toastType: type })),

  // 토스트 메시지 숨김 함수
  hideToast: () => set(() => ({ toastMessage: '' })),
}));

export default useStore;
