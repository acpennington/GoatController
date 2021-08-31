import { Howl } from "howler";

import { clearSelection } from "../shared/selectedCard.js";
import { setTurn } from "./turn.js";
import getCardDetails from "shared/getCardDetails.js";
import {
   MOVE_CARD,
   DRAW_PHASE_DRAW,
   CREATE_TOKEN,
   SWITCH_POSITION,
   ATTACK,
   ADJUST_LP,
   REVEAL_HAND,
   NEW_SOLO_GAME,
   SHUFFLE_DECK,
   DRAW,
   SEND_LP_CHANGE,
   SEND_TOKENS,
   SEND_REVEAL,
   ADJUST_COUNTERS,
   DISCARD_AND_DRAW,
   SHUFFLE_AND_DRAW,
   SEND_SHUFFLE_AND_DRAW,
   HAND,
   SEND_DND,
   SENTINEL,
   GRAVEYARD
} from "shared/constants";

function soundOn() {
   return window.localStorage.getItem("soundOn") === "true";
}

function playSound(soundName) {
   if (soundOn()) new Howl({ src: [soundName] }).play();
}

function moveCard(data, socket = false) {
   return (dispatch) => {
      dispatch({ type: MOVE_CARD, data: { ...data, socket } });
      dispatch(clearSelection(socket));
   };
}

function drawPhaseDraw(player, socket = false) {
   return { type: DRAW_PHASE_DRAW, data: { player, socket } };
}

function createTokens(player, params, socket = false) {
   const { count, name, pos } = params;
   const token = getCardDetails(name);
   const inDef = pos === "def";

   playSound("/sounds/specialsummon.mp3");

   if (socket && socket.api) {
      const payload = { action: SEND_TOKENS, data: { token: socket.token, id: socket.matchId, params } };
      socket.api.send(JSON.stringify(payload));
   }

   return (dispatch) => {
      for (let i = 0; i < count; i++) {
         const n = token.art && i > 0 ? `${name}${SENTINEL}${i % token.art}` : name;
         dispatch({ type: CREATE_TOKEN, data: { player, name: n, inDef } });
      }
   };
}

function switchPosition(player, row, zone, socket = false) {
   return { type: SWITCH_POSITION, data: { player, row, zone, socket } };
}

function adjustCounters(player, row, zone, counters, socket = false) {
   return { type: ADJUST_COUNTERS, data: { player, row, zone, counters, socket } };
}

function attack(data) {
   return { type: ATTACK, data };
}

function revealHand(player, hand, socket = false) {
   if (socket && socket.api) {
      const payload = { action: SEND_REVEAL, data: { hand, token: socket.token, id: socket.matchId } };
      socket.api.send(JSON.stringify(payload));
   }

   return { type: REVEAL_HAND, data: player };
}

function adjustLP(player, change, currentLP, socket = false) {
   if (socket && socket.api) {
      const payload = { action: SEND_LP_CHANGE, data: { token: socket.token, id: socket.matchId, amount: change, currentLP } };
      socket.api.send(JSON.stringify(payload));
   }

   playSound("/sounds/lp.mp3");
   if (-change > currentLP) change = -currentLP;

   return (dispatch) => {
      for (let i = 0, increment = 75 * (change > 0 ? 1 : -1); i !== change; i += increment) {
         if (Math.abs(increment) > Math.abs(change - i)) increment = change - i;
         setTimeout(dispatch, 0, oneLP(player, increment));
      }
   };
}

function oneLP(player, change) {
   return { type: ADJUST_LP, data: { player, change } };
}

function resetSolo(name) {
   return (dispatch) => {
      dispatch({ type: NEW_SOLO_GAME, data: name });
      dispatch(setTurn(name, DRAW));
   };
}

function shuffleDeck(player, socket = false, noSound = false) {
   if (!noSound) playSound("/sounds/shuffle.mp3");
   return { type: SHUFFLE_DECK, data: { player, socket } };
}

function discardAndDraw(player, count, socket = false) {
   if (socket && socket.api) {
      const payload = { action: SEND_DND, data: { token: socket.token, id: socket.matchId, count } };
      socket.api.send(JSON.stringify(payload));
   }

   return { type: DISCARD_AND_DRAW, data: { player, count } };
}

function shuffleAndDraw(player, params, socket = false) {
   const source = params === GRAVEYARD ? GRAVEYARD : HAND;
   const count = params === GRAVEYARD ? 0 : params;
   return { type: SHUFFLE_AND_DRAW, data: { player, source, count, socket } };
}

export {
   playSound,
   moveCard,
   drawPhaseDraw,
   createTokens,
   switchPosition,
   adjustCounters,
   attack,
   revealHand,
   adjustLP,
   resetSolo,
   shuffleDeck,
   shuffleAndDraw,
   discardAndDraw
};
