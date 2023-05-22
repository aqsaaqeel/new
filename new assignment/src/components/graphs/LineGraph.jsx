import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export const LineGraph = () => {
  const [data, setData] = useState({
    labels: ["", "Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.publicapis.org/entries?category=animals"
      );
      const apiData = await response.json();
      const data1 = apiData.entries.map((entry) => entry.API.length);
      const data2 = apiData.entries.map((entry) => entry.Link.length);
      setData({
        labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
        datasets: [
          {
            label: "Dataset 1",
            data: data1,
            borderColor: "#9BDD7D",
            borderWidth: 2,
            fill: false,
            pointRadius: 0,
          },
          {
            label: "Dataset 2",
            data: data2,
            borderColor: "#E9A0A0",
            borderWidth: 2,
            fill: false,
            pointRadius: 0,
          },
        ],
      });
    };
    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 600,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
