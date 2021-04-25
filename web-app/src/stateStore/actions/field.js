import { Howl } from "howler";

import { MOVE_CARD, SWITCH_POSITION, ADJUST_LP, REVEAL_HAND, NEW_SOLO_GAME } from "utils/constants";
import { clearSelection } from "./selectedCard.js";

function soundOn() {
   return window.localStorage.getItem("soundOn") === "true";
}

function moveCard(data) {
   return (dispatch) => {
      dispatch({ type: MOVE_CARD, data });
      dispatch(clearSelection());
   };
}

function switchPosition(row, zone) {
   return { type: SWITCH_POSITION, data: { row, zone } };
}

function revealHand() {
   return { type: REVEAL_HAND };
}

function adjustLP(player, change, currentLP) {
   if (soundOn()) {
      const sound = new Howl({
         src: ["/sounds/lp.mp3"]
      });
      sound.play();
   }

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

function resetSolo() {
   return { type: NEW_SOLO_GAME };
}

export { moveCard, switchPosition, revealHand, adjustLP, resetSolo };
