import getCardDetails from "utils/getCardDetails.js";
import {
   HERO,
   VILLAIN,
   FACEDOWN_CARD,
   FUSION_MONSTER,
   MONSTER,
   ST,
   FIELD_SPELL,
   EXTRA_DECK,
   dynamicZones,
   toExtraZones,
   TRAP,
   MOVE_CARD,
   SWITCH_POSITION,
   ADJUST_LP,
   REVEAL_HAND,
   RESET_GAME
} from "utils/constants.js";

const initialState = {
   villain: {
      sleeves: "exarion.png",
      lifepoints: 8000,
      deck: { count: 35 },
      graveyard: [{ name: "Call of the Haunted" }],
      banished: [],
      usedFusions: {},
      hand: [
         { name: FACEDOWN_CARD },
         { name: FACEDOWN_CARD },
         { name: FACEDOWN_CARD },
         { name: FACEDOWN_CARD },
         { name: FACEDOWN_CARD }
      ],
      handRevealed: false,
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
      usedFusions: {},
      hand: [
         { name: "Shining Angel" },
         { name: "Call of the Haunted" },
         { name: "Nobleman of Crossout" },
         { name: "Necrovalley" },
         { name: "Shining Angel" }
      ],
      handRevealed: false,
      "s/t": [null, null, null, null, null],
      "field spell": null,
      monster: [
         null,
         null,
         { name: "Black Luster Soldier - Envoy of the Beginning", inDef: true, facedown: true },
         { name: "Gatling Dragon", notOwned: true },
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
         const fromCard = from.cardName
            ? { name: from.cardName }
            : fieldSpell
            ? state[from.player][from.row]
            : state[from.player][from.row][from.zone];
         if (from.player !== to.player) fromCard.notOwned = !fromCard.notOwned;
         const facedown = fromCard.facedown;

         if (toExtraZones.includes(to.row) && getCardDetails(fromCard.name).cardType === FUSION_MONSTER) {
            if (fromCard.notOwned) state[from.player === HERO ? VILLAIN : HERO].usedFusions[fromCard.name] -= 1;
            else state[from.player].usedFusions[fromCard.name] -= 1;
         } else if (dynamicZones.includes(to.row)) state[to.player][to.row].push({ name: fromCard.name });
         else if (to.row === FIELD_SPELL) state[to.player][FIELD_SPELL] = { ...fromCard };
         else state[to.player][to.row][to.zone] = { ...fromCard };

         if (to.row === MONSTER && facedown) state[to.player][MONSTER][to.zone].inDef = true;

         if (to.row === ST && !facedown) {
            const cardDetails = getCardDetails(state[to.player][ST][to.zone].name);
            if (cardDetails.cardType === TRAP) state[to.player][ST][to.zone].facedown = true;
         }

         if (dynamicZones.includes(from.row)) state[from.player][from.row].splice(from.zone, 1);
         else {
            if (fieldSpell) state[from.player][from.row] = null;
            else if (from.row === EXTRA_DECK)
               state[from.player].usedFusions[from.cardName] = state[from.player].usedFusions[from.cardName] + 1 || 1;
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
      case REVEAL_HAND:
         state.hero.handRevealed = !state.hero.handRevealed;
         return { ...state };
      case RESET_GAME:
         return initialState;
      default:
         return state;
   }
}
