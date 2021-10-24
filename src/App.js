import LandingPage from "./Pages/LandingPage";
import MoviesPage from "./Pages/MoviesPage";
import SeriesPage from "./Pages/SeriesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/movies" exact component={MoviesPage} />
            <Route path="/tvseries" exact component={SeriesPage} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
