import React, { useState } from "react";

const PipelineDetail = ({
  riskMatrixData,
  onBack,
  riskAnalysis,
  riskMatrix,
}) => {
  const [allSegmentsVisible, setAllSegmentsVisible] = useState(true);
  const [riskSegmentsVisible, setRiskSegmentsVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const totalStart = Math.min(...riskAnalysis.map((item) => item.Begin));
  const totalEnd = Math.max(...riskAnalysis.map((item) => item.End));
  const totalLength = totalEnd - totalStart;

  const [hoveredSection, setHoveredSection] = useState(null);

  console.log("en pipeline detail riskAnalysis", riskAnalysis);
  console.log("Metraje total del ducto:", totalLength);

  const toggleAllSegmentsVisibility = () => {
    setAllSegmentsVisible((prev) => !prev);
    setRiskSegmentsVisible(false);
    setSelectedPosition("");
  };

  const toggleRiskSegmentsVisibility = () => {
    setRiskSegmentsVisible((prev) => !prev);
    setSelectedPosition("");
    setAllSegmentsVisible(false);
  };

  const handlePositionChange = (event) => {
    const selected = event.target.value;
    setSelectedPosition(selected);
  };

  const getItemsForSelectedPosition = () => {
    const selectedData = riskMatrix.riskMatrix.find(
      (position) => position.position === selectedPosition
    );
    return selectedData ? selectedData.items : [];
  };

  const filteredRiskAnalysis = () => {
    const items = getItemsForSelectedPosition();
    const ranges = items.map((item) => ({ Begin: item.Begin, End: item.End }));
    return riskAnalysis.filter((segment) =>
      ranges.some(
        (range) => segment.Begin >= range.Begin && segment.End <= range.End
      )
    );
  };

  const segmentsToDisplay =
    riskSegmentsVisible && selectedPosition
      ? filteredRiskAnalysis()
      : allSegmentsVisible
      ? riskAnalysis
      : [];

  const positionColors = {
    "Position 1-1": "orange",
    "Position 1-2": "orange",
    "Position 1-3": "red",
    "Position 1-4": "red",
    "Position 1-5": "darkred",
    "Position 1-6": "darkred",
    "Position 1-7": "darkred",
    "Position 2-1": "yellow",
    "Position 2-2": "orange",
    "Position 2-3": "orange",
    "Position 2-4": "red",
    "Position 2-5": "red",
    "Position 2-6": "darkred",
    "Position 3-1": "yellow",
    "Position 3-2": "yellow",
    "Position 3-3": "orange",
    "Position 3-4": "orange",
    "Position 3-5": "red",
    "Position 3-6": "red",
    "Position 4-1": "yellow",
    "Position 4-2": "yellow",
    "Position 4-3": "yellow",
    "Position 4-4": "orange",
    "Position 4-5": "orange",
    "Position 4-6": "red",
    "Position 5-1": "green",
    "Position 5-2": "yellow",
    "Position 5-3": "yellow",
    "Position 5-4": "yellow",
    "Position 5-5": "orange",
    "Position 5-6": "orange",
    "Position 5-7": "red",
    "Position 6-1": "green",
    "Position 6-2": "green",
    "Position 6-3": "yellow",
    "Position 6-4": "yellow",
    "Position 6-5": "yellow",
    "Position 6-6": "orange",
    "Position 7-1": "green",
    "Position 7-2": "green",
    "Position 7-3": "green",
    "Position 7-4": "yellow",
    "Position 7-5": "yellow",
    "Position 7-6": "yellow",
    "Position 7-7": "orange",
  };

  // Nueva función para obtener la cantidad de riesgos por posición
  const getRiskCountForPositions = () => {
    return riskMatrix.riskMatrix.reduce((acc, curr) => {
      acc[curr.position] = curr.items.length; // Cuenta los elementos en 'items'
      return acc;
    }, {});
  };

  const riskCount = getRiskCountForPositions();

  // Función para manejar la ordenación
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Función para ordenar los elementos filtrados
  const sortedFilteredRiskAnalysis = () => {
    let sortableItems = filteredRiskAnalysis();
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  };

  return (
    <div className="pipeline-detail-container mt-5">
      <h2 className="text-2xl font-bold">Detalle del Ducto</h2>
      <p className="text-gray-700">
        Metraje total del ducto: {totalLength.toFixed(2)} metros
      </p>

      <button
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onBack}
      >
        Volver a la Matriz
      </button>

      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        onClick={toggleAllSegmentsVisibility}
      >
        {allSegmentsVisible
          ? "Ocultar todos los segmentos"
          : "Mostrar todos los segmentos"}
      </button>

      <button
        className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded"
        onClick={toggleRiskSegmentsVisibility}
      >
        {riskSegmentsVisible
          ? "Ocultar segmentos por riesgo"
          : "Mostrar segmentos por riesgo"}
      </button>

      <svg
        width="100%"
        height="150"
        viewBox="0 0 1040 150"
        className="pipeline-svg mt-5"
      >
        <defs>
          <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="5%"
              style={{ stopColor: "#e0e0e0", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#b0b0b0", stopOpacity: 1 }}
            />
            <stop
              offset="95%"
              style={{ stopColor: "#5e5e5e", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <rect
          x="20"
          y="60"
          width="1000"
          height="40"
          fill="url(#pipeGradient)"
          stroke="#333"
          strokeWidth="2"
        />

        <rect
          x="0"
          y="40"
          width="20"
          height="80"
          fill="url(#pipeGradient)"
          stroke="#333"
          strokeWidth="2"
        />
        <rect
          x="1020"
          y="40"
          width="20"
          height="80"
          fill="url(#pipeGradient)"
          stroke="#333"
          strokeWidth="2"
        />
         {/* Indicaciones de inicio y final */}
         <text x="00" y="140" fontSize="12" fill="#333" fontWeight="bold">Inicio: {totalStart.toFixed(2)} m</text>
<text x="1020" y="140" fontSize="12" fill="#333" fontWeight="bold">Final: {totalEnd.toFixed(2)} m</text>

        {segmentsToDisplay.map((item, index) => {
          const startX = (item.Begin - totalStart) * (1000 / totalLength) + 20;
          const endX = (item.End - totalStart) * (1000 / totalLength) + 20;
          const isHovered = hoveredSection === index;

          return (
            <g key={index}>
              <line
                x1={endX}
                y1="60"
                x2={endX}
                y2="100"
                stroke="#333"
                strokeWidth="2"
                onMouseEnter={() => setHoveredSection(index)}
                onMouseLeave={() => setHoveredSection(null)}
              />
              {isHovered && (
                <text x={endX + 10} y="45" fontSize="12" fill="#333">
                  {`${item.End.toFixed(2)} m Segmento ${index + 1}`}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div className="mt-5">
        <label htmlFor="positionSelect" className="block mb-2">
          Selecciona la posición:
        </label>
        <select
  id="positionSelect"
  value={selectedPosition}
  onChange={handlePositionChange}
  className="block w-1/2 p-2 border border-gray-300 rounded" // Cambia w-full a w-1/2 o un ancho deseado
>
          <option value="">-- Seleccionar posición --</option>
          {Object.keys(positionColors).map((position) => {
            const [posX, posY] = position.split("-");
            const cofLabels = [
              "Extreme",
              "Critical",
              "Severe",
              "Serious",
              "Moderate",
              "Minor",
              "Insignificant",
            ];
            const fofLabels = [
              "Almost Impossible",
              "Rare",
              "Possible",
              "Likely",
              "Very Likely",
              "Highly Likely",
              "Almost Certain",
            ];

            const positionText = `Position ${position} (${
              riskCount[position] || 0
            }) - FoF ${fofLabels[posY - 1]} / CoF ${cofLabels[posX - 1]}`;

            return (
              <option
                key={position}
                value={position}
                style={{
                  backgroundColor: positionColors[position],
                  color: "#fff",
                }} // Aplicar color de fondo
              >
                {positionText}
              </option>
            );
          })}
        </select>{" "}
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-bold">Elementos Filtrados:</h3>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">
                <button onClick={() => requestSort("AnalysisItemID")}>
                  AnalysisItemID{" "}
                  {sortConfig.key === "AnalysisItemID"
                    ? sortConfig.direction === "ascending"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </button>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                <button onClick={() => requestSort("Begin")}>
                  Begin{" "}
                  {sortConfig.key === "Begin"
                    ? sortConfig.direction === "ascending"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </button>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                <button onClick={() => requestSort("End")}>
                  End{" "}
                  {sortConfig.key === "End"
                    ? sortConfig.direction === "ascending"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </button>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                <button onClick={() => requestSort("RiskValue")}>
                  RiskValue{" "}
                  {sortConfig.key === "RiskValue"
                    ? sortConfig.direction === "ascending"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </button>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                <button onClick={() => requestSort("LoFValue")}>
                  LoFValue{" "}
                  {sortConfig.key === "LoFValue"
                    ? sortConfig.direction === "ascending"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </button>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                <button onClick={() => requestSort("CoFValue")}>
                  CoFValue{" "}
                  {sortConfig.key === "CoFValue"
                    ? sortConfig.direction === "ascending"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </button>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                <button onClick={() => requestSort("Name")}>
                  Name{" "}
                  {sortConfig.key === "Name"
                    ? sortConfig.direction === "ascending"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </button>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                <button onClick={() => requestSort("Pipeline")}>
                  Pipeline{" "}
                  {sortConfig.key === "Pipeline"
                    ? sortConfig.direction === "ascending"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedFilteredRiskAnalysis().map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {item.AnalysisItemID}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.Begin}
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.End}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.RiskValue}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.LoFValue}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.CoFValue}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.Name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.Pipeline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PipelineDetail;
