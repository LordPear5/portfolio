import { Link, useLocation, useRoute } from "wouter";

export default function NavBarLink({ children, to }) {
  const [location] = useLocation();
  const [match] = useRoute(to);

  const isMatching = match || location.includes(to);

  return (
    <Link className={`nav_link ${isMatching ? "active_link" : ""}`} to={to}>
      {children}
    </Link>
  );
}
