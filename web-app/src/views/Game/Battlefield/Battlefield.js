import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import Hand from "./Hand.js";
import RightTools from "./RightTools/RightTools.js";
import { resetSolo } from "stateStore/actions/field.js";
import { HERO, VILLAIN, MONSTER, ST, FIELD_SPELL, DECK, EXTRA_DECK } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class Battlefield extends Component {
   constructor(props) {
      super(props);
      window.sessionStorage.setItem("opponentsSleeves", "goat.png");
      if (props.solo) props.resetSolo();
   }

   render() {
      const { classes, size, handCounts, discardPile, solo } = this.props;
      const cardHeight = Math.floor(size - 2);

      return (
         <DndProvider backend={HTML5Backend}>
            <div className={classes.gameplayContainer}>
               <div className={classes.cardsInPlay}>
                  <Hand player={VILLAIN} handCount={handCounts.villain} size={cardHeight} />
                  <div className={classes.cardRow} style={{ height: size }}>
                     <YugiohCard height={cardHeight} notFull player={VILLAIN} row={DECK} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={4} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={3} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={2} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={1} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={0} />
                     <YugiohCard height={cardHeight} notFull player={VILLAIN} row={EXTRA_DECK} />
                  </div>
                  <div className={classes.cardRow} style={{ height: size }}>
                     <YugiohCard height={cardHeight} notFull player={VILLAIN} row={discardPile} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={4} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={3} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={2} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={1} />
                     <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={0} />
                     <YugiohCard height={cardHeight} notFull player={VILLAIN} row={FIELD_SPELL} />
                  </div>
                  <div className={classes.cardRow} style={{ height: size }}>
                     <YugiohCard
                        height={cardHeight}
                        notFull
                        player={HERO}
                        row={FIELD_SPELL}
                        discardPile={discardPile}
                     />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={0} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={1} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={2} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={3} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={4} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} notFull player={HERO} row={discardPile} />
                  </div>
                  <div className={classes.cardRow} style={{ height: size }}>
                     <YugiohCard height={cardHeight} notFull player={HERO} row={EXTRA_DECK} />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={0} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={1} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={2} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={3} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={4} discardPile={discardPile} />
                     <YugiohCard height={cardHeight} notFull player={HERO} row={DECK} />
                  </div>
                  <Hand player={HERO} handCount={handCounts.hero} size={size} discardPile={discardPile} />
               </div>
               <RightTools height={cardHeight} discardPile={discardPile} solo={solo} />
            </div>
         </DndProvider>
      );
   }
}

function mapStateToProps(state) {
   return {
      handCounts: {
         hero: state.field.hero.hand.length,
         villain: state.field.villain.hand.length
      },
      discardPile: state.settings.discardPile
   };
}

Battlefield.propTypes = {
   size: PropTypes.number.isRequired,
   solo: PropTypes.bool
};

export default connect(mapStateToProps, { resetSolo })(withStyles(styles)(Battlefield));
