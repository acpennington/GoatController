import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

import { Provider } from "react-redux";
import store from "stateStore/gameStore.js";
import Battlefield from "./Battlefield/Battlefield.js";
import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";
import Chat from "components/Chat/Chat.js";
import { GAME_RATIO, VILLAIN_HAND_SIZE } from "utils/constants.js";

class Game extends Component {
   constructor(props) {
      super(props);
      this.state = { sizingValue: this.getSizingValue() };
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
      const sizingValue = this.state.sizingValue;

      return (
         <Provider store={store}>
            <div className={classes.container} style={{ backgroundImage: 'url("/backgrounds/thousandeyes.png")' }}>
               <div
                  className={classes.innerContainer}
                  style={{
                     height: sizingValue,
                     width: sizingValue * GAME_RATIO
                  }}
               >
                  <div className={classes.leftPanel}>
                     <YugiohCardExpanded />
                     <Chat />
                  </div>
                  <Battlefield size={sizingValue / (5 + VILLAIN_HAND_SIZE)} />
               </div>
            </div>
         </Provider>
      );
   }
}

export default withStyles(styles)(Game);
