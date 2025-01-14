import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MainPage = () => {
  const chartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: [
        "GSD 42 Divisadero - Est Med Los Ramones",
        "CSD 42 India Bonita - Divisadero",
      ],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Length (m)",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      valueSuffix: " m",
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Total",
        data: [67969.82, 93804.53],
        color: "#9370DB",
      },
      {
        name: "MCA Length",
        data: [25333.24, 26982.77],
        color: "#4B0082",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Título principal */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">HCA and MCA Assessments</h1>
      </header>

      {/* Contenedor del contenido principal */}
      <main className="bg-white shadow-md rounded-lg p-6">
        {/* Título del Assessment */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Título del Assessment</h2>



        {/* Tabla sin bordes */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th className="py-2">Calculated for section</th>
                <th className="py-2">Total section</th>
                <th className="py-2">Calculated for length</th>
                <th className="py-2">Total segments</th>
                <th className="py-2">Total MCA length</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">GSD 42 Divisadero - Est Med Los Ramones</td>
                <td className="py-2">2</td>
                <td className="py-2">172</td>
                <td className="py-2">161,774.35</td>
                <td className="py-2">28</td>
                <td className="py-2">52,616.01</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">CSD 42 India Bonita - Divisadero</td>
                <td className="py-2">3</td>
                <td className="py-2">200</td>
                <td className="py-2">180,000.50</td>
                <td className="py-2">30</td>
                <td className="py-2">60,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>


      </main>


      <main className="bg-white shadow-md rounded-lg p-6 mt-2">
        {/* Título del Assessment */}



                {/* Gráfico */}
                <div className="bg-white shadow-md rounded-lg p-6">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </main>
      <main className="bg-white shadow-md rounded-lg p-6 mt-2">

      <div className="overflow-x-auto">
  <table className="table-fixed w-full text-gray-700">
    <thead>
      <tr className="border-b">
        <th className="py-2 w-1/5 text-center">Linea Name</th>
        <th className="py-2 w-1/5 text-center">Non-HCA and MCA Length (m)</th>
        <th className="py-2 w-1/12 text-center">%</th>
        <th className="py-2 w-1/5 text-center">HCA Length (m)</th>
        <th className="py-2 w-1/12 text-center">%</th>
        <th className="py-2 w-1/5 text-center">MCA Length (m)</th>
        <th className="py-2 w-1/12 text-center">%</th>
        <th className="py-2 w-1/5 text-center">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="py-2 text-center">GSD 42 Divisadero - Est Med Los Ramones</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
      </tr>
      <tr className="border-b">
        <td className="py-2 text-center">CSD 42 India Bonita - Divisadero</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
      </tr>
      <tr className="border-b">
        <td className="py-2 text-center">Total</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
        <td className="py-2 text-center">0</td>
      </tr>
    </tbody>
  </table>
</div>

        </main>

    </div>
  );
};

export default MainPage;