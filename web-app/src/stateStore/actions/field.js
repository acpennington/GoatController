import { Howl } from "howler";

import { clearSelection } from "./selectedCard.js";
import { setTurn } from "./turn.js";
import {
   MOVE_CARD,
   CREATE_TOKEN,
   SWITCH_POSITION,
   ADJUST_LP,
   REVEAL_HAND,
   NEW_SOLO_GAME,
   SHUFFLE_DECK,
   DRAW,
   SEND_LP_CHANGE,
   SEND_TOKENS
} from "utils/constants";

function soundOn() {
   return window.localStorage.getItem("soundOn") === "true";
}

function playSound(soundName) {
   if (soundOn()) new Howl({ src: [soundName] }).play();
}

function moveCard(data) {
   return (dispatch) => {
      dispatch({ type: MOVE_CARD, data });
      dispatch(clearSelection());
   };
}

function createTokens(player, params, socket) {
   const splitParams = params.split(",");

   let count, name, inDef;
   for (const param of splitParams) {
      const [variable, value] = param.split("=");
      if (variable === "count") count = Number(value);
      else if (variable === "name") name = value;
      else if (variable === "pos") inDef = value !== "atk";
   }

   playSound("/sounds/specialsummon.mp3");

   if (socket && socket.api) {
      const payload = { action: SEND_TOKENS, data: { token: socket.token, id: socket.matchId, params } };
      socket.api.send(JSON.stringify(payload));
   }

   return (dispatch) => {
      for (let i = 0; i < count; i++) {
         dispatch({ type: CREATE_TOKEN, data: { player, name, inDef } });
      }
   };
}

function switchPosition(player, row, zone) {
   return { type: SWITCH_POSITION, data: { heroPlayer: player, row, zone } };
}

function revealHand(player) {
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
      dispatch(setTurn(name, DRAW));
      dispatch({ type: NEW_SOLO_GAME, data: name });
   };
}

function shuffleDeck() {
   playSound("/sounds/shuffle.mp3");
   return { type: SHUFFLE_DECK };
}

export { playSound, moveCard, createTokens, switchPosition, revealHand, adjustLP, resetSolo, shuffleDeck };
