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
import { GRAVEYARD } from "utils/constants.js";
import { BANISHED } from "utils/constants.js";

class Battlefield extends Component {
   render() {
      const { classes, handCounts, players, rowHeight, player } = this.props;
      const { solo } = player;
      const HERO = players.hero;
      const VILLAIN = players.villain;
      const cardHeight = Math.floor(rowHeight - 2);
      const visibility = solo ? "hidden" : "visible";

      return (
         <DndProvider backend={HTML5Backend}>
            <div className={classes.gameplayContainer}>
               <div className={classes.cardsInPlay}>
                  {solo ? (
                     <div style={{ height: cardHeight * VILLAIN_HAND_SIZE }}></div>
                  ) : (
                     <Hand player={VILLAIN} handCount={handCounts[VILLAIN] || 0} size={rowHeight} isHero={false} />
                  )}
                  <div className={classes.playingField} style={{ height: `calc(100% - ${rowHeight * 1.5}px)` }}>
                     <div className={classes.cardColumn} style={{ top: -cardHeight / 2 + "px" }}>
                        <Fragment>
                           <YugiohCard height={cardHeight} notFull player={VILLAIN} row={DECK} style={{ visibility }} />
                           <YugiohCard height={cardHeight} notFull player={VILLAIN} row={GRAVEYARD} style={{ visibility }} />
                           <YugiohCard height={cardHeight} notFull player={VILLAIN} row={BANISHED} style={{ visibility }} />
                           <YugiohCard height={cardHeight} notFull player={HERO} row={FIELD_SPELL} isHero />
                           <YugiohCard height={cardHeight} notFull player={HERO} row={EXTRA_DECK} isHero />
                        </Fragment>
                     </div>
                     <div className={classes.cardRows}>
                        <div className={classes.cardRow} style={{ height: rowHeight }}>
                           {!solo && (
                              <Fragment>
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={4} />
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={3} />
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={2} />
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={1} />
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={ST} zone={0} />
                              </Fragment>
                           )}
                        </div>
                        <div className={classes.cardRow} style={{ height: rowHeight }}>
                           {!solo && (
                              <Fragment>
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={4} />
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={3} />
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={2} />
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={1} />
                                 <YugiohCard height={cardHeight} player={VILLAIN} row={MONSTER} zone={0} />
                              </Fragment>
                           )}
                        </div>
                        <div className={classes.cardRow} style={{ height: rowHeight }}>
                           <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={0} isHero />
                           <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={1} isHero />
                           <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={2} isHero />
                           <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={3} isHero />
                           <YugiohCard height={cardHeight} player={HERO} row={MONSTER} zone={4} isHero />
                        </div>
                        <div className={classes.cardRow} style={{ height: rowHeight }}>
                           <YugiohCard height={cardHeight} player={HERO} row={ST} zone={0} isHero />
                           <YugiohCard height={cardHeight} player={HERO} row={ST} zone={1} isHero />
                           <YugiohCard height={cardHeight} player={HERO} row={ST} zone={2} isHero />
                           <YugiohCard height={cardHeight} player={HERO} row={ST} zone={3} isHero />
                           <YugiohCard height={cardHeight} player={HERO} row={ST} zone={4} isHero />
                        </div>
                     </div>
                     <div className={classes.cardColumn} style={{ top: -cardHeight / 2 + "px" }}>
                        <Fragment>
                           <YugiohCard height={cardHeight} notFull player={VILLAIN} row={EXTRA_DECK} style={{ visibility }} />
                           <YugiohCard height={cardHeight} notFull player={VILLAIN} row={FIELD_SPELL} style={{ visibility }} />
                           <YugiohCard height={cardHeight} notFull player={HERO} row={BANISHED} isHero />
                           <YugiohCard height={cardHeight} notFull player={HERO} row={GRAVEYARD} isHero />
                           <YugiohCard height={cardHeight} notFull player={HERO} row={DECK} isHero />
                        </Fragment>
                     </div>
                  </div>
                  <Hand player={HERO} handCount={handCounts[HERO] || 0} size={rowHeight} isHero={true} />
               </div>
               <RightTools height={cardHeight} player={player} />
            </div>
         </DndProvider>
      );
   }
}

function mapStateToProps(state, ownProps) {
   const { name } = ownProps.player;
   const { field } = state;

   const handCounts = {};
   const players = { hero: name };
   for (const key in field) {
      handCounts[key] = field[key].hand.length;
      if (key !== name) players.villain = key;
   }

   return { handCounts, players };
}

Battlefield.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.object.isRequired,
   rowHeight: PropTypes.number.isRequired,
   webSocket: PropTypes.object
};

export default connect(mapStateToProps)(withStyles(styles)(Battlefield));
