import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { addMessage } from "stateStore/actions/chat.js";
import { moveCard, attack } from "stateStore/actions/field.js";
import { WebSocketContext } from "../WebSocketContext";
import { VILLAIN_HAND_HEIGHT_FRACTION, HAND, allTypes, OVER_COLOR, MONSTER, EXTRA_DECK, FACEDOWN_CARD, BATTLE, NEXT_TURN } from "utils/constants.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/battlefield.js";
const useStyles = makeStyles(styles);

function Hand({ player, handCount, rowHeight, isHero, revealed, phase }) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const socket = useContext(WebSocketContext);
   const handWidth = rowHeight * 5;

   const handRowHeight = handCount > 7 ? (isHero ? rowHeight * 0.95 : rowHeight * 0.9) : rowHeight;
   const herosBattlePhase = phase === BATTLE && !isHero;

   const [{ isOver, canDrop }, drop] = useDrop({
      accept: allTypes,
      canDrop: (item) => item.row !== EXTRA_DECK && (!herosBattlePhase || item.row === MONSTER),
      drop: (item) => {
         if (herosBattlePhase) dispatch(attack({ from: item, to: { player, row: HAND }, socket }));
         else dispatch(moveCard({ from: item, to: { player, row: HAND } }, socket));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
         canDrop: monitor.canDrop()
      })
   });

   const prevCount = usePrevious(handCount);
   const shouldDispatch = prevCount === 6 && handCount === 7 && phase === NEXT_TURN;
   useEffect(() => {
      if (shouldDispatch) dispatch(addMessage("Game", player + " has " + handCount + " cards in hand. Please discard down to 6."));
      // eslint-disable-next-line
   }, [shouldDispatch]);

   const cardName = isHero || revealed ? undefined : FACEDOWN_CARD;
   const handList = [];
   for (let i = 0; i < handCount; i++) {
      handList.push(<YugiohCard height={handRowHeight} player={player} row={HAND} zone={i} isHero={isHero} notFull key={i} cardName={cardName} />);
   }

   return (
      <FriendlyScroll
         id={"hand" + player}
         count={handCount}
         drop={(isHero || herosBattlePhase) && drop}
         style={{ overflowY: "hidden" }}
         contStyle={{ width: handWidth + "px", margin: "0 auto" }}
         bgColor={isOver && canDrop && OVER_COLOR + "33"}
         flexDirection="row-reverse"
         horiz
      >
         <div className={classes.hand} style={{ height: handRowHeight * (isHero ? 1 : VILLAIN_HAND_HEIGHT_FRACTION) }}>
            {handList}
         </div>
      </FriendlyScroll>
   );
}

function usePrevious(value) {
   const ref = useRef();
   useEffect(() => {
      ref.current = value;
   });
   return ref.current;
}

function mapStateToProps(state, ownProps) {
   return { revealed: state.field[ownProps.player].handRevealed, phase: state.turn.phase };
}

Hand.propTypes = {
   player: PropTypes.string.isRequired,
   handCount: PropTypes.number.isRequired,
   rowHeight: PropTypes.number.isRequired,
   isHero: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Hand);
