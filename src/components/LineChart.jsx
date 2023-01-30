import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function LineChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily logins",
        data: [33, 53, 85, 41, 44, 65, 0],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  return (
    <div className = "text-center">
      <Line height = {"170vh"} data = {data}/>
    </div>
  );
}
