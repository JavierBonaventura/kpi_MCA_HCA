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

const BarChart = React.memo(({ columnSums }) => {
  // Asegúrate de que columnSums tenga la longitud correcta
  if (columnSums.length !== intervalsFoF.length) {
    console.warn(`columnSums length (${columnSums.length}) does not match intervalsFoF length (${intervalsFoF.length})`);
  }

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Total de Riesgo por Categoría',
    },
    xAxis: {
      categories: intervalsFoF,
      title: {
        text: 'Categorías',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total',
      },
      // Se pueden agregar más opciones aquí
    },
    series: [
      {
        name: 'Total',
        data: columnSums.map(sum => (isNaN(sum) ? 0 : Number(sum))), // Manejar NaN
      },
    ],
    accessibility: {
      enabled: true,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
});

export default BarChart;
