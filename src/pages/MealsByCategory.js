import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MealsByCategory = () => {
  const { category } = useParams();

  useEffect(() => {}, []);

  return <div>{JSON.stringify(category)}</div>;
};

export default MealsByCategory;
