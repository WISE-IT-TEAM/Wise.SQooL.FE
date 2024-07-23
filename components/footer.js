// components/Footer.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext';
// import styles from '../styles/footer.module.css';

const Footer = () => {
  const { isDarkMode } = useDarkMode();

  const container = `w-full py-4 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-200'} text-slate-400`;
  const footerWrap = `max-w-content-width mx-auto flex justify-between items-center`;
  const iconList = `flex justify-center items-center gap-2`;
  const listItem = `w-8 h-8 p-1 flex justify-center items-center rounded-2xl border-2 ${isDarkMode ? 'border-slate-500' : 'border-slate-300' } hover:opacity-70 ease-in-out duration-150`;

  return (
    <footer className={container}>
      <div className={footerWrap}>
        <div className='flex items-end gap-4'>
          <Link href="/" legacyBehavior>  
            <a>
              {isDarkMode ? (
                <Image src='/img/ci_logo_mono_dark.svg' alt='Logo' width={117} height={24} className='mr-2' />  
              ) : (
                <Image src='/img/ci_logo_mono_light.svg' alt='Logo' width={117} height={24} className='mr-2' />  
              )}
            </a>
          </Link>
          <span className='text-xs'>Copyright ©WISE IT All Rights Reserved.</span>
        </div>
        <div>
          <ul className={iconList}>
            <li className={listItem}>
              <Link href="/" legacyBehavior>
                <a>
                  <Image src="/img/link_wise.svg" alt="WISE IT link" width={20} height={20}/>
                </a>
              </Link>
            </li>
            <li className={listItem}>
                <a 
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Image src='/img/link_github.svg' alt='github link' width={20} height={20}/>
                </a>
            </li>
            <li className={listItem}>
                <a 
                  href='https://discord.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Image src='/img/link_discord.svg' alt='discord link' width={20} height={20}/>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;