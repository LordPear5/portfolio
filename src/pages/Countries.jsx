import { useQuery } from "@tanstack/react-query";
import { filterCountries, getFlags } from "../api";
import CountryCard from "../components/CountryCard";
import { useState } from "react";

export default function Countries({}) {
  const [nameFilter, setNameFilter] = useState("");
  const [orderByAndDirection, setOrderByAndDirection] = useState("name;asc");

  const [orderBy, order] = orderByAndDirection.split(";");
  const countries = useQuery({
    queryKey: ["countries", { orderBy, order }],
    queryFn: () => {
      return filterCountries({ orderBy, order });
    },
  });

  const flags = useQuery({
    queryKey: ["flags"],
    queryFn: getFlags,
  });

  if (countries.isError || flags.isError) {
    return <div>Something went wrong :(</div>;
  }

  return (
    <div>
      <div className="countries_filter">
        <div>
          <input
            type="text"
            placeholder="Search country"
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
      {countries.isPending ? (
        <div>"Loading..."</div>
      ) : (
        <div className="countries_list">
          {countries.data
            .filter((c) =>
              c.country.toLowerCase().includes(nameFilter.toLowerCase()),
            )
            .map((country) => {
              const flag = flags.data.find((f) => f.iso3 === country.code);
              if (!flag) return null;
              return (
                <CountryCard
                  key={country.code}
                  unicodeFlag={flag?.unicodeFlag || "NA"}
                  name={country.country}
                  code={country.code}
                  population={country.populationCounts}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}
