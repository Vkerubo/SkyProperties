import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import { useEffect } from "react";
import { useState } from "react";
import LandingHome from "./components/LandingHome";
import Seller from "./components/Seller";
import { Buyer } from "./components/Buyer";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // If user is not logged in, restrict access to certain routes
  if (!user) {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup">
            <SignUpPage setUser={setUser} />
          </Route>
          <Route path="/login">
            <LoginPage setUser={setUser} />
          </Route>
          <Route path="/">
            <LandingHome />
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <SignUpPage setUser={setUser} />
        </Route>
        <Route path="/login">
          <LoginPage setUser={setUser} />
        </Route>
        <Route path="/sellers/:id/*">
          <Seller user={user} setUser={setUser} />
        </Route>
        <Route path="/buyer">
          <Buyer user={user} setUser={setUser} />
          <Redirect to="/buyer/buyers_home" />
        </Route>
        <Route path="/">
          <LandingHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
