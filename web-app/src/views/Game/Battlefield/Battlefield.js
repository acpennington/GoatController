import React, { Component } from "react";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import YugiohCard from "components/YugiohCard/YugiohCard.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class Battlefield extends Component {
   renderHand = (player) => {
      const handCount = this.props.handCounts[player];
      const handList = [];

      for (let i = 0; i < handCount; i++) {
         handList.push(<YugiohCard height={player === "hero" ? this.props.size : this.props.size * 0.7} player={player} row="hand" zone={i} notFull />);
      }

      return handList;
   };

   render() {
      const { classes, size } = this.props;

      return (
         <div className={classes.gameplayContainer}>
            <DndProvider backend={HTML5Backend}>
               <div className={classes.cardsInPlay}>
                  <div className={classes.cardRow} style={{ height: size * 0.7 }}>
                     <div className={classes.hand}>{this.renderHand("villain")}</div>
                  </div>
                  <div className={classes.cardRow}>
                     <YugiohCard height={size} notFull player="villain" row="s/t" />
                     <YugiohCard height={size} player="villain" row="s/t" zone={0} />
                     <YugiohCard height={size} player="villain" row="s/t" zone={1} />
                     <YugiohCard height={size} player="villain" row="s/t" zone={2} />
                     <YugiohCard height={size} player="villain" row="s/t" zone={3} />
                     <YugiohCard height={size} player="villain" row="s/t" zone={4} />
                     <YugiohCard height={size} notFull player="villain" row="s/t" />
                  </div>
                  <div className={classes.cardRow}>
                     <YugiohCard height={size} notFull player="villain" row="monster" />
                     <YugiohCard height={size} player="villain" row="monster" zone={0} />
                     <YugiohCard height={size} player="villain" row="monster" zone={1} />
                     <YugiohCard height={size} player="villain" row="monster" zone={2} />
                     <YugiohCard height={size} player="villain" row="monster" zone={3} />
                     <YugiohCard height={size} player="villain" row="monster" zone={4} />
                     <YugiohCard height={size} notFull player="villain" row="monster" />
                  </div>
                  <div className={classes.cardRow}>
                     <YugiohCard height={size} notFull player="hero" row="monster" />
                     <YugiohCard height={size} player="hero" row="monster" zone={0} />
                     <YugiohCard height={size} player="hero" row="monster" zone={1} />
                     <YugiohCard height={size} player="hero" row="monster" zone={2} />
                     <YugiohCard height={size} player="hero" row="monster" zone={3} />
                     <YugiohCard height={size} player="hero" row="monster" zone={4} />
                     <YugiohCard height={size} notFull player="hero" row="monster" />
                  </div>
                  <div className={classes.cardRow}>
                     <YugiohCard height={size} notFull player="hero" row="s/t" />
                     <YugiohCard height={size} player="hero" row="s/t" zone={0} />
                     <YugiohCard height={size} player="hero" row="s/t" zone={1} />
                     <YugiohCard height={size} player="hero" row="s/t" zone={2} />
                     <YugiohCard height={size} player="hero" row="s/t" zone={3} />
                     <YugiohCard height={size} player="hero" row="s/t" zone={4} />
                     <YugiohCard height={size} notFull player="hero" row="s/t" />
                  </div>
                  <div className={classes.cardRow}>
                     <div className={classes.hand}>{this.renderHand("hero")}</div>
                  </div>
               </div>
            </DndProvider>
            <div className={classes.rightTools}>Hand Count: {this.props.handCounts.hero}</div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   const field = state.field;
   return { handCounts: { hero: field.hero.hand.length, villain: field.villain.hand.length } };
}

export default connect(mapStateToProps, {})(withStyles(styles)(Battlefield));
