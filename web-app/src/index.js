import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./stateStore/gameStore.js";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import CardFinderDemo from "views/Components/CardFinderDemo.js"
import TextToCardDemo from "views/Components/TextToCardDemo.js"
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Game from "views/Game/Game.js";
import Wall from "views/Wall/Wall.js";

ReactDOM.render(
   <Router history={history}>
      <Switch>
         <Route path="/texttocard" component={TextToCardDemo} />
         <Route path="/cardfinder" component={CardFinderDemo} />
         <Route path="/game" component={Game} />
         <Route path="/landing-page" component={LandingPage} />
         <Route path="/login-page" component={LoginPage} />
         <Route path="/wall" component={Wall} />
         <Route path="/" component={Components} />
      </Switch>
   </Router>,
   document.getElementById("root")
);
