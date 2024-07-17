import React from 'react';
import Image from 'next/image';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.container} bg-slate-200 text-slate-400 mx-auto py-3`}>
      <div className={`${styles.footer_wrap}`}>
        <Image src='/img/logo_ci-light.svg' alt='Logo' width={117} height={24} className='mr-2' />
        <div>
            <ul className={`${styles.icon_list} flex flex-row`}>
                <li className={`${styles.list_item}`}>
                    <a 
                        href='https://github.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='icon_link'>
                        <Image src='/img/link_wise.svg' alt='wise-logo' width={20} height={20}/>
                    </a>
                </li>
                <li>
                    <a 
                        href='https://www.notion.so/ko-kr'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='icon_link border-color-slate-300'>
                        <Image src='/img/link_github.svg' alt='wise-logo' width={20} height={20}/>
                    </a>
                </li>
                <li>
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
    </div>
  );
}

export default Footer;