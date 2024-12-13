import React, { useEffect, useState } from "react";
import useAssessments from "../../hooks/useAssessments";
import {
  fetchAllDucts,
  fetchPipelinesByAssessment,
} from "../../services/apiService";

const DropdownMenu = () => {
  const { approvedAssessments } = useAssessments();
  const [todosLosDuctosPorEvaluacion, setTodosLosDuctosPorEvaluacion] =
    useState({});
  const [todosLosDuctos, setTodosLosDuctos] = useState([]);
  const [filteredDuctos, setFilteredDuctos] = useState([]);

  const [
    todosLosDuctosPorEstudioSeleccionado,
    settodosLosDuctosPorEstudioSeleccionado,
  ] = useState([]);
  const [
    todosLosTramosPorEstudioSeleccionado,
    settodosLosTramosPorEstudioSeleccionado,
  ] = useState([]);

  const [
    todosLosDuctosPorTramoSeleccionado,
    settodosLosDuctosPorTramoSeleccionado,
  ] = useState([]);
  const [
    todosLosEstudiosPorTramoSeleccionado,
    settodosLosEstudiosPorTramoSeleccionado,
  ] = useState([]);

  const [
    todosLosTramosPorDuctoSeleccionado,
    settodosLosTramosPorDuctoSeleccionado,
  ] = useState([]);
  const [
    todosLosEstudiosPorDuctoSeleccionado,
    settodosLosEstudiosPorDuctoSeleccionado,
  ] = useState([]);

  // Alias directo para approvedAssessments
  const todosLosestudios = approvedAssessments;

  // State variables for selected values
  const [selectedEstudio, setSelectedEstudio] = useState("");
  const [selectedDucto, setSelectedDucto] = useState("");
  const [selectedTramo, setSelectedTramo] = useState("");
  // Cargar los ductos por evaluación solo cuando los estudios cambian
  useEffect(() => {
    const loadDuctsByAssessments = async () => {
      try {
        const ductsByAssessment = {};

        for (const { Assessment_Name: assessmentName } of approvedAssessments) {
          const ducts = await fetchPipelinesByAssessment(assessmentName);
          ductsByAssessment[assessmentName] = ducts;
        }

        setTodosLosDuctosPorEvaluacion(ductsByAssessment);
      } catch (error) {
        console.error("Error fetching ducts by assessments:", error);
      }
    };

    if (
      approvedAssessments.length > 0 &&
      !Object.keys(todosLosDuctosPorEvaluacion).length
    ) {
      loadDuctsByAssessments(); // Solo cargar si no hay datos previos
    }
  }, [approvedAssessments, todosLosDuctosPorEvaluacion]); // Solo dependemos de approvedAssessments y la longitud de todosLosDuctosPorEvaluacion

  useEffect(() => {
    const loadDucts = async () => {
      try {
        const allDucts = await fetchAllDucts();
        setTodosLosDuctos(allDucts);
      } catch (error) {
        console.error("Error fetching all ducts:", error);
      }
    };

    if (!todosLosDuctos.length) {
      loadDucts(); // Solo cargar si no se han cargado previamente
    }
  }, [todosLosDuctos]); // Dependemos solo de todosLosDuctos

  // Filtrar los ductos y evitar la ejecución innecesaria
  useEffect(() => {
    if (todosLosDuctosPorEvaluacion && todosLosDuctos.length > 0) {
      const pipelines = new Set(
        Object.values(todosLosDuctosPorEvaluacion).flatMap((ductos) =>
          ductos.map((ducto) => ducto.Pipeline)
        )
      );

      const filtered = todosLosDuctos.filter((ducto) =>
        pipelines.has(ducto.Pipeline)
      );
      if (filtered.length !== filteredDuctos.length) {
        setFilteredDuctos(filtered); // Actualizamos solo si el filtro cambia
      }
    }
  }, [todosLosDuctosPorEvaluacion, todosLosDuctos, filteredDuctos]); // Controlamos las dependencias

  // Agregar las claves de estudio y ducto a los items
  useEffect(() => {
    if (todosLosDuctosPorEvaluacion && filteredDuctos.length > 0) {
      const updatedDuctosPorEvaluacion = { ...todosLosDuctosPorEvaluacion };

      for (const [assessmentName, ductos] of Object.entries(
        updatedDuctosPorEvaluacion
      )) {
        updatedDuctosPorEvaluacion[assessmentName] = ductos.map((ducto) => {
          const ductoDetails = filteredDuctos.find(
            (filteredDucto) => filteredDucto.Pipeline === ducto.Pipeline
          );

          return {
            ...ducto,
            nombreDeEstudio: assessmentName, // Nombre del estudio
            nombreDelDucto: ductoDetails
              ? ductoDetails.DuctoName
              : "Desconocido", // Nombre del ducto
          };
        });
      }

      if (
        JSON.stringify(updatedDuctosPorEvaluacion) !==
        JSON.stringify(todosLosDuctosPorEvaluacion)
      ) {
        setTodosLosDuctosPorEvaluacion(updatedDuctosPorEvaluacion); // Solo actualizar si el objeto ha cambiado
      }
    }
  }, [todosLosDuctosPorEvaluacion, filteredDuctos, todosLosDuctos]); // Dependencias controladas

  // Debugging logs
  useEffect(() => {
    // console.log("Todos los estudios:", todosLosestudios);
    // console.log("Todos los ductos:", todosLosDuctos);
    // console.log(
    //  "Todos los ductos por evaluación:",
    //  todosLosDuctosPorEvaluacion
    // );
    // console.log("Ductos filtrados:", filteredDuctos);
  }, [
    todosLosestudios,
    todosLosDuctos,
    todosLosDuctosPorEvaluacion,
    filteredDuctos,
  ]);


  const handleEstudioChange = (event) => {
    setSelectedEstudio(event.target.value);
  console.log("estoy tocando estudio")
    // Validar si el estudio tiene ductos
    const ductosDelEstudio = todosLosDuctosPorEvaluacion[event.target.value] || [];
  
    if (ductosDelEstudio.length === 0) {
      setSelectedDucto("");
      setSelectedTramo("")
    } else {
    }
  };
  

  const handleDuctoChange = (event) => {
    setSelectedDucto(event.target.value);
  };

  const handleTramoChange = (event) => {
    setSelectedTramo(event.target.value);
  };

  // console.log("selectedEstudio", selectedEstudio);
  // console.log("selectedDucto", selectedDucto);
  // console.log("selectedTramo", selectedTramo);

  // filtrado de Ductos en funcion del estudio
  useEffect(() => {
    // console.log("filtrado de Ductos en funcion del estudio");

    if (selectedEstudio && todosLosDuctosPorEvaluacion[selectedEstudio]) {
      const todosLosDuctosPorEstudioSeleccionado = todosLosDuctosPorEvaluacion[
        selectedEstudio
      ].map((ducto) => ducto.nombreDelDucto);
      settodosLosDuctosPorEstudioSeleccionado(
        todosLosDuctosPorEstudioSeleccionado
      );
      console.log(
        "todosLosDuctosPorEstudioSeleccionado",
        todosLosDuctosPorEstudioSeleccionado
      );
    } else {
      settodosLosDuctosPorEstudioSeleccionado([]);
    }
  }, [selectedEstudio, todosLosDuctosPorEvaluacion]);

  // filtrado de tramos en funcion del estudio
  useEffect(() => {
    // console.log("filtrado de tramos en funcion del estudio");

    if (selectedEstudio && todosLosDuctosPorEvaluacion[selectedEstudio]) {
      const todosLosTramosPorEstudioSeleccionado = todosLosDuctosPorEvaluacion[
        selectedEstudio
      ].map((tramo) => tramo.Name);
      settodosLosTramosPorEstudioSeleccionado(
        todosLosTramosPorEstudioSeleccionado
      );
      console.log(
        "todosLosTramosPorEstudioSeleccionado",
        todosLosTramosPorEstudioSeleccionado
      );
    } else {
      settodosLosTramosPorEstudioSeleccionado([]);
    }
  }, [selectedEstudio, todosLosDuctosPorEvaluacion]);

  useEffect(() => {
    if (selectedTramo) {
      // Filtrado de Ductos por Tramo
      const ductosEncontrados = [];
      for (const estudio in todosLosDuctosPorEvaluacion) {
        const ductos = todosLosDuctosPorEvaluacion[estudio];
        const encontrado = ductos.find((ducto) => ducto.Name === selectedTramo);
        if (encontrado) {
          ductosEncontrados.push(encontrado.nombreDelDucto);
        }
      }
      settodosLosDuctosPorTramoSeleccionado(ductosEncontrados);

      // Filtrado de Estudios por Tramo
      const estudiosEncontrados = [];
      for (const estudio in todosLosDuctosPorEvaluacion) {
        const ductos = todosLosDuctosPorEvaluacion[estudio];
        const estudiosCoincidentes = ductos.filter((ducto) =>
          ducto.Name.includes(selectedTramo)
        );
        estudiosCoincidentes.forEach((ducto) => {
          estudiosEncontrados.push(ducto.nombreDeEstudio);
        });
      }
      settodosLosEstudiosPorTramoSeleccionado(estudiosEncontrados);
    }
  }, [selectedTramo, todosLosDuctosPorEvaluacion]);

  // Se asegura de que los logs de los valores actualizados se muestren en otro useEffect
  useEffect(() => {
    console.log(
      "todosLosDuctosPorTramoSeleccionado",
      todosLosDuctosPorTramoSeleccionado
    );
    console.log(
      "todosLosEstudiosPorTramoSeleccionado",
      todosLosEstudiosPorTramoSeleccionado
    );
  }, [
    todosLosDuctosPorTramoSeleccionado,
    todosLosEstudiosPorTramoSeleccionado,
  ]);

  // Filtrado de Tramos en función del Ducto Seleccionado
  useEffect(() => {
    if (selectedDucto) {
      // Inicializamos un arreglo vacío para los tramos encontrados
      const tramosEncontrados = [];

      // Recorrer todos los estudios en todosLosDuctosPorEvaluacion
      for (const estudio in todosLosDuctosPorEvaluacion) {
        const ductos = todosLosDuctosPorEvaluacion[estudio];

        // Buscar todos los tramos que tengan el nombreDelDucto seleccionado
        const tramosCoincidentes = ductos.filter(
          (ducto) => ducto.nombreDelDucto === selectedDucto
        );

        // Agregar los tramos encontrados al arreglo
        tramosCoincidentes.forEach((ducto) => {
          tramosEncontrados.push(ducto.Name);
        });
      }

      // Guardamos los tramos encontrados en el estado
      settodosLosTramosPorDuctoSeleccionado(tramosEncontrados);
      console.log("todosLosTramosPorDuctoSeleccionado", tramosEncontrados);
    }
  }, [selectedDucto, todosLosDuctosPorEvaluacion]);

  // Filtrado de Estudios en función del Ducto Seleccionado
  useEffect(() => {
    if (selectedDucto) {
      // Inicializamos un arreglo vacío para los estudios encontrados
      const estudiosEncontrados = [];

      // Recorrer todos los estudios en todosLosDuctosPorEvaluacion
      for (const estudio in todosLosDuctosPorEvaluacion) {
        const ductos = todosLosDuctosPorEvaluacion[estudio];

        // Buscar todos los estudios que tengan el nombreDelDucto seleccionado
        const estudiosCoincidentes = ductos.filter(
          (ducto) => ducto.nombreDelDucto === selectedDucto
        );

        // Agregar los estudios encontrados al arreglo
        estudiosCoincidentes.forEach((ducto) => {
          estudiosEncontrados.push(ducto.nombreDeEstudio);
        });
      }

      // Guardamos los estudios encontrados en el estado
      settodosLosEstudiosPorDuctoSeleccionado(estudiosEncontrados);
      console.log("todosLosEstudiosPorDuctoSeleccionado", estudiosEncontrados);
    }
  }, [selectedDucto, todosLosDuctosPorEvaluacion]);

  return (
    <div>
    <div className="flex flex-col lg:flex-row gap-6 mb-5 justify-between">
    <div className="flex flex-col w-full lg:w-1/3">
        <label
          htmlFor="assessment-select"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Seleccionar Evaluación:
        </label>
                <select           className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent"

                id="estudios-dropdown" onChange={handleEstudioChange}>
          <option value="">Seleccione un Estudio</option>
          {selectedDucto && !selectedEstudio
            ? // Si selectedDucto tiene valor, usar todosLosEstudiosPorDuctoSeleccionado
              [...new Set(todosLosEstudiosPorDuctoSeleccionado)].map(
                (estudio, index) => (
                  <option key={index} value={estudio}>
                    {estudio}
                  </option>
                )
              )
            : selectedTramo && !selectedEstudio
            ? // Si selectedTramo tiene valor, usar todosLosEstudiosPorTramoSeleccionado
              [...new Set(todosLosEstudiosPorTramoSeleccionado)].map(
                (estudio, index) => (
                  <option key={index} value={estudio}>
                    {estudio}
                  </option>
                )
              )
            : // Si ninguno de los dos tiene valor, usar todosLosestudios
              [...new Set(todosLosestudios.map((e) => e.Assessment_Name))].map(
                (estudio, index) => (
                  <option key={index} value={estudio}>
                    {estudio}
                  </option>
                )
              )}
        </select>
      </div>

      <div>
        <label htmlFor="ductos-dropdown">Ductos:</label>
        <select id="ductos-dropdown" onChange={handleDuctoChange}>
          <option value="">Seleccione un Ducto</option>
          {selectedEstudio  && !selectedDucto
            ? // Si selectedEstudio tiene valor, usar todosLosDuctosPorEstudioSeleccionado
              [...new Set(todosLosDuctosPorEstudioSeleccionado)].map(
                (ducto, index) => (
                  <option key={index} value={ducto}>
                    {ducto}
                  </option>
                )
              )
            : selectedTramo  && !selectedDucto
            ? // Si selectedTramo tiene valor, usar todosLosDuctosPorTramoSeleccionado
              [...new Set(todosLosDuctosPorTramoSeleccionado)].map(
                (ducto, index) => (
                  <option key={index} value={ducto}>
                    {ducto}
                  </option>
                )
              )
            : // Si ninguno de los dos tiene valor, usar filteredDuctos
              [...new Set(filteredDuctos.map((d) => d.DuctoName))].map(
                (ducto, index) => (
                  <option key={index} value={ducto}>
                    {ducto}
                  </option>
                )
              )}
        </select>
      </div>

      <div>
        <label htmlFor="tramos-evaluacion-dropdown">
          Tramos por Evaluación:
        </label>
        <select id="tramos-evaluacion-dropdown" onChange={handleTramoChange}>
          <option value="">Seleccione un tramo</option>
          {selectedEstudio && !selectedTramo
            ? // Si selectedEstudio tiene un valor, se muestran los tramos del estudio seleccionado
              [...new Set(todosLosTramosPorEstudioSeleccionado)].map(
                (tramo, index) => (
                  <option key={index} value={tramo}>
                    {tramo}
                  </option>
                )
              )
            : selectedDucto && !selectedTramo
            ? // Si selectedDucto tiene un valor, se muestran los tramos del ducto seleccionado
              [...new Set(todosLosTramosPorDuctoSeleccionado)].map(
                (tramo, index) => (
                  <option key={index} value={tramo}>
                    {tramo}
                  </option>
                )
              )
            : // Si no hay valor en selectedEstudio ni selectedDucto, se muestran los tramos por evaluación
              [
                ...new Set(
                  Object.entries(todosLosDuctosPorEvaluacion).flatMap(
                    ([key, tramos]) => tramos.map((tramo) => tramo.Name)
                  )
                ),
              ].map((tramo, index) => (
                <option key={index} value={tramo}>
                  {tramo}
                </option>
              ))}
        </select>
      </div>
    </div>
    </div>
  );
};

export default DropdownMenu;
