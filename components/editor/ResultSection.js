// component/editor/ResultSection
import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

const ResultSection = ({ queryResult, minHeight }) => {
  const { isDarkMode } = useDarkMode();

  const queryWrap = `w-full flex flex-col rounded-lg border-1 flex-grow ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const queryHead = `w-full p-4 flex justify-between items-center font-bold rounded-tl-lg rounded-tr-lg ${isDarkMode ? "bg-slate-800 text-slate-50" : "bg-slate-200 text-slate-600"}`;
  const resultField = `w-full p-4 min-h-40`;

  const renderTable = (data) => {
    const { columns, rows } = data;

    if (rows.length === 0) {
      return <div>코드를 실행하면 결과가 표시됩니다</div>;
    }

    return (
      <div className="flex justify-center">
        <table className="min-w-full bg-white text-center">
          <thead>
            <tr>
              {columns.map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-4 border-b border-gray-200 bg-gray-100"
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
                    className="py-2 px-4 border-b border-gray-200"
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
        <span>쿼리 실행 결과</span>
      </div>
      <div className={resultField}>{renderTable(queryResult)}</div>
    </section>
  );
};

export default ResultSection;
