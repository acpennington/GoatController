import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import Hand from "./Hand.js";
import RightTools from "./RightTools/RightTools.js";

import { MONSTER, ST, FIELD_SPELL, DECK, EXTRA_DECK, VILLAIN_HAND_SIZE } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class Battlefield extends Component {
   render() {
      const { classes, size, handCounts, discardPile, players, player } = this.props;
      const { solo } = player;
      const HERO = players.hero;
      const VILLAIN = players.villain;
      const cardHeight = Math.floor(size - 2);

      return (
         <DndProvider backend={HTML5Backend}>
            <div className={classes.gameplayContainer}>
               <div className={classes.cardsInPlay}>
                  {solo ? (
                     <div style={{ height: cardHeight * VILLAIN_HAND_SIZE }}></div>
                  ) : (
                     <Hand player={VILLAIN} handCount={handCounts[VILLAIN] || 0} size={cardHeight} isHero={false} />
                  )}
                  <div className={classes.cardRow} style={{ height: size }}>
                     {!solo && (
                        <Fragment>
                           <YugiohCard height={cardHeight} notFull player={VILLAIN} row={DECK} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={4} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={3} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={2} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={1} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={0} />
                           <YugiohCard height={cardHeight} notFull player={VILLAIN} row={EXTRA_DECK} />
                        </Fragment>
                     )}
                  </div>
                  <div className={classes.cardRow} style={{ height: size }}>
                     {!solo && (
                        <Fragment>
                           <YugiohCard height={cardHeight} notFull player={VILLAIN} row={discardPile} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={4} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={3} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={2} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={1} />
                           <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={0} />
                           <YugiohCard height={cardHeight} notFull player={VILLAIN} row={FIELD_SPELL} />
                        </Fragment>
                     )}
                  </div>
                  <div className={classes.cardRow} style={{ height: size }}>
                     <YugiohCard height={cardHeight} notFull player={HERO} row={FIELD_SPELL} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={0} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={1} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={2} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={3} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={4} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} notFull player={HERO} row={discardPile} isHero />
                  </div>
                  <div className={classes.cardRow} style={{ height: size }}>
                     <YugiohCard height={cardHeight} notFull player={HERO} row={EXTRA_DECK} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={0} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={1} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={2} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={3} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} player={HERO} row={ST} zone={4} discardPile={discardPile} isHero />
                     <YugiohCard height={cardHeight} notFull player={HERO} row={DECK} isHero />
                  </div>
                  <Hand player={HERO} handCount={handCounts[HERO] || 0} size={size} discardPile={discardPile} isHero={true} />
               </div>
               <RightTools height={cardHeight} discardPile={discardPile} player={player} />
            </div>
         </DndProvider>
      );
   }
}

function mapStateToProps(state, ownProps) {
   const { name } = ownProps.player;
   const { field, settings } = state;

   const handCounts = {};
   const players = { hero: name };
   for (const key in field) {
      handCounts[key] = field[key].hand.length;
      if (key !== name) players.villain = key;
   }

   return {
      handCounts,
      players,
      discardPile: settings.discardPile
   };
}

Battlefield.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.object.isRequired,
   size: PropTypes.number.isRequired,
   webSocket: PropTypes.object
};

export default connect(mapStateToProps)(withStyles(styles)(Battlefield));
