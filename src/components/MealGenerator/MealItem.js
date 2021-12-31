import React from "react";
import Card from "../ui/Card";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li>
      <Card>
        <div className={classes.image}>{props.strMealThumb}</div>
        <div className={classes.mealName}>{props.strMeal}</div>
        <div className={classes.ingredients}></div>
      </Card>
    </li>
  );
};

export default MealItem;
