import React, { useState, useEffect, useRef } from "react";

import Category from "./Category";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    {
      const pageClickEvent = (e) => {
        // If the active element exists and is clicked outside of
        if (
          dropdownRef.current !== null &&
          !dropdownRef.current.contains(e.target)
        ) {
          setIsActive(!isActive);
        }
      };
      if (isActive) {
        window.addEventListener("click", pageClickEvent);
      }
      return () => {
        window.removeEventListener("click", pageClickEvent);
      };
    }
  }, [isActive]);

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
              Random Meal
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to="/area">
              Area
            </Link>
          </li>

          <div className={classes.menuContainer}>
            <button className={classes.menuTrigger} onClick={onClick}>
              Categories <i className="fa fa-caret-down"></i>
            </button>
            <nav
              ref={dropdownRef}
              className={`${classes.menu} ${
                isActive ? classes.active : classes.inactive
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
