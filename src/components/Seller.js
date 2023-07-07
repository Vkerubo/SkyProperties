import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
import { SellersNavBar } from "./SellersNavBar";
import { AddProperty } from "./AddProperty";
import { Profile } from "./Profile";
import { SellersHomePage } from "./SellersHomePage";

const Seller = ({ user, setUser }) => {
  const [seller, setSeller] = useState({});
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`/sellers/${params.id}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Failed to fetch seller data.");
        }
      })
      .then((data) => {
        setSeller(data);
        history.push(`/sellers/${params.id}/sellers_home`);
      })
      .catch((error) => console.log(error));
  }, [params.id, history]);

  return (
    <Router>
      <div>
        <nav>
          <SellersNavBar id={params.id} user={user} setUser={setUser} />
        </nav>
        <Switch>
          <Route exact path={`/sellers/${params.id}/add_property`}>
            <AddProperty seller={seller} />
          </Route>
          <Route exact path={`/sellers/${params.id}/sellers_profile`}>
            <Profile user={user} />
          </Route>
          <Route exact path={`/sellers/${params.id}/sellers_home`}>
            <SellersHomePage seller={seller} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Seller;
