import React, { Component } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import YugiohCard from "components/YugiohCard/YugiohCard.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class Battlefield extends Component {
   render() {
      const { classes, size } = this.props;

      return (
         <div className={classes.gameplayContainer}>
            <DndProvider backend={HTML5Backend}>
               <div className={classes.cardsInPlay}>
                  <div className={classes.cardRow} style={{ height: size }}></div>
                  <div className={classes.cardRow}>
                     <YugiohCard height={size} blank notFull />
                     <YugiohCard
                        name="Black Luster Soldier - Envoy of the Beginning"
                        cardType="effectMonster"
                        attribute="Light"
                        levelOrSubtype={8}
                        height={size}
                        atk={3000}
                        def={2500}
                        player="villain"
                        row="s/t"
                        zone={1}
                     />
                     <YugiohCard
                        name="Shining Angel"
                        cardType="effectMonster"
                        attribute="Light"
                        levelOrSubtype={4}
                        height={size}
                        atk={1400}
                        def={800}
                        player="villain"
                        row="s/t"
                        zone={2}
                     />
                     <YugiohCard
                        name="Call of the Haunted"
                        cardType="trap"
                        levelOrSubtype="Continuous"
                        height={size}
                        player="villain"
                        row="s/t"
                        zone={3}
                     />
                     <YugiohCard
                        name="Black Luster Soldier - Envoy of the Beginning"
                        cardType="effectMonster"
                        attribute="Light"
                        levelOrSubtype={8}
                        height={size}
                        atk={3000}
                        def={2500}
                        player="villain"
                        row="s/t"
                        zone={4}
                     />
                     <YugiohCard
                        name="Black Luster Soldier - Envoy of the Beginning"
                        cardType="effectMonster"
                        attribute="Light"
                        levelOrSubtype={8}
                        height={size}
                        atk={3000}
                        def={2500}
                        player="villain"
                        row="s/t"
                        zone={5}
                     />
                     <YugiohCard height={size} blank notFull />
                  </div>
                  <div className={classes.cardRow}>
                     <YugiohCard height={size} blank notFull />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank notFull />
                  </div>
                  <div className={classes.cardRow}>
                     <YugiohCard height={size} blank notFull />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank notFull />
                  </div>
                  <div className={classes.cardRow}>
                     <YugiohCard height={size} blank notFull />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank />
                     <YugiohCard height={size} blank notFull />
                  </div>
               </div>
            </DndProvider>
            <div className={classes.rightTools}>Right Toolbar</div>
         </div>
      );
   }
}

export default withStyles(styles)(Battlefield);
