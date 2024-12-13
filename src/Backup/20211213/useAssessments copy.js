import { useState, useEffect } from 'react';
import { fetchApprovedAssessments, fetchPipelinesByAssessment, fetchAllDucts } from '../services/apiService';

const useAssessments = () => {
  const [approvedAssessments, setApprovedAssessments] = useState([]);
  const [pipelines, setPipelines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ductoNombres, setDuctoNombres] = useState([]); // Estado para los nombres de todos los ductos

  useEffect(() => {
    const loadApprovedAssessments = async () => {
      try {
        const assessments = await fetchApprovedAssessments();
        setApprovedAssessments(assessments);
      } catch (error) {
        console.error('Error fetching approved assessments:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadApprovedAssessments();
  }, []);

  const getPipelines = async (assessmentName) => {
    if (assessmentName) {
      try {
        const data = await fetchPipelinesByAssessment(assessmentName);
        setPipelines(data);
      } catch (error) {
        console.error('Error fetching pipelines:', error);
      }
    } else {
      setPipelines([]);
    }
  };

  const getDuctoNombres = async () => { // Cambiado el nombre de la función para mayor claridad
    try {
      const ducts = await fetchAllDucts();
      setDuctoNombres(ducts); // Guardar los nombres de los ductos en el estado
      console.log(ducts)
    } catch (error) {
      console.error('Error fetching ducts:', error);
    }
  };

  return {
    approvedAssessments,
    pipelines,
    loading,
    getPipelines,
    ductoNombres, // Devuelve los nombres de los ductos
    getDuctoNombres, // Función para obtener los nombres de los ductos
  };
};

export default useAssessments;
