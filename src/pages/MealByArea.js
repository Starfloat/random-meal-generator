import React from "react";
import { useParams } from "react-router-dom";

const MealByArea = () => {
  const { area } = useParams();
  return <div>{JSON.stringify(area)}</div>;
};

export default MealByArea;
