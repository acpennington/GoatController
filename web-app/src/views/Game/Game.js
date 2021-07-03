import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner.js";

import store from "stateStore/gameStore.js";
import LeftPanel from "./LeftPanel.js";
import Battlefield from "./Battlefield/Battlefield.js";

import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";
import { GAME_RATIO, VILLAIN_HAND_SIZE } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class Game extends Component {
   constructor(props) {
      super(props);
      checkToken(true);
      setBodyImage();

      this.state = { sizingValue: this.getSizingValue(), webSocket: false };
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
      const { sizingValue, webSocket } = this.state;

      if (webSocket)
         return (
            <Provider store={store}>
               <div className={classes.container}>
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
      else return <LoadingSpinner message="Connecting to game..." />;
   }
}

Game.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Game);
