import { useQuery } from "@tanstack/react-query";
import { getAllCities } from "../api";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Cities({}) {
  const [lcoation, navigate] = useLocation();
  const [nameFilter, setNameFilter] = useState("");
  const [orderByAndDirection, setOrderByAndDirection] = useState("name;asc");

  const [orderBy, order] = orderByAndDirection.split(";");
  const cities = useQuery({
    queryKey: ["cities", { orderBy, order }],
    queryFn: () => {
      return getAllCities({ orderBy, order });
    },
  });

  if (cities.isError) {
    return <div>Something went wrong :(</div>;
  }

  return (
    <div>
      <div className="countries_filter">
        <div>
          <input
            type="text"
            placeholder="Search the city"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.currentTarget.value)}
          />
          <button disabled={!nameFilter} onClick={() => setNameFilter("")}>
            Clear
          </button>
        </div>
        <div>
          <select
            name="orderBy"
            id="orderBy"
            value={orderByAndDirection}
            onChange={(e) => setOrderByAndDirection(e.currentTarget.value)}
          >
            <option value="name;asc">Name ⬆️</option>
            <option value="name;dsc">Name ⬇️</option>
            <option value="pupolation;asc">Population ⬆️</option>
            <option value="population;dsc">Population ⬇️</option>
          </select>
        </div>
      </div>
      {cities.isPending ? (
        <div>"Loading..."</div>
      ) : (
        <div className="cities_list">
          {cities.data
            .filter((c) =>
              c.city.toLowerCase().includes(nameFilter.toLowerCase()),
            )
            .map((c) => {
              return (
                <div
                  className="cities_item"
                  key={c.city}
                  onClick={() => navigate(`/cities/${c.city}`)}
                >
                  {c.city}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
