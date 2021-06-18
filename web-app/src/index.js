import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./stateStore/gameStore.js";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import CardFinderDemo from "views/Components/CardFinderDemo.js";
import TextToCardDemo from "views/Components/TextToCardDemo.js";
import SettingsPage from "views/SettingsPage/SettingsPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Game from "views/Game/Game.js";
import Wall from "views/Wall/Wall.js";
import Leagues from "views/Leagues/Leagues.js";
import CreateLeague from "views/CreateLeague/CreateLeague.js";

ReactDOM.render(
   <Router history={history}>
      <Switch>
         <Route path="/texttocard" component={TextToCardDemo} />
         <Route path="/cardfinder" component={CardFinderDemo} />
         <Route path="/leagues" component={Leagues} />
         <Route path="/createleague" component={CreateLeague} />
         <Route path="/game" component={Game} />
         <Route path="/solo" render={() => <Game solo={true} />} />
         <Route path="/settings" component={SettingsPage} />
         <Route path="/login-page" component={LoginPage} />
         <Route path="/wall" component={Wall} />
         <Route path="/" component={LoginPage} />
      </Switch>
   </Router>,
   document.getElementById("root")
);
