import React from "react";

const PipelineBrief = ({ riskAnalysis, ductoName, analysisLevel, totalLength }) => {
  const totalSegments = riskAnalysis.length;

  // Contar tramos únicos si es un ducto
  const uniqueTramos = [...new Set(riskAnalysis.map((item) => item.TramoName))];
  const totalTramos = uniqueTramos.length;

  // Calcular riesgo promedio
  const averageRiskValue = (
    riskAnalysis.reduce((sum, item) => sum + item.RiskValue, 0) / totalSegments
  ).toFixed(2);

  // Segmento de mayor riesgo
  const maxRiskSegment = riskAnalysis.reduce((max, item) =>
    item.RiskValue > max.RiskValue ? item : max
  );

  return (
    <div className="border p-4 rounded shadow-lg bg-white w-[500px]">
      <h4 className="text-lg font-semibold text-gray-700 mb-2">
        Resumen del {analysisLevel === "ducto" ? "Ducto" : "Tramo"}
      </h4>

      {/* Mostrar solo ductoName si es ducto; caso contrario, mostrar TramoName y Name */}
      <p className="text-gray-800 font-bold">
        {analysisLevel === "ducto"
          ? ductoName
          : `${maxRiskSegment.TramoName} - ${maxRiskSegment.Name}`}
      </p>

      {analysisLevel === "ducto" && (
        <div className="mt-3">
          <p className="text-sm text-gray-600">Cantidad de tramos:</p>
          <p className="text-md text-gray-800 font-semibold">{totalTramos}</p>
        </div>
      )}

      <div className="mt-3">
        <p className="text-sm text-gray-600">Total de segmentos:</p>
        <p className="text-md text-gray-800 font-semibold">{totalSegments}</p>
      </div>

      <div className="mt-3">
        <p className="text-sm text-gray-600">
          {analysisLevel === "ducto" ? "Metraje total del ducto:" : "Metraje total del tramo:"}
        </p>
        <p className="text-md text-gray-800 font-semibold">
          {totalLength.toFixed(2)} metros
        </p>
      </div>

    </div>
  );
};

export default PipelineBrief;
