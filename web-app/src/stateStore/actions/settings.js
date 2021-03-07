import { SWITCH_DISCARD, OPEN_MODAL, CLOSE_MODAL } from "utils/constants.js";

function switchDiscard() {
   return { type: SWITCH_DISCARD };
}

function openModal(data) {
   return { type: OPEN_MODAL, data };
}

function closeModal() {
   return { type: CLOSE_MODAL };
}

export { switchDiscard, openModal, closeModal };
