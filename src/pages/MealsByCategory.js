import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealItemLessList from "../components/MealGenerator/MealItemLessList";

import Pagination from "../components/ui/Pagination";

const MealsByCategory = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(2);

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

  return (
    <>
      <MealItemLessList meals={currentMeals} />
      <Pagination
        mealsPerPage={mealsPerPage}
        totalMeals={meals.length}
        paginate={paginate}
      />
    </>
  );
};

export default MealsByCategory;
