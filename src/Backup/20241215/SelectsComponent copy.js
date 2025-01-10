import React, { useEffect, useState } from "react";
import { fetchPipelinesByAssessment } from "../../services/apiService"; // Asegúrate de importar la función

const SelectsComponent = ({
  selectedAssessment,
  selectedDucto,
  selectedTramo,
  approvedAssessments,
  filteredDuctos,
  filteredTramos,
  handleAssessmentChange,
  handleDuctoChange,
  handleTramoChange,
}) => {
  const [todosLosPipelines, setTodosLosPipelines] = useState({});

  // Función para agregar el nombre del ducto a los pipelines
  const agregarNombreDucto = (todosLosPipelines, filteredDuctos) => {
    const pipelinesConNombreDucto = { ...todosLosPipelines };

    // Iteramos sobre las evaluaciones en todosLosPipelines
    Object.keys(pipelinesConNombreDucto).forEach((assessmentName) => {
      const pipelines = pipelinesConNombreDucto[assessmentName];

      // Iteramos sobre cada pipeline
      pipelines.forEach((pipeline) => {
        // Buscamos el ducto correspondiente en filteredDuctos usando el campo "Pipeline"
        const ducto = filteredDuctos.find(
          (ducto) => ducto.Pipeline === pipeline.Pipeline
        );
        if (ducto) {
          // Si encontramos el ducto, agregamos su nombre
          pipeline.DuctoName = ducto.DuctoName;
        }
      });
    });

    return pipelinesConNombreDucto;
  };

  // useEffect para obtener los ductos de cada evaluación
  useEffect(() => {
    const fetchAllPipelines = async () => {
      const pipelines = {};

      // Recorremos todas las evaluaciones aprobadas y obtenemos los ductos
      for (const assessment of approvedAssessments) {
        try {
          const ducts = await fetchPipelinesByAssessment(
            assessment.Assessment_Name
          );
          pipelines[assessment.Assessment_Name] = ducts; // Guardamos los ductos para esta evaluación
        } catch (error) {
          console.error(
            "Error fetching pipelines for assessment:",
            assessment.Assessment_Name,
            error
          );
        }
      }

      // Actualizamos el estado con los ductos obtenidos
      const pipelinesConNombreDucto = agregarNombreDucto(
        pipelines,
        filteredDuctos
      );
      setTodosLosPipelines(pipelinesConNombreDucto);
    };

    if (approvedAssessments.length > 0) {
      fetchAllPipelines(); // Solo hacemos la petición si hay evaluaciones aprobadas
    }
  }, [approvedAssessments, filteredDuctos]);

  // Log de la variable todosLosPipelines (para debug)
  console.log(todosLosPipelines);

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
            ? [
                ...new Set(
                  todosLosPipelines[selectedAssessment]?.map(
                    (ducto) => ducto.DuctoName
                  )
                ),
              ].map((ductoName, index) => (
                <option key={index} value={ductoName}>
                  {ductoName}
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
