import { NEW_SELECTION, CLEAR_SELECTION } from "shared/constants.js";
import { prepopLP } from "./settings.js";
import getCardDetails from "shared/getCardDetails.js";

function newSelection(selectingPlayer, player, row, zone, name, facedown = false, socket = false) {
   return (dispatch) => {
      dispatch({ type: NEW_SELECTION, data: { selectingPlayer, socket, player, row, zone, name, facedown } });
      const card = getCardDetails(name);
      if (card.prepopLP) {
         if (selectingPlayer === player) dispatch(prepopLP(card.prepopLP.hero));
         else dispatch(prepopLP(card.prepopLP.villain));
      } else dispatch(prepopLP(null));
   };
}

function clearSelection(socket = false) {
   return { type: CLEAR_SELECTION, data: socket };
}

export { newSelection, clearSelection };
