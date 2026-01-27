// year, limit, orderBy, order
export async function filterCountries(params) {
  try {
    const queryParams = new URLSearchParams(params);
    const result = await fetch(
      `https://countriesnow.space/api/v0.1/countries/population/filter/q?${queryParams}`,
    );
    const json = await result.json();
    return json.data;
  } catch (err) {
    console.error("Failed to fetch countries");
  }
}

export async function getFlags() {
  try {
    const result = await fetch(
      "https://countriesnow.space/api/v0.1/countries/flag/unicode",
      {
        method: "GET",
        redirect: "follow",
      },
    );
    const json = await result.json();
    return json.data;
  } catch (err) {
    console.error("Failed to fetch flags");
  }
}

export async function getCountryPopulation(country) {
  try {
    const result = await fetch(
      `https://countriesnow.space/api/v0.1/countries/population/q?country=${country}`,
    );
    const json = await result.json();
    return json.data;
  } catch (err) {
    console.error(`Failed to fetch population of ${country}`);
  }
}

export async function getCountryCities(country) {
  try {
    const result = await fetch(
      `https://countriesnow.space/api/v0.1/countries/cities/q?country=${country}`,
    );
    const json = await result.json();
    return json.data;
  } catch (err) {
    console.error(`Failed to fetch cities of ${country}`);
  }
}

export async function getAllCities(params) {
  try {
    const queryParams = new URLSearchParams(params);
    const result = await fetch(
      `https://countriesnow.space/api/v0.1/countries/population/cities/filter/q?${queryParams}`,
    );
    const json = await result.json();
    return json.data;
  } catch (err) {
    console.error(`Failed to fetch all cities`);
  }
}

export async function getCityStats(city) {
  try {
    const result = await fetch(
      `https://countriesnow.space/api/v0.1/countries/population/cities/q?city=${city}`,
    );
    const json = await result.json();
    return json.data;
  } catch (err) {
    console.error(`Failed to fetch city stats for ${city}`);
  }
}
