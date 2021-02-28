import { MOVE_CARD, SWITCH_POSITION } from "utils/constants";
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

export { moveCard, switchPosition };
