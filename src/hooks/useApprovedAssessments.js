// src/hooks/useAssessments.js

import { useState, useEffect } from 'react';
import { fetchApprovedAssessments, fetchPipelinesByAssessment } from '../services/apiService';

const useAssessments = () => {
  const [approvedAssessments, setApprovedAssessments] = useState([]);
  const [pipelines, setPipelines] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return {
    approvedAssessments,
    pipelines,
    loading,
    getPipelines,
  };
};

export default useAssessments;
