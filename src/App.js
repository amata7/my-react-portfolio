import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import GitHub from "./pages/GitHub";
import LinkedIn from "./pages/LinkedIn";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
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
