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
   SHUFFLE_HAND,
   RESET_GAME
} from "utils/constants.js";

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
      hand: [
         { name: "Shining Angel" },
         { name: "Call of the Haunted" },
         { name: "Call of the Haunted" },
         { name: "Necrovalley" }
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
         const myCard = state.hero[row][zone];
         if (row === MONSTER) {
            if (myCard.inDef) {
               if (myCard.facedown) myCard.inDef = false;
               myCard.facedown = !myCard.facedown;
            } else myCard.inDef = true;
         } else myCard.facedown = !myCard.facedown;

         return state;
      case SHUFFLE_HAND:
         shuffle(state.hero.hand);
         return state;
      case RESET_GAME:
         return initialState;
      default:
         return state;
   }
}

function shuffle(array) {
   var currentIndex = array.length,
      temporaryValue,
      randomIndex;

   // While there remain elements to shuffle...
   while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
   }

   return array;
}
