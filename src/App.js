import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Artist from "./screens/Artist/Artist";
import React from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className={`App`}>
      <Router>
        <React.Fragment>
          <ScrollToTop />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/artist/:id">
              <Artist />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
