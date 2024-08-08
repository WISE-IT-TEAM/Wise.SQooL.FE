import React, { useRef, useEffect, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { sql } from "@codemirror/lang-sql";
import { autocompletion } from "@codemirror/autocomplete";
import { createSqoolTheme } from "./Styles";
import { CodeCopy, CodeReset, DatabaseReset } from "../IconSet"; // Add DatabaseReset icon
import useDarkMode from "../../hooks/useDarkMode";
import { sqliteCompletion } from "./sqliteKeywords";

/**
 * QuerySection 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {string} props.initialValue - 초기 SQL 코드 값
 * @param {number} props.editorHeight - 에디터 높이
 * @param {function} props.executeQuery - 쿼리 실행 함수
 * @param {number} props.minHeight - 최소 높이
 * @param {function} props.setEditorView - editorView 설정 함수
 * @param {function} props.resetDatabase - 데이터베이스 초기화 함수
 */
const QuerySection = ({ initialValue, editorHeight, executeQuery, minHeight, setEditorView, resetDatabase }) => {
  const editorElement = useRef(null);
  const editorView = useRef(null); // 내부에서 editorView 관리
  const { isDarkMode } = useDarkMode();
  const [initialized, setInitialized] = useState(false);
  const [queryValue, setQueryValue] = useState(initialValue); // 상태로 초기값 관리

  // 에디터 초기화 및 다크 모드 변경 시 재초기화
  useEffect(() => {
    const initializeEditor = () => {
      if (editorElement.current) {
        if (editorView.current) {
          editorView.current.destroy();
        }
        editorView.current = new EditorView({
          extensions: [
            basicSetup,
            sql(),
            createSqoolTheme(isDarkMode),
            autocompletion({
              override: [sqliteCompletion]
            })
          ],
          parent: editorElement.current,
          doc: queryValue, // 상태로 관리되는 값을 사용
        });
        setEditorView(editorView.current); // editorView 설정
      }
    };

    initializeEditor();
    setInitialized(true);

    return () => {
      if (editorView.current) {
        editorView.current.destroy();
      }
    };
  }, [queryValue, isDarkMode, setEditorView]); // queryValue 추가

  const handleCopyCode = () => {
    if (editorView.current) {
      const code = editorView.current.state.doc.toString();
      navigator.clipboard.writeText(code).then(() => {
        alert("코드가 클립보드에 복사되었습니다.");
      }).catch((err) => {
        console.error("코드 복사 실패: ", err);
      });
    }
  };

  const handleResetCode = () => {
    if (editorView.current) {
      editorView.current.dispatch({
        changes: { from: 0, to: editorView.current.state.doc.length, insert: initialValue }
      });
      setQueryValue(initialValue); // 초기값으로 되돌림
    }
  };

  const queryWrap = `w-full flex flex-col rounded-lg border-1 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const queryHead = `w-full p-4 flex justify-between items-center font-bold rounded-tl-lg rounded-tr-lg ${isDarkMode ? "bg-primaryDark text-slate-50" : "bg-primaryLight text-slate-600"} bg-opacity-10`;
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
          <button className={editorBtn} onClick={resetDatabase}>
            <DatabaseReset width={24} height={24} className={editorIcon} />
            DB 초기화
          </button>
        </div>
      </div>
      <div ref={editorElement} className="w-full h-full flex-grow overflow-auto"></div>
      <button onClick={() => { setQueryValue(editorView.current.state.doc.toString()); executeQuery(); }} className={queryBtn}>
        <span>코드 실행(Ctrl + Enter)</span>
      </button>
    </section>
  );
};

export default QuerySection;
