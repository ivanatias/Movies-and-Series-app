import Navigation from './components/Nav/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <div className="App">
          <Route path="/" exact>Main Page</Route>
          <Route path="/movies" exact>Movies Page</Route>
          <Route path="/tvseries" exact>Series PAGE</Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
