import LandingPage from "./components/Pages/LandingPage";
import MoviesPage from "./components/Pages/MoviesPage";
import SeriesPage from "./components/Pages/SeriesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/tvseries" exact component={SeriesPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
