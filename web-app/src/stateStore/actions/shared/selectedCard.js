import { NEW_SELECTION, CLEAR_SELECTION, HAND } from "shared/constants.js";
import { prepopLP } from "./settings.js";
import getCardDetails from "shared/getCardDetails.js";

function newSelection(selectingPlayer, player, row, zone, name, facedown = false, socket = false) {
   return (dispatch) => {
      dispatch({ type: NEW_SELECTION, data: { selectingPlayer, socket, player, row, zone, name, facedown } });
      const { prepopLP: cardPrepop } = getCardDetails(name);
      if (cardPrepop && row !== HAND && !facedown) {
         if (selectingPlayer === player) dispatch(prepopLP(cardPrepop.hero));
         else dispatch(prepopLP(cardPrepop.villain));
      } else dispatch(prepopLP(null));
   };
}

function clearSelection(socket = false) {
   return { type: CLEAR_SELECTION, data: socket };
}

export { newSelection, clearSelection };
