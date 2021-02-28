import getCardDetails from "utils/getCardDetails.js";
import { FACEDOWN_CARD, MONSTER, ST, HAND, TRAP, MOVE_CARD, SWITCH_POSITION, RESET_GAME } from "utils/constants.js";

const initialState = {
   villain: {
      deck: { count: 35 },
      graveyard: [],
      banished: [],
      hand: [
         { name: FACEDOWN_CARD },
         { name: FACEDOWN_CARD },
         { name: FACEDOWN_CARD },
         { name: FACEDOWN_CARD },
         { name: FACEDOWN_CARD }
      ],
      "s/t": [{ name: "Call of the Haunted" }, null, null, null, null],
      "field spell": null,
      monster: [null, null, { name: "Shining Angel" }, null, null]
   },
   hero: {
      deck: { count: 35 },
      graveyard: [],
      banished: [],
      usedFusions: [],
      hand: [{ name: "Shining Angel" }, { name: "Call of the Haunted" }],
      "s/t": [null, null, null, null, null],
      "field spell": null,
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
      case MOVE_CARD:
         const { from, to } = data;
         const facedown = state[from.player][from.row][from.zone].facedown;

         if (to.row === HAND) state[to.player][HAND].push({ name: state[from.player][from.row][from.zone].name });
         else state[to.player][to.row][to.zone] = { ...state[from.player][from.row][from.zone] };

         if (to.row === MONSTER && facedown) state[to.player][MONSTER][to.zone].inDef = true;

         if (to.row === ST && !facedown) {
            const cardName = state[to.player][ST][to.zone].name;
            const cardDetails = getCardDetails(cardName);
            if (cardDetails.cardType === TRAP) state[to.player][ST][to.zone].facedown = true;
         }

         if (from.row === HAND) state[from.player][HAND].splice(from.zone, 1);
         else state[from.player][from.row][from.zone] = null;

         return state;
      case SWITCH_POSITION:
         const { row, zone } = data;
         const myCard = state.hero[row][zone];
         if (row === MONSTER) {
            if (myCard.inDef) {
               if (myCard.facedown) myCard.inDef = false;
               myCard.facedown = !myCard.facedown;
            } else myCard.inDef = true;
         } else myCard.facedown = !myCard.facedown;

         return state;
      case RESET_GAME:
         return initialState;
      default:
         return state;
   }
}
