// components/NavBar.js
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from '../context/DarkModeContext';
// import styles from "../styles/navbar.module.css";

const NavBar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const containerClass = `w-full py-4 text-xl`;
    const navWrap = `max-w-default-width mx-auto flex justify-between item-center`
    const navListClass = `flex justify-center item-center gap-12`
    const listItemClass = `${isDarkMode ? 'text-slate-50 hover:text-primaryDark' : 'text-slate-900 hover:text-primaryLight'} duration-150`
    const toggleBtnClass = `p-1 rounded-lg ${isDarkMode ? 'bg-secondaryDark' : 'bg-secondaryLight'}`

    return (
        <nav className={containerClass}>
            <div className={navWrap}>
                <div>
                    {isDarkMode ? (
                        <Image src="/img/logo_dark.svg" alt="Logo" width={137} height={36} />
                    ) : (
                        <Image src="/img/logo_light.svg" alt="Logo" width={137} height={36} />
                    )}
                </div>
                <div>
                    <ul className={navListClass}>
                        <li className={listItemClass}>
                            <Link href="/">홈</Link>
                        </li>
                        <li className={listItemClass}>
                            <Link href="/start">시작하기</Link>
                        </li>
                        <li className={listItemClass}>
                            <Link href="/editor">에디터</Link>
                        </li>
                        <li className={listItemClass}>
                            <Link href="/article">아티클</Link>
                        </li>
                        <li className={listItemClass}>
                            <button onClick={toggleDarkMode} className={toggleBtnClass}>
                                {isDarkMode ? (
                                    <Image src="/img/toggle_dark.svg" alt="Dark mode" width={24} height={24} />
                                ) : (
                                    <Image src="/img/toggle_light.svg" alt="Light mode" width={24} height={24} />
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
