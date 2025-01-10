import React, { useState, useEffect } from "react";
import useAssessments from "../../hooks/useAssessments";
import useRiskAnalysis from "../../hooks/useRiskAnalysis";
import useRiskMatrix from "../../hooks/useRiskMatrix";
import RiskMatrix from "../../pages/RiskMatrix";
import Sidebar from "../../pages/Sidebar";
import TopBar from "../../pages/TopBar";
import SelectsComponent from "../../pages/SelectsComponent";

const MainPage = () => {
  const [selectedAssessment, setSelectedAssessment] = useState("");
  const [selectedDucto, setSelectedDucto] = useState("");
  const [selectedTramo, setSelectedTramo] = useState("");
  const [tramosConNombreDeDucto, setTramosConNombreDeDucto] = useState([]);
  const [riskMatrixData, setRiskMatrixData] = useState([]);
  const [message, setMessage] = useState("");
  const [analysisLevel, setAnalysisLevel] = useState(""); // Nueva variable de estado

  const {
    approvedAssessments,
    pipelines,
    loading: loadingAssessments,
    getPipelines,
    getDuctoNombres,
    ductoNombres,
  } = useAssessments();
  const {
    getRiskAnalysis,
    riskAnalysis,
    loading: loadingRiskAnalysis,
  } = useRiskAnalysis();
  const riskMatrix = useRiskMatrix(riskAnalysis);

  useEffect(() => {
    const combineData = () => {
      if (pipelines.length > 0 && ductoNombres.length > 0) {
        const combinedData = pipelines.map((pipeline) => {
          const ducto = ductoNombres.find(
            (ducto) => ducto.Pipeline === pipeline.Pipeline
          );
          return {
            ...pipeline,
            DuctoName: ducto ? ducto.DuctoName : "Ducto no encontrado",
          };
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
    const selectedTramoData = tramosConNombreDeDucto.find(
      (tramo) => tramo.Name === tramoName
    );
    setSelectedTramo(tramoName);
    if (selectedTramoData) {
      setSelectedDucto(selectedTramoData.DuctoName);
    }
    setMessage(""); // Limpia el mensaje al seleccionar un tramo
  };

  const filteredTramos = selectedDucto
    ? tramosConNombreDeDucto.filter(
        (tramo) => tramo.DuctoName === selectedDucto
      )
    : tramosConNombreDeDucto;

  const filteredDuctos = selectedTramo
    ? ductoNombres.filter(
        (ducto) =>
          ducto.DuctoName ===
          filteredTramos.find((tramo) => tramo.Name === selectedTramo)
            ?.DuctoName
      )
    : ductoNombres;

  useEffect(() => {
    const loadDuctoNombres = async () => {
      await getDuctoNombres();
    };
    loadDuctoNombres();
  }, [getDuctoNombres]);



  const handleGenerateMatrix = async () => {
    if (selectedTramo) {
      // Si hay un tramo seleccionado, obtenemos el análisis de riesgos solo para ese tramo
      const selectedTramoObj = tramosConNombreDeDucto.find(
        (tramo) => tramo.Name === selectedTramo
      );
      if (selectedTramoObj) {
        setAnalysisLevel("tramo");
        await getRiskAnalysis([selectedTramoObj.AnalysisItemID]); // Se pasa un array con un solo ID
        setMessage(""); // Limpia el mensaje si se genera la matriz
      }
    } else if (selectedDucto) {
      // Si hay un ducto seleccionado pero no un tramo, obtenemos los tramos del ducto
      const tramosDelDucto = tramosConNombreDeDucto.filter(
        (tramo) => tramo.DuctoName === selectedDucto
      );
      // Extraemos los AnalysisItemID de todos los tramos del ducto y los pasamos en un solo array
      const analysisItemIds = tramosDelDucto.map(
        (tramo) => tramo.AnalysisItemID
      );
      setAnalysisLevel("ducto");
      // Llamamos a getRiskAnalysis con el array de todos los IDs
      await getRiskAnalysis(analysisItemIds);
      setMessage(""); // Limpia el mensaje si se genera la matriz
    }
  };

  useEffect(() => {
    if (riskMatrix && riskMatrix.summary) {
      if (
        riskMatrix.summary.positionCounts &&
        Array.isArray(riskMatrix.summary.positionCounts) &&
        riskMatrix.summary.positionCounts.length > 0
      ) {
        const matrix = Array.from({ length: 7 }, () => Array(7).fill(0));
        riskMatrix.summary.positionCounts.forEach((positionCount) => {
          const position = positionCount.position;
          const parts = position.split("-");
          if (parts.length === 2) {
            const rowIndex =
              parseInt(parts[0].replace("Position ", "").trim()) - 1;
            const colIndex = parseInt(parts[1].trim()) - 1;
            if (
              !isNaN(rowIndex) &&
              !isNaN(colIndex) &&
              rowIndex >= 0 &&
              rowIndex < 7 &&
              colIndex >= 0 &&
              colIndex < 7
            ) {
              matrix[rowIndex][colIndex] = positionCount.count;
            } else {
              console.warn(
                `Index out of bounds: Row: ${rowIndex}, Col: ${colIndex}`
              );
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
      {/* <TopBar />
      <Sidebar /> */}
      <main className="  transition-all duration-300 p-5">
        <div className="max-w-full bg-white rounded-lg shadow-lg p-5">
          <header className="text-center mb-5">
            <h1 className="text-3xl font-bold text-gray-800">KPI de Riesgo</h1>
            <hr className="border-t border-gray-300 my-3" />
          </header>

          <SelectsComponent
            selectedAssessment={selectedAssessment}
            selectedDucto={selectedDucto}
            selectedTramo={selectedTramo}
            approvedAssessments={approvedAssessments}
            filteredDuctos={filteredDuctos}
            filteredTramos={filteredTramos}
            handleAssessmentChange={handleAssessmentChange}
            handleDuctoChange={handleDuctoChange}
            handleTramoChange={handleTramoChange}
          />

          <div className="flex justify-center mb-5">
            <button
              onClick={handleGenerateMatrix}
              className="w-full max-w-xs bg-[#265c4f] hover:bg-[#1d463b] text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out"
            >
              Generar Matriz
            </button>
          </div>
          {message && (
            <div className="text-red-500 text-center mb-5">{message}</div>
          )}

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
                analysisLevel={analysisLevel}
                ductoName={selectedDucto}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
