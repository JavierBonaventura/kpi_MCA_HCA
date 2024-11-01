import React, { useEffect, useState } from "react";
import useAssessments from "../hooks/useApprovedAssessments";

const MainPage = () => {
  const {
    approvedAssessments,
    pipelines,
    loading,
    getPipelines,
    ductoNombres,
    getDuctoNombres,
  } = useAssessments();

  const [selectedAssessment, setSelectedAssessment] = useState("");
  const [selectedDucto, setSelectedDucto] = useState("");
  const [selectedPipeline, setSelectedPipeline] = useState(""); // Estado para el pipeline seleccionado
  const [filteredPipelines, setFilteredPipelines] = useState([]); // Para los tramos filtrados

  useEffect(() => {
    // Cargar los nombres de los ductos cuando el componente se monta
    getDuctoNombres();
  }, [getDuctoNombres]);

  const handleAssessmentChange = async (e) => {
    const assessmentName = e.target.value;
    setSelectedAssessment(assessmentName);
    
    // Obtener pipelines cuando se selecciona un assessment
    await getPipelines(assessmentName);
  };

  const handleDuctoChange = (e) => {
    const ducto = e.target.value;
    setSelectedDucto(ducto);

    // Filtrar pipelines por ducto seleccionado
    const ductoPipelineIds = ductoNombres
      .filter((duct) => duct.DuctoName === ducto)
      .map((duct) => duct.Pipeline);

    const filtered = pipelines.filter((pipeline) =>
      ductoPipelineIds.includes(pipeline.Pipeline)
    );

    setFilteredPipelines(filtered);
  };

  return (
    <div>
      <h1>Selecciona una Evaluación</h1>
      
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {/* Desplegable para Approved Assessments */}
          <select value={selectedAssessment} onChange={handleAssessmentChange}>
            <option value="">Seleccione una evaluación</option>
            {approvedAssessments.map((assessment) => (
              <option key={assessment.Assessment_Name} value={assessment.Assessment_Name}>
                {assessment.Assessment_Name}
              </option>
            ))}
          </select>

          {/* Desplegable para Ducto Nombres */}
          <select value={selectedDucto} onChange={handleDuctoChange}>
            <option value="">Seleccione un ducto</option>
            {ductoNombres.map((ducto) => (
              <option key={ducto.DuctoName} value={ducto.DuctoName}>
                {ducto.DuctoName}
              </option>
            ))}
          </select>

          {/* Desplegable para Pipelines filtrados */}
          <select value={selectedPipeline} onChange={(e) => setSelectedPipeline(e.target.value)}>
            <option value="">Seleccione un pipeline</option>
            {filteredPipelines.map((pipeline) => (
              <option key={pipeline.AnalysisItemID} value={pipeline.Name}>
                {pipeline.Name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default MainPage;
