import Footer from "../components/Footer";

export default function Home() {
  return (
    <section id="home">
      <div className="paralax-image">
        <h1>Anna Paszkiewicz</h1>
        <a rel="stylesheet" href="#hero" id="down-arrow-container">
          <span id="down-arrow" />
        </a>
      </div>
      <section id="hero" className="hero">
        <div className="hero-text">
          <h1>Hi, I'm Anna 👋</h1>
          <p>Aspiring frontend developer & creative human</p>
        </div>
        <Footer />
      </section>
    </section>
  );
}
