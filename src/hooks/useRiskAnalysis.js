// src/hooks/useRiskAnalysis.js

import { useState } from 'react';
import { fetchRiskAnalysisByItemId } from '../services/apiService';

const useRiskAnalysis = () => {
  const [riskAnalysis, setRiskAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRiskAnalysis = async (analysisItemId) => {
    setLoading(true);
    setError(null); // Resetea el error al inicio de la llamada

    try {
      const data = await fetchRiskAnalysisByItemId(analysisItemId);
      setRiskAnalysis(data); // Guarda los datos obtenidos
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
