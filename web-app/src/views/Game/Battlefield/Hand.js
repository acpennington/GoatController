import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import Mousetrap from "mousetrap";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { addMessage } from "stateStore/actions/game/chat.js";
import { moveCard, drawCard, attack, searchDeck } from "stateStore/actions/game/field.js";
import { WebSocketContext } from "../WebSocketContext";
import { VILLAIN_HAND_HEIGHT_FRACTION, HAND, allTypes, OVER_COLOR, MONSTER, EXTRA_DECK, FACEDOWN_CARD, BATTLE, NEXT_TURN, DECK } from "shared/constants.js";

import { makeStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/battlefield.js";
import fromDeckTop from "utils/fromDeckTop.js";
const useStyles = makeStyles(styles);
const { bind, unbind } = Mousetrap;

function Hand({ player, handCount, rowHeight, isHero, revealed, phase }) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const socket = useContext(WebSocketContext);
   const handWidth = rowHeight * 5;

   const handRowHeight = handCount > 7 ? (isHero ? rowHeight * 0.95 : rowHeight * 0.9) : rowHeight; // we need to shrink the hand when a scrollbar will appear
   const herosBattlePhase = phase === BATTLE && !isHero;

   const [{ isOver, canDrop }, drop] = useDrop({
      accept: allTypes,
      canDrop: (item) => item.row !== EXTRA_DECK && (!herosBattlePhase || item.row === MONSTER),
      drop: (item) => {
         if (herosBattlePhase) dispatch(attack({ from: item, to: { player, row: HAND }, socket }));
         else if (fromDeckTop(item)) dispatch(drawCard(player, 1, socket));
         else if (item.row === DECK) dispatch(searchDeck(item, { player, row: HAND }, socket));
         else dispatch(moveCard({ from: item, to: { player, row: HAND } }, socket));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
         canDrop: monitor.canDrop()
      })
   });

   bind("d", () => {
      dispatch(drawCard(player, 1, socket));
   });

   const prevCount = usePrevious(handCount);
   const shouldDispatch = prevCount === 6 && handCount === 7 && phase === NEXT_TURN;
   useEffect(() => {
      if (shouldDispatch) dispatch(addMessage("Game", `${player} has ${handCount} cards in hand. Please discard down to 6.`));
      // eslint-disable-next-line
   }, [shouldDispatch]);

   const cardName = isHero || revealed ? undefined : FACEDOWN_CARD;
   const handList = [];
   for (let i = 0; i < handCount; i++) {
      handList.push(<YugiohCard height={handRowHeight} player={player} row={HAND} zone={i} isHero={isHero} notFull key={i} cardName={cardName} />);
   }

   useEffect(() => {
      return function cleanup() {
         unbind(["d"]);
      };
   }, []);

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
   isHero: PropTypes.bool.isRequired,
   revealed: PropTypes.bool.isRequired,
   phase: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Hand);
