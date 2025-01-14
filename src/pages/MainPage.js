import React, { useState, useEffect, useMemo, useCallback } from "react";
import useAssessments from "../hooks/useAssessments";
import useRiskAnalysis from "../hooks/useRiskAnalysis";
import useRiskMatrix from "../hooks/useRiskMatrix";
import RiskMatrix from "./RiskMatrix";
import SelectsComponent from "./SelectsComponent";
import Swal from "sweetalert2";

const MainPage = ({ currentPath }) => {
  const [selectedAssessment, setSelectedAssessment] = useState("");
  const [selectedDucto, setSelectedDucto] = useState("");
  const [selectedTramo, setSelectedTramo] = useState("");
  const [tramosConNombreDeDucto, setTramosConNombreDeDucto] = useState([]);
  const [riskMatrixData, setRiskMatrixData] = useState([]);
  const [message, setMessage] = useState("");
  const [analysisLevel, setAnalysisLevel] = useState("");

  const {
    approvedAssessments,
    pipelines,
    loading: loadingAssessments,
    getPipelines: fetchPipelines,
    getDuctoNombres: fetchDuctoNombres,
    ductoNombres,
  } = useAssessments();

  const {
    getRiskAnalysis: fetchRiskAnalysis,
    riskAnalysis,
    loading: loadingRiskAnalysis,
  } = useRiskAnalysis();

  const riskMatrix = useRiskMatrix(riskAnalysis);

  // Memoized functions to avoid unnecessary re-renders
  const getPipelines = useCallback(fetchPipelines, []);
  const getDuctoNombres = useCallback(fetchDuctoNombres, []);
  const getRiskAnalysis = useCallback(fetchRiskAnalysis, []);

  // Combine pipelines and ductoNombres into tramosConNombreDeDucto
  useEffect(() => {
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
  }, [pipelines, ductoNombres]);

  // Load ductoNombres on component mount
  useEffect(() => {
    getDuctoNombres();
  }, [getDuctoNombres]);

  const handleAssessmentChange = useCallback((assessmentName) => {
    setSelectedAssessment(assessmentName);
    getPipelines(assessmentName);
  }, [getPipelines]);

  const handleDuctoChange = useCallback((ductoName) => {
    setSelectedDucto(ductoName);
  }, []);

  const handleTramoChange = useCallback((tramoName) => {
    setSelectedTramo(tramoName);
  }, []);

  const filteredTramos = useMemo(() => {
    return selectedDucto
      ? tramosConNombreDeDucto.filter((tramo) => tramo.DuctoName === selectedDucto)
      : tramosConNombreDeDucto;
  }, [selectedDucto, tramosConNombreDeDucto]);

  const filteredDuctos = useMemo(() => ductoNombres, [ductoNombres]);

  const handleGenerateMatrix = async () => {
    if (!selectedAssessment) {
      Swal.fire({
        icon: "warning",
        title: "Atención",
        html: `Seleccione algún assessment`,
        confirmButtonText: "Entendido",
        customClass: {
          confirmButton: "swal-custom-button",
        },
      });
      return;
    }

    if (selectedTramo) {
      const selectedTramoObj = tramosConNombreDeDucto.find(
        (tramo) => tramo.Name === selectedTramo
      );
      if (selectedTramoObj) {
        setAnalysisLevel("tramo");
        await getRiskAnalysis([selectedTramoObj.AnalysisItemID]);
        setMessage("");
      }
    } else if (selectedDucto) {
      const tramosDelDucto = tramosConNombreDeDucto.filter(
        (tramo) => tramo.DuctoName === selectedDucto
      );
      const analysisItemIds = tramosDelDucto.map((tramo) => tramo.AnalysisItemID);
      setAnalysisLevel("ducto");
      await getRiskAnalysis(analysisItemIds);
      setMessage("");
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
            }
          }
        });
        setRiskMatrixData(matrix);
      }
    }
  }, [riskMatrix]);

  const isLoading = loadingAssessments || loadingRiskAnalysis;

  return (
    <div className="relative min-h-screen bg-gray-100">
      <main className="transition-all duration-300 p-5">
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
            currentPath={currentPath}
            setSelectedDucto={setSelectedDucto}
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
