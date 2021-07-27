import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import FieldRow from "./FieldRow.js";
import YugiohCard from "components/YugiohCard/YugiohCard.js";
import Hand from "./Hand.js";
import RightTools from "./RightTools/RightTools.js";

import { MONSTER, ST, FIELD_SPELL, DECK, EXTRA_DECK, GRAVEYARD, BANISHED, VILLAIN_HAND_HEIGHT_FRACTION } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/battlefield.js";

class Battlefield extends Component {
   render() {
      const { classes, handCounts, players, rowHeight, player } = this.props;
      const { solo } = player;
      const HERO = players.hero;
      const VILLAIN = players.villain;
      const cardHeight = Math.floor(rowHeight - 2); // this is the most straightforward way to leave some space between cards
      const visibility = solo ? "hidden" : "visible";

      return (
         <DndProvider backend={HTML5Backend}>
            <div className={classes.cardsInPlay}>
               <div className={classes.cardColumn}>
                  <YugiohCard height={cardHeight} notFull player={VILLAIN} row={DECK} style={{ visibility }} />
                  <YugiohCard height={cardHeight} notFull player={VILLAIN} row={GRAVEYARD} style={{ visibility }} />
                  <YugiohCard height={cardHeight} notFull player={VILLAIN} row={BANISHED} style={{ visibility }} />
                  <YugiohCard height={cardHeight} notFull player={HERO} row={FIELD_SPELL} isHero />
                  <YugiohCard height={cardHeight} notFull player={HERO} row={EXTRA_DECK} isHero />
               </div>
               <div className={classes.playingField}>
                  {solo ? (
                     <div style={{ height: cardHeight * VILLAIN_HAND_HEIGHT_FRACTION }}></div>
                  ) : (
                     <Hand player={VILLAIN} handCount={handCounts[VILLAIN] || 0} rowHeight={rowHeight} isHero={false} />
                  )}
                  <FieldRow rowHeight={rowHeight} cardHeight={cardHeight} player={VILLAIN} rowType={ST} divOnly={solo} />
                  <FieldRow rowHeight={rowHeight} cardHeight={cardHeight} player={VILLAIN} rowType={MONSTER} divOnly={solo} />
                  <FieldRow rowHeight={rowHeight} cardHeight={cardHeight} player={HERO} rowType={MONSTER} isHero />
                  <FieldRow rowHeight={rowHeight} cardHeight={cardHeight} player={HERO} rowType={ST} isHero />
                  <Hand player={HERO} handCount={handCounts[HERO] || 0} rowHeight={rowHeight} isHero={true} />
               </div>
               <div className={classes.cardColumn}>
                  <YugiohCard height={cardHeight} notFull player={VILLAIN} row={EXTRA_DECK} style={{ visibility }} />
                  <YugiohCard height={cardHeight} notFull player={VILLAIN} row={FIELD_SPELL} style={{ visibility }} />
                  <YugiohCard height={cardHeight} notFull player={HERO} row={BANISHED} isHero />
                  <YugiohCard height={cardHeight} notFull player={HERO} row={GRAVEYARD} isHero />
                  <YugiohCard height={cardHeight} notFull player={HERO} row={DECK} isHero />
               </div>
            </div>
            <RightTools height={cardHeight} player={player} />
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
