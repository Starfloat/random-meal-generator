import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";

import Category from "./Category";
import Area from "./Area";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const dropdownRef = useRef(null);
  const [areaIsActive, setAreaIsActive] = useDetectOutsideClick(
    dropdownRef,
    false
  );
  const [categoryIsActive, setCategoryIsActive] = useDetectOutsideClick(
    dropdownRef,
    false
  );

  const areaMenuHandler = () => {
    setAreaIsActive(!areaIsActive);
  };

  const categoryMenuHandler = () => {
    setCategoryIsActive(!categoryIsActive);
  };

  return (
    <nav className={classes.navMain}>
      <div className={classes.logo}>
        <i className="fas fa-hamburger fa-3x" />
        <h1> Daily Meal</h1>
      </div>
      <div className={classes.navItems}>
        <ul className={classes.items}>
          <li className={classes.item}>
            <Link className={classes.link} to="/">
              <button className={classes.menuTrigger}>Random Meal</button>
            </Link>
          </li>

          <div className={classes.menuContainer}>
            <button className={classes.menuTrigger} onClick={areaMenuHandler}>
              Areas <i className="fa fa-caret-down" />
            </button>
            <nav
              ref={dropdownRef}
              className={`${classes.menu} ${
                areaIsActive ? classes.active : classes.inactive
              }`}
            >
              <Area className={classes.dropDownContent} />
            </nav>
          </div>

          <div className={classes.menuContainer}>
            <button
              className={classes.menuTrigger}
              onClick={categoryMenuHandler}
            >
              Categories <i className="fa fa-caret-down" />
            </button>
            <nav
              ref={dropdownRef}
              className={`${classes.menu} ${
                categoryIsActive ? classes.active : classes.inactive
              }`}
            >
              <Category className={classes.dropDownContent} />
            </nav>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
