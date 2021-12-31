import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <div className={classes.logo}>
        <i className="fas fa-hamburger fa-3x" />
        <h1> Random Meal Generator</h1>
      </div>
    </nav>
  );
};

export default Navigation;
