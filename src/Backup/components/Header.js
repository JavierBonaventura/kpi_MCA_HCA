import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApprovedAssessments = () => {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/approved-assessments');
        setAssessments(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Evaluaciones Aprobadas</h2>
      <ul>
        {assessments.map((assessment, index) => (
          <li key={index}> {/* Cambia esto si hay un campo único que puedas usar */}
            <strong>Nombre de la Evaluación:</strong> {assessment.Assessment_Name} <br />
            <strong>Estado:</strong> {assessment.Status_of_Assessment} <br />
            <strong>Modelo de Riesgo:</strong> {assessment.Risk_Model_Name} <br />
            <strong>Fecha de Aprobación:</strong> {assessment.Assessment_Approved_Date ? assessment.Assessment_Approved_Date : 'No disponible'} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApprovedAssessments;
