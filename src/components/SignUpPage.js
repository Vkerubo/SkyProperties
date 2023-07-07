import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";

const SignUpPage = ({ setUser }) => {
  const history = useHistory(); // React Router's useHistory hook
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        role,
        phone,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error("Sign up failed")
          });
        }
      })
      .then((user) => {
        setUser(user);
        setError(""); // Reset the error state if login is successful
        if (user.role.toLowerCase() === "seller") {
          history.push(`/sellers/${user.seller_id}/sellers_home`);
        }
        else if (user.role.toLowerCase() === "buyer") {
          history.push("/buyer"); // Add a forward slash before "buyer"
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign up</h2>
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">User Type:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
