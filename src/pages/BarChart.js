import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Accessibility from 'highcharts/modules/accessibility';

// Inicializar el módulo de accesibilidad
Accessibility(Highcharts);

// Define los nombres de los intervalos
const intervalsFoF = [
  "Almost Impossible",
  "Rare",
  "Possible",
  "Likely",
  "Very Likely",
  "Highly Likely",
  "Almost Certain"
];

const BarChart = ({ columnSums }) => {
  // Asume que columnSums tiene un tamaño que coincide con la longitud de intervalsFoF
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Total de Riesgo por Categoría',
    },
    xAxis: {
      categories: intervalsFoF, // Usar los nombres de los intervalos
      title: {
        text: 'Categorías',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total',
      },
    },
    series: [
      {
        name: 'Total',
        data: columnSums.map(sum => Number(sum)), // Asegúrate de convertir a número
      },
    ],
    accessibility: {
      enabled: true, // Esto activa las características de accesibilidad
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default BarChart;
