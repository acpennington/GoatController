import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "stateStore/gameStore.js";
import LeftPanel from "./LeftPanel.js";
import Battlefield from "./Battlefield/Battlefield.js";
import { checkToken } from "utils/authToken.js";
import { GAME_RATIO, VILLAIN_HAND_SIZE } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class Game extends Component {
   constructor(props) {
      super(props);
      checkToken();

      const settings = JSON.parse(window.sessionStorage.getItem("settings"));
      this.state = {
         sizingValue: this.getSizingValue(),
         backgroundImage: 'url("/backgrounds/' + settings.gamebg + '")'
      };
      window.addEventListener("resize", () => {
         this.setState({ sizingValue: this.getSizingValue() });
      });
   }

   getSizingValue = () => {
      const vpw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vph = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      return Math.min(vpw / GAME_RATIO, vph);
   };

   render() {
      const { classes } = this.props;
      const { sizingValue, backgroundImage } = this.state;

      return (
         <Provider store={store}>
            <div className={classes.container} style={{ backgroundImage }}>
               <div
                  className={classes.innerContainer}
                  style={{
                     height: sizingValue,
                     width: sizingValue * GAME_RATIO
                  }}
               >
                  <LeftPanel />
                  <Battlefield size={sizingValue / (5 + VILLAIN_HAND_SIZE)} />
               </div>
            </div>
         </Provider>
      );
   }
}

export default withStyles(styles)(Game);
