import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const CardMain = (propss) => {
  const alldata = propss.val.meals;
  const [isclicked, setIsclicked] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClicked = () => {
    setIsclicked(true);
    setIsFormOpen(true); // Open the form when "Get Recipe" is clicked
  };

  const closeForm = () => {
    setIsFormOpen(false); // Close the form when "Close" button is clicked
  };

  return alldata.map((meal) => (
    <div key={meal.idMeal}>
      <div className="images">
        <img className="imgs" src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>{meal.strMeal}</h3>
        <button className="recipe-btn" onClick={handleClicked}>
          Get Recipe
        </button>
      </div>
      {isclicked && (
        <div className="row3">
          <div
            className="form-container"
            id="myForm"
            style={{ display: isFormOpen ? "block" : "none" }}
          >
            <form>
              <button type="button" onClick={closeForm} id="close-btn">
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <h1>
                {meal.strMeal}
                <br />
              </h1>
              <h3>
                <span className="new">{meal.strCategory}</span>
                <br />
                Instructions:
              </h3>
              <br />
              <p id="inst">
                {meal.strInstructions}
                <br />
              </p>
              <img className="formImg" src={meal.strMealThumb} />
              <br />
              <a href={meal.strYoutube}>Watch Video</a>
            </form>
          </div>
        </div>
      )}
    </div>
  ));
};

export default CardMain;
