import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";

import YugiohCard from "components/YugiohCard/YugiohCard.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { moveCard } from "stateStore/actions/field.js";
import { WebSocketContext } from "../WebSocketContext";
import { VILLAIN_HAND_SIZE, HAND, allTypes, OVER_COLOR, EXTRA_DECK, FACEDOWN_CARD } from "utils/constants.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";
const useStyles = makeStyles(styles);

function Hand({ player, handCount, size, discardPile, isHero, revealed }) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const socket = useContext(WebSocketContext);

   const handSize = size * (isHero && handCount > 9 ? 0.95 : 1);

   const [{ isOver, canDrop }, drop] = useDrop({
      accept: allTypes,
      canDrop: (item) => item.row !== EXTRA_DECK,
      drop: (item) => {
         dispatch(moveCard({ from: item, to: { player, row: HAND } }, socket));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
         canDrop: monitor.canDrop()
      })
   });

   const cardName = isHero || revealed ? undefined : FACEDOWN_CARD;
   const handList = [];
   for (let i = 0; i < handCount; i++) {
      handList.push(
         <YugiohCard height={handSize} player={player} row={HAND} zone={i} discardPile={discardPile} isHero={isHero} notFull key={i} cardName={cardName} />
      );
   }

   return (
      <FriendlyScroll
         id={"hand" + player}
         count={handCount}
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

function mapStateToProps(state, ownProps) {
   return { revealed: state.field[ownProps.player].handRevealed };
}

Hand.propTypes = {
   player: PropTypes.string.isRequired,
   handCount: PropTypes.number.isRequired,
   size: PropTypes.number.isRequired,
   isHero: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Hand);
