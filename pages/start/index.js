import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/start/Category';
import Content from '../../components/start/Content';
import SQLEditor from '../../components/editor/SqlEditor';
import ResizeHandler from '../../components/ResizeHandler';
import { HeroBtn } from '../../components/IconSet';
import useStore from '../../store/useStore';

const StartPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(true);
  const [editorWidth, setEditorWidth] = useState(500);
  const [documentWidth, setDocumentWidth] = useState(1000);
  const [query, setQuery] = useState("");
  
  const setFullWidth = useStore((state) => state.setFullWidth); 
  const resetFullWidth = useStore((state) => state.resetFullWidth);
  const isFullWidth = useStore((state) => state.isFullWidth);
  const isDarkMode = useStore((state) => state.isDarkMode);
  const useFullHeight = useStore((state) => state.useFullHeight);
  const totalOffset = useStore((state) => state.totalOffset);
  const setUseFullHeight = useStore((state) => state.setUseFullHeight);
  const setTotalOffset = useStore((state) => state.setTotalOffset);

  const apiInitUrl = process.env.NEXT_PUBLIC_API_INIT_URL;
  const minDocumentWidth = 320;

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

    // 레이아웃 조건 초기 설정
    setUseFullHeight(true); // 예시로 전체 높이를 사용하는 상태로 설정
    setTotalOffset(64); // 예시로 64px의 오프셋을 설정
  }, [setUseFullHeight, setTotalOffset]);

  useEffect(() => {
    localStorage.setItem('isEditorOpen', isEditorOpen);
    setFullWidth(isEditorOpen); 
    return () => resetFullWidth(); 
  }, [isEditorOpen, setFullWidth, resetFullWidth]);

  useEffect(() => {
    localStorage.setItem('query', query);
  }, [query]);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

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

  // 조건부로 클래스를 설정합니다.
  const container = `flex justify-center mx-auto duration-500 h-full ${useFullHeight ? `h-[calc(100vh-${totalOffset}px)]` : 'min-h-screen'} ${isFullWidth ? 'w-full px-8' : 'max-w-content-full'}`;
  const documentWrap = `flex min-w-80 flex-row justify-center flex-grow gap-4`;
  const editorWrap = `max-w-content-full min-w-content-half ${isEditorOpen ? 'flex' : 'hidden'} flex-grow`;
  const toggleBtn = `fixed w-16 h-16 flex flex-col justify-center items-center gap-1 right-12 bottom-12 rounded-lg shadow-lg hover:opacity-80 duration-300 font-bold`;
  const btnBg = isEditorOpen 
    ? (isDarkMode ? 'bg-slate-500 text-slate-900' : 'bg-slate-400 text-slate-50') 
    : (isDarkMode ? 'bg-primaryDark text-slate-900' : 'bg-primaryLight text-slate-50');
  const buttonClass = `${toggleBtn} ${btnBg}`;

  return (
    <section className={container}>
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
      <div className={editorWrap}>
        <SQLEditor placeholder="쿼리문을 입력해주세요. 예시) SELECT * FROM Artist;" />
      </div>

      <button onClick={toggleEditor} className={buttonClass}>
        <HeroBtn width={24} height={24} className={isDarkMode ? 'fill-slate-900' : 'fill-slate-50'} />
        {isEditorOpen ? '끄기' : '켜기'}
      </button>
    </section>
  );
};

export default StartPage;
