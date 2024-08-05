// component/editor/QuerySection
import React, { useRef, useEffect, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { sql } from "@codemirror/lang-sql";
import { createSqoolTheme } from "./Styles";
import { CodeCopy, CodeReset } from "../IconSet";
import useDarkMode from "../../hooks/useDarkMode";

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
  const editorElement = useRef(null);
  const editorView = useRef(null); // 내부에서 editorView 관리
  const { isDarkMode } = useDarkMode();
  const [initialized, setInitialized] = useState(false);

  // 에디터 초기화 및 다크 모드 변경 시 재초기화
  useEffect(() => {
    const initializeEditor = () => {
      if (editorElement.current) {
        if (editorView.current) {
          editorView.current.destroy();
        }
        editorView.current = new EditorView({
          extensions: [basicSetup, sql(), createSqoolTheme(isDarkMode)],
          parent: editorElement.current,
          doc: initialValue,
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
  }, [initialValue, isDarkMode, setEditorView]);

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
          <button className={editorBtn}>
            <CodeCopy width={24} height={24} className={editorIcon} />
            코드 복사
          </button>
          <button className={editorBtn}>
            <CodeReset width={24} height={24} className={editorIcon} />
            코드 초기화
          </button>
        </div>
      </div>
      <div ref={editorElement} className="w-full h-full flex-grow overflow-auto"></div>
      <button onClick={executeQuery} className={queryBtn}>
        <span>코드 실행(Ctrl + Enter)</span>
      </button>
    </section>
  );
};

export default QuerySection;
