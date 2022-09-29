import { ADD_MESSAGE, SET_CHAT_TO, RESET_CHAT } from "shared/constants.js";

const initialState = [];

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case ADD_MESSAGE:
         console.log("adding a new message");
         return [...state, data];
      case SET_CHAT_TO:
         return data;
      case RESET_CHAT:
         return initialState;
      default:
         return state;
   }
}
