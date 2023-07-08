import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export const SellersNavBar = ({ id, user, setUser }) => {
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
    <nav style={styles.navbar}>
      <NavLink
        exact
        to={`/sellers/${id}/sellers_home`}
        style={styles.navLink}
        activeStyle={styles.activeNavLink}
      >
        <h2 style={styles.navLinkText}>My listings</h2>
      </NavLink>
      <NavLink
        exact
        to={`/sellers/${id}/add_property`}
        style={styles.navLink}
        activeStyle={styles.activeNavLink}
      >
        <h2 style={styles.navLinkText}>Add Property</h2>
      </NavLink>
      <NavLink
        exact
        to={`/sellers/${id}/sellers_profile`}
        style={styles.navLink}
        activeStyle={styles.activeNavLink}
      >
        <h2 style={styles.navLinkText}> My Profile</h2>
      </NavLink>
      <button
        variant="outline"
        style={styles.logoutButton}
        onClick={handleLogoutClick}
      >
        Logout
      </button>
    </nav>
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
