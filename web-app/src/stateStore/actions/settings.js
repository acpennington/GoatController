import { shuffleDeck } from "./field.js";
import { DECK, SWITCH_NAMES, OPEN_MODAL, CLOSE_MODAL, PREPOP_LP } from "utils/constants.js";

function switchNames() {
   return { type: SWITCH_NAMES };
}

function openModal(player, row, filter = false, autoClose = false) {
   return { type: OPEN_MODAL, data: { player, row, filter, autoClose } };
}

function closeModal(row, player, socket = false) {
   return (dispatch) => {
      dispatch({ type: CLOSE_MODAL });
      if (row === DECK) dispatch(shuffleDeck(player, socket));
   };
}

function prepopLP(data) {
   return { type: PREPOP_LP, data };
}

export { switchNames, openModal, closeModal, prepopLP };
