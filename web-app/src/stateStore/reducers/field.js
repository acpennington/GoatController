import getCardDetails from "utils/getCardDetails.js";

const initialState = {
   villain: {
      deck: 35,
      graveyard: [],
      banished: [],
      hand: [
         { name: "Facedown Card" },
         { name: "Facedown Card" },
         { name: "Facedown Card" },
         { name: "Facedown Card" },
         { name: "Facedown Card" }
      ],
      "s/t": [{ name: "Call of the Haunted" }, null, null, null, null],
      fieldSpell: null,
      monster: [null, null, { name: "Shining Angel" }, null, null]
   },
   hero: {
      deck: 35,
      graveyard: [],
      banished: [],
      usedFusions: [],
      hand: [{ name: "Shining Angel" }, { name: "Call of the Haunted" }],
      "s/t": [null, null, null, null, null],
      fieldSpell: null,
      monster: [
         null,
         null,
         { name: "Black Luster Soldier - Envoy of the Beginning", inDef: true, facedown: true },
         null,
         null
      ]
   }
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case "MOVE_CARD":
         const { from, to } = data;
         const facedown = state[from.player][from.row][from.zone].facedown;

         if (to.row === "hand") state[to.player]["hand"].push({ name: state[from.player][from.row][from.zone].name });
         else state[to.player][to.row][to.zone] = { ...state[from.player][from.row][from.zone] };

         if (to.row === "monster" && facedown) state[to.player][to.row][to.zone].inDef = true;

         if (from.row === "hand") state[from.player]["hand"].splice(from.zone, 1);
         else state[from.player][from.row][from.zone] = null;

         return state;
      case "SWITCH_POSITION":
         const { row, zone } = data;
         const myCard = state.hero[row][zone];
         if (row === "monster") {
            if (myCard.inDef) {
               if (myCard.facedown) myCard.inDef = false;
               myCard.facedown = !myCard.facedown;
            } else myCard.inDef = true;
         } else myCard.facedown = !myCard.facedown;

         return state;
      case "UPDATE_VILLAIN":
         break;
      case "RESET_GAME":
         return initialState;
      default:
         return state;
   }
}
