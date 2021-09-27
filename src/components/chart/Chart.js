import React from "react";
import { Radar } from "react-chartjs-2";

function RadarChart(props) {
  const { info } = props;
  console.log(info);
  const data = {
    labels: [...Object.keys(info)],
    datasets: [
      {
        label: "level",
        data: [...Object.values(info)],
        backgroundColor: "rgba(16, 31, 119, 0.2)",
        borderColor: "rgba(247, 247, 247, 1)",
        borderWidth: 1,
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        display: false,
        beginAtZero: true,
        color: "yellow",
      },
      angleLines: {
        display: false,
      },
      gridLines: {
        display: true,
        width: 1,
        color: "blue",
      },
    },
    borderDashOffset: 4,
    pointHitRadius: 4,
    pointRadius: 4,
  };

  return (
    <div>
      <h5 className='radarChart_title'>Feature</h5>
      <Radar data={data} options={options} />
    </div>
  );
}

export { RadarChart };
