import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import GithubCorner from "react-github-corner";

function App() {
  return (
    <div className="App">
      <GithubCorner
        href="https://github.com/danakim21/pig-latin-translator-app"
        bannerColor="gray"
        octoColor="#fff"
        size={40}
        direction="right"
        target="_blank"
        rel="noopener noreferrer"
      />
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
    </div>
  );
}

export default App;
