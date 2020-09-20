import React from "react";
import Navigation from "./Navigation.js";
import "../styles/about.css";
import { MuuriComponent } from "muuri-react";

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
          </p>
          <ul>
            <li>
              If the word begins with a <strong>consonant</strong>, all letters
              before the first vowel are placed at the end of the word and "ay"
              is added
            </li>
            <li>
              If the word begins with a <strong>vowel</strong>, "way" is added
            </li>
            <li>
              If the letter <strong>"y"</strong> comes at the end of a consonant
              cluster, it should be treated like a vowel
            </li>
          </ul>
        </div>
      </div>
      <div id="about2">
        <h2>Examples</h2>
        <div id="aboutDictionarySmall">
          <MuuriComponent dragEnabled>
            <div className="item">
              <div className="item-content">
                pig<br></br>igpay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                happy<br></br>appyhay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                smile<br></br>ilesmay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                trash<br></br>ashtray
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                eat<br></br>eatway
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                egg<br></br>eggway
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                rhythm<br></br>ythmrhay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                fun<br></br>unfay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                hello<br></br>ellohay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                food<br></br>oodfay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                snap<br></br>apsnay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                guide<br></br>uidegay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                love<br></br>ovelay
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                music<br></br>usicmay
              </div>
            </div>
          </MuuriComponent>
        </div>
      </div>
    </>
  );
}

export default About;
