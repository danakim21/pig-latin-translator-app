import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

function Navigation({ pageNumber }) {
  let nav1class = "navCurrentPage";
  let nav2class = "navCurrentPage";
  if (pageNumber === 1) {
    nav2class = "navOtherPage";
  } else if (pageNumber === 2) {
    nav1class = "navOtherPage";
  }
  return (
    <div id="navOuterDiv">
      <nav>
        <Link to="/" className={nav1class}>
          Pig Latin Translator
        </Link>
        <Link to="/about" className={nav2class}>
          What is Pig Latin
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
