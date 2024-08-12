import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className={s.nav}>
          <li className={s.navItem}>
            <NavLink className={s.navLink} to="/">
              Home
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink className={s.navLink} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
