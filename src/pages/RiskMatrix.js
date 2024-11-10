import React, { useState, useMemo, useCallback } from "react";
import BarChart from "./BarChart";
import PipelineDetail from "./PipelineDetail";

const RiskMatrix = ({ matrixData, riskAnalysis, riskMatrix, analysisLevel, ductoName  }) => {
  const [showPipelineDetail, setShowPipelineDetail] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  // Usa useCallback para evitar la recreación de la función
  const handleToggleView = useCallback((cell) => {
    setSelectedCell(cell);
    setShowPipelineDetail((prev) => !prev);
  }, []);

  // Define los intervalos de CoF y FoF
  const intervalsCof = {
    Extreme: [1.5e9, Infinity],
    Critical: [1.5e8, 1.5e9],
    Severe: [1.5e6, 1.5e8],
    Serious: [5.0e5, 1.5e6],
    Moderate: [4.0e4, 5.0e5],
    Minor: [4.0e3, 4.0e4],
    Insignificant: [0, 4.0e3],
  };

  const intervalsFoF = {
    "Almost Impossible": [0, 1.0e-5],
    Rare: [1.0e-5, 1.0e-4],
    Possible: [1.0e-4, 1.0e-3],
    Likely: [1.0e-3, 1.0e-2],
    "Very Likely": [1.0e-2, 1.0e-1],
    "Highly Likely": [1.0e-1, 1.0],
    "Almost Certain": [1.0, Infinity],
  };

  // Memorizar columnSums usando useMemo
  const columnSums = useMemo(() => {
    const sums = Array(Object.keys(intervalsFoF).length).fill(0);
    // Recorre matrixData solo si hay datos
    if (matrixData.length) {
      matrixData.forEach((row) => {
        row.forEach((cell, colIndex) => {
          sums[colIndex] += cell; // Sumar el valor de la celda a la columna
        });
      });
    }
    return sums;
  }, [matrixData]); // Solo recalcula si matrixData cambia

  // Si showPipelineDetail es verdadero, retorna el componente PipelineDetail
  if (showPipelineDetail) {
    return (
      <PipelineDetail
        riskMatrix={riskMatrix}
        riskAnalysis={riskAnalysis}
        onBack={handleToggleView}
        selectedCellFromMatrix={selectedCell}
        analysisLevel={analysisLevel}
        ductoName={ductoName} 
      />
    );
  }

  // Resto del componente
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold">Matriz Riesgo</h1>
      <hr className="border-t border-gray-300 my-2" />
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">FoF/CoF</th>
            {Object.keys(intervalsFoF).map((foFCategory) => (
              <th key={foFCategory} className="border border-gray-300 p-2">
                {foFCategory}
                <br />
                ({formatScientific(intervalsFoF[foFCategory][0])} -{" "}
                {intervalsFoF[foFCategory][1] === Infinity
                  ? "∞"
                  : formatScientific(intervalsFoF[foFCategory][1])}
                )
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(intervalsCof).map((coFCategory, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border border-gray-300 p-2">
                {coFCategory}
                <br />
                ({formatScientific(intervalsCof[coFCategory][0])} -{" "}
                {intervalsCof[coFCategory][1] === Infinity
                  ? "∞"
                  : formatScientific(intervalsCof[coFCategory][1])}
                )
              </td>
              {matrixData[rowIndex].map((cell, colIndex) => {
                const cellClass = getCellClass(rowIndex, colIndex);
                return (
                  <td
                    key={colIndex}
                    className={`${cellClass} border border-gray-300 p-2 text-center text-white cursor-pointer`}
                    onClick={() => handleToggleView({ row: rowIndex, col: colIndex, value: cell })}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-bold">
            <td className="text-center">Total</td>
            {columnSums.map((sum, index) => (
              <td key={index} className="border border-gray-300 p-2 text-center">
                {sum}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>

      {/* Leyenda */}
      <div className="mt-5">
        <h2 className="text-xl font-semibold">Leyendas</h2>
        <div className="flex flex-row mt-2 flex-wrap">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-[#b21f2d] mr-2"></span> VH (Muy Alto)
          </div>
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-[#dc3545] mr-2"></span> H (Alto)
          </div>
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-[#fd7e14] mr-2"></span> M (Medio)
          </div>
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-[#ffc107] mr-2"></span> L (Bajo)
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#28a745] mr-2"></span> VL (Muy Bajo)
          </div>
        </div>
      </div>

      {/* Gráfico de Barras */}
      <BarChart columnSums={columnSums} />

      {/* Botón para abrir el detalle del ducto */}
      <button
  className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
  onClick={handleToggleView}
>
  {analysisLevel === "tramo" ? "Abrir detalle del Tramo" : "Abrir detalle del Ducto"}
</button>

    </div>
  );

  // Función para determinar la clase de cada celda
  function getCellClass(rowIndex, colIndex) {
    if (rowIndex === 0) {
      return colIndex <= 1
        ? "bg-[#fd7e14]"
        : colIndex <= 3
        ? "bg-[#dc3545]"
        : "bg-[#b21f2d]";
    }
    if (rowIndex === 1) {
      return colIndex === 0
        ? "bg-[#ffc107]"
        : colIndex <= 2
        ? "bg-[#fd7e14]"
        : colIndex <= 4
        ? "bg-[#dc3545]"
        : "bg-[#b21f2d]";
    }
    if (rowIndex === 2) {
      return colIndex <= 1
        ? "bg-[#ffc107]"
        : colIndex <= 3
        ? "bg-[#fd7e14]"
        : colIndex <= 5
        ? "bg-[#dc3545]"
        : "bg-[#b21f2d]";
    }
    if (rowIndex === 3) {
      return colIndex <= 2
        ? "bg-[#ffc107]"
        : colIndex <= 4
        ? "bg-[#fd7e14]"
        : "bg-[#dc3545]";
    }
    if (rowIndex === 4) {
      return colIndex === 0
        ? "bg-[#28a745]"
        : colIndex <= 3
        ? "bg-[#ffc107]"
        : colIndex <= 5
        ? "bg-[#fd7e14]"
        : "bg-[#dc3545]";
    }
    if (rowIndex === 5) {
      return colIndex <= 1
        ? "bg-[#28a745]"
        : colIndex <= 4
        ? "bg-[#ffc107]"
        : "bg-[#fd7e14]";
    }
    if (rowIndex === 6) {
      return colIndex <= 2
        ? "bg-[#28a745]"
        : colIndex <= 5
        ? "bg-[#ffc107]"
        : "bg-[#fd7e14]";
    }
    return "";
  }

  // Función para formatear números en notación científica
  function formatScientific(value) {
    return value.toExponential(1);
  }
};

export default RiskMatrix;
