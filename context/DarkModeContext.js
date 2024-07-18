// context/DarkModeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

        useEffect(() => {
            // 시스템의 다크 모드 설정을 확인
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(mediaQuery.matches);

            // 다크 모드 설정 변경 시 업데이트
            const handleChange = (e) => setIsDarkMode(e.matches);
            mediaQuery.addEventListener('change', handleChange);

            const savedMode = localStorage.getItem('darkMode');
            if (savedMode === 'enabled') {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
            } else if (savedMode === 'disabled') {
                setIsDarkMode(false);
                document.documentElement.classList.remove('dark');
            }

            return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('darkMode', 'disabled');
            }

            return newMode;
        });
    };

    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => useContext(DarkModeContext);