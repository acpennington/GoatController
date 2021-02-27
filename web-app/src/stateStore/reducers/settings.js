const initialState = { discardPile: "graveyard" };

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case "SWITCH_DISCARD":
         if (state.discardPile === "graveyard") state.discardPile = "banished";
         else state.discardPile = "graveyard";
         return state;
      default:
         return state;
   }
}
