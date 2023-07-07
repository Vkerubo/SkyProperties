import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export const SellersNavBar = ({ id, user, setUser }) => {
  const history = useHistory()
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/")
      }
    });
  }
  return (
    <nav>
      <NavLink exact to={`/sellers/${id}/sellers_home`}>
        <h2>Home</h2>
      </NavLink>
      <NavLink exact to={`/sellers/${id}/add_property`}>
        <h2>Add Property</h2>
      </NavLink>
      <NavLink exact to={`/sellers/${id}/sellers_profile`}>
        <h2>Profile</h2>
      </NavLink>
      <button variant="outline" onClick={handleLogoutClick}>Logout</button>
    </nav>
  );
};
