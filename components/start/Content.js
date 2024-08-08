// components/start/Content.js
import React, { useEffect, useState } from 'react';
import { getContent } from './Api';
import useDarkMode from '../../hooks/useDarkMode';

const Content = ({ documentId }) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getContent(documentId);
        setContent(data.document);
      } catch (error) {
        console.error('문서 가져오는 중 오류 발생:', error);
        setContent(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (documentId) {
      setIsLoading(true);
      fetchContent();
    }
  }, [documentId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return <div>Error loading content</div>;
  }

  const contentWrap = `w-full min-w-80 h-full flex flex-col rounded-lg border-1 overflow-y-scroll ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const contentHead = `w-full p-4 font-bold rounded-tl-lg rounded-tr-lg ${isDarkMode ? "bg-slate-800 text-slate-50" : "bg-slate-200 text-slate-600"}`;
  const contentField = `w-full p-4 items-center ${isDarkMode ? "text-slate-50" : "text-slate-900"}`;

  return (
    <div className={contentWrap}>
      <h1 className={contentHead}>{content.Title}</h1>
      <div className={contentField} dangerouslySetInnerHTML={{ __html: adjustImagePaths(content.Content) }} />
    </div>
  );
};

const adjustImagePaths = (htmlContent) => {
  const serverBaseUrl = process.env.NEXT_PUBLIC_API_CONTENTS_URL.replace('/api/sqldoc/document/', '');

  const div = document.createElement('div');
  div.innerHTML = htmlContent;
  const images = div.getElementsByTagName('img');

  for (let img of images) {
    const originalSrc = img.getAttribute('src');
    if (originalSrc.startsWith('/static/Uploads')) {
      const newSrc = `${serverBaseUrl}${originalSrc}`;
      img.setAttribute('src', newSrc);
    }
  }

  return div.innerHTML;
};

export default Content;
