import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory()
  
  const handleLogin = (e) => {
    e.preventDefault();
  
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error("Login failed")
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
          history.push("/buyer/buyers_home"); // Add a forward slash before "buyer"
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  

  return (
    <div>
      <Navbar />
      <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
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
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginPage;