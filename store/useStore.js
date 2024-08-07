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

  resetDatabase: async () => {
    const apiResetUrl = process.env.NEXT_PUBLIC_API_RESET_URL;
    try {
      const response = await fetch(apiResetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
      });

      if (!response.ok) {
        throw new Error('Database reset failed');
      }

      console.log('Database reset successfully');
      return true;
    } catch (error) {
      console.error('Error resetting database:', error);
      return false;
    }
  },
}));

export default useStore;
