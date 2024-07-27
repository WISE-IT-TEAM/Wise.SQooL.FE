// component/editor/Api.js
import React, { useEffect, useRef, useState } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { sql } from '@codemirror/lang-sql';
import { createSqoolTheme } from './Styles';
import { createDatabase, executeQuery as executeQueryApi } from './Api';
import { CodeCopy, CodeReset } from '../IconSet';
import useDarkMode from '../../hooks/useDarkMode';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const SQLEditor = ({ initialValue, page }) => {
  const [queryResult, setQueryResult] = useState({ columns: [], rows: [] });
  const editorElement = useRef(null);
  const editorView = useRef(null);
  const { isDarkMode } = useDarkMode();
  const [editorHeight, setEditorHeight] = useState(300); // 초기 에디터 높이 설정

  useEffect(() => {
    createDatabase();
  }, []);

  useEffect(() => {
    if (editorElement.current) {
      editorView.current = new EditorView({
        extensions: [basicSetup, sql(), createSqoolTheme(isDarkMode)],
        parent: editorElement.current,
        doc: initialValue,
      });
    }

    return () => {
      if (editorView.current) {
        editorView.current.destroy();
      }
    };
  }, [initialValue, isDarkMode]);

  useEffect(() => {
    if (page === 'start') {
      editorElement.current.style.height = '100vh';
    } else if (page === 'editor') {
      editorElement.current.style.height = 'auto';
    }
  }, [page]);

  const executeQuery = () => {
    const query = editorView.current.state.doc.toString();
    executeQueryApi(query, setQueryResult);
  };

  const renderTable = (data) => {
    const { columns, rows } = data;

    if (rows.length === 0) {
      return <div>코드를 실행하면 결과가 표시됩니다.</div>;
    }

    return (
      <div className="flex justify-center">
        <table className="min-w-full bg-white text-center">
          <thead>
            <tr>
              {columns.map((header, index) => (
                <th key={index} className="py-2 px-4 border-b border-gray-200 bg-gray-100">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-2 px-4 border-b border-gray-200">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const container = `w-full max-w-content-full flex flex-col gap-4 mt-20 mx-auto`;
  const queryWrap = `w-full flex flex-col justify-center items-center rounded-lg border-1 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`;
  const queryHead = `w-full p-4 flex justify-between items-center font-bold rounded-tl-lg rounded-tr-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`;
  const editorBtn = `px-2 py-1 rounded-lg flex justify-center items-center gap-1 font-bold ${isDarkMode ? 'bg-slate-900 text-slate-400' : 'bg-slate-50 text-slate-500'} hover:opacity-70 duration-300`;
  const editorIcon = `${isDarkMode ? 'fill-primaryDark' : 'fill-primaryLight'}`;
  const queryBtn = `w-full max-w-content-full py-4 rounded-bl-lg rounded-br-lg ${isDarkMode ? 'bg-primaryDark text-slate-900 hover:bg-secondaryDark' : 'bg-primaryDark text-slate-50 hover:bg-secondaryLight'} font-bold duration-300`;
  const resultWrap = `w-full overflow-hidden rounded-lg border-1 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`;
  const resultHead = `w-full p-4 font-bold ${isDarkMode ? 'bg-slate-800 text-slate-50' : 'bg-slate-200 text-slate-600'}`;
  const resultField = `w-full p-4 min-h-40`;

  return (
    <section className={container}>
      <div className={queryWrap}>
        <div className={queryHead}>
          <span>SQL 코드 작성</span>
          <div className="flex gap-2">
            <button className={editorBtn} onClick="">
              <CodeCopy width={24} height={24} className={editorIcon} />
              코드 복사
            </button>
            <button className={editorBtn} onClick="">
              <CodeReset width={24} height={24} className={editorIcon} />
              코드 초기화
            </button>
          </div>
        </div>
        <ResizableBox
          width={1200}
          height={editorHeight}
          minConstraints={[600, 100]}
          maxConstraints={[1200, 400]}
          axis="y"
          onResize={(e, data) => setEditorHeight(data.size.height)}
        >
          <div ref={editorElement} className="w-full"></div>
        </ResizableBox>
        <button onClick={executeQuery} className={queryBtn}>
          <span>코드 실행(Ctrl + Enter)</span>
        </button>
      </div>
      <ResizableBox width={1200} height={600 - editorHeight} minConstraints={[600, 100]} maxConstraints={[1200, 600]} axis="y">
        <div className={resultWrap} style={{ height: 600 - editorHeight }}>
          <div className={resultHead}>
            <span>쿼리 실행 결과</span>
          </div>
          <div className={resultField}>
            {renderTable(queryResult)}
          </div>
        </div>
      </ResizableBox>
    </section>
  );
};

export default SQLEditor;
