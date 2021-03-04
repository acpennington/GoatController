import { ADD_MESSAGE, RESET_CHAT } from "utils/constants.js";

const initialState = [{ author: "Game", content: "New match started." }];

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case ADD_MESSAGE:
         state = [...state, data]
         return state;
      case RESET_CHAT:
         return initialState;
      default:
         return state;
   }
}
