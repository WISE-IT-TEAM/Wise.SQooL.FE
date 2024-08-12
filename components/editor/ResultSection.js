import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

const ResultSection = ({ queryResult, minHeight }) => {
  const { isDarkMode } = useDarkMode();

  const container = `w-full flex flex-col rounded-lg border ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const header = `w-full p-4 flex justify-between items-center font-bold rounded-t-lg ${isDarkMode ? "bg-slate-800 text-slate-50" : "bg-slate-200 text-slate-600"}`;
  const resultArea = `w-full h-full p-4 flex-grow overflow-auto`;

  const tableContainer = `min-w-full shadow-sm ${isDarkMode ? "bg-slate-900" : "bg-white"}`;
  const tableHeader = `py-3 px-5 border-b ${isDarkMode ? "bg-slate-800 text-slate-200" : "bg-gray-100 text-gray-700"} text-left font-semibold`;
  const tableCell = `py-3 px-5 border-b ${isDarkMode ? "text-slate-300 border-slate-700" : "text-gray-600 border-gray-200"}`;

  const renderTable = (data) => {
    const { columns, rows } = data;

    if (!columns || !rows || rows.length === 0) {
      return null;
    }

    return (
      <div className="overflow-x-auto">
        <table className={tableContainer}>
          <thead>
            <tr>
              {columns.map((header, index) => (
                <th key={index} className={tableHeader}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? `${isDarkMode ? "bg-slate-800" : "bg-gray-50"}` : `${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={tableCell}>
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

  return (
    <section className={container} style={{ minHeight }}>
      <div className={header}>
        <span>쿼리 실행 결과</span>
      </div>
      <div className={resultArea}>
        {!queryResult || (!queryResult.message && !queryResult.error && (!queryResult.columns || queryResult.columns.length === 0)) ? (
          <div className="text-left text-lg font-semibold text-gray-500">
            코드를 실행하면 결과가 표시됩니다.
          </div>
        ) : (
          <>
            {queryResult.message && (
              <div className={`mb-4 text-left text-lg font-semibold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                {queryResult.message}
              </div>
            )}
            {queryResult.error ? (
              <div className={`text-red-600 text-left text-lg font-semibold ${isDarkMode ? "text-red-400" : "text-red-600"}`}>
                {queryResult.error}
              </div>
            ) : (
              renderTable(queryResult)
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ResultSection;
