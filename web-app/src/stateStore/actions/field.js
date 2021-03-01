import { MOVE_CARD, SWITCH_POSITION, SHUFFLE_HAND } from "utils/constants";
import { clearSelection } from "./selectedCard.js";

function moveCard(data) {
   return (dispatch) => {
      dispatch(move(data));
      dispatch(clearSelection());
   };
}

function move(data) {
   return { type: MOVE_CARD, data };
}

function switchPosition(row, zone) {
   const data = { row, zone };
   return { type: SWITCH_POSITION, data };
}

function shuffleHand() {
   return { type: SHUFFLE_HAND };
}

export { moveCard, switchPosition, shuffleHand };
