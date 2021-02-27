import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import { moveCard } from "stateStore/actions/field.js";

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
               <Hand player="villain" handCount={handCounts.villain} size={size} />
               <div className={classes.cardRow}>
                  <YugiohCard height={size} notFull player="villain" row="deck" />
                  <YugiohCard height={size} player="villain" row="s/t" zone={4} />
                  <YugiohCard height={size} player="villain" row="s/t" zone={3} />
                  <YugiohCard height={size} player="villain" row="s/t" zone={2} />
                  <YugiohCard height={size} player="villain" row="s/t" zone={1} />
                  <YugiohCard height={size} player="villain" row="s/t" zone={0} />
                  <YugiohCard height={size} notFull player="villain" row="extra deck" />
               </div>
               <div className={classes.cardRow}>
                  <YugiohCard height={size} notFull player="villain" row="monster" />
                  <YugiohCard height={size} player="villain" row="monster" zone={4} />
                  <YugiohCard height={size} player="villain" row="monster" zone={3} />
                  <YugiohCard height={size} player="villain" row="monster" zone={2} />
                  <YugiohCard height={size} player="villain" row="monster" zone={1} />
                  <YugiohCard height={size} player="villain" row="monster" zone={0} />
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
                  <YugiohCard height={size} notFull player="hero" row="extra deck" />
                  <YugiohCard height={size} player="hero" row="s/t" zone={0} />
                  <YugiohCard height={size} player="hero" row="s/t" zone={1} />
                  <YugiohCard height={size} player="hero" row="s/t" zone={2} />
                  <YugiohCard height={size} player="hero" row="s/t" zone={3} />
                  <YugiohCard height={size} player="hero" row="s/t" zone={4} />
                  <YugiohCard height={size} notFull player="hero" row="deck" />
               </div>
               <Hand player="hero" handCount={handCounts.hero} size={size} />
            </div>
         </DndProvider>
         <div className={classes.rightTools}>Right Toolbar Placeholder</div>
      </div>
   );
}

function Hand(props) {
   const { player, handCount, size } = props;
   const classes = useStyles();
   const dispatch = useDispatch();
   const handList = [];
   const isHero = player === "hero";

   const [{ isOver }, drop] = useDrop({
      accept: "card",
      drop: (item) => {
         dispatch(moveCard({ from: item, to: { player, row: "hand" } }));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   });

   for (let i = 0; i < handCount; i++) {
      handList.push(
         <YugiohCard height={size * (isHero ? 1 : 0.7)} player={player} row="hand" zone={i} notFull key={i} />
      );
   }

   return (
      <div
         className={classes.cardRow}
         style={{ height: size * (isHero ? 1 : 0.7), backgroundColor: isOver ? "rgba(0,255,0,0.2)" : null }}
         ref={isHero ? drop : null}
      >
         <div className={classes.hand}>{handList}</div>
      </div>
   );
}

Battlefield.propTypes = {
   size: PropTypes.number.isRequired
};

export default Battlefield;
