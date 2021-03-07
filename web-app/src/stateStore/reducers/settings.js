import { GRAVEYARD, BANISHED, SWITCH_DISCARD, OPEN_MODAL, CLOSE_MODAL } from "utils/constants.js";

const initialState = { discardPile: GRAVEYARD, cannedMessages: ["Response?", "Yes", "No", "Thinking"], modal: null };

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SWITCH_DISCARD:
         if (state.discardPile === GRAVEYARD) state.discardPile = BANISHED;
         else state.discardPile = GRAVEYARD;
         return state;
      case OPEN_MODAL:
         if (state.modal && state.modal.row === data.row && state.modal.player === data.player) state.modal = null;
         else state.modal = data;
         return state;
      case CLOSE_MODAL:
         state.modal = null;
         return state;
      default:
         return state;
   }
}
