import React from "react";
import "./Recipe.css";
import { useStore } from "./../../store/index";

function Recipe() {
  const recipes = useStore((state) => state.recipes);
  const selectedrecipe = useStore((state) => state.currentRecipe);

  const updateRecipe = useStore((state) => state.updateRecipe);

  const selectRecipe = (id) => {
    updateRecipe(id);
  };

  return (
    <div className="container">
      <div>
        <p className="recipetext">Recipes</p>
      </div>
      <div className="container-wrap">
        <div style={{ marginRight: "50px" }}>
          <div className="recipelist">
            {recipes.map((item, index) => {
              console.log(item.id === selectedrecipe.id);
              return (
                <ul
                  key={index}
                  onClick={() => selectRecipe(item.id)}
                  className={
                    item.id === selectedrecipe.id ? "selected" : "notselected"
                  }
                >
                  <li>
                    <img src={item.image} alt="" />
                  </li>
                  <li>{item.name}</li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="listDetail">
          <div className="card">
            <div>
              <h1 style={{ marginBottom: "10px" }}>
                {selectedrecipe.description}
              </h1>
              <p className="author">
                <img src={selectedrecipe.authorimg} alt="" />
                {selectedrecipe.author} <span className="p-2"> | </span>{" "}
                Preparation Time : {selectedrecipe.preparationtime}
              </p>
              <img src={selectedrecipe.image} alt="" />
              <h3 className="ingrediname">Ingredients</h3>
              <div className="ingredients-list">
                <p>{selectedrecipe.ingredients}</p>
              </div>
              <h3 className="ingrediname">How to Prepare</h3>
              <div className="ingredients-list">
                <p>{selectedrecipe.preparationmethod}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
