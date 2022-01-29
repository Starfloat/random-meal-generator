import React from "react";
import Card from "../ui/Card";
import classes from "./MealItemLess.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MealItemLess = (props) => {
  const { category } = useParams();

  return (
    <div className={classes.wrapper}>
      <ul>
        <li>
          <Link to={`/category/${category}/${props.id}`}>
            <Card className={classes.card}>
              <div className={classes.split}>
                <img className={classes.img} src={props.image} />
                <h1 className={classes.name}>{props.name}</h1>
              </div>
            </Card>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MealItemLess;
