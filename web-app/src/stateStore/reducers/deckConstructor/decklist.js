import { SET_DECKLIST, SET_PUBLIC, TRANSFER_CARD } from "shared/constants.js";

const initialState = {
   maindeck: {},
   sidedeck: {},
   public: false
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SET_DECKLIST:
         return { ...data };
      case SET_PUBLIC:
         return { ...state, public: data };
      case TRANSFER_CARD: {
         const { to, from, cardName } = data;

         if (to === from) return state;

         if (Object.prototype.hasOwnProperty.call(state, to)) {
            if (Object.prototype.hasOwnProperty.call(state[to], cardName)) state[to][cardName] += 1;
            else state[to][cardName] = 1;
         }

         if (Object.prototype.hasOwnProperty.call(state, from)) {
            if (state[from][cardName] === 1) delete state[from][cardName];
            else state[from][cardName] -= 1;
         }

         return { ...state };
      }
      default:
         return state;
   }
}
