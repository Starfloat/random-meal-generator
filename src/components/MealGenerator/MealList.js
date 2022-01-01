import React from "react";
import MealItem from "./MealItem";

const MealList = (props) => {
  return (
    <ul>
      {props.randomMeal.map((meal) => (
        <MealItem
          key={meal.id}
          mealName={meal.mealName}
          area={meal.area}
          category={meal.category}
          instructions={meal.instructions}
          source={meal.source}
          image={meal.image}
          video={meal.video}
          ingredients={meal.ingredients}
          newMealBtn={props.newMealBtn}
        />
      ))}
    </ul>
  );
};

export default MealList;
