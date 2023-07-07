import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const BuyersNavBar = () => {
  return (
    <div>
      <div>
        <NavLink exact to="/buyer/buyers_home">
          <h2>Home</h2>
        </NavLink>
        <NavLink exact to="/buyer/favorites">
          <h2>Favorites</h2>
        </NavLink>
        <NavLink exact to="/buyer/buyers_profile">
          <h2>Profile</h2>
        </NavLink>
      </div>
    </div>
  );
};
