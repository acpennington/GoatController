import { Howl } from "howler";

import { soundOn } from "../actions/field";
import getCardDetails from "utils/getCardDetails.js";
import {
   HERO,
   VILLAIN,
   FUSION_MONSTER,
   MONSTER,
   ST,
   HAND,
   GRAVEYARD,
   BANISHED,
   FIELD_SPELL,
   EXTRA_DECK,
   DECK,
   dynamicZones,
   toExtraZones,
   TRAP,
   MOVE_CARD,
   CREATE_TOKEN,
   SWITCH_POSITION,
   ADJUST_LP,
   REVEAL_HAND,
   NEW_SOLO_GAME,
   SHUFFLE_DECK
} from "utils/constants.js";

const blankField = {
   sleeves: "Goat.png",
   lifepoints: 8000,
   deck: [],
   graveyard: [],
   banished: [],
   usedFusions: {},
   hand: [],
   handRevealed: false,
   "s/t": [null, null, null, null, null],
   "field spell": null,
   monster: [null, null, null, null, null]
};

const initialState = {
   villain: { ...blankField },
   hero: { ...blankField }
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case MOVE_CARD:
         const { from, to } = data;
         const drawingFromDeck = from.row === DECK && from.zone === -1;
         if (drawingFromDeck) from.zone = state[from.player][DECK].length - 1;
         const fieldSpell = from.row === FIELD_SPELL;
         const fromCard = from.cardName
            ? { name: from.cardName }
            : fieldSpell
            ? state[from.player][FIELD_SPELL]
            : state[from.player][from.row][from.zone];
         if (from.player !== to.player) fromCard.notOwned = !fromCard.notOwned;
         const facedown = fromCard.facedown;
         let settingTrap = false;

         if (!fromCard.name.includes("Token") || to.row === MONSTER || to.row === ST) {
            if (toExtraZones.includes(to.row) && getCardDetails(fromCard.name).cardType === FUSION_MONSTER) {
               if (fromCard.notOwned) state[from.player === HERO ? VILLAIN : HERO].usedFusions[fromCard.name] -= 1;
               else state[from.player].usedFusions[fromCard.name] -= 1;
            } else if (dynamicZones.includes(to.row)) state[to.player][to.row].push({ name: fromCard.name });
            else if (to.row === FIELD_SPELL) state[to.player][FIELD_SPELL] = { ...fromCard };
            else state[to.player][to.row][to.zone] = { ...fromCard };
         }

         if (to.row === MONSTER && facedown) state[to.player][MONSTER][to.zone].inDef = true;
         else if (to.row === ST && !facedown) {
            const cardDetails = getCardDetails(state[to.player][ST][to.zone].name);
            if (cardDetails.cardType === TRAP) {
               state[to.player][ST][to.zone].facedown = true;
               settingTrap = true;
            }
         }

         if (soundOn()) {
            if (to.row === GRAVEYARD) new Howl({ src: ["/sounds/tograve.mp3"] }).play();
            else if (to.row === BANISHED) new Howl({ src: ["/sounds/tobanished.mp3"] }).play();
            else if (settingTrap || (facedown && from.row !== to.row)) new Howl({ src: ["/sounds/set.mp3"] }).play();
            else if (to.row === MONSTER && from.row !== MONSTER && from.row !== ST)
               new Howl({ src: ["/sounds/summon.mp3"] }).play();
            else if (to.row === ST && from.row !== MONSTER && from.row !== ST)
               new Howl({ src: ["/sounds/activate.mp3"] }).play();
            else if (drawingFromDeck) new Howl({ src: ["/sounds/drawcard.mp3"] }).play();
            else if (to.row === HAND && from.row !== HAND) new Howl({ src: ["/sounds/tohand.mp3"] }).play();
         }

         if (dynamicZones.includes(from.row)) state[from.player][from.row].splice(from.zone, 1);
         else if (fieldSpell) state[from.player][from.row] = null;
         else if (from.row === EXTRA_DECK)
            state[from.player].usedFusions[from.cardName] = state[from.player].usedFusions[from.cardName] + 1 || 1;
         else state[from.player][from.row][from.zone] = null;

         return { ...state };
      case CREATE_TOKEN:
         const { name, inDef } = data;
         const tokenPlayer = data.player;
         let tokenZone = 0;

         for (; tokenZone < 5; tokenZone++) if (state[tokenPlayer].monster[tokenZone] === null) break;
         if (tokenZone > 4) return state;

         state[tokenPlayer].monster[tokenZone] = { name, inDef };
         return { ...state };
      case SWITCH_POSITION:
         const { row, zone } = data;
         const myCard = row === FIELD_SPELL ? state.hero[FIELD_SPELL] : state.hero[row][zone];
         if (row === MONSTER) {
            if (myCard.inDef) {
               if (myCard.facedown) myCard.inDef = false;
               new Howl({ src: ["/sounds/flip.mp3"] }).play();
               myCard.facedown = !myCard.facedown;
            } else {
               new Howl({ src: ["/sounds/todef.mp3"] }).play();
               myCard.inDef = true;
            }
         } else {
            if (myCard.facedown) new Howl({ src: ["/sounds/activate.mp3"] }).play();
            else new Howl({ src: ["/sounds/flip.mp3"] }).play();
            myCard.facedown = !myCard.facedown;
         }
         return state;
      case ADJUST_LP:
         const { player, change } = data;
         state[player].lifepoints += change;
         return { ...state };
      case REVEAL_HAND:
         state.hero.handRevealed = !state.hero.handRevealed;
         return { ...state };
      case NEW_SOLO_GAME:
         const decks = JSON.parse(window.sessionStorage.getItem("decks"));
         const activeMaindeck = getActiveDeck(decks);
         const namedCards = shuffle(activeMaindeck).map((card) => ({ name: card }));

         const newHand = [];
         for (let i = 0; i < 6; i++) newHand.push(namedCards.pop());

         const storage = window.sessionStorage;
         return {
            villain: {
               sleeves: storage.getItem("opponentsSleeves"),
               lifepoints: 8000,
               deck: [],
               graveyard: [],
               banished: [],
               usedFusions: {},
               hand: [],
               handRevealed: false,
               "s/t": [null, null, null, null, null],
               "field spell": null,
               monster: [null, null, null, null, null]
            },
            hero: {
               sleeves: JSON.parse(storage.getItem("settings")).sleeves,
               lifepoints: 8000,
               deck: namedCards,
               graveyard: [],
               banished: [],
               usedFusions: {},
               hand: newHand,
               handRevealed: false,
               "s/t": [null, null, null, null, null],
               "field spell": null,
               monster: [null, null, null, null, null]
            }
         };
      case SHUFFLE_DECK:
         state.hero.deck = shuffle(state.hero.deck);
         return { ...state };
      default:
         return state;
   }
}

function getActiveDeck(decks) {
   for (const deckName in decks) {
      const deck = decks[deckName];
      if (deck.active) return deck.maindeck;
   }
}

function shuffle(deck) {
   for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
   }

   return deck;
}
