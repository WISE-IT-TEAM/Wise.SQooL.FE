// component/editor/SqlEditor.js
import React, { useEffect, useState, useRef } from 'react';
import QuerySection from './QuerySection';
import ResultSection from './ResultSection';
import { createDatabase, executeQuery as executeQueryApi } from './Api';
import useDarkMode from '../../hooks/useDarkMode';
import ResizeHandler from '../ResizeHandler';

const SQLEditor = ({ initialValue, page }) => {
  const [queryResult, setQueryResult] = useState({ columns: [], rows: [] });
  const [editorHeight, setEditorHeight] = useState(300);
  const [containerHeight, setContainerHeight] = useState(0);
  const editorViewRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setContainerHeight(window.innerHeight - 100);
    }
    createDatabase();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setContainerHeight(window.innerHeight - 100);
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

  const minEditorHeight = 320;
  const minResultHeight = 240;

  return (
    <section className={container} style={{ height: containerHeight }}>
      <QuerySection
        initialValue={initialValue}
        editorHeight={editorHeight}
        executeQuery={executeQuery}
        minHeight={minEditorHeight}
        setEditorView={(view) => editorViewRef.current = view}
      />
      <ResizeHandler
        onResize={setEditorHeight}
        startHeight={editorHeight}
        minHeight={minEditorHeight}
        direction="horizontal"
        title="드래그로 창 크기를 조절해보세요"
      />
      <ResultSection
        queryResult={queryResult}
        containerHeight={containerHeight}
        editorHeight={editorHeight}
        minHeight={minResultHeight}
      />
    </section>
  );
};

export default SQLEditor;

