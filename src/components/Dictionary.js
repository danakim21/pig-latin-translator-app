import React from "react";
import "../styles/dictionary.css";
import { MuuriComponent, useDrag } from "muuri-react";

function Dictionary() {
  let dict = JSON.parse(localStorage.getItem("myDict"));
  let testing = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  return (
    <div id="homeDictionary">
      <h2>My Dictionary</h2>
      <ul>
        {/* {dict.map((word, i) => (
          <div key={i}>
            <p>{word[0]}</p>
            <p>{word[1]}</p>
          </div>
        ))} */}
      </ul>

      <MuuriComponent dragEnabled>
        <div class="item">
          <div class="item-content">One</div>
        </div>
        <div class="item">
          <div class="item-content">Two</div>
        </div>
        <div class="item">
          <div class="item-content">Three</div>
        </div>
        <div class="item">
          <div class="item-content">Four</div>
        </div>
        <div class="item">
          <div class="item-content">Five</div>
        </div>
        <div class="item">
          <div class="item-content">Six</div>
        </div>
        <div class="item">
          <div class="item-content">Seven</div>
        </div>
        <div class="item">
          <div class="item-content">Eight</div>
        </div>
        <div class="item">
          <div class="item-content">Nine</div>
        </div>
        <div class="item">
          <div class="item-content">Ten</div>
        </div>
      </MuuriComponent>
    </div>
  );
}

export default Dictionary;
