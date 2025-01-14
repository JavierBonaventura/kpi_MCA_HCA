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
    },
    yAxis: {
      min: 0,
      title: {
        text: "Length (m)",
      },
    },
    tooltip: {
      valueSuffix: " m",
    },
    series: [
      {
        name: "Total",
        data: [67969.82, 93804.53],
        color: "#2563EB",
      },
      {
        name: "MCA Length",
        data: [25333.24, 26982.77],
        color: "#1E40AF",
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-700">
          HCA & MCA Assessments Dashboard
        </h1>
        <p className="text-sm text-gray-500">Monitor and evaluate critical metrics.</p>
      </header>

      {/* Content Container */}
      <main className="container mx-auto space-y-8">
        {/* Overview Cards */}

        <section className="grid grid-cols-1 md:grid-cols-1 ">
          <div className="bg-white shadow rounded-lg p-2">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Overview</h3>
            <div className="text-2xl font-bold text-blue-600">172 Segments</div>
          </div>
        
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Overview</h3>
            <div className="text-2xl font-bold text-blue-600">172 Segments</div>
            <p className="text-sm text-gray-500">Total sections analyzed</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Overview</h3>
            <div className="text-2xl font-bold text-blue-600">172 Segments</div>
            <p className="text-sm text-gray-500">Total sections analyzed</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Total Length</h3>
            <div className="text-2xl font-bold text-green-600">341,774.85 m</div>
            <p className="text-sm text-gray-500">Combined lengths</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Critical MCA Length</h3>
            <div className="text-2xl font-bold text-red-600">112,616.01 m</div>
            <p className="text-sm text-gray-500">High-risk lengths identified</p>
          </div>
        </section>

        {/* Data Table */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Detailed Metrics</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-sm font-medium text-gray-500">Name</th>
                  <th className="py-3 px-6 text-sm font-medium text-gray-500">
                    Calculated for section
                  </th>
                  <th className="py-3 px-6 text-sm font-medium text-gray-500">
                    Total section
                  </th>
                  <th className="py-3 px-6 text-sm font-medium text-gray-500">
                    Calculated for length
                  </th>
                  <th className="py-3 px-6 text-sm font-medium text-gray-500">
                    Total segments
                  </th>
                  <th className="py-3 px-6 text-sm font-medium text-gray-500">
                    Total MCA length
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-6 text-gray-700">
                    GSD 42 Divisadero - Est Med Los Ramones
                  </td>
                  <td className="py-3 px-6 text-gray-600">2</td>
                  <td className="py-3 px-6 text-gray-600">172</td>
                  <td className="py-3 px-6 text-gray-600">161,774.35</td>
                  <td className="py-3 px-6 text-gray-600">28</td>
                  <td className="py-3 px-6 text-gray-600">52,616.01</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 text-gray-700">
                    CSD 42 India Bonita - Divisadero
                  </td>
                  <td className="py-3 px-6 text-gray-600">3</td>
                  <td className="py-3 px-6 text-gray-600">200</td>
                  <td className="py-3 px-6 text-gray-600">180,000.50</td>
                  <td className="py-3 px-6 text-gray-600">30</td>
                  <td className="py-3 px-6 text-gray-600">60,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Chart Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Assessment Chart</h2>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </section>
      </main>
    </div>
  );
};

export default MainPage;
