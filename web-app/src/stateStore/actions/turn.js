import { SET_TURN, NEXT_PHASE, PREV_PHASE } from "utils/constants.js";

function setTurn(player, phase) {
   return { type: SET_TURN, data: { player, phase } };
}

function nextPhase(heroPlayer) {
   return { type: NEXT_PHASE };
}

function prevPhase(heroPlayer) {
   return { type: PREV_PHASE };
}

export { setTurn, nextPhase, prevPhase };
