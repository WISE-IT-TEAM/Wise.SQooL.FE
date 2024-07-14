// app/layout.js
"use client"; // 이 지시어를 추가하여 클라이언트 컴포넌트로 설정

import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';

config.autoAddCss = false;

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <html lang="ko">
            <body className={darkMode ? "dark" : ""}>
                <header className="text-slate-50 p-4">
                    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                </header>
                <main>{children}</main>
                <footer className="bg-slate-900 text-slate-400 p-4 mt-8 text-center">
                    <p>&copy; 2024 WISEIT. All rights reserved.</p>
                </footer>
            </body>
        </html>
    );
}
