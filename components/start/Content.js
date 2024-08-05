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
        console.log('문서 데이터:', data);
        setContent(data);
      } catch (error) {
        console.error('문서 가져오는 중 오류 발생:', error);
        setContent(null);  // 에러 발생 시 null로 설정
      } finally {
        setIsLoading(false);
      }
    };

    if (documentId) {
      fetchContent();
    }
  }, [documentId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return <div>Error loading content</div>;
  }

  return (
    <div className={`w-full flex flex-col ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className="text-2xl font-bold mb-4">{content.Title}</h1>
      <div className="content-body">
        {content.Body}
      </div>
    </div>
  );
};

export default Content;
