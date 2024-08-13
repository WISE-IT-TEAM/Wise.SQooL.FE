// components/editor/SqlEditor.js

import React, { useEffect, useState, useRef, useCallback } from 'react';
import QuerySection from './QuerySection';
import ResultSection from './ResultSection';
import { createDatabase, executeQuery as executeQueryApi, resetDatabase as resetDatabaseApi } from './Api';
import useDarkMode from '../../hooks/useDarkMode';
import ResizeHandler from '../ResizeHandler';
import useStore from '../../store/useStore';

/**
 * SQLEditor 컴포넌트
 * - SQL 쿼리 편집기, 쿼리 실행 및 데이터베이스 초기화 기능을 포함합니다.
 * - QuerySection과 ResultSection으로 구성되어 있으며, 이 두 컴포넌트 간의 상태 관리를 담당합니다.
 * - 초기 데이터베이스 생성과 같은 사이드 이펙트를 관리합니다.
 */
const SQLEditor = ({ initialValue, page }) => {
  const [queryResult, setQueryResult] = useState({ columns: [], rows: [] });
  const [editorHeight, setEditorHeight] = useState(400);
  const editorViewRef = useRef(null);
  const { isDarkMode } = useDarkMode();
  const { showToast } = useStore();

  // 데이터베이스 초기화를 위한 useEffect
  useEffect(() => {
    createDatabase().catch((error) => {
      console.error("Database initialization failed:", error);
      showToast('데이터베이스 초기화에 실패했습니다.', 'error');
    });
  }, [showToast]);

  // SQL 쿼리 실행 함수
  const executeQuery = useCallback(() => {
    const editorView = editorViewRef.current;
    if (editorView) {
      const query = editorView.state.doc.toString();
      executeQueryApi(query, setQueryResult).catch((error) => {
        console.error("Query execution failed:", error);
        showToast('쿼리 실행에 실패했습니다.', 'error');
      });
    } else {
      console.error("EditorView is not initialized");
    }
  }, [showToast]);

  // 데이터베이스 초기화 함수
  const resetDatabase = useCallback(() => {
    resetDatabaseApi().then(() => {
      setQueryResult({ columns: [], rows: [] });
      if (editorViewRef.current) {
        editorViewRef.current.dispatch({
          changes: { from: 0, to: editorViewRef.current.state.doc.length, insert: '' },
        });
      }
      showToast('데이터베이스가 초기화되었습니다.', 'success');
    }).catch((error) => {
      console.error('Database reset failed:', error);
      showToast('데이터베이스 초기화에 실패했습니다.', 'error');
    });
  }, [showToast]);

  const containerClass = `flex flex-col w-full h-full`;

  return (
    <section className={containerClass}>
      <QuerySection
        initialValue={initialValue}
        editorHeight={editorHeight}
        executeQuery={executeQuery}
        setEditorView={(view) => editorViewRef.current = view}
        resetDatabase={resetDatabase}
        setQueryResult={setQueryResult}
        showToast={showToast} 
      />
      <ResizeHandler
        onResize={setEditorHeight}
        startHeight={editorHeight}
        minHeight={320}
        direction="horizontal"
        title="드래그로 창 크기를 조절해보세요"
      />
      <ResultSection
        queryResult={queryResult}
        editorHeight={editorHeight}
        minHeight={240}
      />
    </section>
  );
};

export default SQLEditor;
