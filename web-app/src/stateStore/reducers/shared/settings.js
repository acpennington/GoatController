import {
   SWITCH_NAMES,
   OPEN_MODAL,
   CLOSE_MODAL,
   PREPOP_LP,
   CONCEDE_GAME,
   LOAD_DECK,
   SET_UNSAVED,
   SET_CARDSIZE,
   SET_STACK,
   CHAT_SHORTCUTS
} from "shared/constants.js";

const initialState = {
   concessionLink: false,
   showNames: false,
   chatShortcuts: false,
   modal: null,
   prepopLP: null,
   stackSameName: false,
   deckLoaded: window.sessionStorage.getItem("activeDeck"),
   unsavedChanges: false,
   cardSize: 50.5
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SWITCH_NAMES:
         return { ...state, showNames: !state.showNames };
      case CHAT_SHORTCUTS:
         return { ...state, chatShortcuts: !state.chatShortcuts };
      case OPEN_MODAL:
         if (state.modal && state.modal.row === data.row && state.modal.player === data.player && state.modal.autoClose === data.autoClose) state.modal = null;
         else state.modal = data;
         return { ...state };
      case CLOSE_MODAL:
         return { ...state, modal: null };
      case PREPOP_LP:
         return { ...state, prepopLP: data };
      case CONCEDE_GAME:
         return { ...state, concessionLink: data };
      case SET_STACK:
         return { ...state, stackSameName: data };
      case LOAD_DECK:
         return { ...state, deckLoaded: data };
      case SET_UNSAVED:
         return { ...state, unsavedChanges: data };
      case SET_CARDSIZE:
         return { ...state, cardSize: data };
      default:
         return state;
   }
}
