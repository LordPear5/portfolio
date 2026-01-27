import { useLocation } from "wouter";

export default function CountryCard({ unicodeFlag, name, population, code }) {
  const [location, navigate] = useLocation();

  return (
    <div
      className="country_card"
      onClick={() => navigate(`/countries/${name}`)}
    >
      <div className="country_card_title">
        <span className="country_card_flag">{unicodeFlag}</span>
        <span className="country_card_name">{name}</span>
      </div>
      <div>Has a population of {population.value}</div>
    </div>
  );
}
