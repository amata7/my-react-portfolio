import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import GitHub from "./pages/GitHub";
import LinkedIn from "./pages/LinkedIn";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div>
        <Container />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/github">
          <GitHub />
        </Route>
        <Route exact path="/linkedIn">
          <LinkedIn />
        </Route>
      </div>
    </Router>
  );
}

export default App;
