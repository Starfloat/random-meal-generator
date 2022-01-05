import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Area = () => {
  const [areaList, setAreaList] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => response.json())
      .then((data) => setAreaList(data.meals));
  }, []);

  return (
    <ul>
      {areaList.map((area, i) => (
        <li key={i}>
          <Link to={`/area/${area.strArea}`}>{area.strArea}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Area;
