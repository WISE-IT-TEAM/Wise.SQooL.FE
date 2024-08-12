import React, { useRef, useEffect, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { sql } from "@codemirror/lang-sql";
import { autocompletion } from "@codemirror/autocomplete";
import { createSqoolTheme } from "./Styles";
import { CodeCopy, CodeReset, DatabaseReset } from "../IconSet";
import useDarkMode from "../../hooks/useDarkMode";
import { sqliteCompletion } from "./SqliteKeywords";
import { keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { placeholder } from "@codemirror/view";

const QuerySection = ({ initialValue, editorHeight, executeQuery, minHeight, setEditorView, resetDatabase }) => {
  const editorElement = useRef(null);
  const editorView = useRef(null);
  const { isDarkMode } = useDarkMode();
  const [queryValue, setQueryValue] = useState(initialValue);

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
            autocompletion({ override: [sqliteCompletion] }),
            keymap.of([
              ...defaultKeymap,
              {
                key: "Ctrl-Enter",
                run: () => {
                  setQueryValue(editorView.current.state.doc.toString());
                  executeQuery();
                  return true;
                },
              },
            ]),
            placeholder("SELECT * FROM Artist;"),
          ],
          parent: editorElement.current,
          doc: queryValue,
        });
        setEditorView(editorView.current);
      }
    };

    initializeEditor();

    return () => {
      if (editorView.current) {
        editorView.current.destroy();
      }
    };
  }, [queryValue, isDarkMode, setEditorView, executeQuery]);

  const handleCopyCode = () => {
    if (editorView.current) {
      const code = editorView.current.state.doc.toString();
      navigator.clipboard.writeText(code)
        .then(() => alert("코드가 클립보드에 복사되었습니다."))
        .catch((err) => console.error("코드 복사 실패: ", err));
    }
  };

  const handleResetCode = () => {
    if (editorView.current) {
      editorView.current.dispatch({
        changes: { from: 0, to: editorView.current.state.doc.length, insert: initialValue },
      });
      setQueryValue(initialValue);
    }
  };

  const queryWrap = `w-full flex flex-col rounded-lg border ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const queryHead = `w-full p-4 flex justify-between items-center font-bold rounded-tl-lg rounded-tr-lg ${isDarkMode ? "bg-primaryDark text-slate-50" : "bg-primaryLight text-slate-600"} bg-opacity-10`;
  const editorBtn = `px-3 py-2 rounded-lg flex justify-center items-center gap-2 font-bold ${isDarkMode ? "bg-slate-900 text-slate-400" : "bg-slate-50 text-slate-500"} hover:opacity-80 transition-opacity duration-300`;
  const editorIcon = `${isDarkMode ? "fill-primaryDark" : "fill-primaryLight"}`;
  const queryBtn = `w-full py-3 mt-2 rounded-lg ${isDarkMode ? "bg-primaryDark text-slate-900 hover:bg-secondaryDark" : "bg-primaryLight text-slate-50 hover:bg-secondaryLight"} font-bold transition-colors duration-300`;

  return (
    <section className={queryWrap}>
      <div className={queryHead}>
        <span>SQL 코드 작성</span>
        <div className="flex gap-3">
          <button className={editorBtn} onClick={handleCopyCode}>
            <CodeCopy width={20} height={20} className={editorIcon} />
            코드 복사
          </button>
          <button className={editorBtn} onClick={handleResetCode}>
            <CodeReset width={20} height={20} className={editorIcon} />
            코드 초기화
          </button>
          <button className={editorBtn} onClick={resetDatabase}>
            <DatabaseReset width={20} height={20} className={editorIcon} />
            DB 초기화
          </button>
        </div>
      </div>
      <div ref={editorElement} className="w-full h-full min-h-100 flex-grow overflow-auto"></div>
      <button onClick={() => { setQueryValue(editorView.current.state.doc.toString()); executeQuery(); }} className={queryBtn}>
        <span>코드 실행 (Ctrl + Enter)</span>
      </button>
    </section>
  );
};

export default QuerySection;
