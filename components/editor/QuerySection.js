import React, { useEffect, useRef } from 'react';
import useEditor from '../../hooks/useEditor';
import { CodeCopy, CodeReset } from '../IconSet';
import useDarkMode from '../../hooks/useDarkMode';
import useStore from '../../store/useStore';

const QuerySection = ({ initialValue, editorHeight, executeQuery, minHeight, setEditorView }) => {
  const { isDarkMode } = useDarkMode();
  const { showToast, query, setQuery, resetDatabase } = useStore();
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

  const handleResetCode = async () => {
    const success = await resetDatabase();
    if (success) {
      setQuery(initialValue);
      showToast('데이터베이스가 초기화되었습니다.', 'success');
      console.log('Database reset to initial state');
    } else {
      showToast('데이터베이스 초기화에 실패했습니다.', 'error');
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
          <button className={editorBtn} onClick={handleResetCode}>
            <CodeReset width={24} height={24} className={editorIcon} />
            코드 초기화
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
