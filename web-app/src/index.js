import React from "react";
import { createRoot } from "react-dom/client";
import { Router, Route, Switch } from "react-router-dom";
import store, { history } from "stateStore/gameStore.js";
import deckStore from "stateStore/deckConstructorStore.js";
import { Provider } from "react-redux";
import "assets/scss/material-kit-react.scss?v=1.9.0";

import SettingsPage from "views/SettingsPage/SettingsPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import BetaPage from "views/BetaPage/BetaPage.js";
import Game from "views/Game/Game.js";
import DeckConstructor from "views/DeckConstructor/DeckConstructor.js";
import Wall from "views/Wall/Wall.js";
import Leagues from "views/Leagues/Leagues.js";
import LeaguePage from "views/LeaguePage/LeaguePage.js";
import CreateLeague from "views/CreateLeague/CreateLeague.js";
import FusionsPage from "views/FusionsPage.js/FusionsPage";
import ShareableDeck from "views/ShareableDeck/ShareableDeck.js";

const root = createRoot(document.getElementById("root"));

root.render(
   <Router history={history}>
      <Switch>
         <Route path="/league" component={LeaguePage} />
         <Route path="/leagues" component={Leagues} />
         <Route path="/createleague" component={CreateLeague} />
         <Route
            path="/game"
            render={() => (
               <Provider store={store}>
                  <Game />
               </Provider>
            )}
         />
         <Route
            path="/deckconstructor"
            render={() => (
               <Provider store={deckStore}>
                  <DeckConstructor />
               </Provider>
            )}
         />
         <Route
            path="/fusions"
            render={() => (
               <Provider store={deckStore}>
                  <FusionsPage />
               </Provider>
            )}
         />
         <Route
            path="/deck"
            render={() => (
               <Provider store={deckStore}>
                  <ShareableDeck />
               </Provider>
            )}
         />
         <Route path="/settings" component={SettingsPage} />
         <Route path="/login-page" component={LoginPage} />
         <Route path="/beta" component={BetaPage} />
         <Route path="/wall" component={Wall} />
         <Route path="/" component={LoginPage} />
      </Switch>
   </Router>
);
