import { playSound } from "../../actions/game/field.js";
import getCardDetails from "shared/getCardDetails.js";
import getOtherPlayer from "utils/getOtherPlayer.js";
import { shuffle, expandDeck, display, giveRowCard } from "shared";

import {
   FUSION_MONSTER,
   MONSTER,
   SPELL_TRAP,
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
   DRAW_PHASE_DRAW,
   CREATE_TOKEN,
   SWITCH_POSITION,
   ADJUST_COUNTERS,
   CLEAR_BATTLE,
   ATTACK,
   ADJUST_LP,
   REVEAL_HAND,
   NEW_SOLO_GAME,
   SHUFFLE_DECK,
   SEND_CARD_MOVE,
   SEND_DRAW_PHASE,
   REQUEST_CARD,
   SEND_POS_CHANGE,
   SEND_ATTACK,
   SEND_CLEAR,
   REORDER_DECK,
   SET_DECK,
   SEND_ENTIRE_GAMESTATE,
   ATTACKING,
   DEFENDING,
   SEND_COUNTERS,
   DISCARD_AND_DRAW,
   SHUFFLE_AND_DRAW,
   UNDO_DRAW,
   SEND_DRAW_UNDONE,
   BOTTOM,
   RECEIVE_CARD,
   DRAW_CARD,
   SEARCH_DECK,
   SEND_SEARCH
} from "shared/constants.js";

const blankField = {
   lifepoints: 8000,
   [DECK]: [],
   [GRAVEYARD]: [],
   [BANISHED]: [],
   usedFusions: {},
   [HAND]: [],
   skippedDraws: 0,
   lastDraw: 0,
   handRevealed: false,
   [MONSTER]: [null, null, null, null, null],
   [SPELL_TRAP]: [null, null, null, null, null],
   [FIELD_SPELL]: null
};

const initialState = {};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SET_GAMESTATE_TO: {
         playSound("/sounds/shuffle.mp3");
         return data;
      }
      case SEND_ENTIRE_GAMESTATE: {
         const { socket, message } = data;
         const payload = { action: SEND_ENTIRE_GAMESTATE, data: { token: socket.token, id: socket.matchId, gamestate: state, message } };
         socket.api.send(JSON.stringify(payload));
         return state;
      }
      case MOVE_CARD: {
         const { from, to, socket } = data;
         const oldFromZone = from.zone;
         const fieldSpell = from.row === FIELD_SPELL;
         const fromCard = from.cardName ? { name: from.cardName } : fieldSpell ? state[from.player][FIELD_SPELL] : state[from.player][from.row][from.zone];
         if (fromCard.battle) clearBattle(state);
         const facedown = fromCard.facedown;
         let settingTrap = false;

         if (fromCard.notOwned && dynamicZones.includes(to.row) && from.player === to.player) to.player = getOtherPlayer(to.player, state);
         if (from.player !== to.player) fromCard.notOwned = !fromCard.notOwned;

         if (!fromCard.name.includes("Token") || to.row === MONSTER || to.row === SPELL_TRAP) {
            if (toExtraZones.includes(to.row) && getCardDetails(fromCard.name).cardType === FUSION_MONSTER) state[to.player].usedFusions[fromCard.name] -= 1;
            else if (dynamicZones.includes(to.row)) {
               const myCard = { name: fromCard.name, order: fromCard.order };
               if (to.forceFacedown) {
                  myCard.facedown = true;
                  settingTrap = true;
               }
               to.zone === BOTTOM ? state[to.player][to.row].unshift(myCard) : state[to.player][to.row].push(myCard);
            } else if (to.row === FIELD_SPELL) state[to.player][FIELD_SPELL] = { ...fromCard };
            else state[to.player][to.row][to.zone] = { ...fromCard };
         }

         if (to.row === MONSTER && facedown) state[to.player][MONSTER][to.zone].inDef = true;
         else if (to.row === SPELL_TRAP && !facedown) {
            const cardDetails = getCardDetails(state[to.player][SPELL_TRAP][to.zone].name);
            if (cardDetails.cardType === TRAP) {
               state[to.player][SPELL_TRAP][to.zone].facedown = true;
               settingTrap = true;
            }
         }

         playAppropriateSound(from, to, facedown, settingTrap);

         if (dynamicZones.includes(from.row)) state[from.player][from.row].splice(from.zone, 1);
         else if (fieldSpell) state[from.player][from.row] = null;
         else if (from.row === EXTRA_DECK) state[from.player].usedFusions[from.cardName] = state[from.player].usedFusions[from.cardName] + 1 || 1;
         else state[from.player][from.row][from.zone] = null;

         if (socket && socket.api) {
            const shouldShuffle = from.row === DECK && from.autoClose;
            const payload = {
               action: SEND_CARD_MOVE,
               data: {
                  token: socket.token,
                  id: socket.matchId,
                  from: { ...from, zone: oldFromZone },
                  fromCard,
                  to,
                  settingTrap,
                  shuffleDeck: shouldShuffle && state[from.player][DECK],
                  msg: socket.msg
               }
            };
            socket.api.send(JSON.stringify(payload));
         }

         return { ...state };
      }
      case DRAW_PHASE_DRAW: {
         const { player, socket } = data;
         const shouldSkipDraw = state[player].skippedDraws > 0;

         if (shouldSkipDraw) state[player].skippedDraws -= 1;

         if (socket && socket.api) {
            // TODO: check if the top card of the deck is known, and if so, don't ask the server for it
            const payload = { action: SEND_DRAW_PHASE, data: { token: socket.token, id: socket.matchId, shouldSkipDraw } };
            socket.api.send(JSON.stringify(payload));
         } else if (state[player][DECK].length > 0) {
            const card = state[player][DECK].pop();
            card.order = ++state[player].lastDraw;
            state[player][HAND].push(card);
            playSound("/sounds/drawcard.mp3");
         }

         return { ...state };
      }
      case DRAW_CARD: {
         const { player, numCards, socket } = data;

         if (socket && socket.api) {
            // TODO: check if the top card of the deck is known, and if so, don't ask the server for it
            const payload = { action: REQUEST_CARD, data: { token: socket.token, id: socket.matchId, numCards, to: { row: HAND } } };
            socket.api.send(JSON.stringify(payload));
         } else {
            for (let i = i; i < numCards; i++) {
               const card = state[player][DECK].pop();
               card.order = ++state[player].lastDraw;
               state[player][HAND].push(card);
            }
            playSound("/sounds/drawcard.mp3");
         }

         return { ...state };
      }
      case SEARCH_DECK: {
         const { from, to, shouldShuffle, socket } = data;

         const fromCard = from.cardName ? { name: from.cardName } : state[from.player][DECK][from.zone];
         giveRowCard(state, fromCard, to);

         const deck = state[from.player][DECK];
         if (!Array.isArray(deck)) {
            decrementDeck(deck.cards, from.cardName);
            if (socket && socket.api) {
               const payload = { action: SEND_SEARCH, data: { token: socket.token, id: socket.matchId, from, to, shouldShuffle } };
               socket.api.send(JSON.stringify(payload));
            }
         } else {
            state[from.player][DECK].splice(from.zone, 1);
            // if (shouldShuffle) then shuffle deck
         }

         playAppropriateSound(from, to);
         if (shouldShuffle) {
            if (!Array.isArray(deck)) state[from.player][DECK].top = [];
            playSound("/sounds/shuffle.mp3");
         }

         return { ...state };
      }
      case RECEIVE_CARD: {
         const { player, newDraws, to } = data;

         for (const card of newDraws) {
            card.order = ++state[player].lastDraw;
            state[player][to.row].push(card);
            decrementDeck(state[player][DECK].cards, card.name);
         }

         playAppropriateSound(DECK, to);

         return { ...state };
      }
      case CREATE_TOKEN: {
         const { name, inDef, player: tokenPlayer } = data;
         clearBattle(state);
         let tokenZone = 0;

         for (; tokenZone < 5; tokenZone++) if (state[tokenPlayer][MONSTER][tokenZone] === null) break;
         if (tokenZone > 4) return state;

         state[tokenPlayer][MONSTER][tokenZone] = { name, inDef };
         return { ...state };
      }
      case SWITCH_POSITION: {
         const { player, row, zone, socket } = data;
         const myCard = row === FIELD_SPELL ? state[player][FIELD_SPELL] : state[player][row][zone];
         if (myCard.battle) clearBattle(state);
         if (row === MONSTER) {
            if (myCard.inDef) {
               if (myCard.name.includes("Token")) {
                  myCard.inDef = false;
                  playSound("/sounds/todef.mp3");
               } else {
                  if (myCard.facedown) myCard.inDef = false;
                  playSound("/sounds/flip.mp3");
                  myCard.facedown = !myCard.facedown;
               }
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
      case ADJUST_COUNTERS: {
         const { player, row, zone, counters, socket } = data;
         const card = row === FIELD_SPELL ? state[player][FIELD_SPELL] : state[player][row][zone];
         const currentCounters = card.counters || 0;
         const newCounters = currentCounters + counters;

         if (newCounters > currentCounters) playSound("/sounds/counter.mp3");

         if (newCounters < 0) return { ...state };
         card.counters = newCounters;

         if (socket && socket.api) {
            const cardName = card.facedown || !card.name ? "a facedown card" : card.name;
            const payload = { action: SEND_COUNTERS, data: { token: socket.token, id: socket.matchId, row, zone, counters, cardName } };
            socket.api.send(JSON.stringify(payload));
         }

         return { ...state };
      }
      case CLEAR_BATTLE: {
         if (clearBattle(state) && data && data.api) {
            const socket = data;
            const payload = { action: SEND_CLEAR, data: { token: socket.token, id: socket.matchId } };
            socket.api.send(JSON.stringify(payload));
         }
         return state;
      }
      case ATTACK: {
         const { to, from, socket } = data;
         clearBattle(state);

         const fromCard = state[from.player][from.row][from.zone];
         const toCard = to.row === HAND ? false : state[to.player][to.row][to.zone];

         fromCard.battle = ATTACKING;
         if (toCard) state[to.player][to.row][to.zone].battle = DEFENDING;

         playSound("/sounds/attack.mp3");

         if (socket && socket.api) {
            const fromName = fromCard.name;
            const toName = toCard ? (toCard.facedown ? "a facedown Monster" : toCard.name) : "directly";
            const payload = { action: SEND_ATTACK, data: { token: socket.token, id: socket.matchId, fromName, toName, to, from } };
            socket.api.send(JSON.stringify(payload));
         }

         return state;
      }
      case ADJUST_LP: {
         const { player, change } = data;
         state[player].lifepoints += change;
         return { ...state };
      }
      case REVEAL_HAND: {
         state[data].handRevealed = !state[data].handRevealed;
         return { ...state };
      }
      case DISCARD_AND_DRAW: {
         let { player, count } = data;
         const field = state[player];
         if (count === "same") count = state[player].hand.length;

         field.graveyard.push(...field.hand);
         field.hand = [];

         for (let i = 0; i < count; i++) {
            if (field.deck.length > 0) {
               const card = field.deck.pop();
               card.order = ++field.lastDraw;
               field.hand.push(card);
            }
         }

         playSound(count === 0 ? "/sounds/tograve.mp3" : "/sounds/drawcard.mp3");

         return { ...state };
      }
      case SHUFFLE_AND_DRAW: {
         let { player, source, count, socket } = data;
         const field = state[player];
         if (count === "same") count = state[player].hand.length;

         if (source !== GRAVEYARD) {
            field.deck.push(...field.hand);
            field.hand = [];
         } else {
            field.deck.push(...field.graveyard);
            field.graveyard = [];
         }

         playSound("/sounds/shuffle.mp3");
         field.deck = shuffle(state[player].deck);

         for (let i = 0; source !== GRAVEYARD && i < count; i++) {
            if (field.deck.length > 0) {
               const card = field.deck.pop();
               card.order = ++field.lastDraw;
               field.hand.push(card);
            }
         }

         if (socket && socket.api) {
            const message = `${player} shuffled their ${display(source)} into their Deck${count > 0 ? ` and drew ${count} cards.` : "."}`;
            const payload = { action: SEND_ENTIRE_GAMESTATE, data: { token: socket.token, id: socket.matchId, gamestate: state, message } };
            socket.api.send(JSON.stringify(payload));
         }

         return { ...state };
      }
      case NEW_SOLO_GAME: {
         const storage = window.sessionStorage;
         const decks = JSON.parse(storage.getItem("decks"));
         const active = storage.getItem("activeDeck");
         const activeMaindeck = decks[active].maindeck;
         const namedCards = shuffle(expandDeck(activeMaindeck));

         const newHand = [];
         for (let i = 0; i < 5; i++) newHand.push(namedCards.pop());

         const newState = { villain: { ...JSON.parse(JSON.stringify(blankField)) } };
         newState[data] = {
            ...JSON.parse(JSON.stringify(blankField)),
            sleeves: JSON.parse(storage.getItem("settings")).sleeves,
            deck: namedCards,
            hand: newHand
         };
         return newState;
      }
      case UNDO_DRAW: {
         const { player, socket } = data;

         let lastDrawn = -1;
         for (const [i, card] of state[player].hand.entries()) {
            if (!card.notOwned && card.order === state[player].lastDraw) {
               lastDrawn = i;
               break;
            }
         }
         if (lastDrawn < 0) return state;

         const card = state[player].hand[lastDrawn];
         state[player].hand.splice(lastDrawn, 1);
         state[player].deck.push(card);
         state[player].lastDraw--;

         if (socket && socket.api) {
            const payload = { action: SEND_DRAW_UNDONE, data: { token: socket.token, id: socket.matchId } };
            socket.api.send(JSON.stringify(payload));
         }

         return { ...state };
      }
      case SHUFFLE_DECK: {
         const { player, socket } = data;

         if (socket && socket.api) {
            state[player].deck.top = [];
            const payload = { action: REORDER_DECK, data: { token: socket.token, id: socket.matchId } };
            socket.api.send(JSON.stringify(payload));
         } else {
            state[player].deck = shuffle(state[player].deck);
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

function clearBattle(field) {
   let clearedCards = 0;
   for (const player in field) {
      const oneField = field[player];
      for (const monster of oneField[MONSTER]) {
         if (monster && monster.battle) {
            delete monster.battle;
            clearedCards += 1;
         }
      }
   }

   return clearedCards;
}

function playAppropriateSound(from, to, facedown = false, settingTrap = false) {
   if (to.row === GRAVEYARD) playSound("/sounds/tograve.mp3");
   else if (to.row === BANISHED) playSound("/sounds/tobanished.mp3");
   else if (settingTrap || (facedown && from.row !== to.row && to.row !== HAND)) playSound("/sounds/set.mp3");
   else if (to.row === MONSTER && from.row !== MONSTER && from.row !== SPELL_TRAP) playSound("/sounds/summon.mp3");
   else if (to.row === SPELL_TRAP && from.row !== MONSTER && from.row !== SPELL_TRAP) playSound("/sounds/activate.mp3");
   else if (to.row === HAND && from.row !== HAND) playSound("/sounds/tohand.mp3");
}

function decrementDeck(deckCards, cardName) {
   if (deckCards[cardName] === 1) delete deckCards[cardName];
   else deckCards[cardName] -= 1;
   return;
}
