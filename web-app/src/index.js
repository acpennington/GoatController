import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import store, { history } from "./stateStore/store.js";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import GamePage from "views/Game/Game.js";

// example pages
import YugiohCard from "views/Examples/YugiohCard.js";

ReactDOM.render(
   <Provider store={store}>
      <ConnectedRouter history={history}>
         <Switch>
            <Route path="/game" component={GamePage} />
            <Route path="/examples/yugiohcard" component={YugiohCard} />
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/" component={Components} />
         </Switch>
      </ConnectedRouter>
   </Provider>,
   document.getElementById("root")
);
