import getCardDetails from "utils/getCardDetails.js";
import {
   FACEDOWN_CARD,
   MONSTER,
   ST,
   FIELD_SPELL,
   dynamicZones,
   TRAP,
   MOVE_CARD,
   SWITCH_POSITION,
   ADJUST_LP,
   RESET_GAME
} from "utils/constants.js";

const initialState = {
   villain: {
      sleeves: "exarion.png",
      lifepoints: 8000,
      deck: { count: 35 },
      graveyard: [{ name: "Call of the Haunted" }],
      banished: [],
      hand: [
         { name: FACEDOWN_CARD },
         { name: FACEDOWN_CARD },
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
      sleeves: "goat.png",
      lifepoints: 8000,
      deck: { count: 35 },
      graveyard: [],
      banished: [],
      usedFusions: [],
      hand: [
         { name: "Shining Angel" },
         { name: "Call of the Haunted" },
         { name: "Call of the Haunted" },
         { name: "Necrovalley" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" },
         { name: "Shining Angel" }
      ],
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
         const fieldSpell = from.row === FIELD_SPELL;
         const fromCard = fieldSpell ? state[from.player][from.row] : state[from.player][from.row][from.zone];
         if (from.player !== to.player) fromCard.notOwned = !fromCard.notOwned;
         const facedown = fromCard.facedown;

         if (dynamicZones.includes(to.row)) state[to.player][to.row].push({ name: fromCard.name });
         else if (to.row === FIELD_SPELL) state[to.player][FIELD_SPELL] = { ...fromCard };
         else state[to.player][to.row][to.zone] = { ...fromCard };

         if (to.row === MONSTER && facedown) state[to.player][MONSTER][to.zone].inDef = true;

         if (to.row === ST && !facedown) {
            const cardName = state[to.player][ST][to.zone].name;
            const cardDetails = getCardDetails(cardName);
            if (cardDetails.cardType === TRAP) state[to.player][ST][to.zone].facedown = true;
         }

         if (dynamicZones.includes(from.row)) state[from.player][from.row].splice(from.zone, 1);
         else {
            if (fieldSpell) state[from.player][from.row] = null;
            else state[from.player][from.row][from.zone] = null;
         }

         return state;
      case SWITCH_POSITION:
         const { row, zone } = data;
         const myCard = row === FIELD_SPELL ? state.hero[FIELD_SPELL] : state.hero[row][zone];
         if (row === MONSTER) {
            if (myCard.inDef) {
               if (myCard.facedown) myCard.inDef = false;
               myCard.facedown = !myCard.facedown;
            } else myCard.inDef = true;
         } else myCard.facedown = !myCard.facedown;
         return state;
      case ADJUST_LP:
         const { player, change } = data;
         state[player].lifepoints += change;
         return { ...state };
      case RESET_GAME:
         return initialState;
      default:
         return state;
   }
}
