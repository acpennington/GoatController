import { SET_DECKLIST, TRANSFER_CARD } from "utils/constants";

const initialState = {
   maindeck: {},
   sidedeck: {}
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SET_DECKLIST:
         return { ...data };
      case TRANSFER_CARD:
         const { to, from, cardName } = data;

         if (to === from) return state;

         if (state.hasOwnProperty(to)) {
            if (state[to].hasOwnProperty(cardName)) state[to][cardName] += 1;
            else state[to][cardName] = 1;
         }

         if (state.hasOwnProperty(from)) {
            if (state[from][cardName] === 1) delete state[from][cardName];
            else state[from][cardName] -= 1;
         }

         return { ...state };
      default:
         return state;
   }
}
