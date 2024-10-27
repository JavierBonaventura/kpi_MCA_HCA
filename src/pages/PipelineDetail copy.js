import React, { useState } from "react";

const PipelineDetail = ({ riskMatrix, onBack, riskAnalysis }) => {
 
  // Calcula el metraje total del ducto
  const totalStart = Math.min(...riskAnalysis.map(item => item.Begin));
  const totalEnd = Math.max(...riskAnalysis.map(item => item.End));
  const totalLength = totalEnd - totalStart;

  // Estado para manejar el tramo seleccionado
  const [hoveredSection, setHoveredSection] = useState(null);
  // Estado para manejar la visibilidad de los segmentos
  const [showSegments, setShowSegments] = useState(true); // Por defecto, mostrar segmentos
  // Estado para almacenar la posición seleccionada
  const [selectedPosition, setSelectedPosition] = useState(""); // Inicialmente, ninguna posición seleccionada

  console.log("Metraje total del ducto:", totalLength);

  return (
    <div className="pipeline-detail-container mt-5">
      <h2 className="text-2xl font-bold">Detalle del Ducto</h2>
      <p className="text-gray-700">Metraje total del ducto: {totalLength.toFixed(2)} metros</p>

      {/* Botón para mostrar/ocultar segmentos */}
      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowSegments(!showSegments)}
      >
        {showSegments ? "Ocultar Segmentos" : "Mostrar Segmentos"}
      </button>

      {/* Select para elegir la posición */}
      <div className="mt-3">
        <label htmlFor="positions" className="mr-2">Selecciona una posición:</label>
        <select
          id="positions"
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded"
        >
          <option value="">-- Seleccionar Posición --</option>
          {riskMatrix && riskMatrix.riskMatrix && riskMatrix.riskMatrix.map((position) => (
            <option key={position.position} value={position.position}>
              {position.position}
            </option>
          ))}
        </select>
      </div>

       {/* Contenedor SVG para el ducto */}
       <svg
        width="100%"
        height="150"  // Aumentar la altura para más espacio
        viewBox="0 0 1040 150" // Aumentar el viewBox
        className="pipeline-svg mt-5"
      >
        {/* Definición de degradado para el ducto */}
        <defs>
          <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="5%" style={{ stopColor: "#e0e0e0", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#b0b0b0", stopOpacity: 1 }} />
            <stop offset="95%" style={{ stopColor: "#5e5e5e", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Ducto continuo */}
        <rect
          x="0" // Cambiar x a 0 para que el ducto ocupe todo el ancho
          y="60" // Ajustar la posición vertical del ducto
          width="1040" // Ajustar el ancho del ducto
          height="40"
          fill="url(#pipeGradient)"
          stroke="#333"
          strokeWidth="2"
        />

        {/* Conectores del ducto */}
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

        {/* Divisiones del ducto (solo si showSegments es true) */}
        {showSegments && riskAnalysis.map((item, index) => {
          const startX = (item.Begin - totalStart) * (1000 / totalLength); // Mapeo de Begin
          const endX = (item.End - totalStart) * (1000 / totalLength); // Mapeo de End
          const isHovered = hoveredSection === index; // Estado de hover para el tramo actual

          return (
            <g key={index}>
              {/* Línea para marcar el tramo */}
              <line
                x1={endX}
                y1="60" // Alinear al ducto
                x2={endX}
                y2="100" // Alinear al ducto
                stroke="#333"
                strokeWidth="2"
                onMouseEnter={() => setHoveredSection(index)}
                onMouseLeave={() => setHoveredSection(null)}
              />
              {isHovered && (
                <text
                  x={endX + 10} // Espacio adicional para evitar recorte
                  y="45" // Ajustar la posición vertical del texto
                  fontSize="12"
                  fill="#333"
                >
                  {`${item.End.toFixed(2)} m Segmento ${index + 1}`} {/* Mostrar el valor total del End y el número de segmento */}
                </text>
              )}
            </g>
          );
        })}

        {/* Etiquetas para el inicio y el final del ducto */}
        <text x="10" y="35" fontSize="14" fill="#333">
          Inicio: {totalStart.toFixed(2)} m
        </text>
        <text x="1020" y="35" fontSize="14" fill="#333" textAnchor="end">
          Fin: {totalEnd.toFixed(2)} m
        </text>
      </svg>

      {/* Botón para regresar */}
      <button
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onBack}
      >
        Regresar a la Matriz de Riesgo
      </button>
    </div>
  );
};

export default PipelineDetail;
