// store/useStore.js

import { create } from 'zustand';

/**
 * Zustand 스토어 생성
 * 
 * 상태 변수:
 * - isDarkMode: 다크 모드 활성화 여부를 나타내는 boolean 값
 * - toastMessage: 현재 표시할 토스트 메시지를 저장하는 문자열
 * 
 * 함수:
 * - toggleDarkMode: 다크 모드 상태를 토글하는 함수. 상태 변경 시 HTML 클래스와 로컬 스토리지에 상태를 저장합니다.
 * - showToast: 토스트 메시지를 설정하는 함수. 전달된 메시지를 상태에 저장합니다.
 * - hideToast: 토스트 메시지를 숨기는 함수. 상태의 메시지를 빈 문자열로 설정합니다.
 * 
 * 협업 시 이 파일의 상태 변수와 함수를 참조하여 전역 상태를 관리할 수 있습니다.
 * 필요에 따라 새로운 상태 변수와 함수를 추가할 수 있습니다.
 */
const useStore = create((set) => ({
  // 다크 모드 상태를 관리하는 상태 변수
  isDarkMode: false,

  // 다크 모드 상태를 토글하는 함수
  toggleDarkMode: () => set((state) => {
    const newMode = !state.isDarkMode;
    
    // 다크 모드 활성화 시 HTML의 classList에 'dark' 클래스 추가
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      // 다크 모드 비활성화 시 'dark' 클래스 제거
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
    return { isDarkMode: newMode };
  }),

  // 토스트 메시지를 저장하는 상태 변수
  toastMessage: '',

  // 토스트 메시지를 표시하는 함수
  showToast: (message) => set(() => ({ toastMessage: message })),

  // 토스트 메시지를 숨기는 함수
  hideToast: () => set(() => ({ toastMessage: '' })),
}));

// Zustand 스토어를 기본 내보내기로 내보냄
export default useStore;