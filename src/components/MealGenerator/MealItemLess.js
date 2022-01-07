import React from "react";
import Card from "../ui/Card";

const MealItemLess = (props) => {
  return (
    <li>
      <Card>
        <img src={props.image} />
        <h1>{props.name}</h1>
        <p>{props.key}</p>
      </Card>
    </li>
  );
};

export default MealItemLess;
