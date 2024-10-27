import React, { useState } from 'react';
import useAssessments from '../hooks/useApprovedAssessments';
import useRiskAnalysis from '../hooks/useRiskAnalysis';
import useRiskMatrix from '../hooks/useRiskMatrix';

const MainPage = () => {
  // Estados para selección de evaluación, tramo y generación de matriz
  const [selectedAssessment, setSelectedAssessment] = useState('');
  const [selectedPipeline, setSelectedPipeline] = useState('');
  const [shouldGenerateMatrix, setShouldGenerateMatrix] = useState(false);

  // Hooks para obtener evaluaciones y tramos
  const { approvedAssessments, pipelines, loading: loadingAssessments, getPipelines } = useAssessments();
  const { getRiskAnalysis, riskAnalysis, loading: loadingRiskAnalysis } = useRiskAnalysis();
  const riskMatrix = useRiskMatrix(riskAnalysis);

  // Maneja el cambio en la selección de evaluación
  const handleAssessmentChange = (e) => {
    const assessmentName = e.target.value;
    setSelectedAssessment(assessmentName);
    getPipelines(assessmentName);
  };

  // Maneja el cambio en la selección de tramo sin generar la matriz
  const handlePipelineChange = (e) => {
    const selectedPipelineName = e.target.value;
    setSelectedPipeline(selectedPipelineName);
  };

  // Maneja la generación de la matriz de riesgo
  const handleGenerateMatrix = async () => {
    if (selectedPipeline) {
      const selectedPipelineObj = pipelines.find(pipeline => pipeline.Name === selectedPipeline);
      if (selectedPipelineObj) {
        await getRiskAnalysis(selectedPipelineObj.AnalysisItemID);
        setShouldGenerateMatrix(true);
      }
    }
  };

  if (loadingAssessments || loadingRiskAnalysis) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Barra superior */}
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-[#265c4f] to-[#16362e] text-white flex items-center justify-between px-5 text-2xl z-10">
        <img src="https://i.imgur.com/Zolobvu.png" alt="Logo" className="h-14" />
        <img src="https://i.imgur.com/dceYKLW.png" alt="Logo" className="w-[220px] h-auto" />
        <img src="https://i.imgur.com/2FO5LPI.png" alt="Logo" className="w-[10%] h-auto" />
      </div>

      {/* Sidebar */}
      <aside className="fixed top-20 left-0 w-56 h-[calc(100%-80px)] bg-gradient-to-t from-[#265c4f] to-[#16362e] text-white transition-all duration-300 pt-14 z-20">
        <nav>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-home text-lg pr-2"></i> Inicio
          </a>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-chart-line text-lg pr-2"></i> Gráficos
          </a>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-table text-lg pr-2"></i> Tablas
          </a>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-cog text-lg pr-2"></i> Configuración
          </a>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-user text-lg pr-2"></i> Perfil
          </a>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-envelope text-lg pr-2"></i> Mensajes
          </a>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-bell text-lg pr-2"></i> Notificaciones
          </a>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-sign-out-alt text-lg pr-2"></i> Salir
          </a>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-question-circle text-lg pr-2"></i> Ayuda
          </a>
          <a href="#" className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-info-circle text-lg pr-2"></i> Acerca de
          </a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="ml-56 mt-20 transition-all duration-300 p-5">
        <div className="max-w-full bg-white rounded-lg shadow-lg p-5">
          <header className="text-center mb-5">
            <h1 className="text-3xl font-bold text-gray-800">KPI de Riesgo</h1>
            <hr className="border-t border-gray-300 my-3" />
          </header>

          {/* Selectores */}
          <div className="flex flex-col lg:flex-row gap-4 mb-5 justify-center">
            <div className="flex flex-col items-start">
              <label htmlFor="assessment-select" className="text-sm font-medium text-gray-700 mb-1">Seleccionar Evaluación:</label>
              <select id="assessment-select" className="border rounded-md p-2 bg-gray-50" value={selectedAssessment} onChange={handleAssessmentChange}>
                <option value="">Seleccione una evaluación</option>
                {approvedAssessments.map((assessment) => (
                  <option key={assessment.Assessment_Name} value={assessment.Assessment_Name}>
                    {assessment.Assessment_Name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="pipeline-select" className="text-sm font-medium text-gray-700 mb-1">Seleccionar Tramo:</label>
              <select id="pipeline-select" className="border rounded-md p-2 bg-gray-50" value={selectedPipeline} onChange={handlePipelineChange}>
                <option value="">Seleccione un tramo</option>
                {pipelines.map((pipeline) => (
                  <option key={pipeline.AnalysisItemID} value={pipeline.Name}>
                    {pipeline.Name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón de generación */}
          <div className="flex justify-center">
            <button
              onClick={handleGenerateMatrix}
              className="w-full max-w-xs bg-[#265c4f] hover:bg-[#1d463b] text-white py-2 px-4 rounded-lg font-bold"
            >
              Generar Matriz
            </button>
          </div>

          {/* Mostrar la matriz de riesgo si existe */}
          {shouldGenerateMatrix && riskMatrix.riskMatrix.length > 0 && (
            <div className="mt-5">
              <h2>Matriz de Riesgo:</h2>
              <pre>{JSON.stringify(riskMatrix, null, 2)}</pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
