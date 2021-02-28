import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

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
      const sizingValue = Math.min(vpw / GAME_RATIO, vph);
      return sizingValue;
   };

   render() {
      const { classes } = this.props;
      const sizingValue = this.state.sizingValue;

      return (
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
               <div className={classes.gameplay}>
                  <Battlefield size={sizingValue / (5 + VILLAIN_HAND_SIZE)} />
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(Game);
