// components/Footer.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useDarkMode from '../hooks/useDarkMode';
import { DarkLogo, LightLogo, LinkWISE, LinkGithub, LinkDiscord } from './IconSet'; // 아이콘 불러오기

const Footer = () => {
  const { isDarkMode } = useDarkMode();

  const container = `w-full py-4 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-200'} text-slate-400 absolute`;
  const footerWrap = `max-w-content-full mx-auto flex justify-between items-center`;
  const iconList = `flex justify-center items-center gap-2`;
  const linkIcon = `w-8 h-8 p-1 flex justify-center items-center rounded-2xl border-2 ${isDarkMode ? 'border-slate-500' : 'border-slate-300' } hover:opacity-70 ease-in-out duration-150`

  return (
    <footer className={container}>
      <div className={footerWrap}>
        <div className='flex items-end gap-4'>
          <Link href="/" legacyBehavior>  
            <a>
              {isDarkMode ? (
                <Image src='/imgs/ci_logo_mono_dark.svg' alt='Logo' width={117} height={24} className='mr-2' priority />  
              ) : (
                <Image src='/imgs/ci_logo_mono_light.svg' alt='Logo' width={117} height={24} className='mr-2' priority />  
              )}
            </a>
          </Link>
          <span className='text-xs'>Copyright ©WISE IT All Rights Reserved.</span>
        </div>
        <div>
          <ul className={iconList}>
            <li>
              <Link href="/" legacyBehavior>
                <a className={linkIcon}>
                  <LinkWISE width={20} height={19} className="fill-slate-400" title="WISE IT 오피셜 페이지 링크" />
                </a>
              </Link>
            </li>
            <li>
                <a className={linkIcon}
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                    <LinkGithub width={20} height={20} className="fill-slate-400" title="Github 링크" />
                </a>
            </li>
            <li>
                <a className={linkIcon}
                  href='https://discord.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <LinkDiscord width={20} height={20} className="fill-slate-400" title="Discord 링크" />
                </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;