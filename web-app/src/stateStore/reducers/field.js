import { playSound } from "../actions/field";
import getCardDetails from "utils/getCardDetails.js";
import getOtherPlayer from "utils/getOtherPlayer";

import {
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
   SET_GAMESTATE_TO,
   MOVE_CARD,
   CREATE_TOKEN,
   SWITCH_POSITION,
   ADJUST_LP,
   REVEAL_HAND,
   NEW_SOLO_GAME,
   SHUFFLE_DECK,
   SEND_CARD_MOVE,
   SEND_POS_CHANGE,
   REORDER_DECK,
   SET_DECK,
   SEND_ENTIRE_GAMESTATE
} from "utils/constants.js";

const blankField = {
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

const initialState = {};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SET_GAMESTATE_TO:
         playSound("/sounds/shuffle.mp3");
         return data;
      case SEND_ENTIRE_GAMESTATE: {
         const { socket, message } = data;
         const payload = { action: SEND_ENTIRE_GAMESTATE, data: { token: socket.token, id: socket.matchId, gamestate: state, message } };
         socket.api.send(JSON.stringify(payload));
         return state;
      }
      case MOVE_CARD:
         const { from, to, socket, noSound } = data;
         const oldFromZone = from.zone;
         const drawingFromDeck = from.row === DECK && from.zone === -1;
         if (drawingFromDeck) from.zone = state[from.player][DECK].length - 1;
         const fieldSpell = from.row === FIELD_SPELL;
         const fromCard = from.cardName ? { name: from.cardName } : fieldSpell ? state[from.player][FIELD_SPELL] : state[from.player][from.row][from.zone];
         const facedown = fromCard.facedown;
         let settingTrap = false;

         if (fromCard.notOwned && dynamicZones.includes(to.row) && from.player === to.player) to.player = getOtherPlayer(to.player, state);
         if (from.player !== to.player) fromCard.notOwned = !fromCard.notOwned;

         if (!fromCard.name.includes("Token") || to.row === MONSTER || to.row === ST) {
            if (toExtraZones.includes(to.row) && getCardDetails(fromCard.name).cardType === FUSION_MONSTER) state[to.player].usedFusions[fromCard.name] -= 1;
            else if (dynamicZones.includes(to.row)) state[to.player][to.row].push({ name: fromCard.name });
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

         if (!noSound) {
            if (to.row === GRAVEYARD) playSound("/sounds/tograve.mp3");
            else if (to.row === BANISHED) playSound("/sounds/tobanished.mp3");
            else if (settingTrap || (facedown && from.row !== to.row)) playSound("/sounds/set.mp3");
            else if (to.row === MONSTER && from.row !== MONSTER && from.row !== ST) playSound("/sounds/summon.mp3");
            else if (to.row === ST && from.row !== MONSTER && from.row !== ST) playSound("/sounds/activate.mp3");
            else if (drawingFromDeck) playSound("/sounds/drawcard.mp3");
            else if (to.row === HAND && from.row !== HAND) playSound("/sounds/tohand.mp3");
         }

         if (dynamicZones.includes(from.row)) state[from.player][from.row].splice(from.zone, 1);
         else if (fieldSpell) state[from.player][from.row] = null;
         else if (from.row === EXTRA_DECK) state[from.player].usedFusions[from.cardName] = state[from.player].usedFusions[from.cardName] + 1 || 1;
         else state[from.player][from.row][from.zone] = null;

         if (socket && socket.api) {
            const payload = {
               action: SEND_CARD_MOVE,
               data: { token: socket.token, id: socket.matchId, from: { ...from, zone: oldFromZone }, fromCard, to, settingTrap, msg: socket.msg }
            };
            socket.api.send(JSON.stringify(payload));
         }

         return { ...state };
      case CREATE_TOKEN:
         const { name, inDef } = data;
         const tokenPlayer = data.player;
         let tokenZone = 0;

         for (; tokenZone < 5; tokenZone++) if (state[tokenPlayer].monster[tokenZone] === null) break;
         if (tokenZone > 4) return state;

         state[tokenPlayer].monster[tokenZone] = { name, inDef };
         return { ...state };
      case SWITCH_POSITION: {
         const { player, row, zone, socket } = data;
         const myCard = row === FIELD_SPELL ? state[player][FIELD_SPELL] : state[player][row][zone];
         if (row === MONSTER) {
            if (myCard.inDef) {
               if (myCard.facedown) myCard.inDef = false;
               playSound("/sounds/flip.mp3");
               myCard.facedown = !myCard.facedown;
            } else {
               playSound("/sounds/todef.mp3");
               myCard.inDef = true;
            }
         } else {
            if (row !== HAND)
               if (myCard.facedown) playSound("/sounds/activate.mp3");
               else playSound("/sounds/flip.mp3");
            myCard.facedown = !myCard.facedown;
         }

         if (socket && socket.api) {
            const payload = { action: SEND_POS_CHANGE, data: { token: socket.token, id: socket.matchId, row, zone, cardName: myCard.name } };
            socket.api.send(JSON.stringify(payload));
         }

         return state;
      }
      case ADJUST_LP:
         const { player, change } = data;
         state[player].lifepoints += change;
         return { ...state };
      case REVEAL_HAND:
         state[data].handRevealed = !state[data].handRevealed;
         return { ...state };
      case NEW_SOLO_GAME:
         const storage = window.sessionStorage;
         const decks = JSON.parse(storage.getItem("decks"));
         const active = storage.getItem("activeDeck");
         const activeMaindeck = decks[active].maindeck;
         const namedCards = shuffle(activeMaindeck).map((card) => ({ name: card }));

         const newHand = [];
         for (let i = 0; i < 6; i++) newHand.push(namedCards.pop());

         const newState = { villain: { ...JSON.parse(JSON.stringify(blankField)) } };
         newState[data] = {
            ...JSON.parse(JSON.stringify(blankField)),
            sleeves: JSON.parse(storage.getItem("settings")).sleeves,
            deck: namedCards,
            hand: newHand
         };
         return newState;
      case SHUFFLE_DECK: {
         const { player, socket } = data;
         state[player].deck = shuffle(state[player].deck);

         if (socket && socket.api) {
            const payload = { action: REORDER_DECK, data: { token: socket.token, id: socket.matchId, deck: state[player].deck } };
            socket.api.send(JSON.stringify(payload));
         }

         return { ...state };
      }
      case SET_DECK: {
         const { player, deck } = data;
         state[player].deck = deck;
         playSound("/sounds/shuffle.mp3");
         return { ...state };
      }
      default:
         return state;
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
