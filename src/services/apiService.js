// src/services/apiService.js

// Función para obtener evaluaciones aprobadas
export const fetchApprovedAssessments = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/approved-assessments');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching approved assessments:', error);
    throw error;
  }
};

// Función para obtener ductos por evaluación
export const fetchPipelinesByAssessment = async (assessmentName) => {
  try {
    const response = await fetch(`http://localhost:5000/api/risk-analysis/pipelines/${assessmentName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching pipelines:', error);
    throw error;
  }
};

// Función para obtener análisis de riesgo por ID de elemento
export const fetchRiskAnalysisByItemId = async (analysisItemId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/risk-analysis/item/${analysisItemId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching risk analysis:', error);
    throw error;
  }
};

// Función para obtener un tramo de transmisión
export const fetchTransmissionSegment = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/tramo');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching transmission segment:', error);
    throw error;
  }
};

// Función para obtener evaluaciones aprobadas por ID de línea de transmisión
export const fetchApprovedAssessmentsForSegment = async (transmissionLineID) => {
  try {
    const response = await fetch(`http://localhost:5000/api/tramo/${transmissionLineID}/approved-assessments`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching approved assessments for segment:', error);
    throw error;
  }
};

// Función para obtener todos los ductos
export const fetchAllDucts = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/ductos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all ducts:', error);
    throw error;
  }
};

// Función para obtener todos los tramos
export const fetchTramosData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/tramos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all segments:', error);
    throw error;
  }
};

// Función para obtener tramos por nombre de ducto
export const fetchSegmentsByDuctName = async (ductoName) => {
  try {
    const response = await fetch(`http://localhost:5000/api/ductos/${ductoName}/tramos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching segments by duct name:', error);
    throw error;
  }
};

// Función para obtener tramos por ID de ducto
export const fetchSegmentsByDuctID = async (tbDuctoID) => {
  try {
    const response = await fetch(`http://localhost:5000/api/ductos/tb/${tbDuctoID}/tramos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching segments by duct ID:', error);
    throw error;
  }
};

// Función para obtener ducto por ID de línea de transmisión
export const fetchDuctByTransmissionLineID = async (transmissionLineID) => {
  try {
    const response = await fetch(`http://localhost:5000/api/ductos/tramo/${transmissionLineID}/ducto`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching duct by transmission line ID:', error);
    throw error;
  }
};

// Función para obtener tramo por ID de línea de transmisión
export const fetchSegmentByTransmissionLineID = async (transmissionLineID) => {
  try {
    const response = await fetch(`http://localhost:5000/api/tramo/${transmissionLineID}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching segment by transmission line ID:', error);
    throw error;
  }
};
