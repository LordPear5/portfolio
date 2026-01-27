import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "wouter";
import { getCountryCities, getCountryPopulation } from "../api";
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
      text: "Country population statistics",
    },
  },
};

export default function Country({}) {
  const [location, navigate] = useLocation();
  const params = useParams();
  const [citySearch, setCitySearch] = useState("");
  const population = useQuery({
    queryKey: ["countryPopulation", { name: params.name }],
    queryFn: () => getCountryPopulation(params.name),
  });
  const cities = useQuery({
    queryKey: ["countryCities", { name: params.name }],
    queryFn: () => getCountryCities(params.name),
  });

  if (population.isPending || cities.isPending) return <div>Loading...</div>;

  if (population.isError || cities.isError)
    return <div>Something went wrong :(</div>;

  const labels = population.data.populationCounts.map((py) => py.year);
  const data = {
    labels,
    datasets: [
      {
        label: params.name,
        data: population.data.populationCounts.map((py) => py.value),
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
      <div className="search_bar">
        <input
          type="text"
          placeholder="Search the city"
          value={citySearch}
          onChange={(e) => setCitySearch(e.currentTarget.value)}
        />
        <button disabled={!citySearch} onClick={() => setCitySearch("")}>
          Clear
        </button>
      </div>
      <div className="cities_list">
        {cities.data
          .filter((c) => c.toLowerCase().includes(citySearch.toLowerCase()))
          .map((c) => (
            <div
              key={c}
              className="cities_item"
              onClick={() => navigate(`/cities/${c}`)}
            >
              {c}
            </div>
          ))}
      </div>
    </div>
  );
}
