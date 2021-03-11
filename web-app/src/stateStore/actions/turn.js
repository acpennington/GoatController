import { SET_TURN, NEXT_PHASE, PREV_PHASE } from "utils/constants.js";

function setTurn(player, phase) {
   return { type: SET_TURN, data: { player, phase } };
}

function nextPhase() {
   return { type: NEXT_PHASE };
}

function prevPhase() {
   return { type: PREV_PHASE };
}

export { setTurn, nextPhase, prevPhase };
