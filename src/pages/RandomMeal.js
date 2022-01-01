import React, { useState, useEffect } from "react";
import MealList from "../components/MealGenerator/MealList";

const RandomMeal = () => {
  const [isLoading, setIsLoading] = useState("false");
  const [randomMeal, setRandomMeal] = useState([]);

  const getMeal = () => {
    setIsLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let meal = data.meals[0];
        let transformed = [];
        let ingredients = [];
        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            ingredients.push(
              <li key={i}>
                {meal[`strIngredient${i}`]} - {meal[`strMeasure${i}`]}
              </li>
            );
          }

          transformed = data.meals.map((meal) => {
            return {
              id: meal.idMeal,
              mealName: meal.strMeal,
              area: meal.strArea,
              category: meal.strCategory,
              instructions: meal.strInstructions,
              source: meal.strSource,
              image: meal.strMealThumb,
              video: meal.strYoutube.replace(
                "https://www.youtube.com/watch?v=",
                ""
              ),
              ingredients: ingredients,
            };
          });
        }
        setIsLoading(false);
        setRandomMeal(transformed);
      });
  };

  const generateNewMealHandler = () => {
    getMeal();
    window.scrollTo(0, 100);
  };

  useEffect(() => {
    getMeal();
  }, []);

  return (
    <>
      <MealList randomMeal={randomMeal} newMealBtn={generateNewMealHandler} />
      {/* <button onClick={generateNewMealHandler}> New Random Meal</button> */}
    </>
  );
};

export default RandomMeal;
