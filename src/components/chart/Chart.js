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
        // borderWidth: 1,
        pointBackgroundColor: "red",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
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
        linewidth: 1,
        color: "rbga(#75e0e6, 0.4)",
      },
      pointLabels: {
        color: "#75e0e6",
        fontSize: "15",
        fontColor: "tan",
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label;
          },
        },
      },
    },
    borderDashOffset: 4,
    pointHitRadius: 4,
    pointRadius: 5,
  };

  return <Radar width='300px' height='300px' data={data} options={options} />;
}

export { RadarChart };
