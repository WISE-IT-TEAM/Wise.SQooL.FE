// components/index/TeamSection.js

import React from 'react';
import TeamMember from '../TeamMember';
import teamMembers from '../../data/teamMembers';
import AnimatedSection from '../AnimatedSection';

const TeamSection = () => {
    
    const section = `max-w-content-width mx-auto flex flex-col justify-center items-center gap-10 mb-20`
    return (
        <section className={section}>
        <h2 className='text-2xl font-bold'>팀 와이즈 잇 - WISE IT</h2>
        <p>본명의 이니셜을 줏어모으면 WISE가 되는 힙한 팀입니다</p>
        <AnimatedSection>
            <article className='max-w-content-width justify-center flex gap-4'>
            {teamMembers.map((member, index) => (
                <TeamMember 
                key={index}
                avatarDark={member.avatarDark}
                avatarLight={member.avatarLight}
                nickname={member.nickname}
                position={member.position}
                bio={member.bio}
                email={member.email}
                github={member.github}
                className={`${index % 2 === 0 ? 'mt-0' : "mt-4"}`}
                />
            ))}
            </article>
        </AnimatedSection>
        </section>
    );
};

export default TeamSection;