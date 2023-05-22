import React from "react";
import 'chart.js/auto';
import 'react-chartjs-2';
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Pie Chart",
      data: [300, 50, 100],
      backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
      hoverOffset: 4,
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false
    }
  }
};

export const PieChart = () => {
  return <Pie data={data} options={options} />;
};
