import React from "react";
import Navigation from "./Navigation.js";
import "../styles/home.css";
// import Dictionary from "./Dictionary.js";
// import Fade from "react-reveal/Fade";
import { MuuriComponent } from "muuri-react";
import "../styles/dictionary.css";

function toPigLatin(input) {
  let output = [];
  let split = input.split(" ");
  for (let word of split) {
    let first_char = word[0];
    let pig_latin;
    let VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    if (VOWELS.includes(first_char)) {
      pig_latin = word + "way";
    } else {
      pig_latin = startsWithConsonant(word);
    }
    output.push(pig_latin);
  }
  return output.join(" ");
}

function startsWithConsonant(word) {
  let vowel_index = 1;
  let VOWELS = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  while (!VOWELS.includes(word[vowel_index])) {
    vowel_index += 1;
  }
  return word.slice(vowel_index) + word.slice(0, vowel_index) + "ay";
}

class Home extends React.Component {
  state = { currentWord: "", outputWord: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    let inputWord = this.state.currentWord.trim();
    console.log(inputWord);
    if (inputWord !== "") {
      let output = toPigLatin(inputWord);
      this.setState({ outputWord: output });
    }
  };

  handleInputChange = (e) => {
    this.setState({ currentWord: e.target.value });
  };

  handleClear = () => {
    this.setState({ currentWord: "", outputWord: "" });
  };

  handleSave = () => {
    let dict = localStorage.getItem("myDict");
    dict = JSON.parse(dict);
    let el = {};
    el[dict.length] = [this.state.currentWord, this.state.outputWord];
    dict.push(el);
    localStorage.setItem("myDict", JSON.stringify(dict));
    window.location.reload(false);
  };

  componentDidMount() {
    if (!localStorage.getItem("myDict")) {
      localStorage.setItem("myDict", JSON.stringify([]));
    }
  }

  render() {
    let dict = JSON.parse(localStorage.getItem("myDict"));
    let dictRender;

    if (!dict || !dict.length) {
      dictRender = (
        <div className="item">
          <div className="item-content">
            Please add<br></br>a new word
          </div>
        </div>
      );
    } else {
      dictRender = dict.map((word, i) => (
        <div className="item" key={i}>
          <div className="item-content">
            {word[i][0]}
            <br></br>
            {word[i][1]}
          </div>
        </div>
      ));
    }

    return (
      <>
        <Navigation pageNumber={1} />
        <div id="homeTranslator">
          <h1>Pig Latin Translator</h1>
          <form id="homeTranslatorSmall" onSubmit={this.handleSubmit}>
            <input
              id="homeTranslatorInput"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.currentWord}
            />
            <svg
              onClick={this.handleSubmit}
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
            <div id="homeTranslatorOutput">{this.state.outputWord}</div>
          </form>
          <div id="homeTranslatorButtons">
            <button onClick={this.handleSave}>SAVE</button>
            <button onClick={this.handleClear}>CLEAR</button>
          </div>
        </div>
        {/* <Dictionary /> */}
        <div id="homeDictionary">
          <h2>My Dictionary</h2>
          <p>
            <i>Move the following cards to any order you want</i>
          </p>
          <div id="homeDictionarySmall">
            <MuuriComponent dragEnabled>{dictRender}</MuuriComponent>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
