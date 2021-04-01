import { NEW_SELECTION, CLEAR_SELECTION } from "utils/constants.js";
import { prepopLP } from "./settings.js";
import getCardDetails from "utils/getCardDetails.js";

function newSelection(player, row, zone, name) {
   return (dispatch) => {
      dispatch(selectIt({ player, row, zone, name }));
      const card = getCardDetails(name);
      if (card.prepopLP) dispatch(prepopLP(card.prepopLP));
   };
}

function selectIt(data) {
   return { type: NEW_SELECTION, data };
}

function clearSelection() {
   return { type: CLEAR_SELECTION };
}

export { newSelection, clearSelection };
