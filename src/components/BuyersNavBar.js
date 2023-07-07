import React from "react";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom";

export const BuyersNavBar = ({ user, setUser }) => {
  const history = useHistory();
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/")
      }
    });
  }
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
        <button  onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  );
};
