import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {

  const listItemClass = `${styles.list_item} border-2 border-slate-300 hover:opacity-70 ease-in-out`

  return (
    <footer className={`${styles.container} w-full bg-slate-200 text-slate-400 py-3`}>
      <div className={`${styles.footer_wrap} mx-auto`}>
        <div className='flex items-end gap-4'>
          <Link href="/" legacyBehavior>  
            <a>
              <Image src='/img/logo_ci-light.svg' alt='Logo' width={117} height={24} className='mr-2' />  
            </a>
          </Link>
          <span className='text-xs'>Copyright ©WISE IT All Rights Reserved.</span>
        </div>
        <div>
            <ul className={`${styles.icon_list} flex flex-row`}>
                <li className={listItemClass}>
                  <Link href="/" legacyBehavior>
                    <a>
                      <Image src="/img/link_wise.svg" alt="wise-logo" width={20} height={20}/>
                    </a>
                  </Link>
                </li>
                <li className={listItemClass}>
                    <a 
                        href='https://github.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='icon_link border-color-slate-300'>
                        <Image src='/img/link_github.svg' alt='wise-logo' width={20} height={20}/>
                    </a>
                </li>
                <li className={listItemClass}>
                    <a 
                        href='https://discord.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='icon_link border-color-slate-300'>
                        <Image src='/img/link_discord.svg' alt='wise-logo' width={20} height={20}/>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;