// components/start/Content.js
import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    return <div className='w-full h-full flex justify-center items-center'>로딩 중 입니다</div>;
  }

  if (!content) {
    return <div className='w-full h-full flex justify-center items-center'>로딩 오류가 발생했습니다</div>;
  }

  const container = `w-full h-full flex flex-col flex-grow rounded-lg border-1 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const contentHead = `w-full p-4 font-bold rounded-tl-lg rounded-tr-lg ${isDarkMode ? "bg-slate-800 text-slate-50" : "bg-slate-200 text-slate-600"}`;
  const contentField = `w-full p-4 flex-grow items-center overflow-y-scroll ${isDarkMode ? "text-slate-50" : "text-slate-900"}`;

  return (
    <TransitionGroup className='w-full'>
      <CSSTransition key={documentId} timeout={300} classNames="fade">
        <div className={container}>
          <h1 className={contentHead}>{content.Title}</h1>
          <div className={contentField} dangerouslySetInnerHTML={{ __html: content.Content }} />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Content;
