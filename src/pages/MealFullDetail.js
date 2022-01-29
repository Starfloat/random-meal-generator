import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MealList from "../components/MealGenerator/MealList";

const MealFullDetail = () => {
  const { id } = useParams();

  const [meal, setMeal] = useState([]);

  const getMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
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
        setMeal(transformed);
      });
  };

  let navigate = useNavigate();

  const generateNewMealHandler = () => {
    navigate("/");
    window.scrollTo(0, 100);
  };

  useEffect(() => {
    getMeal();
  }, []);

  return (
    <div>
      <Layout>
        <MealList randomMeal={meal} newMealBtn={generateNewMealHandler} />
        {/* <button onClick={generateNewMealHandler}> New Random Meal</button> */}
      </Layout>
    </div>
  );
};

export default MealFullDetail;
