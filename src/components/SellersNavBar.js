import React from "react";
import { NavLink } from "react-router-dom";

export const SellersNavBar = ({ id }) => {
  return (
    <div>
      <NavLink exact to={`/sellers/${id}/sellers_home`}>
        <h2>Home</h2>
      </NavLink>
      <NavLink exact to={`/sellers/${id}/add_property`}>
        <h2>Add Property</h2>
      </NavLink>
      <NavLink exact to={`/sellers/${id}/sellers_profile`}>
        <h2>Profile</h2>
      </NavLink>
    </div>
  );
};
