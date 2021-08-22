import { shuffleDeck } from "../game/field.js";
import { DECK, SWITCH_NAMES, OPEN_MODAL, CLOSE_MODAL, PREPOP_LP, LOAD_DECK, SET_UNSAVED, SET_CARDSIZE, SET_STACK } from "shared/constants.js";

function switchNames() {
   return { type: SWITCH_NAMES };
}

function openModal(player, row, filter = false, autoClose = false, oneParam = false) {
   return { type: OPEN_MODAL, data: { player, row, filter, autoClose, oneParam } };
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

function setStackSameName(data) {
   return { type: SET_STACK, data };
}

function loadDeck(data) {
   return { type: LOAD_DECK, data };
}

function setUnsaved(data) {
   return { type: SET_UNSAVED, data };
}

function setCardSize(data) {
   return { type: SET_CARDSIZE, data };
}

export { switchNames, openModal, closeModal, prepopLP, setStackSameName, loadDeck, setUnsaved, setCardSize };
