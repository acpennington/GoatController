import { Howl } from "howler";

import { MOVE_CARD, SWITCH_POSITION, ADJUST_LP } from "utils/constants";
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
   return { type: SWITCH_POSITION, data: { row, zone } };
}

function adjustLP(player, change, currentLP) {
   const sound = new Howl({
      src: ["/sounds/lp.mp3"]
   });
   sound.play();

   if (-change > currentLP) change = -currentLP;

   return (dispatch) => {
      for (let i = 0, increment = 75 * (change > 0 ? 1 : -1); i !== change; i += increment) {
         if (Math.abs(increment) > Math.abs(change - i)) increment = change - i;
         setTimeout(dispatch, 0, oneLP(player, increment));
      }
   };
}

function oneLP(player, change) {
   return { type: ADJUST_LP, data: { player, change } };
}

export { moveCard, switchPosition, adjustLP };
