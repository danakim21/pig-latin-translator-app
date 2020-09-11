import React from "react";
import { HashRouter, Route } from "react-router-dom";
import GithubLogo from "./components/GithubLogo.js";
import Home from "./components/Home.js";
import About from "./components/About.js";

function App() {
  return (
    <div className="App">
      {/* <GithubLogo /> */}
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
    </div>
  );
}

export default App;
