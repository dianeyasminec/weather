import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/"/>
      <NavLink activeClassName="active" to="/weather"/>
      <NavLink activeClassName="active" to="/favoritesCities"/>
      
      </nav>
  )}

  export default Navigation;