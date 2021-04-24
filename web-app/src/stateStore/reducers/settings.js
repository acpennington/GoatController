import {
   GRAVEYARD,
   BANISHED,
   SWITCH_DISCARD,
   SWITCH_NAMES,
   OPEN_MODAL,
   CLOSE_MODAL,
   PREPOP_LP
} from "utils/constants.js";

const initialState = {
   showNames: false,
   discardPile: GRAVEYARD,
   modal: null,
   prepopLP: null
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SWITCH_DISCARD:
         if (state.discardPile === GRAVEYARD) state.discardPile = BANISHED;
         else state.discardPile = GRAVEYARD;
         return { ...state };
      case SWITCH_NAMES:
         return { ...state, showNames: !state.showNames };
      case OPEN_MODAL:
         if (state.modal && state.modal.row === data.row && state.modal.player === data.player) state.modal = null;
         else state.modal = data;
         return state;
      case CLOSE_MODAL:
         return { ...state, modal: null };
      case PREPOP_LP:
         return { ...state, prepopLP: data };
      default:
         return state;
   }
}
