// src/hooks/useRiskAnalysis.js

import { useState } from 'react';
import { fetchRiskAnalysisByItemId, fetchTramosData } from '../services/apiService';

const useRiskAnalysis = () => {
  const [riskAnalysis, setRiskAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRiskAnalysis = async (analysisItemIds) => {
    setLoading(true);
    setError(null); 
    try {
      // Llamada para obtener los análisis de riesgo de todos los tramos
      const riskAnalysisPromises = analysisItemIds.map(id => fetchRiskAnalysisByItemId(id));
      const riskAnalysisData = await Promise.all(riskAnalysisPromises);
      const allRiskAnalysis = riskAnalysisData.flat();

      // Llamada para obtener todos los tramos
      const tramosData = await fetchTramosData();


      // Enriquecer cada elemento de `allRiskAnalysis` con `TramoName`
      const enrichedRiskAnalysis = allRiskAnalysis.map(item => {
        // Buscar el tramo que coincide con el `AnalysisItemID`
        const tramo = tramosData.find(tramo => tramo.TransmissionLineID === item.AnalysisItemID);
        // Agregar `TramoName` si existe el tramo
        return tramo ? { ...item, TramoName: tramo.TramoName } : item;
      });

      setRiskAnalysis(enrichedRiskAnalysis);
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
