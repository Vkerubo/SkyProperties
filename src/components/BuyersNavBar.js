import React from "react";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom";

export const BuyersNavBar = ({ user, setUser }) => {
  const history = useHistory();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/");
      }
    });
  }

  return (
    <div style={styles.navbar}>
      <NavLink
        exact
        to="/buyer/buyers_home"
        style={styles.navLink}
        activeStyle={styles.activeNavLink}
      >
        <h2 style={styles.navLinkText}>Listings</h2>
      </NavLink>
      <NavLink
        exact
        to="/buyer/favorites"
        style={styles.navLink}
        activeStyle={styles.activeNavLink}
      >
        <h2 style={styles.navLinkText}>Favorites</h2>
      </NavLink>
      <NavLink
        exact
        to="/buyer/buyers_profile"
        style={styles.navLink}
        activeStyle={styles.activeNavLink}
      >
        <h2 style={styles.navLinkText}>My Profile</h2>
      </NavLink>
      <button style={styles.logoutButton} onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#333",
    borderBottom: "1px solid #ccc",
  },
  navLink: {
    textDecoration: "none",
    margin: "0 10px",
    color: "#fff",
    transition: "background-color 0.3s, transform 0.3s",
    padding: "8px 16px",
    borderRadius: "4px",
  },
  activeNavLink: {
    fontWeight: "bold",
  },
  navLinkText: {
    fontSize: "18px",
    fontWeight: "normal",
    margin: "0",
  },
  logoutButton: {
    backgroundColor: "#315e6b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
