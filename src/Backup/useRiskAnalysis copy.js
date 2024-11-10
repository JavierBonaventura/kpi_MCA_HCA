// src/hooks/useRiskAnalysis.js

import { useState } from 'react';
import { fetchRiskAnalysisByItemId } from '../services/apiService';

const useRiskAnalysis = () => {
  const [riskAnalysis, setRiskAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRiskAnalysis = async (analysisItemIds) => {
    setLoading(true);
    setError(null); 
    try {
      // Aquí se hace una sola llamada para obtener los análisis de riesgos de todos los tramos
      const riskAnalysisPromises = analysisItemIds.map(id => fetchRiskAnalysisByItemId(id)); // Promesas para cada ID
      const riskAnalysisData = await Promise.all(riskAnalysisPromises); // Esperamos a que todas las promesas se resuelvan
  
      // Aplanamos el arreglo de resultados (si fetchRiskAnalysisByItemId devuelve un objeto que necesitas combinar)
      const allRiskAnalysis = riskAnalysisData.flat(); // Si los datos vienen como arrays, usamos flat()
  
      setRiskAnalysis(allRiskAnalysis);  // Se pasa el arreglo de todos los análisis
      //console.log("allRiskAnalysis", allRiskAnalysis); // Imprimir todos los resultados
    } catch (err) {
      setError(err);
      console.error('Error fetching risk analysis:', err);
    } finally {
      setLoading(false);
    }
  };
  

  return {
    riskAnalysis,
    loading,
    error,
    getRiskAnalysis,
  };
};

export default useRiskAnalysis;
