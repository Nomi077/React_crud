import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
const DefaulPage = () => {
  
  const [inputText, setInputText] = useState("");
  const [isclick, setIsclick] = useState(false);
  const handleclick = () => {
    setIsclick(true);
  };
  const inputchange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div>
      <div className="row1">
        <h1>Find Meals For Your Ingredients</h1>
        <p>
          Real Food doesn't have ingredients. real food is ingredients.
          <br />
          -Jamie Oliver
        </p>
        <input
          type="search"
          id="search"
          onChange={inputchange}
          placeholder="Enter an ingredient "
        />

        <button id="btn" onClick={handleclick}>
          <span className="fa-search">
            <FontAwesomeIcon icon="search" />
          </span>
        </button>
        <br />

        <br />
        <h1>Your Search Result:</h1>
      </div>
      {isclick && (
        <div className="row2">
          <Card text={inputText} />
        </div>
      )}
      
    </div>
  );
};

export default DefaulPage;
