import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealItemLessList from "../components/MealGenerator/MealItemLessList";

const MealsByCategory = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, [category]);

  return <MealItemLessList meals={meals} />;
};

export default MealsByCategory;
