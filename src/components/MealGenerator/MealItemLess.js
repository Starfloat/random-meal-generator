import React from "react";
import Card from "../ui/Card";
import classes from "./MealItemLess.module.css";
import { Link } from "react-router-dom";

const MealItemLess = (props) => {
  return (
    <div className={classes.wrapper}>
      <ul>
        <li>
          <Link to={"/category/"}>
            <Card className={classes.card}>
              <img className={classes.img} src={props.image} />
              {/* <p className={classes.name}>{props.name}</p> */}
            </Card>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MealItemLess;
