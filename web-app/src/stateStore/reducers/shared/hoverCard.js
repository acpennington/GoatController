import { NEW_HOVER, CLEAR_HOVER } from "shared/constants.js";

const initialState = null;

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case NEW_HOVER:
         return data;
      case CLEAR_HOVER:
         return initialState;
      default:
         return state;
   }
}
