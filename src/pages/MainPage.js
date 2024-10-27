import React, { useState, useEffect } from 'react';
import useAssessments from '../hooks/useApprovedAssessments';
import useRiskAnalysis from '../hooks/useRiskAnalysis';
import useRiskMatrix from '../hooks/useRiskMatrix';
import RiskMatrix from './RiskMatrix'; // Importar el nuevo componente

const MainPage = () => {
  const [selectedAssessment, setSelectedAssessment] = useState('');
  const [selectedPipeline, setSelectedPipeline] = useState('');
  const [riskMatrixData, setRiskMatrixData] = useState([]);

  const { approvedAssessments, pipelines, loading: loadingAssessments, getPipelines } = useAssessments();
  const { getRiskAnalysis, riskAnalysis, loading: loadingRiskAnalysis } = useRiskAnalysis();
  const riskMatrix = useRiskMatrix(riskAnalysis);

  const handleAssessmentChange = (e) => {
    const assessmentName = e.target.value;
    setSelectedAssessment(assessmentName);
    getPipelines(assessmentName);
  };

  const handlePipelineChange = (e) => {
    const selectedPipelineName = e.target.value;
    setSelectedPipeline(selectedPipelineName);
  };

  const handleGenerateMatrix = async () => {
    if (selectedPipeline) {
      const selectedPipelineObj = pipelines.find(pipeline => pipeline.Name === selectedPipeline);
      if (selectedPipelineObj) {
        await getRiskAnalysis(selectedPipelineObj.AnalysisItemID);
      }
    }
  };

  useEffect(() => {
    if (riskMatrix && riskMatrix.summary) {
      console.log("Risk Analysis:", riskAnalysis);
      console.log("Risk Matrix:", riskMatrix);

      if (riskMatrix.summary.positionCounts && Array.isArray(riskMatrix.summary.positionCounts) && riskMatrix.summary.positionCounts.length > 0) {
        const matrix = Array.from({ length: 7 }, () => Array(7).fill(0));

        riskMatrix.summary.positionCounts.forEach((positionCount) => {
          const position = positionCount.position;
        //   console.log("Processing position:", position);
          const parts = position.split('-');

          if (parts.length === 2) {
            const rowIndex = parseInt(parts[0].replace('Position ', '').trim()) - 1;
            const colIndex = parseInt(parts[1].trim()) - 1;

            // console.log(`Row Index: ${rowIndex}, Col Index: ${colIndex}, Count: ${positionCount.count}`);

            if (!isNaN(rowIndex) && !isNaN(colIndex) && rowIndex >= 0 && rowIndex < 7 && colIndex >= 0 && colIndex < 7) {
              matrix[rowIndex][colIndex] = positionCount.count;
            } else {
              console.warn(`Index out of bounds: Row: ${rowIndex}, Col: ${colIndex}`);
            }
          } else {
            console.warn(`Invalid position format: ${position}`);
          }
        });

        console.log("Final Matrix:", matrix);
        setRiskMatrixData(matrix);
      } else {
        console.info("No se encontraron datos en riskMatrix.summary.positionCounts, no se actualizará la matriz.");
      }
    }
  },[riskMatrix, riskAnalysis]);

  // Mostrar loading solo en el contenido principal
  const isLoading = loadingAssessments || loadingRiskAnalysis;

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
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-home text-lg pr-2"></i> Inicio
          </button>
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-chart-line text-lg pr-2"></i> Gráficos
          </button>
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-table text-lg pr-2"></i> Tablas
          </button>
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-cog text-lg pr-2"></i> Configuración
          </button>
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-user text-lg pr-2"></i> Perfil
          </button>
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-envelope text-lg pr-2"></i> Mensajes
          </button>
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-bell text-lg pr-2"></i> Notificaciones
          </button>
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-sign-out-alt text-lg pr-2"></i> Salir
          </button>
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-question-circle text-lg pr-2"></i> Ayuda
          </button>
          <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
            <i className="fas fa-info-circle text-lg pr-2"></i> Acerca de
          </button>
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
          <div className="flex flex-col lg:flex-row gap-6 mb-5 justify-between">
            <div className="flex flex-col w-full lg:w-1/3">
              <label htmlFor="assessment-select" className="text-sm font-medium text-gray-700 mb-1">Seleccionar Evaluación:</label>
              <select id="assessment-select" className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent" value={selectedAssessment} onChange={handleAssessmentChange}>
                <option value="">Seleccione una evaluación</option>
                {approvedAssessments.map((assessment) => (
                  <option key={assessment.Assessment_Name} value={assessment.Assessment_Name}>
                    {assessment.Assessment_Name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full lg:w-1/3">
              <label htmlFor="pipeline-select" className="text-sm font-medium text-gray-700 mb-1">Seleccionar Ducto:</label>
              <select id="pipeline-select" className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent" value={selectedPipeline} onChange={handlePipelineChange}>
                <option value="">Seleccione un Ducto</option>              
                {/* Assuming `pipelines` has relevant data */}
                {pipelines.map((pipeline) => (
                  <option key={pipeline.AnalysisItemID} value={pipeline.Name}>
                    {pipeline.Pipeline}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full lg:w-1/3">
              <label htmlFor="section-select" className="text-sm font-medium text-gray-700 mb-1">Seleccionar Tramo:</label>
              <select id="section-select" className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent" value={selectedPipeline} onChange={handlePipelineChange}>
                <option value="">Seleccione un tramo</option>
                {/* Assuming `pipelines` has relevant data */}
                {pipelines.map((pipeline) => (
                  <option key={pipeline.AnalysisItemID} value={pipeline.Name}>
                    {pipeline.Name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón de generación */}
          <div className="flex justify-center mb-5">
            <button
              onClick={handleGenerateMatrix}
              className="w-full max-w-xs bg-[#265c4f] hover:bg-[#1d463b] text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out"
            >
              Generar Matriz
            </button>
          </div>

          {/* Mostrar loading spinner si está en loading */}
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <div className="loader"></div>
            </div>
          ) : (
            // Renderizar el componente RiskMatrix y pasar los datos
            riskMatrixData.length > 0 && <RiskMatrix matrixData={riskMatrixData} riskAnalysis={riskAnalysis} riskMatrix={riskMatrix}/>
          )}
        </div>
      </main>
    
    </div>
  );
};

export default MainPage;
