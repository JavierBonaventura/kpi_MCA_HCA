import React, { useEffect, useState } from "react";
import useAssessments from "../../hooks/useAssessments";
import {
  fetchAllDucts,
  fetchPipelinesByAssessment,
} from "../../services/apiService";

const DropdownMenu = () => {
  const { approvedAssessments } = useAssessments();
  const [todosLosDuctosPorEvaluacion, setTodosLosDuctosPorEvaluacion] = useState({});
  const [todosLosDuctos, setTodosLosDuctos] = useState([]);
  const [filteredDuctos, setFilteredDuctos] = useState([]);

  const [todosLosDuctosPorEstudioSeleccionado, settodosLosDuctosPorEstudioSeleccionado] = useState([]);
  const [todosLosTramosPorEstudioSeleccionado, settodosLosTramosPorEstudioSeleccionado] = useState([]);

  const [todosLosDuctosPorTramoSeleccionado, settodosLosDuctosPorTramoSeleccionado] = useState([]);
  const [todosLosEstudiosPorTramoSeleccionado, settodosLosEstudiosPorTramoSeleccionado] = useState([]);


   

  // Alias directo para approvedAssessments
  const todosLosestudios = approvedAssessments;

  // State variables for selected values
  const [selectedEstudio, setSelectedEstudio] = useState("");
  const [selectedDucto, setSelectedDucto] = useState("");
  const [selectedTramo, setSelectedTramo] = useState("");

  useEffect(() => {
    const loadDuctsByAssessments = async () => {
      try {
        const ductsByAssessment = {};

        // Cargar ductos para cada evaluación aprobada
        for (const { Assessment_Name: assessmentName } of approvedAssessments) {
          const ducts = await fetchPipelinesByAssessment(assessmentName);
          ductsByAssessment[assessmentName] = ducts;
        }

        setTodosLosDuctosPorEvaluacion(ductsByAssessment);
      } catch (error) {
        console.error("Error fetching ducts by assessments:", error);
      }
    };

    if (approvedAssessments.length > 0) {
      loadDuctsByAssessments();
    }
  }, [approvedAssessments]);

  useEffect(() => {
    const loadDucts = async () => {
      try {
        const allDucts = await fetchAllDucts();
        setTodosLosDuctos(allDucts);
      } catch (error) {
        console.error("Error fetching all ducts:", error);
      }
    };

    loadDucts();
  }, []);

  useEffect(() => {
    if (todosLosDuctosPorEvaluacion && todosLosDuctos.length > 0) {
      // Extraer pipelines únicos de todosLosDuctosPorEvaluacion
      const pipelines = new Set(
        Object.values(todosLosDuctosPorEvaluacion).flatMap((ductos) =>
          ductos.map((ducto) => ducto.Pipeline)
        )
      );

      // Filtrar todosLosDuctos para incluir solo los que tienen un pipeline en todosLosDuctosPorEvaluacion
      const filtered = todosLosDuctos.filter((ducto) => pipelines.has(ducto.Pipeline));
      setFilteredDuctos(filtered);
    }
  }, [todosLosDuctosPorEvaluacion, todosLosDuctos]);

    // Debugging logs
    useEffect(() => {
      console.log("Todos los estudios:", todosLosestudios);
      console.log("Todos los ductos:", todosLosDuctos);
      console.log("Todos los ductos por evaluación:", todosLosDuctosPorEvaluacion);
      console.log("Ductos filtrados:", filteredDuctos);
    }, [todosLosestudios, todosLosDuctos, todosLosDuctosPorEvaluacion, filteredDuctos]);
  

  // Handle selection change for Estudio, Ducto, and Tramo
  const handleEstudioChange = (event) => {
    setSelectedEstudio(event.target.value);
  };

  const handleDuctoChange = (event) => {
    setSelectedDucto(event.target.value);
  };

  const handleTramoChange = (event) => {
    setSelectedTramo(event.target.value);
  };

  console.log("selectedEstudio",selectedEstudio )
  console.log("selectedDucto", selectedDucto )
  console.log("selectedTramo", selectedTramo )

  // filtrado de Ductos en funcion del estudio

  useEffect(() => {
    console.log("filtrado de Ductos en funcion del estudio")

    if (selectedEstudio && todosLosDuctosPorEvaluacion[selectedEstudio]) {
      const todosLosDuctosPorEstudioSeleccionado = todosLosDuctosPorEvaluacion[selectedEstudio].map(ducto => ducto.Pipeline);
      settodosLosDuctosPorEstudioSeleccionado(todosLosDuctosPorEstudioSeleccionado);
      console.log("todosLosDuctosPorEstudioSeleccionado", todosLosDuctosPorEstudioSeleccionado);
    } else {
      settodosLosDuctosPorEstudioSeleccionado([]); 
    }
  }, [selectedEstudio, todosLosDuctosPorEvaluacion]);
  
  

  // filtrado de tramos en funcion del estudio
  useEffect(() => {
    console.log("filtrado de tramos en funcion del estudio")

    if (selectedEstudio && todosLosDuctosPorEvaluacion[selectedEstudio]) {
      const todosLosTramosPorEstudioSeleccionado  = todosLosDuctosPorEvaluacion[selectedEstudio].map(tramo => tramo.Name);
      settodosLosTramosPorEstudioSeleccionado(todosLosTramosPorEstudioSeleccionado );
      console.log("todosLosTramosPorEstudioSeleccionado", todosLosTramosPorEstudioSeleccionado)
    } else {
      settodosLosTramosPorEstudioSeleccionado([]); 
    }
  }, [selectedEstudio, todosLosDuctosPorEvaluacion]);






  
  // filtrado de Ductos en funcion del tramo
  useEffect(() => {
    console.log("filtrado de Ductos en funcion del tramo", todosLosDuctosPorEvaluacion[selectedTramo])

    if (selectedTramo && todosLosDuctosPorEvaluacion[selectedTramo]) {

      const todosLosDuctosPorTramoSeleccionado = todosLosDuctosPorEvaluacion[selectedTramo].map(ducto => ducto.Pipeline);
      settodosLosDuctosPorTramoSeleccionado(todosLosDuctosPorTramoSeleccionado);
      console.log("todosLosDuctosPorTramoSeleccionado", todosLosDuctosPorTramoSeleccionado);
    } else {
      settodosLosDuctosPorTramoSeleccionado([]); 
    }
  }, [selectedTramo, todosLosDuctosPorEvaluacion]);
  
  

  // filtrado de Estudios en funcion del tramo
  useEffect(() => {
    console.log("filtrado de Estudios en funcion del tramo")

    if (selectedTramo && todosLosDuctosPorEvaluacion[selectedTramo]) {
      const todosLosEstudiosPorTramoSeleccionado  = todosLosDuctosPorEvaluacion[selectedTramo].map(estudio => estudio.Name);
      settodosLosEstudiosPorTramoSeleccionado(todosLosEstudiosPorTramoSeleccionado );
      console.log("todosLosEstudiosPorTramoSeleccionado", todosLosEstudiosPorTramoSeleccionado)
    } else {
      settodosLosEstudiosPorTramoSeleccionado([]); 
    }
  }, [selectedTramo, todosLosDuctosPorEvaluacion]);

  
  return (
    <div>
      <div>
        <label htmlFor="estudios-dropdown">Estudios:</label>
        <select id="estudios-dropdown"
         onChange={handleEstudioChange}>
          <option value="">Seleccione un Estudio</option>
          {todosLosestudios.map((estudio) => (
            <option key={estudio.Assessment_Name} value={estudio.Assessment_Name}>
              {estudio.Assessment_Name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="ductos-dropdown">Ductos:</label>
        <select id="ductos-dropdown"
         onChange={handleDuctoChange}>
          <option value="">Seleccione un Ducto</option>
          {filteredDuctos.map((ducto) => (
            <option key={ducto.DuctoName} value={ducto.DuctoName}>
              {ducto.DuctoName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tramos-evaluacion-dropdown">Tramos por Evaluación:</label>
        <select id="tramos-evaluacion-dropdown"
        onChange={handleTramoChange}>
          <option value="">Seleccione un tramo</option>
          {Object.entries(todosLosDuctosPorEvaluacion).flatMap(([key, tramos]) =>
            tramos.map((tramo) => (
              <option key={tramo.AnalysisItemID} value={tramo.Name}>
                {tramo.Name}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default DropdownMenu;
