import React, { useState } from 'react';
import useAssessments from '../hooks/useApprovedAssessments';
import useRiskAnalysis from '../hooks/useRiskAnalysis';
import useRiskMatrix from '../hooks/useRiskMatrix'; // Importa el nuevo hook

const AssessmentSelector = () => {
  // Estado para seleccionar evaluación y tramo
  const [selectedAssessment, setSelectedAssessment] = useState('');
  const [selectedPipeline, setSelectedPipeline] = useState('');

  // Hooks para obtener evaluaciones aprobadas y tramos
  const { approvedAssessments, pipelines, loading: loadingAssessments, getPipelines } = useAssessments();
  
  // Hook para obtener el análisis de riesgo
  const { getRiskAnalysis, riskAnalysis, loading: loadingRiskAnalysis } = useRiskAnalysis();
  
  // Usa el nuevo hook para calcular la matriz de riesgo
  const riskMatrix = useRiskMatrix(riskAnalysis);

  // Maneja el cambio en la selección de evaluación
  const handleAssessmentChange = (e) => {
    const assessmentName = e.target.value;
    setSelectedAssessment(assessmentName);
    getPipelines(assessmentName); // Obtiene los tramos relacionados con la evaluación seleccionada
  };

  // Maneja el cambio en la selección de tramo
  const handlePipelineChange = async (e) => {
    const selectedPipelineName = e.target.value;
    setSelectedPipeline(selectedPipelineName);

    // Encuentra el pipeline seleccionado en el array de pipelines
    const selectedPipeline = pipelines.find(pipeline => pipeline.Name === selectedPipelineName);
    
    // Si se encuentra el pipeline, obtiene el análisis de riesgo correspondiente
    if (selectedPipeline) {
      await getRiskAnalysis(selectedPipeline.AnalysisItemID);
    }
  };

  // Manejo de carga
  if (loadingAssessments || loadingRiskAnalysis) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Seleccionar Evaluación y Tramo</h1>
      
      {/* Selección de Evaluaciones Aprobadas */}
      <div>
        <label htmlFor="assessment">Evaluaciones Aprobadas:</label>
        <select id="assessment" value={selectedAssessment} onChange={handleAssessmentChange}>
          <option value="">Seleccione una evaluación</option>
          {approvedAssessments.map((assessment) => (
            <option key={assessment.Assessment_Name} value={assessment.Assessment_Name}>
              {assessment.Assessment_Name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Selección de Tramos */}
      <div>
        <label htmlFor="pipeline">Tramos:</label>
        <select id="pipeline" value={selectedPipeline} onChange={handlePipelineChange}>
          <option value="">Seleccione un Tramo</option>
          {pipelines.map((pipeline) => (
            <option key={pipeline.AnalysisItemID} value={pipeline.Name}>
              {pipeline.Name}
            </option>
          ))}
        </select>
      </div>

      {/* Mostrar la matriz de riesgo si existe */}
      {riskMatrix.riskMatrix.length > 0 && (
        <div>
          <h2>Matriz de Riesgo:</h2>
          <pre>{JSON.stringify(riskMatrix, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AssessmentSelector;
