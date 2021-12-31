import React, { useState, useEffect } from "react";
import Card from "../components/ui/Card";

const RandomMeal = () => {
  const [isLoading, setIsLoading] = useState("false");
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {
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
              `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
          }

          transformed = data.meals.map((meal) => {
            return {
              id: meal.idMeal,
              area: meal.strArea,
              category: meal.strCategory,
              ingredients: [ingredients],
            };
          });
        }
        setRandomMeal(transformed);
      });
  }, []);

  console.log(randomMeal);

  return <Card>content in a card?</Card>;
};

export default RandomMeal;
