import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";
import YugiohCard from "components/YugiohCard/YugiohCard.js";
import Battlefield from "./Battlefield/Battlefield.js";

const sizeRatio = 1.6;

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
      console.log("game resized");
      return sizingValue;
   };

   render() {
      const { classes } = this.props;
      const sizingValue = this.state.sizingValue;
      const picHeight = sizingValue * sizeRatio * 0.9 * 0.25;

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
                  <div
                     className={classes.largePic}
                     style={{
                        height: picHeight,
                        backgroundImage: 'url("/cards/small/ShiningAngel.jpg")'
                     }}
                  >
                     <div className={classes.cardText} style={{ maxHeight: picHeight - 10 }}>
                        Shining Angel [Light/4]
                        <br />
                        Fairy/Effect – When this card is destroyed by battle and sent to the Graveyard: You can Special
                        Summon 1 LIGHT monster with 1500 or less ATK from your Deck, in face-up Attack Position.
                     </div>
                  </div>
                  <div className={classes.chat}>
                     Player1: Yo
                     <br />
                     Player2: What's up
                  </div>
               </div>
               <div className={classes.gameplay}>
                  <Battlefield size={sizingValue / 6} />
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(Game);
