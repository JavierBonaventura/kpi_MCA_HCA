import React, { useEffect, useState } from "react";
import useAssessments from "../hooks/useApprovedAssessments";

const MainPage = () => {
  const {
    approvedAssessments,
    pipelines,
    loading,
    getPipelines,
    ductoNombres,
    getDuctoNombres,
  } = useAssessments();
  
  const [selectedAssessment, setSelectedAssessment] = useState("");
  const [selectedDucto, setSelectedDucto] = useState("");
  const [selectedTramo, setSelectedTramo] = useState("");
  const [tramosConNombreDeDucto, setTramosConNombreDeDucto] = useState([]);

  useEffect(() => {
    // Cargar nombres de ductos al iniciar
    const loadDuctoNombres = async () => {
      await getDuctoNombres();
    };
    loadDuctoNombres();
  }, [getDuctoNombres]);

  useEffect(() => {
    const combineData = () => {
      if (pipelines.length > 0 && ductoNombres.length > 0) {
        const combinedData = pipelines.map((pipeline) => {
          // Busca el nombre del ducto que coincida con el código de ducto
          const ducto = ductoNombres.find((ducto) => ducto.Pipeline === pipeline.Pipeline);
          return {
            ...pipeline,
            DuctoName: ducto ? ducto.DuctoName : "Ducto no encontrado", // Asigna el nombre del ducto
          };
        });
        setTramosConNombreDeDucto(combinedData);
      }
    };

    combineData();
  }, [pipelines, ductoNombres]);

  const handleAssessmentChange = (assessmentName) => {
    setSelectedAssessment(assessmentName);
    setSelectedDucto(""); // Reiniciar ducto seleccionado
    setSelectedTramo(""); // Reiniciar tramo seleccionado
    getPipelines(assessmentName); // Llama a getPipelines con el estudio seleccionado
  };

  const handleDuctoChange = (ductoName) => {
    setSelectedDucto(ductoName);
    setSelectedTramo(""); // Reiniciar tramo seleccionado al cambiar el ducto
  };

  const handleTramoChange = (tramoName) => {
    const selectedTramoData = tramosConNombreDeDucto.find(tramo => tramo.Name === tramoName);
    setSelectedTramo(tramoName);
    
    // Al seleccionar un tramo, establecer el ducto correspondiente
    if (selectedTramoData) {
      setSelectedDucto(selectedTramoData.DuctoName);
    }
  };

  // Filtrar tramos por ducto seleccionado
  const filteredTramos = selectedDucto
    ? tramosConNombreDeDucto.filter(tramo => tramo.DuctoName === selectedDucto)
    : tramosConNombreDeDucto;

  // Filtrar ductos por tramo seleccionado
  const filteredDuctos = selectedTramo
    ? ductoNombres.filter(ducto => ducto.DuctoName === filteredTramos.find(tramo => tramo.Name === selectedTramo)?.DuctoName)
    : ductoNombres;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Selecciona un Estudio</h1>
      <select onChange={(e) => handleAssessmentChange(e.target.value)} value={selectedAssessment}>
        <option value="">Selecciona un estudio</option>
        {approvedAssessments.map((assessment) => (
          <option key={assessment.Assessment_Name} value={assessment.Assessment_Name}>
            {assessment.Assessment_Name}
          </option>
        ))}
      </select>

      <h2>Selecciona un Ducto</h2>
      <select onChange={(e) => handleDuctoChange(e.target.value)} value={selectedDucto}>
        <option value="">Selecciona un ducto</option>
        {filteredDuctos.map((ducto) => (
          <option key={ducto.TB_DuctoID} value={ducto.DuctoName}>
            {ducto.DuctoName}
          </option>
        ))}
      </select>

      <h2>Selecciona un Tramo</h2>
      <select onChange={(e) => handleTramoChange(e.target.value)} value={selectedTramo}>
        <option value="">Selecciona un tramo</option>
        {filteredTramos.map((tramo) => (
          <option key={tramo.AnalysisItemID} value={tramo.Name}>
            {tramo.Name}
          </option>
        ))}
      </select>

      <h2>Tramos con Nombre de Ducto</h2>
      <ul>
        {filteredTramos.map((tramo) => (
          <li key={tramo.AnalysisItemID}>
            {tramo.Name} - {tramo.DuctoName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
