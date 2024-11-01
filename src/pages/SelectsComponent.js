// SelectsComponent.js
import React from "react";

const SelectsComponent = ({
  // Estado del valor seleccionado en el primer selector (evaluación).
  // selectedAssessment representa la evaluación actualmente elegida por el usuario.
  selectedAssessment,

  // Estado del valor seleccionado en el segundo selector (ducto).
  // selectedDucto representa el ducto actualmente elegido por el usuario.
  selectedDucto,

  // Estado del valor seleccionado en el tercer selector (tramo).
  // selectedTramo representa el tramo actualmente elegido por el usuario.
  selectedTramo,

  // Array de evaluaciones aprobadas disponibles para seleccionar.
  // approvedAssessments contiene un listado de objetos, cada uno con un nombre de evaluación.
  approvedAssessments,

  // Array de ductos filtrados para mostrar en el segundo selector.
  // filteredDuctos incluye objetos con ductos disponibles en función de las selecciones previas.
  filteredDuctos,

  // Array de tramos filtrados para el tercer selector.
  // filteredTramos contiene los tramos disponibles en función de la selección del ducto.
  filteredTramos,

  // Función para manejar cambios en el selector de evaluación.
  // Se ejecuta cuando el usuario selecciona una evaluación diferente.
  handleAssessmentChange,

  // Función para manejar cambios en el selector de ducto.
  // Se ejecuta cuando el usuario selecciona un ducto diferente.
  handleDuctoChange,

  // Función para manejar cambios en el selector de tramo.
  // Se ejecuta cuando el usuario selecciona un tramo diferente.
  handleTramoChange,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-5 justify-between">
      {/* Selector de Evaluación */}
      <div className="flex flex-col w-full lg:w-1/3">
        <label
          htmlFor="assessment-select"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Seleccionar Evaluación:
        </label>
        <select
          id="assessment-select"
          className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent"
          onChange={(e) => handleAssessmentChange(e.target.value)}
          value={selectedAssessment}
        >
          <option value="">Selecciona un estudio</option>
          {approvedAssessments.map((assessment) => (
            <option
              key={assessment.Assessment_Name}
              value={assessment.Assessment_Name}
            >
              {assessment.Assessment_Name}
            </option>
          ))}
        </select>
      </div>

      {/* Selector de Ducto */}
      <div className="flex flex-col w-full lg:w-1/3">
        <label
          htmlFor="pipeline-select"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Seleccionar Ducto:
        </label>
        <select
          id="pipeline-select"
          className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent"
          onChange={(e) => handleDuctoChange(e.target.value)}
          value={selectedDucto}
        >
          <option value="">Selecciona un ducto</option>
          {selectedAssessment
            ? filteredDuctos.map((ducto) => (
                <option key={ducto.TB_DuctoID} value={ducto.DuctoName}>
                  {ducto.DuctoName}
                </option>
              ))
            : null}
        </select>
      </div>

      {/* Selector de Tramo */}
      <div className="flex flex-col w-full lg:w-1/3">
        <label
          htmlFor="section-select"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Seleccionar Tramo:
        </label>
        <select
          id="section-select"
          className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent"
          onChange={(e) => handleTramoChange(e.target.value)}
          value={selectedTramo}
        >
          <option value="">Selecciona un tramo</option>
          {selectedAssessment
            ? filteredTramos.map((tramo) => (
                <option key={tramo.AnalysisItemID} value={tramo.Name}>
                  {tramo.Name}
                </option>
              ))
            : null}
        </select>
      </div>
    </div>
  );
};

export default SelectsComponent;
