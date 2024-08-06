// src/store/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
  isDarkMode: false,
  isFullWidth: false,

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

  toggleFullWidth: () => set((state) => ({
    isFullWidth: !state.isFullWidth
  })),

  setFullWidth: (isFull) => set(() => ({
    isFullWidth: isFull
  })),

  toastMessage: '',
  toastType: 'success',

  showToast: (message, type = 'success') => set(() => ({ toastMessage: message, toastType: type })),
  hideToast: () => set(() => ({ toastMessage: '' })),
}));

export default useStore;
