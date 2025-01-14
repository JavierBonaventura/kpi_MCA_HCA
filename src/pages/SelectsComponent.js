import React, { useEffect, useState } from "react";
import { fetchPipelinesByAssessment } from "../services/apiService";
import Swal from "sweetalert2";

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
  currentPath,
  setSelectedDucto,
}) => {
  const [todosLosPipelines, setTodosLosPipelines] = useState({});
  const [datosRecibidos, setDatosRecibidos] = useState(false);
  const [isDuctoDisabled, setIsDuctoDisabled] = useState(false);

  // Función para agregar el nombre del ducto a los pipelines
  const agregarNombreDucto = (todosLosPipelines, filteredDuctos) => {
    const pipelinesConNombreDucto = { ...todosLosPipelines };

    Object.keys(pipelinesConNombreDucto).forEach((assessmentName) => {
      const pipelines = pipelinesConNombreDucto[assessmentName];

      pipelines.forEach((pipeline) => {
        const ducto = filteredDuctos.find(
          (ducto) => ducto.Pipeline === pipeline.Pipeline
        );
        if (ducto) {
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

      for (const assessment of approvedAssessments) {
        try {
          const ducts = await fetchPipelinesByAssessment(
            assessment.Assessment_Name
          );
          pipelines[assessment.Assessment_Name] = ducts;
        } catch (error) {
          console.error(
            "Error fetching pipelines for assessment:",
            assessment.Assessment_Name,
            error
          );
        }
      }

      const pipelinesConNombreDucto = agregarNombreDucto(
        pipelines,
        filteredDuctos
      );

      // Solo actualizamos el estado si los pipelines cambiaron
      setTodosLosPipelines((prevState) => {
        // Comparamos el nuevo objeto con el estado anterior
        const hasChanged =
          JSON.stringify(prevState) !== JSON.stringify(pipelinesConNombreDucto);
        return hasChanged ? pipelinesConNombreDucto : prevState;
      });
    };

    if (approvedAssessments.length > 0) {
      fetchAllPipelines(); // Solo hacemos la petición si hay evaluaciones aprobadas
    }
  }, [approvedAssessments, filteredDuctos]);

  // useEffect para ejecutar el console.log solo cuando todosLosPipelines cambie
  useEffect(() => {
    //    console.log("todosLosPipelines", todosLosPipelines);
  }, [todosLosPipelines]); // Este useEffect solo se ejecutará cuando todosLosPipelines cambie

  ///////////////////////////////////////////////////////////////

  let cleanedPath = "";
  if (currentPath) {
    cleanedPath = currentPath.startsWith("/")
      ? currentPath.slice(1)
      : currentPath;
  }

  useEffect(() => {
    if (!cleanedPath) return;
    if (
      Object.keys(todosLosPipelines).length > 0 &&
      !datosRecibidos &&
      Object.values(todosLosPipelines).some((pipeline) =>
        pipeline.some((item) => item.hasOwnProperty("DuctoName"))
      )
    ) {
      setDatosRecibidos(true);
      //  console.log("llegaron los datos");

      // Recorre todos los pipelines y busca un DuctoName que coincida con cleanedPath
      const found = Object.values(todosLosPipelines)
        .flat() // Aplana todos los elementos de los pipelines en un solo array
        .find(
          (item) =>
            item.hasOwnProperty("DuctoName") && item.DuctoName === cleanedPath
        );

      if (found) {
        console.log(
          `Se encontró el DuctoName que coincide con cleanedPath: ${found.DuctoName}`
        );
        setSelectedDucto(cleanedPath);
        setIsDuctoDisabled(true);
        // Aquí puedes agregar más lógica si es necesario.
      } else {
        console.log(
          `No se encontró ningún DuctoName que coincida con cleanedPath: ${cleanedPath}`
        );

        Swal.fire({
          icon: "warning",
          title: "Atención",
          html: `No se encontró el Ducto <b>${cleanedPath}</b> en ningún assessment`,
          confirmButtonText: "Entendido",
          customClass: {
            confirmButton: "swal-custom-button",
          },
        });
      }
    }
  }, [todosLosPipelines, datosRecibidos, cleanedPath]); // Agregar cleanedPath a las dependencias

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

          {selectedDucto && !selectedTramo
            ? Object.keys(todosLosPipelines)
                .filter((assessment) =>
                  todosLosPipelines[assessment].some(
                    (item) => item.DuctoName === selectedDucto
                  )
                )
                .map((assessment) => (
                  <option key={assessment} value={assessment}>
                    {assessment}
                  </option>
                ))
            : null}

          {selectedTramo && !selectedDucto
            ? [
                ...new Set(
                  Object.keys(todosLosPipelines).filter((assessment) =>
                    todosLosPipelines[assessment].some(
                      (item) => item.Name === selectedTramo
                    )
                  )
                ),
              ].map((assessment) => (
                <option key={assessment} value={assessment}>
                  {assessment}
                </option>
              ))
            : null}

          {selectedTramo && selectedDucto
            ? [
                ...new Set(
                  Object.keys(todosLosPipelines).filter((assessment) =>
                    todosLosPipelines[assessment].some(
                      (item) => item.Name === selectedTramo
                    )
                  )
                ),
              ].map((assessment) => (
                <option key={assessment} value={assessment}>
                  {assessment}
                </option>
              ))
            : null}

          {!selectedDucto && !selectedTramo
            ? approvedAssessments.map((assessment) => (
                <option
                  key={assessment.Assessment_Name}
                  value={assessment.Assessment_Name}
                >
                  {assessment.Assessment_Name}
                </option>
              ))
            : null}
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
          disabled={isDuctoDisabled}
        >
          <option value="">Selecciona un ducto</option>
          {selectedAssessment ? (
            // Filtramos ductos según el Assessment seleccionado
            todosLosPipelines[selectedAssessment]?.length > 0 ? (
              [
                ...new Set(
                  todosLosPipelines[selectedAssessment].map(
                    (ducto) => ducto.DuctoName
                  )
                ),
              ].map((ductoName, index) => (
                <option key={index} value={ductoName}>
                  {ductoName}
                </option>
              ))
            ) : (
              <option disabled>No hay Ductos disponibles</option>
            )
          ) : // Mostrar todos los ductos si no hay Assessment seleccionado
          Object.values(todosLosPipelines).flat().length > 0 ? (
            [
              ...new Set(
                Object.values(todosLosPipelines)
                  .flat()
                  .map((ducto) => ducto.DuctoName)
              ),
            ].map((ductoName, index) => (
              <option key={index} value={ductoName}>
                {ductoName}
              </option>
            ))
          ) : (
            <option disabled>No hay Ductos disponibles</option>
          )}
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
          {selectedDucto ? (
            // Filtramos los tramos del ducto seleccionado
            Object.values(todosLosPipelines)
              .flat()
              .filter((tramo) => tramo.DuctoName === selectedDucto)
              .map((tramo) => (
                <option key={tramo.AnalysisItemID} value={tramo.Name}>
                  {tramo.Name}
                </option>
              ))
          ) : selectedAssessment ? (
            // Filtrado para selectedAssessment
            Object.keys(todosLosPipelines).includes(selectedAssessment) &&
            todosLosPipelines[selectedAssessment].length > 0 ? (
              todosLosPipelines[selectedAssessment].map((tramo) => (
                <option key={tramo.AnalysisItemID} value={tramo.Name}>
                  {tramo.Name}
                </option>
              ))
            ) : (
              <option disabled>No hay Tramos disponibles</option>
            )
          ) : (
            // Mostrar todos los tramos si no hay ducto ni assessment seleccionado
            [
              ...new Set(
                Object.values(todosLosPipelines)
                  .flat()
                  .map((tramo) => tramo.Name)
              ),
            ].map((tramoName, index) => (
              <option key={index} value={tramoName}>
                {tramoName}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default SelectsComponent;
