import React from "react";
import Navigation from "./Navigation.js";
import "../styles/home.css";

function Translator() {
  return (
    <div id="homeTranslator">
      <h1>Pig Latin Translator</h1>
      <div id="homeTranslatorSmall">
        <input id="homeTranslatorInput" type="text" />
        <svg
          width="1.7em"
          height="1.7em"
          viewBox="0 0 16 16"
          className="bi bi-arrow-right-circle-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
          />
        </svg>
        <div id="homeTranslatorOutput"></div>
        <div id="homeTranslatorButtons">
          <button>SAVE</button>
          <button>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

function Dictionary() {
  return (
    <div id="homeDictionary">
      <h2>My Dictionary</h2>
    </div>
  );
}

function Home() {
  return (
    <>
      <Navigation pageNumber={1} />
      <Translator />
      <Dictionary />
    </>
  );
}

export default Home;
