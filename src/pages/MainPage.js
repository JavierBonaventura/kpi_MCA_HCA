import React, { useState, useEffect } from "react";
import useAssessments from "../hooks/useApprovedAssessments";
import useRiskAnalysis from "../hooks/useRiskAnalysis";
import useRiskMatrix from "../hooks/useRiskMatrix";
import RiskMatrix from "./RiskMatrix"; 
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const MainPage = () => {
  const [selectedAssessment, setSelectedAssessment] = useState("");
  const [selectedDucto, setSelectedDucto] = useState("");
  const [selectedTramo, setSelectedTramo] = useState("");
  const [tramosConNombreDeDucto, setTramosConNombreDeDucto] = useState([]);
  const [riskMatrixData, setRiskMatrixData] = useState([]);
  
  const { approvedAssessments, pipelines, loading: loadingAssessments, getPipelines, getDuctoNombres, ductoNombres } = useAssessments();
  const { getRiskAnalysis, riskAnalysis, loading: loadingRiskAnalysis } = useRiskAnalysis();
  const riskMatrix = useRiskMatrix(riskAnalysis);

  useEffect(() => {
    const combineData = () => {
      if (pipelines.length > 0 && ductoNombres.length > 0) {
        const combinedData = pipelines.map((pipeline) => {
          const ducto = ductoNombres.find(ducto => ducto.Pipeline === pipeline.Pipeline);
          return { ...pipeline, DuctoName: ducto ? ducto.DuctoName : "Ducto no encontrado" };
        });
        setTramosConNombreDeDucto(combinedData);
      }
    };
    combineData();
  }, [pipelines, ductoNombres]);

  const handleAssessmentChange = (assessmentName) => {
    setSelectedAssessment(assessmentName);
    setSelectedDucto(""); 
    setSelectedTramo(""); 
    getPipelines(assessmentName);
  };

  const handleDuctoChange = (ductoName) => {
    setSelectedDucto(ductoName);
    setSelectedTramo(""); 
  };

  const handleTramoChange = (tramoName) => {
    const selectedTramoData = tramosConNombreDeDucto.find(tramo => tramo.Name === tramoName);
    setSelectedTramo(tramoName);
    if (selectedTramoData) {
      setSelectedDucto(selectedTramoData.DuctoName);
    }
  };

  const filteredTramos = selectedDucto
    ? tramosConNombreDeDucto.filter(tramo => tramo.DuctoName === selectedDucto)
    : tramosConNombreDeDucto;

  const filteredDuctos = selectedTramo
    ? ductoNombres.filter(ducto => ducto.DuctoName === filteredTramos.find(tramo => tramo.Name === selectedTramo)?.DuctoName)
    : ductoNombres;

  useEffect(() => {
    const loadDuctoNombres = async () => {
      await getDuctoNombres();
    };
    loadDuctoNombres();
  }, [getDuctoNombres]);

  const handleGenerateMatrix = async () => {
    if (selectedTramo) {  // Asegúrate de usar selectedTramo
      const selectedTramoObj = tramosConNombreDeDucto.find(tramo => tramo.Name === selectedTramo);
      if (selectedTramoObj) {
        await getRiskAnalysis(selectedTramoObj.AnalysisItemID);  // Aquí deberías usar el AnalysisItemID correcto
      }
    }
  };
  

  useEffect(() => {
    if (riskMatrix && riskMatrix.summary) {
      if (riskMatrix.summary.positionCounts && Array.isArray(riskMatrix.summary.positionCounts) && riskMatrix.summary.positionCounts.length > 0) {
        const matrix = Array.from({ length: 7 }, () => Array(7).fill(0));
        riskMatrix.summary.positionCounts.forEach(positionCount => {
          const position = positionCount.position;
          const parts = position.split("-");
          if (parts.length === 2) {
            const rowIndex = parseInt(parts[0].replace("Position ", "").trim()) - 1;
            const colIndex = parseInt(parts[1].trim()) - 1;
            if (!isNaN(rowIndex) && !isNaN(colIndex) && rowIndex >= 0 && rowIndex < 7 && colIndex >= 0 && colIndex < 7) {
              matrix[rowIndex][colIndex] = positionCount.count;
            } else {
              console.warn(`Index out of bounds: Row: ${rowIndex}, Col: ${colIndex}`);
            }
          } else {
            console.warn(`Invalid position format: ${position}`);
          }
        });
        setRiskMatrixData(matrix);
      }
    }
  }, [riskMatrix, riskAnalysis]);

  const isLoading = loadingAssessments || loadingRiskAnalysis;

  return (
    <div className="relative min-h-screen bg-gray-100">
      <TopBar />
      <Sidebar />
      <main className="ml-56 mt-20 transition-all duration-300 p-5">
        <div className="max-w-full bg-white rounded-lg shadow-lg p-5">
          <header className="text-center mb-5">
            <h1 className="text-3xl font-bold text-gray-800">KPI de Riesgo</h1>
            <hr className="border-t border-gray-300 my-3" />
          </header>

          <div className="flex flex-col lg:flex-row gap-6 mb-5 justify-between">
            <div className="flex flex-col w-full lg:w-1/3">
              <label htmlFor="assessment-select" className="text-sm font-medium text-gray-700 mb-1">
                Seleccionar Evaluación:
              </label>
              <select
                id="assessment-select"
                className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent"
                onChange={(e) => handleAssessmentChange(e.target.value)}
                value={selectedAssessment}
              >
                <option value="">Selecciona un estudio</option>
                {approvedAssessments.map(assessment => (
                  <option key={assessment.Assessment_Name} value={assessment.Assessment_Name}>
                    {assessment.Assessment_Name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full lg:w-1/3">
              <label htmlFor="pipeline-select" className="text-sm font-medium text-gray-700 mb-1">
                Seleccionar Ducto:
              </label>
              <select
                id="pipeline-select"
                className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent"
                onChange={(e) => handleDuctoChange(e.target.value)}
                value={selectedDucto}
              >
                <option value="">Selecciona un ducto</option>
                {filteredDuctos.map(ducto => (
                  <option key={ducto.TB_DuctoID} value={ducto.DuctoName}>
                    {ducto.DuctoName}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full lg:w-1/3">
              <label htmlFor="section-select" className="text-sm font-medium text-gray-700 mb-1">
                Seleccionar Tramo:
              </label>
              <select
                id="section-select"
                className="border rounded-md p-2 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-[#265c4f] focus:border-transparent"
                onChange={(e) => handleTramoChange(e.target.value)}
                value={selectedTramo}
              >
                <option value="">Selecciona un tramo</option>
                {filteredTramos.map(tramo => (
                  <option key={tramo.AnalysisItemID} value={tramo.Name}>
                    {tramo.Name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center mb-5">
            <button
              onClick={handleGenerateMatrix}
              className="w-full max-w-xs bg-[#265c4f] hover:bg-[#1d463b] text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out"
            >
              Generar Matriz
            </button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <div className="loader"></div>
            </div>
          ) : (
            riskMatrixData.length > 0 && (
              <RiskMatrix
                matrixData={riskMatrixData}
                riskAnalysis={riskAnalysis}
                riskMatrix={riskMatrix}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
