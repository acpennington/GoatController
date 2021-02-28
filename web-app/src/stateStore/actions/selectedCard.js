import { NEW_SELECTION, CLEAR_SELECTION } from "utils/constants.js";

function newSelection(player, row, zone, name) {
   const data = { player, row, zone, name };
   return { type: NEW_SELECTION, data };
}

function clearSelection() {
   return { type: CLEAR_SELECTION };
}

export { newSelection, clearSelection };
