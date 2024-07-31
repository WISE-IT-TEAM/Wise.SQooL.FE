import React, { useState, useEffect, useCallback } from 'react';
import SQLEditor from '../../components/editor/SqlEditor';

const StartPage = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const apiInitUrl = process.env.NEXT_PUBLIC_API_INIT_ARTIST_URL;
  const apiCategoryUrl = process.env.NEXT_PUBLIC_API_CATEGORY_URL;
  const apiContentsUrl = process.env.NEXT_PUBLIC_API_CONTENTS_URL;

  const toggleEditor = () => {
    setIsEditorOpen(!isEditorOpen);
  };

  useEffect(() => {
    const createDatabase = async () => {
      try {
        const response = await fetch(apiInitUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ dbname: 'Artist' }),
        });

        if (!response.ok) {
          throw new Error('데이터베이스 생성 실패');
        }

        console.log('데이터베이스가 성공적으로 생성되었습니다.');
      } catch (error) {
        console.error('데이터베이스 생성 중 오류 발생:', error);
      }
    };

    createDatabase();
  }, [apiInitUrl]);

  const fetchContent = useCallback(async (documentId) => {
    try {
      const url = `${apiContentsUrl}${documentId}`;
      console.log('콘텐츠 요청 URL:', url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('콘텐츠 가져오기 실패');
      }

      const data = await response.json();
      console.log('콘텐츠 데이터:', data);
      setContent(data.content); // 'data.content'에 상세 콘텐츠가 포함되어 있다고 가정합니다.
    } catch (error) {
      console.error('콘텐츠 가져오는 중 오류 발생:', error);
      setContent('콘텐츠를 불러오는 데 실패했습니다.');
    }
  }, [apiContentsUrl]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(apiCategoryUrl);
        if (!response.ok) {
          throw new Error('카테고리 가져오기 실패');
        }

        const data = await response.json();
        console.log('카테고리 데이터:', data);
        if (Array.isArray(data.categories)) {
          setCategories(data.categories);

          if (data.categories.length > 0) {
            fetchContent(data.categories[0].Id);
          }
        } else {
          setCategories([]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('카테고리 가져오는 중 오류 발생:', error);
        setCategories([]);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [apiCategoryUrl, fetchContent]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-1/6 p-4 bg-gray-100 overflow-auto">
          <ul>
            {categories.map((category) => (
              <li key={category.Id} className="mb-2">
                <button
                  onClick={() => fetchContent(category.Id)}
                  className="text-gray-700 hover:underline"
                >
                  {category.Title}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className={`flex-1 flex ${isEditorOpen ? 'flex-row' : 'flex-col'}`}>
          <main className={`p-4 overflow-auto ${isEditorOpen ? 'w-1/2' : 'w-full'}`}>
            {content && (
              <div className="mb-8">
                <div className="mt-4">{content}</div>
              </div>
            )}
          </main>
          {isEditorOpen && (
            <div className="w-1/2 border-l border-gray-300 p-4">
              <SQLEditor initialValue="SELECT * FROM Artist;" />
            </div>
          )}
        </div>
        <button
          onClick={toggleEditor}
          className="fixed bottom-20 right-4 bg-purple-500 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
        >
          {isEditorOpen ? '편집기 닫기' : '편집기 열기'}
        </button>
      </div>
    </div>
  );
};

export default StartPage;
