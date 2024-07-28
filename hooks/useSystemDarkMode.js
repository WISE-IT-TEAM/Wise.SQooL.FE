// hooks/useSystemDarkMode.js
import { useEffect } from 'react';
import useStore from '../store/useStore';

const useSystemDarkMode = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    toggleDarkMode(mediaQuery.matches);

    const handleChange = (e) => toggleDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      document.documentElement.classList.add('dark');
      toggleDarkMode(true);
    } else if (savedMode === 'disabled') {
      document.documentElement.classList.remove('dark');
      toggleDarkMode(false);
    }

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [toggleDarkMode]);
};

export default useSystemDarkMode;
