import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { moveCard } from "stateStore/actions/field.js";
import { VILLAIN_HAND_SIZE, HERO, HAND, allTypes, OVER_COLOR, EXTRA_DECK } from "utils/constants.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

const useStyles = makeStyles(styles);

function Hand({ player, handCount, size, discardPile }) {
   const classes = useStyles();
   const dispatch = useDispatch();

   const isHero = player === HERO;
   const handSize = size * (isHero && handCount > 9 ? 0.95 : 1);

   const [{ isOver, canDrop }, drop] = useDrop({
      accept: allTypes,
      canDrop: (item) => item.row !== EXTRA_DECK,
      drop: (item) => {
         dispatch(moveCard({ from: item, to: { player, row: HAND } }));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
         canDrop: monitor.canDrop()
      })
   });

   const handList = [];
   for (let i = 0; i < handCount; i++) {
      handList.push(
         <YugiohCard height={handSize} player={player} row={HAND} zone={i} discardPile={discardPile} notFull key={i} />
      );
   }

   return (
      <FriendlyScroll
         id={"hand" + player}
         drop={isHero && drop}
         style={{ overflowY: "hidden" }}
         bgColor={isOver && canDrop && OVER_COLOR + "33"}
         horiz
      >
         <div className={classes.hand} style={{ height: handSize * (isHero ? 1 : VILLAIN_HAND_SIZE) }}>
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
