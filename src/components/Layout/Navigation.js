import React from "react";

import Category from "./Category";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <div className={classes.logo}>
        <i className="fas fa-hamburger fa-3x" />
        <h1> Daily Meal</h1>
      </div>
      <div className={classes.navItems}>
        <ul className={classes.items}>
          <li className={classes.item}>
            <Link className={classes.link} to="/">
              Random Meal
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to="/area">
              Area
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to="/category">
              Category
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
