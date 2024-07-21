// components/TeamMember.js
"use client";

import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext';
import { useToast } from '../context/ToastContext';
import { MemberGithub, MemberEmail } from '../components/Icons';

const TeamMember = ({ avatarDark, avatarLight, bio, position, nickname, github, email, className }) => {
    const { isDarkMode } = useDarkMode();
    const showToast = useToast();
    
    const copyClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            showToast("✉️ 이메일 주소가 복사 되었습니다", 'success');
        }).catch(() => {
            // 실패 시 다른 메시지 표시 가능
            showToast("⚠️ 이메일 주소 복사에 실패했습니다", 'error');
        });
    };
    
    const memberCard = `w-card-pc flex flex-col gap-3 px-6 py-10 justify-center items-center border-1 rounded-2xl`;
    const iconWrap = `flex gap-2`;
    const memberIcon = `${isDarkMode ? 'fill-slate-400 hover:fill-subDark' : 'fill-slate-400 hover:fill-subLight'} duration-300`;
    
    return (
        <div className={memberCard}>
            <Image src={isDarkMode ? avatarDark : avatarLight} alt={`${nickname} 아바타`} width={160} height={160} />
            <h3 className="text-xl font-bold">{nickname}</h3>
            <span>{position}</span>
            <p className='text-center'>{bio}</p>
            <div className={iconWrap}>
                <Link href={github} legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <MemberGithub width={24} height={24} className={memberIcon} />
                    </a>
                </Link>
                <button onClick={copyClipboard} className='inline-flex gap-2'>
                    <MemberEmail width={24} height={24} className={memberIcon} />
                </button>
            </div>
        </div>
    );
};

export default TeamMember;
