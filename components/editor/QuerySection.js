import React, { useEffect, useRef } from 'react';
import useEditor from '../../hooks/useEditor';
import { CodeCopy, DBReset } from '../IconSet';
import useDarkMode from '../../hooks/useDarkMode';
import useStore from '../../store/useStore';
import { resetDatabase as resetDatabaseApi } from './Api'; // resetDatabaseApi 가져오기

/**
 * QuerySection 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {string} props.initialValue - 초기 SQL 코드 값
 * @param {number} props.editorHeight - 에디터 높이
 * @param {function} props.executeQuery - 쿼리 실행 함수
 * @param {number} props.minHeight - 최소 높이
 * @param {function} props.setEditorView - editorView 설정 함수
 */

const QuerySection = ({ initialValue, editorHeight, executeQuery, minHeight, setEditorView }) => {
  const { isDarkMode } = useDarkMode();
  const { showToast, query, setQuery } = useStore();
  const editorElement = useEditor(initialValue, isDarkMode, setQuery);
  const editorViewRef = useRef(null);

  useEffect(() => {
    if (editorElement.current) {
      setEditorView(editorElement.current);
      editorViewRef.current = editorElement.current.view; // 올바르게 editorViewRef를 설정
    }
  }, [editorElement, setEditorView]);

  const handleCopyCode = () => {
    if (editorViewRef.current) {
      const code = editorViewRef.current.state.doc.toString();
      navigator.clipboard.writeText(code).then(() => {
        showToast('코드 복사 성공!', 'success');
      }).catch((err) => {
        showToast('코드 복사 실패: ' + err.message, 'error');
        console.error("코드 복사 실패: ", err);
      });
    } else {
      console.error('EditorView is not initialized');
    }
  };

  const handleResetDatabase = async () => {
    const success = await resetDatabaseApi(); // 데이터베이스 초기화 API 호출
    if (success) {
      resetEditor(); // 에디터 내용을 초기화하는 함수 호출
      setQuery(''); // 에디터 상태도 빈 문자열로 설정
      showToast('데이터베이스 및 코드 초기화 성공!', 'success'); // 성공 토스트
      console.log('Database and code reset to initial state');
    } else {
      showToast('데이터베이스 초기화에 실패', 'error'); // 실패 토스트
      console.error('Database reset failed');
    }
  };

  const resetEditor = () => {
    if (editorViewRef.current) {
      editorViewRef.current.dispatch({
        changes: { from: 0, to: editorViewRef.current.state.doc.length, insert: '' }, // 에디터 내용을 비우기
      });
    }
  };

  const queryWrap = `w-full flex flex-col rounded-lg border-1 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const queryHead = `w-full px-4 py-3 flex justify-between items-center font-bold rounded-tl-lg rounded-tr-lg ${isDarkMode ? "bg-primaryDark text-slate-50" : "bg-primaryLight text-slate-600"} bg-opacity-10`;
  const editorBtn = `px-2 py-1 rounded-lg flex justify-center items-center gap-1 font-bold ${isDarkMode ? "bg-slate-900 text-slate-400" : "bg-slate-50 text-slate-500"} hover:opacity-70 duration-300`;
  const editorIcon = `${isDarkMode ? "fill-primaryDark" : "fill-primaryLight"}`;
  const queryBtn = `w-full py-4 rounded-bl-lg rounded-br-lg ${isDarkMode ? "bg-primaryDark text-slate-900 hover:bg-secondaryDark" : "bg-primaryLight text-slate-50 hover:bg-secondaryLight"} font-bold duration-300`;

  return (
    <section className={queryWrap} style={{ minHeight, height: editorHeight }}>
      <div className={queryHead}>
        <span>SQL 코드 작성</span>
        <div className="flex gap-2">
          <button className={editorBtn} onClick={handleCopyCode}>
            <CodeCopy width={24} height={24} className={editorIcon} />
            코드 복사
          </button>
          <button className={editorBtn} onClick={handleResetDatabase}>
            <DBReset width={24} height={24} className={editorIcon} />
            DB 초기화
          </button>
        </div>
      </div>
      <div ref={editorElement} className="w-full h-full flex-grow overflow-y-scroll"></div>
      <button onClick={() => executeQuery(query)} className={queryBtn}>
        <span>코드 실행(Ctrl + Enter)</span>
      </button>
    </section>
  );
};

export default QuerySection;
