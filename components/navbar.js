import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
        <Image src='/img/logo_light.svg' alt='Logo' width={137} height={36} />
        <div>
            <ul className={`${styles.icon_list} flex flex-row`}>
                <li className={`${styles.list_item}`}>
                    <Link href="/">홈</Link>
                </li>
                <li className={`${styles.list_item}`}>
                    <Link href="/start">시작하기</Link>
                </li>
                <li className={`${styles.list_item}`}>
                    <Link href="/editor">에디터</Link>
                </li>
                <li className={`${styles.list_item}`}>
                    <Link href="/article">아티클</Link>
                </li>
                
            </ul>
        </div>
    </div>
  );
}

export default NavBar;