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
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          HCA and MCA Assessments
        </h1>
      </header>

      {/* Contenedor del contenido principal */}
      <main className="bg-white shadow-md rounded-lg p-6">
        {/* Título del Assessment */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Título del Assessment
        </h2>

        {/* Tabla sin bordes */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left text-gray-700">
            <thead>
            <tr className="border-b-2 border-gray-400 hover:bg-gray-50">
            <th className="py-2">Name</th>
                <th className="py-2 text-center">Calculated for section</th>
                <th className="py-2 text-center">Total section</th>
                <th className="py-2 text-center">Calculated for length</th>
                <th className="py-2 text-center">Total segments</th>
                <th className="py-2 text-center">Total MCA length</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">ASSESSMENT</td>
                <td className="py-2 text-center">2</td>
                <td className="py-2 text-center">172</td>
                <td className="py-2 text-center">161,774.35</td>
                <td className="py-2 text-center">28</td>
                <td className="py-2 text-center">52,616.01</td>
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
              <tr className="border-b-2 border-gray-400 hover:bg-gray-50">
                <th className="py-2 w-1/4 text-center">Linea Name</th>
                <th className="py-2 w-1/5 text-center">
                  Non-HCA and MCA Length (m)
                </th>
                <th className="py-2 w-1/12 text-center">%</th>
                <th className="py-2 w-1/5 text-center">HCA Length (m)</th>
                <th className="py-2 w-1/12 text-center">%</th>
                <th className="py-2 w-1/5 text-center">MCA Length (m)</th>
                <th className="py-2 w-1/12 text-center">%</th>
                <th className="py-2 w-1/5 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 text-left">
                  GSD 42 Divisadero - Est Med Los Ramones
                </td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 text-left">
                  CSD 42 India Bonita - Divisadero
                </td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 text-left">Total</td>
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
