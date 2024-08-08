import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/start/Category';
import Content from '../../components/start/Content';
import SQLEditor from '../../components/editor/SqlEditor';
import ResizeHandler from '../../components/ResizeHandler';
import useDarkMode from '../../hooks/useDarkMode';

const StartPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(true);
  const [editorWidth, setEditorWidth] = useState(500);
  const [documentWidth, setDocumentWidth] = useState(1000);
  const [query, setQuery] = useState("");
  const apiInitUrl = process.env.NEXT_PUBLIC_API_INIT_URL;
  const minDocumentWidth = 320;
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const storedIsEditorOpen = localStorage.getItem('isEditorOpen');
    if (storedIsEditorOpen !== null) {
      setIsEditorOpen(storedIsEditorOpen === 'true');
    }
    const storedQuery = localStorage.getItem('query');
    if (storedQuery !== null) {
      setQuery(storedQuery);
    }

    const initialWidth = typeof window !== 'undefined' ? window.innerWidth - 500 : 1000;
    setDocumentWidth(initialWidth);
  }, []);

  useEffect(() => {
    localStorage.setItem('isEditorOpen', isEditorOpen);
  }, [isEditorOpen]);

  useEffect(() => {
    localStorage.setItem('query', query);
  }, [query]);

  const handleSelectCategory = (categoryId) => {
    console.log(`Category selected: ${categoryId}`);
    setSelectedCategoryId(categoryId);
  };

  const toggleEditor = () => {
    console.log(`Editor toggled. New state: ${!isEditorOpen}`);
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
    console.log(`Selected category ID changed: ${selectedCategoryId}`);
  }, [selectedCategoryId]);

  useEffect(() => {
    if (isEditorOpen) {
      setDocumentWidth(window.innerWidth - editorWidth);
    } else {
      setDocumentWidth(window.innerWidth);
    }
  }, [isEditorOpen, editorWidth]);

  const handleResize = (newDocumentWidth) => {
    setDocumentWidth(newDocumentWidth);
    setEditorWidth(window.innerWidth - newDocumentWidth);
  };

  const container = `flex justify-center pt-14 mx-auto duration-500 ${isEditorOpen ? 'w-full px-6' : 'max-w-content-full'}`;
  const documentWrap = `flex flex-row justify-center flex-grow gap-4`;
  const editorWrap = `max-w-content-full min-w-content-half ${isEditorOpen ? 'flex' : 'hidden'} flex-grow`;
  const toggleBtn = `fixed right-12 bottom-12 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600`;

  return (
    <section className={container}>
      <div className="flex w-full h-full">
        <div className={documentWrap} style={{ width: documentWidth }}>
            <CategoryList onSelectCategory={handleSelectCategory} />
            {selectedCategoryId ? (
              <Content documentId={selectedCategoryId} key={selectedCategoryId} />
            ) : (
              <p>카테고리를 선택해주세요.</p>
            )}
        </div>
        {isEditorOpen && (
          <ResizeHandler
            onResize={handleResize}
            startWidth={documentWidth}
            minWidth={minDocumentWidth}
            direction="vertical"
            title="드래그로 창 크기를 조절해보세요"
          />
        )}
        <div className={editorWrap} style={{ width: editorWidth }}>
          <SQLEditor initialValue="" placeholder="쿼리문을 입력해주세요. 예시) SELECT * FROM Artist;" />
        </div>
      </div>
      <button onClick={toggleEditor} className={toggleBtn}>
        {isEditorOpen ? 'Close Editor' : 'Open Editor'}
      </button>
    </section>
  );
};

export default StartPage;
