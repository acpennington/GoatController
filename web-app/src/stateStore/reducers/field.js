const initialState = {
   villain: {
      hand: [{ name: "Shining Angel" }],
      "s/t": [{ name: "Call of the Haunted" }, null, null, null, null],
      monster: [null, null, { name: "Shining Angel" }, null, null]
   },
   hero: {
      hand: [{ name: "Shining Angel" }, { name: "Call of the Haunted" }],
      "s/t": [null, null, null, null, null],
      monster: [null, null, null, null, null]
   }
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case "MOVE_CARD":
         const { from, to } = data;
         state[to.player][to.row][to.zone] = { ...state[from.player][from.row][from.zone] };

         if (from.row === "hand") state[from.player][from.row].splice(from.zone, 1);
         else state[from.player][from.row][from.zone] = null;
         return state;
      case "UPDATE_VILLAIN":
         break;
      case "RESET_GAME":
         return initialState;
      default:
         return state;
   }
}
