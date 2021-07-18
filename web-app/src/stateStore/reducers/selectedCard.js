import { NEW_SELECTION, CLEAR_SELECTION } from "utils/constants.js";

const initialState = {};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case NEW_SELECTION:
         const { selectingPlayer, ...rest } = data;
         state[selectingPlayer] = rest;
         return state;
      case CLEAR_SELECTION:
         delete state[data];
         return state;
      default:
         return state;
   }
}
