// components/index/TeamSection.js

import React from 'react';
import TeamMember from '../TeamMember';
import teamData from '../../data/teamData'; // 팀소개 데이터
import AnimatedSection from '../AnimatedSection';

const TeamSection = () => {
    
  const section = `max-w-content-full mx-auto flex flex-col justify-center items-center gap-10 my-20`
  return (
    <section className={section}>
    <h2 className='text-2xl font-bold'>팀 와이즈 잇 - WISE IT</h2>
    <p>본명의 이니셜을 줏어모으면 WISE가 되는 힙한 팀입니다</p>
      <AnimatedSection>
        <article className='max-w-full justify-center flex gap-4'>
        {teamData.map((member, index) => (
          <TeamMember 
            key={index}
            avatarDark={member.avatarDark}
            avatarLight={member.avatarLight}
            nickname={member.nickname}
            role={member.role}
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