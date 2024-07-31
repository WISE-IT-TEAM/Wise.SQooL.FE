// components/ServiceIntro.js
import React from 'react';
import Link from 'next/link';
import useDarkMode from '../hooks/useDarkMode';

const ServiceIntro = ({ summary, title, content, linkText, linkUrl }) => {
  const { isDarkMode } = useDarkMode();

  const serviceCard = `w-full flex flex-col gap-3 px-6 pt-10 pb-20 rounded-lg shadow justify-center items-center border-1`;
  const serviceSummary = `text-sm font-semibold text-green-600 mb-2 text-center`;
  const serviceTitle = `text-lg font-semibold text-center whitespace-normal break-words mb-2`;
  const serviceContent = `text-sm text-center whitespace-normal break-words mb-2`;
  const serviceLink = `text-blue-500 hover:underline text-center mt-4`;

  return (
    <div className={serviceCard}>
      <div className="flex items-center justify-center"></div>
      <h3 className={serviceSummary}>{summary}</h3>
      <h2 className={serviceTitle}>
        {(title ? title.split('\n') : []).map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h2>
      <p className={serviceContent}>
        {(content ? content.split('\n') : []).map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      {linkText && (
        <div>
          <Link href={linkUrl} legacyBehavior>
            <a className={serviceLink}>{linkText}</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceIntro;
