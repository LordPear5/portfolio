import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">Welcome to my corner</h2>

      <div id="nav-list">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </nav>
  );
}
