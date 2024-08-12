import React, { useEffect, useState, useRef } from 'react';
import QuerySection from './QuerySection';
import ResultSection from './ResultSection';
import { createDatabase, executeQuery as executeQueryApi, resetDatabase as resetDatabaseApi } from './Api';
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

  const resetDatabase = () => {
    resetDatabaseApi().then(() => {
      setQueryResult({ columns: [], rows: [] });
    });
  };

  const containerClass = `${page === 'editor' ? 'max-w-content-full' : 'w-full'} flex flex-col mx-auto h-full min-w-80`;
  const minEditorHeight = 320;
  const minResultHeight = 240;

  return (
    <section className={containerClass} style={{ height: containerHeight }}>
      <QuerySection
        initialValue={initialValue}
        editorHeight={editorHeight}
        executeQuery={executeQuery}
        minHeight={minEditorHeight}
        setEditorView={(view) => (editorViewRef.current = view)}
        resetDatabase={resetDatabase}
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
