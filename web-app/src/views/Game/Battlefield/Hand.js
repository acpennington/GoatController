import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { moveCard } from "stateStore/actions/field.js";
import { VILLAIN_HAND_SIZE, HERO, HAND, allTypes, OVER_COLOR } from "utils/constants.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

const useStyles = makeStyles(styles);

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

   for (let i = 0; i < handCount; i++) {
      handList.push(
         <YugiohCard height={handSize} player={player} row={HAND} zone={i} discardPile={discardPile} notFull key={i} />
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

Hand.propTypes = {
   player: PropTypes.string.isRequired,
   handCount: PropTypes.number.isRequired,
   size: PropTypes.number.isRequired
};

export default Hand;
