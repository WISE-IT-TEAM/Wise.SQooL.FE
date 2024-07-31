// component/editor/SqlEditor.js
import React, { useEffect, useState, useRef } from 'react';
import QuerySection from './QuerySection';
import ResultSection from './ResultSection';
import { createDatabase, executeQuery as executeQueryApi } from './Api';
import { ResizeRow } from '../IconSet';
import useDarkMode from '../../hooks/useDarkMode';

const SQLEditor = ({ initialValue, page }) => {
  const [queryResult, setQueryResult] = useState({ columns: [], rows: [] });
  const [editorHeight, setEditorHeight] = useState(300); // 초기 에디터 높이 설정
  const [containerHeight, setContainerHeight] = useState(0); // 초기값을 0으로 설정
  const editorViewRef = useRef(null); // editorView를 참조하는 ref 추가
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setContainerHeight(window.innerHeight - 100); // 클라이언트 사이드에서만 실행
    }
    createDatabase();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setContainerHeight(window.innerHeight - 100); // 윈도우 크기 변경 시 랩 높이 재설정
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const executeQuery = () => {
    const editorView = editorViewRef.current;
    if (editorView) {
      const query = editorView.state.doc.toString();
      executeQueryApi(query, setQueryResult);
    } else {
      console.error("EditorView is not initialized");
    }
  };

  const container = `w-full max-w-${page === 'editor' ? '1200px' : '5xl'} flex flex-col mt-20 mx-auto h-full`;
  const handler = `flex py-3 justify-center cursor-row-resize bg-transparent`;

  const minEditorHeight = 320; // 최소 에디터 높이 설정
  const minResultHeight = 240; // 최소 에디터 높이 설정

  return (
    <section className={container} style={{ height: containerHeight }}>
      <QuerySection
        initialValue={initialValue}
        editorHeight={editorHeight}
        executeQuery={executeQuery}
        minHeight={minEditorHeight} // 최소 높이 설정
        setEditorView={(view) => editorViewRef.current = view} // editorView 설정
      />
      <div
        className={handler}
        onMouseDown={(e) => {
          const startY = e.clientY;
          const startHeight = editorHeight;
          let animationFrameId;
          
          const onMouseMove = (e) => {
            const newHeight = Math.max(startHeight + (e.clientY - startY), minEditorHeight);
            cancelAnimationFrame(animationFrameId);
            setEditorHeight(newHeight);
          };
          const onMouseUp = () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(animationFrameId);
          };
          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
        }}
        title="드래그로 창 크기를 조절해보세요"
      >
        <ResizeRow width={48} height={22} className="fill-slate-400" />
      </div>
      <ResultSection
        queryResult={queryResult}
        containerHeight={containerHeight}
        editorHeight={editorHeight}
        minHeight={minResultHeight} // 최소 높이 설정
      />
    </section>
  );
};

export default SQLEditor;
