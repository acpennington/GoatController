import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { moveCard } from "stateStore/actions/field.js";
import {
   VILLAIN_HAND_SIZE,
   HERO,
   VILLAIN,
   MONSTER,
   ST,
   FIELD_SPELL,
   HAND,
   DECK,
   EXTRA_DECK,
   allTypes,
   OVER_COLOR
} from "utils/constants.js";

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
         <div className={classes.rightTools}>Right Toolbar Placeholder</div>
      </div>
   );
}

function Hand({ player, handCount, size, discardPile }) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const handList = [];
   const isHero = player === HERO;
   const handSize = size * (isHero ? (handCount > 9 ? 0.95 : 1) : VILLAIN_HAND_SIZE * (handCount > 13 ? 0.94 : 1));

   const [{ isOver }, drop] = useDrop({
      accept: allTypes,
      drop: (item) => {
         dispatch(moveCard({ from: item, to: { player, row: HAND } }));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   });

   if (handCount < 1) handList.push(<div> </div>);
   else
      for (let i = 0; i < handCount; i++) {
         handList.push(
            <YugiohCard
               height={handSize}
               player={player}
               row={HAND}
               zone={i}
               discardPile={discardPile}
               notFull
               key={i}
            />
         );
      }

   const myColor = isOver && OVER_COLOR + "33";
   return (
      <FriendlyScroll
         id={"hand" + player}
         drop={isHero && drop}
         style={{ overflowY: "hidden" }}
         bgColor={myColor}
         horiz
      >
         <div className={classes.hand} style={{ height: handSize }}>
            {handList}
         </div>
      </FriendlyScroll>
   );
}

Battlefield.propTypes = {
   size: PropTypes.number.isRequired
};

Hand.propTypes = {
   player: PropTypes.string.isRequired,
   handCount: PropTypes.number.isRequired,
   size: PropTypes.number.isRequired
};

export default Battlefield;
