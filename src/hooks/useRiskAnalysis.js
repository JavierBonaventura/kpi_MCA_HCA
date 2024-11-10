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
        const tramo = tramosData.find(tramo => tramo.TransmissionLineID === item.AnalysisItemID);
        return tramo ? { ...item, TramoName: tramo.TramoName } : item;
      });

      // Ordenar los análisis de riesgo por número de tramo extraído de `TramoName`
      const sortedRiskAnalysis = enrichedRiskAnalysis.sort((a, b) => {
        const tramoNumberA = parseInt(a.TramoName?.match(/\d+$/)[0], 10);
        const tramoNumberB = parseInt(b.TramoName?.match(/\d+$/)[0], 10);
        return tramoNumberA - tramoNumberB;
      });

      // Agregar `segmentNumber`, `relativeBegin`, y `relativeEnd` a cada item
      let currentTramo = null;
      let segmentCounter = 0;
      let accumulatedEnd = 0;  // Este valor no se reinicia entre tramos

      const finalRiskAnalysis = sortedRiskAnalysis.map((item) => {
        const tramoNumber = parseInt(item.TramoName?.match(/\d+$/)[0], 10);

        // Reiniciar el contador de segmento si cambiamos de tramo
        if (tramoNumber !== currentTramo) {
          currentTramo = tramoNumber;
          segmentCounter = 0; // Reiniciar contador de segmento en el nuevo tramo
        }

        // Calcular `relativeBegin` y `relativeEnd` para el segmento actual
        const relativeBegin = accumulatedEnd;
        const relativeEnd = relativeBegin + (item.End - item.Begin);

        // Crear el nuevo objeto con `segmentNumber`, `relativeBegin`, y `relativeEnd`
        const newItem = {
          ...item,
          segmentNumber: segmentCounter,
          relativeBegin: relativeBegin,
          relativeEnd: relativeEnd,
        };

        // Actualizar `accumulatedEnd` al `relativeEnd` actual para el siguiente segmento o tramo
        accumulatedEnd = relativeEnd;
        segmentCounter += 1;

        return newItem;
      });

      console.log('Análisis de riesgo con segmentNumber, relativeBegin y relativeEnd:', finalRiskAnalysis); // Verificar en consola
      
      // Pasar `finalRiskAnalysis` directamente a `riskAnalysis`
      setRiskAnalysis(finalRiskAnalysis);

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
