import { NEW_SELECTION, CLEAR_SELECTION } from "utils/constants.js";
import { prepopLP } from "./settings.js";
import getCardDetails from "utils/getCardDetails.js";

function newSelection(selectingPlayer, player, row, zone, name, socket = false) {
   return (dispatch) => {
      dispatch({ type: NEW_SELECTION, data: { selectingPlayer, socket, player, row, zone, name } });
      const card = getCardDetails(name);
      if (card.prepopLP) dispatch(prepopLP(card.prepopLP));
   };
}

function clearSelection(player, socket = false) {
   return { type: CLEAR_SELECTION, data: { player, socket } };
}

export { newSelection, clearSelection };
