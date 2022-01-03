import React, { useState } from "react";

const Category = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then((response) => response.json())
    .then((data) => {});

  return <div></div>;
};

export default Category;
