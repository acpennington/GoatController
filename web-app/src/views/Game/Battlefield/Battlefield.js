import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import { moveCard } from "stateStore/actions/field.js";
import {
   VILLAIN_HAND_SIZE,
   HERO,
   VILLAIN,
   MONSTER,
   ST,
   HAND,
   DECK,
   EXTRA_DECK,
   CARD,
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
                  <YugiohCard height={size} notFull player={VILLAIN} row={MONSTER} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={4} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={3} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={2} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={1} />
                  <YugiohCard height={size} player={VILLAIN} row={MONSTER} zone={0} />
                  <YugiohCard height={size} notFull player={VILLAIN} row={MONSTER} />
               </div>
               <div className={classes.cardRow}>
                  <YugiohCard height={size} notFull player={HERO} row={MONSTER} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={0} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={1} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={2} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={3} />
                  <YugiohCard height={size} player={HERO} row={MONSTER} zone={4} />
                  <YugiohCard height={size} notFull player={HERO} row={MONSTER} />
               </div>
               <div className={classes.cardRow}>
                  <YugiohCard height={size} notFull player={HERO} row={EXTRA_DECK} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={0} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={1} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={2} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={3} />
                  <YugiohCard height={size} player={HERO} row={ST} zone={4} />
                  <YugiohCard height={size} notFull player={HERO} row={DECK} />
               </div>
               <Hand player={HERO} handCount={handCounts.hero} size={size} />
            </div>
         </DndProvider>
         <div className={classes.rightTools}>Right Toolbar Placeholder</div>
      </div>
   );
}

function Hand({ player, handCount, size }) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const handList = [];
   const isHero = player === HERO;
   const handSize = size * (isHero ? (handCount > 9 ? 0.95 : 1) : VILLAIN_HAND_SIZE * (handCount > 13 ? 0.94 : 1));

   const [{ isOver }, drop] = useDrop({
      accept: CARD,
      drop: (item) => {
         dispatch(moveCard({ from: item, to: { player, row: HAND } }));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   });

   for (let i = 0; i < handCount; i++) {
      handList.push(<YugiohCard height={handSize} player={player} row={HAND} zone={i} notFull key={i} />);
   }

   return (
      <div
         className={classes.cardRow}
         style={{
            height: size * (isHero ? 1 : VILLAIN_HAND_SIZE),
            backgroundColor: isOver && OVER_COLOR + "33"
         }}
         ref={isHero ? drop : null}
      >
         <div className={classes.hand}>{handList}</div>
      </div>
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
