import { SWITCH_DISCARD, OPEN_MODAL, CLOSE_MODAL, PREPOP_LP } from "utils/constants.js";

function switchDiscard() {
   return { type: SWITCH_DISCARD };
}

function openModal(data) {
   return { type: OPEN_MODAL, data };
}

function closeModal() {
   return { type: CLOSE_MODAL };
}

function prepopLP(data) {
   return { type: PREPOP_LP, data };
}

export { switchDiscard, openModal, closeModal, prepopLP };
