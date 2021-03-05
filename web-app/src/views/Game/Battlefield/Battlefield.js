import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import Hand from "./Hand.js";
import RightTools from "./RightTools.js";
import { HERO, VILLAIN, MONSTER, ST, FIELD_SPELL, DECK, EXTRA_DECK } from "utils/constants.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

const useStyles = makeStyles(styles);

function Battlefield({ size }) {
   const classes = useStyles();

   const handCounts = useSelector((state) => ({
      hero: state.field.hero.hand.length,
      villain: state.field.villain.hand.length
   }));
   const DISCARD_PILE = useSelector((state) => state.settings.discardPile);

   return (
      <div className={classes.gameplayContainer}>
         <DndProvider backend={HTML5Backend}>
            <div className={classes.cardsInPlay}>
               <Hand player={VILLAIN} handCount={handCounts.villain} size={size} />
               <div className={classes.cardRow}>
                  <YugiohCard height={size} notFull player={VILLAIN} row={DECK} />
                  <YugiohCard height={size} player={VILLAIN} row={ST} zone={4} />
                  <YugiohCard height={size} player={VILLAIN} row={ST} zone={3} />
                  <YugiohCard height={size} player={VILLAIN} row={ST} zone={2} />
                  <YugiohCard height={size} player={VILLAIN} row={ST} zone={1} />
                  <YugiohCard height={size} player={VILLAIN} row={ST} zone={0} />
                  <YugiohCard height={size} notFull player={VILLAIN} row={EXTRA_DECK} />
               </div>
               <div className={classes.cardRow}>
                  <YugiohCard height={size} notFull player={VILLAIN} row={DISCARD_PILE} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={4} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={3} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={2} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={1} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={0} />
                  <YugiohCard height={size} notFull player={VILLAIN} row={FIELD_SPELL} />
               </div>
               <div className={classes.cardRow}>
                  <YugiohCard height={size} notFull player={HERO} row={FIELD_SPELL} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={0} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={1} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={2} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={3} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={4} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} notFull player={HERO} row={DISCARD_PILE} />
               </div>
               <div className={classes.cardRow}>
                  <YugiohCard height={size} notFull player={HERO} row={EXTRA_DECK} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={0} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={1} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={2} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={3} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={4} discardPile={DISCARD_PILE} />
                  <YugiohCard height={size} notFull player={HERO} row={DECK} />
               </div>
               <Hand player={HERO} handCount={handCounts.hero} size={size} discardPile={DISCARD_PILE} />
            </div>
         </DndProvider>
         <RightTools discardPile={DISCARD_PILE} />
      </div>
   );
}

Battlefield.propTypes = {
   size: PropTypes.number.isRequired
};

export default Battlefield;
