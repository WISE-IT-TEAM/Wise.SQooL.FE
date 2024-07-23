// components/index/ServiceSection.js

import React from 'react';
import ServiceIntro  from '../ServiceIntro';
import serviceIntros from '../../data/serviceIntros'; // 서비스 소개 데이터
import AnimatedSection from '../AnimatedSection';

const ServiceSection = () => {
  const section = `max-w-content-width mx-auto flex flex-col justify-center items-center gap-10 mb-20`
  
  return (
    <section className={section}>
      <h2 className='text-2xl font-bold'>WISE는 생각했습니다</h2>
      <AnimatedSection>
        <article className='max-w-content-width justify-center flex gap-4'>
        {serviceIntros.map(service => (
          <ServiceIntro
            key={service.id}
            icon={service.icon}
            summary={service.summary}
            title={service.title}
            content={service.content}
            linktext={service.linkText}
          />
        ))}
        </article>
      </AnimatedSection>
    </section>
  );
};

export default ServiceSection;