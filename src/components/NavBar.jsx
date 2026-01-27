import NavBarLink from "./NavBarLink";

export default function NavBar() {
  return (
    <nav>
      <NavBarLink to="/countries">Countries list</NavBarLink>
      <NavBarLink to="/cities">Cities list</NavBarLink>
    </nav>
  );
}
