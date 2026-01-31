import { Route, Switch, Router } from "wouter";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router base="/portfolio/">
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
