import React, { useEffect, useState } from "react";
import useAssessments from "../../hooks/useAssessments";
import {
  fetchAllDucts,
  fetchPipelinesByAssessment,
} from "../../services/apiService";

const DropdownMenu = () => {
  const { approvedAssessments } = useAssessments();
  const [todosLosDuctosPorEvaluacion, setTodosLosDuctosPorEvaluacion] =
    useState({});
  const [todosLosDuctos, setTodosLosDuctos] = useState([]);
  const [filteredDuctos, setFilteredDuctos] = useState([]);

  const [todosLosDuctosPorEstudioSeleccionado, settodosLosDuctosPorEstudioSeleccionado] = useState([]);
  const [todosLosTramosPorEstudioSeleccionado, settodosLosTramosPorEstudioSeleccionado] = useState([]);

  const [todosLosDuctosPorTramoSeleccionado, settodosLosDuctosPorTramoSeleccionado] = useState([]);
  const [todosLosEstudiosPorTramoSeleccionado, settodosLosEstudiosPorTramoSeleccionado] = useState([]);

  const [todosLosTramosPorDuctoSeleccionado, settodosLosTramosPorDuctoSeleccionado] = useState([]);
  const [todosLosEstudiosPorDuctoSeleccionado, settodosLosEstudiosPorDuctoSeleccionado] = useState([]);





  // Alias directo para approvedAssessments
  const todosLosestudios = approvedAssessments;

  // State variables for selected values
  const [selectedEstudio, setSelectedEstudio] = useState("");
  const [selectedDucto, setSelectedDucto] = useState("");
  const [selectedTramo, setSelectedTramo] = useState("");
  // Cargar los ductos por evaluación solo cuando los estudios cambian
  useEffect(() => {
    const loadDuctsByAssessments = async () => {
      try {
        const ductsByAssessment = {};

        for (const { Assessment_Name: assessmentName } of approvedAssessments) {
          const ducts = await fetchPipelinesByAssessment(assessmentName);
          ductsByAssessment[assessmentName] = ducts;
        }

        setTodosLosDuctosPorEvaluacion(ductsByAssessment);
      } catch (error) {
        console.error("Error fetching ducts by assessments:", error);
      }
    };

    if (
      approvedAssessments.length > 0 &&
      !Object.keys(todosLosDuctosPorEvaluacion).length
    ) {
      loadDuctsByAssessments(); // Solo cargar si no hay datos previos
    }
  }, [approvedAssessments, todosLosDuctosPorEvaluacion]); // Solo dependemos de approvedAssessments y la longitud de todosLosDuctosPorEvaluacion

  useEffect(() => {
    const loadDucts = async () => {
      try {
        const allDucts = await fetchAllDucts();
        setTodosLosDuctos(allDucts);
      } catch (error) {
        console.error("Error fetching all ducts:", error);
      }
    };

    if (!todosLosDuctos.length) {
      loadDucts(); // Solo cargar si no se han cargado previamente
    }
  }, [todosLosDuctos]); // Dependemos solo de todosLosDuctos

  // Filtrar los ductos y evitar la ejecución innecesaria
  useEffect(() => {
    if (todosLosDuctosPorEvaluacion && todosLosDuctos.length > 0) {
      const pipelines = new Set(
        Object.values(todosLosDuctosPorEvaluacion).flatMap((ductos) =>
          ductos.map((ducto) => ducto.Pipeline)
        )
      );

      const filtered = todosLosDuctos.filter((ducto) =>
        pipelines.has(ducto.Pipeline)
      );
      if (filtered.length !== filteredDuctos.length) {
        setFilteredDuctos(filtered); // Actualizamos solo si el filtro cambia
      }
    }
  }, [todosLosDuctosPorEvaluacion, todosLosDuctos, filteredDuctos]); // Controlamos las dependencias

  // Agregar las claves de estudio y ducto a los items
  useEffect(() => {
    if (todosLosDuctosPorEvaluacion && filteredDuctos.length > 0) {
      const updatedDuctosPorEvaluacion = { ...todosLosDuctosPorEvaluacion };

      for (const [assessmentName, ductos] of Object.entries(
        updatedDuctosPorEvaluacion
      )) {
        updatedDuctosPorEvaluacion[assessmentName] = ductos.map((ducto) => {
          const ductoDetails = filteredDuctos.find(
            (filteredDucto) => filteredDucto.Pipeline === ducto.Pipeline
          );

          return {
            ...ducto,
            nombreDeEstudio: assessmentName, // Nombre del estudio
            nombreDelDucto: ductoDetails
              ? ductoDetails.DuctoName
              : "Desconocido", // Nombre del ducto
          };
        });
      }

      if (
        JSON.stringify(updatedDuctosPorEvaluacion) !==
        JSON.stringify(todosLosDuctosPorEvaluacion)
      ) {
        setTodosLosDuctosPorEvaluacion(updatedDuctosPorEvaluacion); // Solo actualizar si el objeto ha cambiado
      }
    }
  }, [todosLosDuctosPorEvaluacion, filteredDuctos, todosLosDuctos]); // Dependencias controladas

  // Debugging logs
  useEffect(() => {
    console.log("Todos los estudios:", todosLosestudios);
    console.log("Todos los ductos:", todosLosDuctos);
    console.log(
      "Todos los ductos por evaluación:",
      todosLosDuctosPorEvaluacion
    );
    console.log("Ductos filtrados:", filteredDuctos);
  }, [
    todosLosestudios,
    todosLosDuctos,
    todosLosDuctosPorEvaluacion,
    filteredDuctos,
  ]);

  // Handle selection change for Estudio, Ducto, and Tramo
  const handleEstudioChange = (event) => {
    setSelectedEstudio(event.target.value);
  };

  const handleDuctoChange = (event) => {
    setSelectedDucto(event.target.value);
  };

  const handleTramoChange = (event) => {
    setSelectedTramo(event.target.value);
  };

  console.log("selectedEstudio", selectedEstudio);
  console.log("selectedDucto", selectedDucto);
  console.log("selectedTramo", selectedTramo);



  // filtrado de Ductos en funcion del estudio

  useEffect(() => {
    console.log("filtrado de Ductos en funcion del estudio")

    if (selectedEstudio && todosLosDuctosPorEvaluacion[selectedEstudio]) {
      const todosLosDuctosPorEstudioSeleccionado = todosLosDuctosPorEvaluacion[selectedEstudio].map(ducto => ducto.Pipeline);
      settodosLosDuctosPorEstudioSeleccionado(todosLosDuctosPorEstudioSeleccionado);
      console.log("todosLosDuctosPorEstudioSeleccionado", todosLosDuctosPorEstudioSeleccionado);
    } else {
      settodosLosDuctosPorEstudioSeleccionado([]); 
    }
  }, [selectedEstudio, todosLosDuctosPorEvaluacion]);
  
  

  // filtrado de tramos en funcion del estudio
  useEffect(() => {
    console.log("filtrado de tramos en funcion del estudio")

    if (selectedEstudio && todosLosDuctosPorEvaluacion[selectedEstudio]) {
      const todosLosTramosPorEstudioSeleccionado  = todosLosDuctosPorEvaluacion[selectedEstudio].map(tramo => tramo.Name);
      settodosLosTramosPorEstudioSeleccionado(todosLosTramosPorEstudioSeleccionado );
      console.log("todosLosTramosPorEstudioSeleccionado", todosLosTramosPorEstudioSeleccionado)
    } else {
      settodosLosTramosPorEstudioSeleccionado([]); 
    }
  }, [selectedEstudio, todosLosDuctosPorEvaluacion]);



  // filtrado de Ducto en funcion del Tramo
  useEffect(() => {
    if (selectedTramo) {
      // Buscar el nombreDelDucto del tramo seleccionado
      for (const estudio in todosLosDuctosPorEvaluacion) {
       

        const ductos = todosLosDuctosPorEvaluacion[estudio];
      
        const encontrado = ductos.find(ducto => ducto.Name === selectedTramo);
        console.log("encontrado", encontrado)
        if (encontrado) {
          settodosLosDuctosPorTramoSeleccionado(encontrado.nombreDelDucto);
          console.log("todosLosDuctosPorTramoSeleccionado", todosLosDuctosPorTramoSeleccionado);

          break; // Terminar búsqueda si ya lo encontramos
        }
      }
    }
  }, [selectedTramo, todosLosDuctosPorEvaluacion]);


    // filtrado del Estudio en funcion del Tramo
    
    useEffect(() => {
      if (selectedTramo) {
        // Inicializamos un arreglo vacío para los estudios encontrados
        const estudiosEncontrados = [];
  
        // Recorrer todos los estudios en todosLosDuctosPorEvaluacion
        for (const estudio in todosLosDuctosPorEvaluacion) {
          const ductos = todosLosDuctosPorEvaluacion[estudio];
          
          // Buscar todos los estudios que tengan el nombre del tramo
          const estudiosCoincidentes = ductos.filter(ducto => ducto.Name.includes(selectedTramo));
          
          // Agregar los estudios encontrados al arreglo
          estudiosCoincidentes.forEach(ducto => {
            estudiosEncontrados.push(ducto.nombreDeEstudio);
          });
        }
  
        // Guardamos los estudios encontrados en el estado
        settodosLosEstudiosPorTramoSeleccionado(estudiosEncontrados);
        console.log("todosLosEstudiosPorTramoSeleccionado", todosLosEstudiosPorTramoSeleccionado);
      }
    }, [selectedTramo, todosLosDuctosPorEvaluacion]);


      // Filtrado de Tramos en función del Ducto Seleccionado
  useEffect(() => {
    if (selectedDucto) {
      // Inicializamos un arreglo vacío para los tramos encontrados
      const tramosEncontrados = [];

      // Recorrer todos los estudios en todosLosDuctosPorEvaluacion
      for (const estudio in todosLosDuctosPorEvaluacion) {
        const ductos = todosLosDuctosPorEvaluacion[estudio];

        // Buscar todos los tramos que tengan el nombreDelDucto seleccionado
        const tramosCoincidentes = ductos.filter(ducto => ducto.nombreDelDucto === selectedDucto);

        // Agregar los tramos encontrados al arreglo
        tramosCoincidentes.forEach(ducto => {
          tramosEncontrados.push(ducto.Name);
        });
      }

      // Guardamos los tramos encontrados en el estado
      settodosLosTramosPorDuctoSeleccionado(tramosEncontrados);
      console.log("todosLosTramosPorDuctoSeleccionado", tramosEncontrados);
    }
  }, [selectedDucto, todosLosDuctosPorEvaluacion]);

  // Filtrado de Estudios en función del Ducto Seleccionado
  useEffect(() => {
    if (selectedDucto) {
      // Inicializamos un arreglo vacío para los estudios encontrados
      const estudiosEncontrados = [];

      // Recorrer todos los estudios en todosLosDuctosPorEvaluacion
      for (const estudio in todosLosDuctosPorEvaluacion) {
        const ductos = todosLosDuctosPorEvaluacion[estudio];

        // Buscar todos los estudios que tengan el nombreDelDucto seleccionado
        const estudiosCoincidentes = ductos.filter(ducto => ducto.nombreDelDucto === selectedDucto);

        // Agregar los estudios encontrados al arreglo
        estudiosCoincidentes.forEach(ducto => {
          estudiosEncontrados.push(ducto.nombreDeEstudio);
        });
      }

      // Guardamos los estudios encontrados en el estado
      settodosLosEstudiosPorDuctoSeleccionado(estudiosEncontrados);
      console.log("todosLosEstudiosPorDuctoSeleccionado", estudiosEncontrados);
    }
  }, [selectedDucto, todosLosDuctosPorEvaluacion]);



  
  



  return (
    <div>
      <div>
        <label htmlFor="estudios-dropdown">Estudios:</label>
        <select id="estudios-dropdown" onChange={handleEstudioChange}>
          <option value="">Seleccione un Estudio</option>
          {todosLosestudios.map((estudio) => (
            <option
              key={estudio.Assessment_Name}
              value={estudio.Assessment_Name}
            >
              {estudio.Assessment_Name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="ductos-dropdown">Ductos:</label>
        <select id="ductos-dropdown" onChange={handleDuctoChange}>
          <option value="">Seleccione un Ducto</option>
          {filteredDuctos.map((ducto) => (
            <option key={ducto.DuctoName} value={ducto.DuctoName}>
              {ducto.DuctoName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tramos-evaluacion-dropdown">
          Tramos por Evaluación:
        </label>
        <select id="tramos-evaluacion-dropdown" onChange={handleTramoChange}>
          <option value="">Seleccione un tramo</option>
          {Object.entries(todosLosDuctosPorEvaluacion).flatMap(
            ([key, tramos]) =>
              tramos.map((tramo) => (
                <option key={tramo.AnalysisItemID} value={tramo.Name}>
                  {tramo.Name}
                </option>
              ))
          )}
        </select>
      </div>
    </div>
  );
};

export default DropdownMenu;
