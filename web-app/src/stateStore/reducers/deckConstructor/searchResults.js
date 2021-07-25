import { NEW_RESULTS, RERENDER_SEARCH } from "utils/constants.js";

const initialState = [];

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case NEW_RESULTS:
         return data;
      case RERENDER_SEARCH:
         return JSON.parse(JSON.stringify(state));
      default:
         return state;
   }
}
