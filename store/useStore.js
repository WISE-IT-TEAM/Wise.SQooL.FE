// src/store/useStore.js
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
 * - setDarkMode: 다크 모드 상태를 설정하는 함수. 상태 설정 시 HTML 클래스와 로컬 스토리지에 상태를 저장합니다.
 * - showToast: 토스트 메시지를 설정하는 함수. 전달된 메시지를 상태에 저장합니다.
 * - hideToast: 토스트 메시지를 숨기는 함수. 상태의 메시지를 빈 문자열로 설정합니다.
 * 
 * 협업 시 이 파일의 상태 변수와 함수를 참조하여 전역 상태를 관리할 수 있습니다.
 * 필요에 따라 새로운 상태 변수와 함수를 추가할 수 있습니다.
 */
const useStore = create((set) => ({
  isDarkMode: false,

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

  toastMessage: '',
  toastType: 'success',

  showToast: (message, type = 'success') => set(() => ({ toastMessage: message, toastType: type })),
  hideToast: () => set(() => ({ toastMessage: '' })),
}));

export default useStore;
