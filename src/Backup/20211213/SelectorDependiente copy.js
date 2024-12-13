import React, { useEffect, useState } from 'react';
import useAssessments from '../../hooks/useAssessments';
import { fetchAllDucts, fetchSegmentsByDuctName, fetchPipelinesByAssessment } from '../../services/apiService'; // Asegúrate de importar esta función

const DropdownMenu = () => {
  const {
    approvedAssessments,
    loading,
    getPipelines,
    pipelines,
  } = useAssessments();


  
  const [selectedAssessment, setSelectedAssessment] = useState('');
  const [selectedPipeline, setSelectedPipeline] = useState('');
  const [selectedDucto, setSelectedDucto] = useState('');
  const [selectedSegment, setSelectedSegment] = useState('');
  const [ducts, setDucts] = useState([]); // Estado para los ductos
  const [segments, setSegments] = useState([]); // Estado para los tramos


  // Cargar todos los ductos cuando el componente se monta
  useEffect(() => {
    const loadDucts = async () => {
      try {
        const allDucts = await fetchAllDucts(); // Cargar todos los ductos
        setDucts(allDucts);
      } catch (error) {
        console.error('Error fetching all ducts:', error);
      }
    };
    
    loadDucts();
  }, []);

  // Cuando se selecciona un estudio, obtener los ductos relacionados
  const handleAssessmentChange = async (event) => {
 
    const assessmentName = event.target.value;
    setSelectedAssessment(assessmentName);
    await getPipelines(assessmentName); // Cargar los pipelines relacionados
    setSelectedPipeline(''); // Limpiar la selección de ducto
    setSelectedDucto(''); // Limpiar la selección de tramo
    setSegments([]); // Limpiar los tramos
  };

  


  // Cuando se selecciona un ducto, obtener los tramos
  const handlePipelineChange = async (event) => {
    const pipelineCode = event.target.value;
    setSelectedPipeline(pipelineCode);
    const duct = ducts.find((duct) => duct.Pipeline === pipelineCode);
    if (duct) {
      const ductName = duct.DuctoName;
      setSelectedDucto(ductName);
      const fetchedSegments = await fetchSegmentsByDuctName(ductName); // Obtener tramos del ducto
      setSegments(fetchedSegments);
    }
    setSelectedSegment(''); // Limpiar la selección del tramo
  };

  // Cuando se selecciona un tramo
  const handleSegmentChange = (event) => {
    setSelectedSegment(event.target.value);
  };

  // Mapea los pipelines a sus nombres correspondientes
  const getPipelineName = (pipelineCode) => {
    const duct = ducts.find((duct) => duct.Pipeline === pipelineCode);
    return duct ? duct.DuctoName : pipelineCode; // Devuelve el nombre si lo encuentra, sino devuelve el código
  };

  // Eliminar duplicados basados en el código del pipeline (usamos un Set)
  const uniquePipelines = Array.from(new Set(pipelines.map(pipeline => pipeline.Pipeline)))
    .map(pipelineCode => {
      return pipelines.find(pipeline => pipeline.Pipeline === pipelineCode);
    });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <label htmlFor="assessments-dropdown">Select an Assessment:</label>
      <select
        id="assessments-dropdown"
        onChange={handleAssessmentChange}
        value={selectedAssessment}
      >
        <option value="" disabled>
          -- Select an assessment --
        </option>
        {approvedAssessments.map((assessment) => (
          <option key={assessment.Assessment_Name} value={assessment.Assessment_Name}>
            {assessment.Assessment_Name}
          </option>
        ))}
      </select>

      {selectedAssessment && (
        <>
          <label htmlFor="pipelines-dropdown">Select a Pipeline:</label>
          <select
            id="pipelines-dropdown"
            onChange={handlePipelineChange}
            value={selectedPipeline}
          >
            <option value="" disabled>
              -- Select a pipeline --
            </option>
            {uniquePipelines.length > 0 ? (
              uniquePipelines.map((pipeline) => (
                <option key={pipeline.Pipeline} value={pipeline.Pipeline}>
                  {getPipelineName(pipeline.Pipeline)} {/* Muestra el nombre del ducto */}
                </option>
              ))
            ) : (
              <option value="">No pipelines available</option>
            )}
          </select>
        </>
      )}

      {selectedPipeline && (
        <>
          <label htmlFor="segments-dropdown">Select a Segment:</label>
          <select
            id="segments-dropdown"
            onChange={handleSegmentChange}
            value={selectedSegment}
          >
            <option value="" disabled>
              -- Select a segment --
            </option>
            {segments.length > 0 ? (
              segments.map((segment) => (
                <option key={segment.TB_TramoID} value={segment.TB_TramoID}>
                  {segment.TramoName} {/* Muestra el nombre del tramo */}
                </option>
              ))
            ) : (
              <option value="">No segments available</option>
            )}
          </select>
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
