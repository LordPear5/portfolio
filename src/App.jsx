import { Router, Route, Switch } from "wouter";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import Cities from "./pages/Cities";
import City from "./pages/City";
import NavBar from "./components/NavBar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <main className="main_contents">
          <NavBar />
          <div className="contents">
            <Switch>
              <Route path="/countries">
                <Countries />
              </Route>
              <Route path="/countries/:name">
                <Country />
              </Route>
              <Route path="/cities">
                <Cities />
              </Route>
              <Route path="/cities/:name">
                <City />
              </Route>
            </Switch>
          </div>
        </main>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
