// src/services/apiService.js

export const fetchApprovedAssessments = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/approved-assessments'); // Ajusta la URL según tu API
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Devuelve los datos de evaluaciones aprobadas
  } catch (error) {
    console.error('Error fetching approved assessments:', error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};

export const fetchPipelinesByAssessment = async (assessmentName) => {
  try {
    const response = await fetch(`http://localhost:5000/api/risk-analysis/pipelines/${assessmentName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Devuelve los datos de los ductos
  } catch (error) {
    console.error('Error fetching pipelines:', error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};

// Nueva función para obtener el análisis de riesgo
export const fetchRiskAnalysisByItemId = async (analysisItemId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/risk-analysis/item/${analysisItemId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Devuelve los datos del análisis de riesgo
  } catch (error) {
    console.error('Error fetching risk analysis:', error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};
