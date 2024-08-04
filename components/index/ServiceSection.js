// components/index/ServiceSection.js
import React from 'react';
import ServiceIntro from '../ServiceIntro';
import ServiceData from '../../data/ServiceData';
import AnimatedSection from '../AnimatedSection';
import Slider from '../sliders/Slider';

const ServiceSection = () => {
  const section = `max-w-content-width mx-auto flex flex-col justify-center items-center gap-10 pt-20 select-none`;

  const slides = ServiceData.map((service) => (
    <ServiceIntro
      key={service.id}
      icon={service.icon}
      summary={service.summary}
      title={service.title}
      content={service.content}
      linktext={service.linkText}
      linkUrl={service.linkUrl}
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
