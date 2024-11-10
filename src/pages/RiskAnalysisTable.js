// RiskAnalysisTable.js

import React from "react";

const RiskAnalysisTable = ({
  sortedFilteredRiskAnalysis,
  sortConfig,
  requestSort
}) => {
  return (
    <div className="mt-5 overflow-x-auto">
      <h3 className="text-xl font-bold">Elementos Filtrados:</h3>
      <table className="min-w-full border border-gray-300 text-sm">
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>
        <thead>
          <tr className="bg-gray-100">
            {["AnalysisItemID", "Begin", "End", "RiskValue", "LoFValue", "CoFValue", "Name", "Pipeline"].map((column) => (
              <th key={column} className="border border-gray-300 px-2 py-1">
                <button onClick={() => requestSort(column)} className="text-xs lg:text-sm">
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
              <td className="border border-gray-300 px-2 py-1">{item.AnalysisItemID}</td>
              <td className="border border-gray-300 px-2 py-1">{item.Begin}</td>
              <td className="border border-gray-300 px-2 py-1">{item.End}</td>
              <td className="border border-gray-300 px-2 py-1">{item.RiskValue}</td>
              <td className="border border-gray-300 px-2 py-1">{item.LoFValue}</td>
              <td className="border border-gray-300 px-2 py-1">{item.CoFValue}</td>
              <td className="border border-gray-300 px-2 py-1">{item.Name}</td>
              <td className="border border-gray-300 px-2 py-1">{item.Pipeline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskAnalysisTable;
