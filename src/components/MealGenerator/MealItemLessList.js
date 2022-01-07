import React from "react";
import MealItemLess from "./MealItemLess";

const MealItemLessList = (props) => {
  return (
    <ul>
      {props.meals.map((meal) => {
        return (
          <MealItemLess
            key={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
          />
        );
      })}
    </ul>
  );
};

export default MealItemLessList;
