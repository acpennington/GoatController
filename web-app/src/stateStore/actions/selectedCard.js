import { NEW_SELECTION, CLEAR_SELECTION } from "utils/constants.js";
import { prepopLP } from "./settings.js";
import getCardDetails from "utils/getCardDetails.js";

function newSelection(selectingPlayer, player, row, zone, name) {
   return (dispatch) => {
      dispatch({ type: NEW_SELECTION, data: { selectingPlayer, player, row, zone, name } });
      const card = getCardDetails(name);
      if (card.prepopLP) dispatch(prepopLP(card.prepopLP));
   };
}

function clearSelection(player) {
   return { type: CLEAR_SELECTION, data: player };
}

export { newSelection, clearSelection };
