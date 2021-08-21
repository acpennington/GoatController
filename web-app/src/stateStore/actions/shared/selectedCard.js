import { NEW_SELECTION, CLEAR_SELECTION } from "shared/constants.js";
import { prepopLP } from "./settings.js";
import getCardDetails from "shared/getCardDetails.js";

function newSelection(selectingPlayer, player, row, zone, name, facedown = false, socket = false) {
   return (dispatch) => {
      dispatch({ type: NEW_SELECTION, data: { selectingPlayer, socket, player, row, zone, name, facedown } });
      const card = getCardDetails(name);
      if (card.prepopLP) {
         const isHero = selectingPlayer === player;
         if (isHero && card.prepopLP.hero) dispatch(prepopLP(card.prepopLP.hero));
         else if (!isHero && card.prepopLP.villain) dispatch(prepopLP(card.prepopLP.villain));
      }
   };
}

function clearSelection(socket = false) {
   return { type: CLEAR_SELECTION, data: socket };
}

export { newSelection, clearSelection };
