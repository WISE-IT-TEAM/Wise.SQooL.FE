// components/index/ServiceSection.js
import React from 'react';
import ServiceIntro from '../ServiceIntro';
import serviceData from '../../data/serviceData'; // 서비스 소개 데이터
import AnimatedSection from '../AnimatedSection';
import Slider from '../sliders/Slider';

const ServiceSection = () => {
  const section = `max-w-content-width mx-auto flex flex-col justify-center items-center gap-10 pt-20 select-none`;

  // 서비스 인트로 데이터를 슬라이드로 변환
  const slides = serviceData.map((service) => (
    <ServiceIntro
      key={service.id}
      icon={service.icon}
      summary={service.summary}
      title={service.title}
      content={service.content}
      linktext={service.linkText}
    />
  ));

  return (
    <section className={section}>
      <h2 className='text-2xl font-bold'>와이즈 잇은 보다 즐거운 세상을 상상합니다</h2>
      <AnimatedSection>
        <Slider slides={slides} />
      </AnimatedSection>
    </section>
  );
};

export default ServiceSection;