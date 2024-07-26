import React, { useState, useEffect } from 'react';
import SQLEditor from '../../components/sql_editor';

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
            'Content-Type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({ dbname: "Artist" })
        });

        if (!response.ok) {
          throw new Error('Database creation failed');
        }

        console.log('Database created successfully');
      } catch (error) {
        console.error('Error creating database:', error);
      }
    };

    createDatabase();
  }, [apiInitUrl]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(apiCategoryUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }

        const data = await response.json();
        if (Array.isArray(data.categories)) {
          setCategories(data.categories);

          // 첫 번째 카테고리의 내용을 가져오기
          if (data.categories.length > 0) {
            fetchContent(data.categories[0].Id);
          }
        } else {
          setCategories([]);
        }
        setIsLoading(false); // 로딩 상태 변경
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]); // 에러가 발생하면 빈 배열로 설정
        setIsLoading(false); // 로딩 상태 변경
      }
    };

    fetchCategories();
  }, [apiCategoryUrl]);

  const fetchContent = async (id) => {
    try {
      const response = await fetch(`${apiContentsUrl}${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }

      const data = await response.json();
      setContent(data.status);
    } catch (error) {
      console.error('Error fetching content:', error);
      setContent('');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-1/6 p-4 bg-gray-100 overflow-auto">
          <ul>
            {categories.map((category) => (
              <li key={category.Id} className="mb-2">
                {category.Title === "시작하기" || category.Title === "학습문서" ? (
                  <span className="text-gray-700 font-bold">{category.Title}</span>
                ) : (
                  <button
                    onClick={() => fetchContent(category.Id)}
                    className="text-gray-700 hover:underline"
                  >
                    {category.Title}
                  </button>
                )}
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
