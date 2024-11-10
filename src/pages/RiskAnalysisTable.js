// RiskAnalysisTable.js

import React from "react";

const RiskAnalysisTable = ({
  sortedFilteredRiskAnalysis,
  sortConfig,
  requestSort
}) => {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold">Elementos Filtrados:</h3>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {["AnalysisItemID", "Begin", "End", "RiskValue", "LoFValue", "CoFValue", "Name", "Pipeline"].map((column) => (
              <th key={column} className="border border-gray-300 px-4 py-2">
                <button onClick={() => requestSort(column)}>
                  {column}{" "}
                  {sortConfig.key === column
                    ? sortConfig.direction === "ascending"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedFilteredRiskAnalysis().map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{item.AnalysisItemID}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Begin}</td>
              <td className="border border-gray-300 px-4 py-2">{item.End}</td>
              <td className="border border-gray-300 px-4 py-2">{item.RiskValue}</td>
              <td className="border border-gray-300 px-4 py-2">{item.LoFValue}</td>
              <td className="border border-gray-300 px-4 py-2">{item.CoFValue}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Pipeline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskAnalysisTable;
