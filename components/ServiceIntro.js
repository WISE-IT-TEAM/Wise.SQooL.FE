// components/ServiceIntro.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext';
import { useToast } from '../context/ToastContext';

const ServiceIntro = ({ icon, summary, title, content, linkText,linkUrl }) => {
  const { isDarkMode } = useDarkMode();
  const showToast = useToast();

  const serviceCard = `p-4 bg-white rounded-lg shadow w-full max-w-xs flex flex-col gap-3 px-6 py-10 justify-center items-center border-1 rounded-2xl`;
  const serviceIcon = `${isDarkMode ? 'fill-slate-400' : 'fill-slate-600'} mb-4`;
  const serviceSummary = `text-sm font-semibold text-green-600 mb-2 text-center`;
  const serviceTitle = `text-lg font-semibold text-center whitespace-normal break-words mb-2`;
  const serviceContent = `text-sm text-center whitespace-normal break-words mb-2`;
  const serviceLink = `text-blue-500 hover:underline text-center mt-4`;

  return (
    <div className={serviceCard}>
      <div className="flex items-center justify-center">
        {/* <Image src={icon} alt={summary} width={48} height={48} className={serviceIcon} /> */}
      </div>
      <h3 className={serviceSummary}>{summary}</h3>
      <h2 className={serviceTitle}>
        {(title ? title.split('\n') : []).map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>
      <p className={serviceContent}>
        {(content ? content.split('\n') : []).map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
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