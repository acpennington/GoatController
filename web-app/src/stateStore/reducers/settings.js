import { GRAVEYARD, BANISHED, SWITCH_DISCARD } from "utils/constants.js";

const initialState = { discardPile: GRAVEYARD };

export default function (state = initialState, action) {
   const { type } = action;
   switch (type) {
      case SWITCH_DISCARD:
         if (state.discardPile === GRAVEYARD) state.discardPile = BANISHED;
         else state.discardPile = GRAVEYARD;
         return state;
      default:
         return state;
   }
}
