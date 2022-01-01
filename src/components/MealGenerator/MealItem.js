import React from "react";
import Card from "../ui/Card";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.item}>
      <Card className={classes.contents}>
        <div className={classes.image}>
          <img
            src={props.image}
            alt={props.mealName}
            className={classes.image}
          />
        </div>

        <div className={classes.area}>{props.area}</div>
        <div className={classes.category}>{props.category}</div>
        <div className={classes.mealName}>
          <h1>{props.mealName}</h1>
        </div>
        <div className={classes.split}>
          <div className={classes.ingredients}>
            <h3>Ingredients</h3>
            <ul className={classes.ingredientsList}>{props.ingredients}</ul>
          </div>
          <div className={classes.instructions}>
            <h2>Instructions</h2>
            <p> {props.instructions}</p>
          </div>
        </div>
        <div className={classes.source}>{props.source}</div>
        <div className={classes.video}>
          <iframe
            className={classes.youtube}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${props.video}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <button onClick={props.newMealBtn}>New Random Meal</button>
      </Card>
    </li>
  );
};

export default MealItem;
