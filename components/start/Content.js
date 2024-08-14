// File: components/start/Content.js

import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getContent } from './Api';
import useStore from '../../store/useStore';
import DOMPurify from 'dompurify';
import LoadingSpinner from '../../components/LoadingSpinner';

/**
 * Content 컴포넌트
 * - 주어진 documentId를 사용하여 백엔드에서 문서 데이터를 가져와 렌더링합니다.
 * - 다크 모드와 연동되어 다크 모드에 맞는 스타일을 적용합니다.
 * - 가져온 HTML 콘텐츠는 DOMPurify를 사용하여 정화한 후, Tailwind CSS의 타이포그래피 플러그인을 통해 스타일링됩니다.
 * - 창 크기에 따라 가변적인 폭 조절이 가능하며, 콘텐츠가 부모 요소의 크기에 맞게 확장됩니다.
 *
 * @param {string} documentId - 백엔드에서 문서 데이터를 가져오기 위한 ID
 * @returns {JSX.Element} 문서 콘텐츠를 렌더링하는 컴포넌트
 */
const Content = ({ documentId }) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useStore();

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
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!content) {
    return <div className='w-full h-full flex justify-center items-center'>로딩 오류가 발생했습니다</div>;
  }

  const container = `w-full h-full flex flex-col flex-grow rounded-lg border-1 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const contentHead = `w-full p-4 font-bold rounded-tl-lg rounded-tr-lg ${isDarkMode ? "bg-slate-800 text-slate-50" : "bg-slate-200 text-slate-600"}`;
  const contentField = `w-full max-w-none p-4 flex-grow items-center overflow-y-auto scrollbar-hide ${isDarkMode ? "text-slate-50" : "text-slate-900"} prose ${isDarkMode ? "prose-dark" : ""}`;

  const cleanContent = DOMPurify.sanitize(content.Content);

  return (
    <TransitionGroup className='w-full'>
      <CSSTransition key={documentId} timeout={300} classNames="fade">
        <div className={container}>
          <h1 className={contentHead}>{content.Title}</h1>
          <div className={contentField} dangerouslySetInnerHTML={{ __html: cleanContent }} />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Content;
