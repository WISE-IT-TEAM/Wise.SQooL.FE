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
        console.log(`Fetching content for document ID: ${documentId}`);
        const data = await getContent(documentId);
        console.log('문서 데이터:', data);
        setContent(data.document);
      } catch (error) {
        console.error('문서 가져오는 중 오류 발생:', error);
        setContent(null);  // 에러 발생 시 null로 설정
      } finally {
        setIsLoading(false);
      }
    };

    if (documentId) {
      setIsLoading(true); // 새로운 documentId가 들어오면 로딩 상태로 설정
      fetchContent();
    }
  }, [documentId]); // documentId 의존성 배열을 확인합니다.

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
      <div className={contentField} dangerouslySetInnerHTML={{ __html: content.Content }} />
    </div>
  );
};

export default Content;