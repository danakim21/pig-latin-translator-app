import React from "react";
import Navigation from "./Navigation.js";
import "../styles/about.css";

function About() {
  return (
    <>
      <Navigation pageNumber={2} />
      <div id="about1">
        <h1>About Pig Latin</h1>
        <div id="about1-des">
          <p>
            Pig Latin is made-up language where English words are altered by
            removing or adding prefixes and suffixes.
            <ul>
              <li>
                If the word begins with a <strong>consonant</strong>, all
                letters before the first vowel are placed at the end of the word
                and "ay" is added
              </li>
              <li>
                If the word begins with a <strong>vowel</strong>, "way" is added
              </li>
              <li>
                If the letter <strong>"y"</strong> comes at the end of a
                consonant cluster, it should be treated like a vowel
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div id="about2">
        <h2>Examples</h2>
        <ul>
          <li>"pig" = "igpay"</li>
          <li>"happy" = "appyhay"</li>
          <li>"smile" = "ilesmay"</li>
          <li>"trash" = "ashtray"</li>
          <li>"eat" = "eatway"</li>
          <li>"egg" = "eggway"</li>
          <li>"rhythm" = "ythmrhay"</li>
        </ul>
      </div>
    </>
  );
}

export default About;
