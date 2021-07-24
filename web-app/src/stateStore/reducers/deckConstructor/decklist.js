import { SET_DECKLIST } from "utils/constants";

const initialState = {
   maindeck: [],
   sidedeck: []
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SET_DECKLIST:
         return data;
      default:
         return state;
   }
}
