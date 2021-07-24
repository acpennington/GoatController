import { SWITCH_NAMES, OPEN_MODAL, CLOSE_MODAL, PREPOP_LP, CONCEDE_GAME } from "utils/constants.js";

const initialState = {
   concessionLink: false,
   showNames: false,
   modal: null,
   prepopLP: null,
   stackSameName: false
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
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
      case CONCEDE_GAME:
         return { ...state, concessionLink: data };
      default:
         return state;
   }
}
