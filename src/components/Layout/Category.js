import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./Category.module.css";

const Category = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesList(data.meals);
      });
  }, []);

  return (
    <ul>
      {categoriesList.map((category) => (
        <li className={classes.navItem}>
          <Link to={`/category/${category.strCategory}`}>
            {category.strCategory}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Category;
