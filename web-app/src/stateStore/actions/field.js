import { Howl } from "howler";

import {
   MOVE_CARD,
   CREATE_TOKEN,
   SWITCH_POSITION,
   ADJUST_LP,
   REVEAL_HAND,
   NEW_SOLO_GAME,
   SHUFFLE_DECK
} from "utils/constants";
import { clearSelection } from "./selectedCard.js";

function soundOn() {
   return window.localStorage.getItem("soundOn") === "true";
}

function moveCard(data) {
   return (dispatch) => {
      dispatch({ type: MOVE_CARD, data });
      dispatch(clearSelection());
   };
}

function createTokens(player, params) {
   const splitParams = params.split(",");

   let count, name, inDef;

   for (const param of splitParams) {
      const [variable, value] = param.split("=");
      if (variable === "count") count = Number(value);
      else if (variable === "name") name = value;
      else if (variable === "pos") inDef = value === "atk";
   }

   return (dispatch) => {
      for (let i = 0; i < count; i++) dispatch({ type: CREATE_TOKEN, data: { player, name, inDef } });
   };
}

function switchPosition(row, zone) {
   return { type: SWITCH_POSITION, data: { row, zone } };
}

function revealHand() {
   return { type: REVEAL_HAND };
}

function adjustLP(player, change, currentLP) {
   if (soundOn()) new Howl({ src: ["/sounds/lp.mp3"] }).play();

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

function resetSolo() {
   return { type: NEW_SOLO_GAME };
}

function shuffleDeck() {
   if (soundOn()) new Howl({ src: ["/sounds/shuffle.mp3"] }).play();

   return { type: SHUFFLE_DECK };
}

export { soundOn, moveCard, createTokens, switchPosition, revealHand, adjustLP, resetSolo, shuffleDeck };
