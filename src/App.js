import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Artist from "./screens/Artist/Artist";

function App() {
  return (
    <div className={`App`}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/artist">
            <Artist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
