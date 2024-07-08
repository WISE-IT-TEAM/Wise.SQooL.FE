// components/NavBar.js
"use client"; // 이 지시어를 추가하여 클라이언트 컴포넌트로 설정

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from 'next/image';
import '../styles/components/navBar.css'; // 절대 경로 대신 상대 경로로 변경

export default function NavBar({ toggleDarkMode, darkMode }) {
    return (
        <nav className="navbar">
            <div className="max-w-custom mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/" legacyBehavior>
                        <a>
                            <Image 
                                src="/logo_ex.svg" 
                                alt="Logo" 
                                width={32} 
                                height={32} 
                            />
                        </a>
                    </Link>
                </div>
                <div className="space-x-4">
                    <Link href="/" legacyBehavior>
                        <a className="text-gray-300 hover:text-white">홈</a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <a className="text-gray-300 hover:text-white">서비스소개</a>
                    </Link>
                    <Link href="/docs" legacyBehavior>
                        <a className="text-gray-300 hover:text-white">학습안내서</a>
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={toggleDarkMode} className="text-gray-300 hover:text-white">
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </button>
                    <button className="text-gray-300 hover:text-white md:hidden">
                        <FontAwesomeIcon icon={faBars} className="mr-2" />
                    </button>
                </div>
            </div>
        </nav>
    );
}