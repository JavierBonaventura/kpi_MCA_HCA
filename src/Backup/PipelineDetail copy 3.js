import React, { useState, useEffect } from "react";
import RiskAnalysisTable from "../pages/RiskAnalysisTable";

const PipelineDetail = ({
  onBack,
  riskAnalysis,
  riskMatrix,
  selectedCellFromMatrix,
  analysisLevel,
  ductoName,
}) => {
  const [allSegmentsVisible, setAllSegmentsVisible] = useState(false);
  const [riskSegmentsVisible, setRiskSegmentsVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectBackgroundColor, setSelectBackgroundColor] = useState(""); // Nuevo estado
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const isPositionValid = (position) => {
    // Comprueba si el formato es "Position X-Y"
    const regex = /^Position \d+-\d+$/;
    return regex.test(position);
  };

  useEffect(() => {
    if (selectedCellFromMatrix) {
      const { row, col } = selectedCellFromMatrix;
      const position = `Position ${row + 1}-${col + 1}`; // Cambia el orden aquí
      setSelectedPosition(position);
      setSelectBackgroundColor(positionColors[position] || "");
      setRiskSegmentsVisible(true);
    }
  }, [selectedCellFromMatrix]);

  //calculo del metraje total cuando es un ducto formado por varios tramos

  const totalStart = Math.min(...riskAnalysis.map((item) => item.Begin));
  // Paso 1: Crear un mapa para almacenar el máximo `End` de cada `AnalysisItemID`
  const maxEndPerAnalysisItem = {};

  riskAnalysis.forEach((item) => {
    // Si el `AnalysisItemID` aún no existe en el mapa o el `End` actual es mayor, actualizarlo
    if (
      !maxEndPerAnalysisItem[item.AnalysisItemID] ||
      item.End > maxEndPerAnalysisItem[item.AnalysisItemID]
    ) {
      maxEndPerAnalysisItem[item.AnalysisItemID] = item.End;
    }
  });

  // Paso 2: Sumar los valores máximos de `End` de cada `AnalysisItemID`
  const totalEnd = Object.values(maxEndPerAnalysisItem).reduce(
    (acc, endValue) => acc + endValue,
    0
  );

  //console.log("riskAnalysis", riskAnalysis)

  const totalLength = totalEnd - totalStart;
  //console.log("totalEnd", totalEnd);

  const [hoveredSection, setHoveredSection] = useState(null);

  const toggleAllSegmentsVisibility = () => {
    setAllSegmentsVisible((prev) => !prev);
    setRiskSegmentsVisible(false);
    setSelectedPosition("");
  };

  const toggleRiskSegmentsVisibility = () => {
    setRiskSegmentsVisible((prev) => !prev);

    setAllSegmentsVisible(false);
  };

  const handlePositionChange = (event) => {
    const selected = event.target.value;
    setSelectedPosition(selected);
    setSelectBackgroundColor(positionColors[selected] || ""); // Actualiza el color de fondo
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
      <h2 className="text-2xl font-bold text-gray-500">
        Detalle del {analysisLevel === "tramo" ? "Tramo" : "Ducto"}:{" "}
        <span className="text-black">
          {analysisLevel === "tramo" ? riskAnalysis[0]?.Name : ductoName}
        </span>
      </h2>
      <p className="text-gray-700">
        Metraje total del {analysisLevel === "tramo" ? "tramo" : "ducto"}:{" "}
        {totalLength.toFixed(2)} metros
      </p>
      <div className="flex flex-col mt-5 w-auto max-w-md mx-auto ml-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
          onClick={onBack}
        >
          Volver a la Matriz
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={toggleAllSegmentsVisibility}
        >
          {allSegmentsVisible
            ? "Ocultar todos los segmentos"
            : "Mostrar todos los segmentos"}
        </button>
        <button
          className={`mt-2 px-4 py-2 bg-yellow-500 text-white rounded ${
            !isPositionValid(selectedPosition) ? "hidden" : ""
          }`}
          onClick={toggleRiskSegmentsVisibility}
        >
          {riskSegmentsVisible
            ? "Ocultar segmentos por riesgo"
            : "Mostrar segmentos por riesgo"}
        </button>
      </div>
      <svg
        width="100%"
        height="150"
        viewBox="0 0 1240 150"
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

        {/* Añadir el nombre del tramo */}

        <text
          x="520"
          y="30"
          fontSize="20"
          fill="#333"
          fontWeight="bold"
          textAnchor="middle"
        >
          {analysisLevel === "tramo" ? riskAnalysis[0]?.Name : ductoName}{" "}
        </text>

        <rect
          x="20"
          y="60"
          width="1200"
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
          x="1220"
          y="40"
          width="20"
          height="80"
          fill="url(#pipeGradient)"
          stroke="#333"
          strokeWidth="2"
        />

        {/* Indicaciones de inicio y final */}
        <text x="0" y="140" fontSize="12" fill="#333" fontWeight="bold">
          Inicio: {totalStart.toFixed(2)} m
        </text>
        <text x="1220" y="140" fontSize="12" fill="#333" fontWeight="bold">
          Final: {totalEnd.toFixed(2)} m
        </text>

        {segmentsToDisplay.map((item, index) => {
          const startX = (item.Begin - totalStart) * (1200 / totalLength) + 20;
          const endX = (item.End - totalStart) * (1200 / totalLength) + 20;

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
              {/* Agrega el triángulo de color sobre el tramo */}
              <polygon
                points={`${endX - 10},50 ${endX + 10},50 ${endX},60`}
                fill={positionColors[selectedPosition] || "gray"} // Color según el riesgo
              />
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
          style={{ backgroundColor: selectBackgroundColor }} // Cambia el color de fondo
          className="block w-1/2 p-2 border border-gray-300 rounded"
        >
          <option value="">-- Seleccionar posición --</option>
          {Object.keys(positionColors).map((position) => {
            // Extraer solo la parte numérica de la posición
            const positionNumber = position.replace("Position ", ""); // Remueve el prefijo "Position "
            const [posX, posY] = positionNumber
              .split("-")
              .map((n) => parseInt(n, 10)); // Convertir a enteros

            // Define las etiquetas de CoF y FoF
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

            // Asegúrate de que posX y posY están en el rango adecuado
            const cofIndex = posX - 1; // CoF index should be adjusted for array access
            const fofIndex = posY - 1; // FoF index should be adjusted for array access

            // Validar si los índices son válidos
            const coFLabel =
              cofIndex >= 0 && cofIndex < cofLabels.length
                ? cofLabels[cofIndex]
                : "Invalid CoF";
            const foFLabel =
              fofIndex >= 0 && fofIndex < fofLabels.length
                ? fofLabels[fofIndex]
                : "Invalid FoF";

            const positionText = `Position ${position} (${
              riskCount[position] || 0
            }) - FoF ${foFLabel} / CoF ${coFLabel}`;

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
        </select>
      </div>
      <RiskAnalysisTable
        sortedFilteredRiskAnalysis={sortedFilteredRiskAnalysis}
        sortConfig={sortConfig}
        requestSort={requestSort}
      />{" "}
    </div>
  );
};

export default PipelineDetail;
