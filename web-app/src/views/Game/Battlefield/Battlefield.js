import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import YugiohCard from "components/YugiohCard/YugiohCard.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

const useStyles = makeStyles(styles);

export default function Battlefield(props) {
   const { size } = props;
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
               <Hand player="hero" handCount={handCounts.hero} size={size} />
            </div>
         </DndProvider>
         <div className={classes.rightTools}>Hand Count: {handCounts.hero}</div>
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
         dispatch({ type: "MOVE_CARD", data: { from: item, to: { player, row: "hand" } } });
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   });

   for (let i = 0; i < handCount; i++) {
      handList.push(<YugiohCard height={size * (isHero ? 1 : 0.7)} player={player} row="hand" zone={i} notFull />);
   }

   return (
      <div
         className={classes.cardRow}
         style={{ height: size * (isHero ? 1 : 0.7) }}
         ref={isHero ? drop : null}
         style={{ backgroundColor: isOver ? "rgba(0,255,0,0.2)" : null }}
      >
         <div className={classes.hand}>{handList}</div>
      </div>
   );
}
