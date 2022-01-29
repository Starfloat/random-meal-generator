import React from "react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.item}>
      <Card className={classes.contents}>
        <div className={classes.split}>
          <div className={classes.lCol}>
            <img
              src={props.image}
              alt={props.mealName}
              className={classes.image}
            />
          </div>
          <div className={classes.rCol}>
            <button className="btn btn-secondary" onClick={props.newMealBtn}>
              New Random Meal
            </button>
            <h1>{props.mealName}</h1>

            <div className={classes.video}>
              <iframe
                className={classes.youtube}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.video}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={classes.instructions}>
              <h2>Instructions</h2>
              <p> {props.instructions}</p>
            </div>

            <div className={classes.split}>
              <div className={classes.lCol}>
                <div className={classes.ingredients}>
                  <h2>Ingredients</h2>
                  <ul className={classes.ingredientsList}>
                    {props.ingredients}
                  </ul>
                </div>
              </div>

              <div className={classes.rCol}>
                <div className={classes.tags}>
                  <h2>Tags</h2>
                  <div className={classes.area}>
                    <span className={classes.bold}> Area: </span>
                    <Link to={`/area/${props.area}`}>{props.area}</Link>
                  </div>
                  <div className={classes.category}>
                    <span className={classes.bold}> Category: </span>
                    <Link to={`/category/${props.category}`}>
                      {props.category}
                    </Link>
                  </div>
                  <div className={classes.source}>
                    <a
                      href={props.source}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className={classes.bold}>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MealItem;
