import { shuffleDeck } from "./field.js";
import { DECK, SWITCH_DISCARD, SWITCH_NAMES, OPEN_MODAL, CLOSE_MODAL, PREPOP_LP } from "utils/constants.js";

function switchDiscard() {
   return { type: SWITCH_DISCARD };
}

function switchNames() {
   return { type: SWITCH_NAMES };
}

function openModal(player, row, filter = false) {
   return { type: OPEN_MODAL, data: { player, row, filter } };
}

function closeModal(type, player, socket = false) {
   return (dispatch) => {
      dispatch({ type: CLOSE_MODAL });
      if (type === DECK) dispatch(shuffleDeck(player, socket));
   };
}

function prepopLP(data) {
   return { type: PREPOP_LP, data };
}

export { switchDiscard, switchNames, openModal, closeModal, prepopLP };
