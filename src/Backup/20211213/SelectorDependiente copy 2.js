import React, { useEffect, useState } from "react";
import useAssessments from "../hooks/useAssessments";
import {
  fetchAllDucts,
  fetchPipelinesByAssessment,
} from "../services/apiService";

const DropdownMenu = () => {
  const { approvedAssessments } = useAssessments();
  const [todosLosDuctosPorEvaluacion, setTodosLosDuctosPorEvaluacion] = useState({});
  const [todosLosDuctos, setTodosLosDuctos] = useState([]);
  const [filteredDuctos, setFilteredDuctos] = useState([]);

  // Alias directo para approvedAssessments
  const todosLosestudios = approvedAssessments;

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

  return (
    <div>
      <div>
        <label htmlFor="estudios-dropdown">Estudios:</label>
        <select id="estudios-dropdown">
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
        <select id="ductos-dropdown">
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
        <select id="tramos-evaluacion-dropdown">
          <option value="">Seleccione un tramo</option>
          {Object.entries(todosLosDuctosPorEvaluacion).flatMap(([key, ductos]) =>
            ductos.map((ducto) => (
              <option key={ducto.AnalysisItemID} value={ducto.Name}>
                {ducto.Name}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default DropdownMenu;
