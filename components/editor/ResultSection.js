// component/editor/ResultSection.js
import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

const ResultSection = ({ queryResult, minHeight }) => {
  const { isDarkMode } = useDarkMode();

  const queryWrap = `w-full flex flex-col rounded-lg border-1 flex-grow ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const queryHead = `w-full p-4 flex justify-between items-center font-bold rounded-tl-lg rounded-tr-lg ${isDarkMode ? "bg-slate-800 text-slate-50" : "bg-slate-200 text-slate-600"}`;
  const resultField = `w-full h-full p-4 flex-grow overflow-auto`;
  const resultHead = `py-2 px-4 border-b ${isDarkMode ? "border-slate-800 text-slate-200" : "border-slate-200 text-slate-400"} `;
  const resultCell = `py-2 px-4 border-b ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;

  const renderTable = (data) => {
    const { columns, rows } = data;

    if (!columns || !rows || rows.length === 0) {
      return null;
    }

    return (
      <div className="flex justify-center">
        <table className="min-w-full bg-transparent text-center">
          <thead>
            <tr>
              {columns.map((header, index) => (
                <th
                  key={index}
                  className={resultHead}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={resultCell}
                  >
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
    <section className={queryWrap} style={{ minHeight }}>
      <div className={queryHead}>
        <span>코드 실행 결과</span>
      </div>
      <div className={resultField}>
        {!queryResult || (!queryResult.message && !queryResult.error && (!queryResult.columns || queryResult.columns.length === 0)) ? (
          <div className="mb-4 text-left font-semibold">코드를 실행하면 이곳에 결과가 나타납니다</div>
        ) : (
          <>
            {queryResult.message && (
              <div className="mb-4 text-left font-semibold">
                {queryResult.message}
              </div>
            )}
            {queryResult.error ? (
              <div className="text-red-600 text-left">{queryResult.error}</div>
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
