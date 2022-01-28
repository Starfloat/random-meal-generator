import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealItemLessList from "../components/MealGenerator/MealItemLessList";
import classes from "./MealsByCategory.module.css";

import Pagination from "../components/ui/Pagination";

const MealsByCategory = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(10);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, [category]);

  // Get current meals
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexofFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexofFirstMeal, indexOfLastMeal);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(meals);

  return (
    <>
      <div className={classes.contents}>
        <MealItemLessList meals={currentMeals} />
        <div className={classes.pagination}>
          <Pagination
            mealsPerPage={mealsPerPage}
            totalMeals={meals.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default MealsByCategory;
