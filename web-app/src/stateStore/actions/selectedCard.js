import { NEW_SELECTION, CLEAR_SELECTION } from "utils/constants.js";
import { prepopLP } from "./settings.js";
import getCardDetails from "utils/getCardDetails.js";

function newSelection(selectingPlayer, player, row, zone, name, socket = false) {
   return (dispatch) => {
      dispatch({ type: NEW_SELECTION, data: { selectingPlayer, socket, player, row, zone, name } });
      const card = getCardDetails(name);
      if (card.prepopLP) {
         const isHero = selectingPlayer === player;
         if (isHero && typeof card.prepopLP !== 'object') {
            dispatch(prepopLP(card.prepopLP));
         } else if (isHero && card.prepopLP.hero) {
            dispatch(prepopLP(card.prepopLP.hero));
         } else if (!isHero && card.prepopLP.villain) {
            dispatch(prepopLP(card.prepopLP.villain));
         }
      }
   };
}

function clearSelection(player, socket = false) {
   return { type: CLEAR_SELECTION, data: { player, socket } };
}

export { newSelection, clearSelection };
