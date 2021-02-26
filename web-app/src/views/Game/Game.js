import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";
import Battlefield from "./Battlefield/Battlefield.js";
import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";

const sizeRatio = 1.7;

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
      const sizingValue = Math.min(vpw / sizeRatio, vph);
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
                  width: sizingValue * sizeRatio
               }}
            >
               <div className={classes.leftPanel}>
                  <YugiohCardExpanded name="Shining Angel" />
                  <div className={classes.chat}>
                     {/** Send message functionality to be added here*/}
                     <div>
                        <div>Player1: Yo yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                        <div>Player1: Yo</div>
                     </div>
                  </div>
               </div>
               <div className={classes.gameplay}>
                  <Battlefield size={sizingValue / 5.7} />
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(Game);
