import LandingPage from "./Pages/LandingPage";
import MoviesPage from "./Pages/MoviesPage";
import SeriesPage from "./Pages/SeriesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/tvseries" exact component={SeriesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
