import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { getCityStats } from "../api";
import { Line } from "react-chartjs-2";
import { useState } from "react";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "City population statistics",
    },
  },
};

export default function City({}) {
  const params = useParams();

  const cityStats = useQuery({
    queryKey: ["cityStats", { name: params.name }],
    queryFn: () => getCityStats(params.name),
  });

  if (cityStats.isPending) return <div>Loading...</div>;

  if (cityStats.isError) return <div>Something went wrong :(</div>;

  const population = cityStats.data.populationCounts;

  const labels = population.map((py) => py.year).reverse();
  const data = {
    labels,
    datasets: [
      {
        label: params.name,
        data: population.map((py) => py.value).reverse(),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <div className="chart_container">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
