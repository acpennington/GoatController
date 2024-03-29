import { shuffleDeck } from "../game/field.js";
import { addMessage } from "../game/chat.js";
import { DECK, SWITCH_NAMES, OPEN_MODAL, CLOSE_MODAL, PREPOP_LP, LOAD_DECK, SET_UNSAVED, SET_CARDSIZE, SET_STACK, CHAT_SHORTCUTS } from "shared/constants.js";
import display from "shared/display.js";

function switchNames() {
   return { type: SWITCH_NAMES };
}

function switchChatShortcuts() {
   return { type: CHAT_SHORTCUTS };
}

function openModal(player, row, heroPlayer = false, socket = false, filter = false, autoClose = false, oneParam = false, source = false) {
   return (dispatch) => {
      dispatch({ type: OPEN_MODAL, data: { player, row, filter, autoClose, oneParam, source } });
      if (socket && socket.api) {
         const message = heroPlayer + " looked at " + (player === heroPlayer ? "their " : player + "'s ") + display(row) + ".";
         dispatch(addMessage("Game", message, socket));
      }
   };
}

function closeModal(row, player, socket = false, auto = true) {
   const isSocket = socket && socket.api;

   return (dispatch) => {
      dispatch({ type: CLOSE_MODAL });
      if (row === DECK && (!isSocket || auto === false)) dispatch(shuffleDeck(player, socket));
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

export { switchNames, openModal, closeModal, prepopLP, setStackSameName, loadDeck, setUnsaved, setCardSize, switchChatShortcuts };
