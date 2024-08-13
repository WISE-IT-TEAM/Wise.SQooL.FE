// components/editor/ResultSection.js

import React, { useEffect, useMemo } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import useStore from '../../store/useStore';

/**
 * DataTable 컴포넌트
 * - SQL 쿼리 실행 결과를 테이블로 렌더링하는 컴포넌트입니다.
 */
const DataTable = ({ columns, rows, isDarkMode }) => {
  const tableContainerClass = `min-w-full shadow-sm ${isDarkMode ? "bg-slate-900" : "bg-white"}`;
  const tableHeaderClass = `py-3 px-5 border-b ${isDarkMode ? "bg-slate-800 text-slate-200" : "bg-gray-100 text-gray-700"} text-left font-semibold`;
  const tableCellClass = `py-3 px-5 border-b ${isDarkMode ? "text-slate-300 border-slate-700" : "text-gray-600 border-gray-200"}`;

  return (
    <div className="overflow-x-auto">
      <table className={tableContainerClass}>
        <thead>
          <tr>
            {columns.map((header, index) => (
              <th key={index} className={tableHeaderClass} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? `${isDarkMode ? "bg-slate-800" : "bg-gray-50"}` : `${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={tableCellClass}>
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

/**
 * ResultSection 컴포넌트
 * - SQL 쿼리 실행 결과를 렌더링합니다.
 * - 쿼리 실행 성공 또는 실패 시 토스트 메시지를 표시하고, 결과 테이블만 렌더링합니다.
 * 
 * @param {Object} queryResult - SQL 쿼리 실행 결과 객체 (columns, rows, message, error)
 * @param {number} minHeight - 섹션의 최소 높이 (픽셀 단위)
 */
const ResultSection = ({ queryResult, minHeight }) => {
  const { isDarkMode } = useDarkMode();
  const { showToast } = useStore();

  useEffect(() => {
    if (queryResult.error) {
      showToast(queryResult.error, 'error'); // 에러 발생 시 토스트 메시지 표시
    } else if (queryResult.message) {
      showToast(queryResult.message, 'success'); // 성공 메시지 표시
    }
  }, [queryResult, showToast]);

  const renderContent = useMemo(() => {
    if (!queryResult || (!queryResult.columns || queryResult.columns.length === 0)) {
      return (
        <div className="text-left text-lg font-semibold text-gray-500">
          코드를 실행하면 결과가 표시됩니다.
        </div>
      );
    }

    return (
      <DataTable columns={queryResult.columns} rows={queryResult.rows} isDarkMode={isDarkMode} />
    );
  }, [queryResult, isDarkMode]);

  const containerClass = `w-full flex flex-col rounded-lg border ${isDarkMode ? "border-slate-800" : "border-slate-200"} flex-grow`;
  const headerClass = `w-full p-4 flex justify-between items-center font-bold rounded-t-lg ${isDarkMode ? "bg-slate-800 text-slate-50" : "bg-slate-200 text-slate-600"}`;
  const resultAreaClass = `w-full h-full p-4 flex-grow overflow-auto`;

  return (
    <section className={containerClass} style={{ minHeight }}>
      <div className={headerClass}>
        <span>쿼리 실행 결과</span>
      </div>
      <div className={resultAreaClass}>
        {renderContent}
      </div>
    </section>
  );
};

export default ResultSection;
