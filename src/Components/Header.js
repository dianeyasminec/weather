import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/Weather">
        Weather
      </NavLink>
      <NavLink activeClassName="active" to="/FavoritesCityLists">
      FavoritesCityLists
      </NavLink>
      </nav>
  )}

  export default Header;