// import React from "react";
// import "../styles/dictionary.css";
// import { MuuriComponent } from "muuri-react";

// function Dictionary() {
//   let dict = JSON.parse(localStorage.getItem("myDict"));
//   let dictRender;

//   if (!dict.length) {
//     dictRender = (
//       <div className="item">
//         <div className="item-content">Please add a word to the dictionary</div>
//       </div>
//     );
//   } else {
//     dictRender = dict.map((word, i) => (
//       <div className="item" key={i}>
//         <div className="item-content">{word[i][0]}</div>
//       </div>
//     ));
//   }

//   return (
//     <div id="homeDictionary">
//       <h2>My Dictionary</h2>

//       <MuuriComponent dragEnabled>{dictRender}</MuuriComponent>
//     </div>
//   );
// }

// export default Dictionary;
