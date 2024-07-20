// components/TeamMember.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext';

const TeamMember = ({ avatarDark, avatarLight, nickname, github, email }) => {
    const { isDarkMode } = useDarkMode();
    
    const copyClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            const notification = document.getElementById('notification');
            notification.classList.remove('hidden');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 3000);
        });
    };
    
    const memberCard = `w-card-pc`
    const toastMessage = `hidden fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded`
    
    return (
        <div className={memberCard}>
            <Image src={isDarkMode ? avatarDark : avatarLight} alt={`${nickname} 아바타`} width={160} height={160} />
            <h3 className=''>{nickname}</h3>
            <Link href={github} legacyBehavior>
                <a>
                    {isDarkMode ? (
                        <Image src='/img/member_gitbub_dark.svg' alt='github link' width={24} height={24}/>
                    ) : (
                        <Image src='/img/member_github_light.svg' alt='github link' width={24} height={24}/>
                    )}
                </a>
            </Link>
            <p>{email}</p>
            <button onClick={copyClipboard}>
                {isDarkMode ? (
                    <Image src='/img/member_email_dark.svg' alt='github link' width={24} height={24}/>
                ) : (
                    <Image src='/img/member_email_light.svg' alt='github link' width={24} height={24}/>
                )}
            </button>
            <div id="notification" class={toastMessage}>
                이메일 주소가 복사 되었습니다!
            </div>
        </div>
    )
}

export default TeamMember;