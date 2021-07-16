import { drawPhaseDraw } from "./field.js";
import { SET_TURN, NEXT_PHASE, PREV_PHASE, NEW_PHASE, PUSH_NEXT_PHASE, PUSH_PREV_PHASE, DRAW } from "utils/constants.js";

function setTurn(player, phase, socket = false, oldPlayer = false) {
   if (socket && socket.api) {
      const payload = { action: NEW_PHASE, data: { token: socket.token, id: socket.matchId, data: { player, phase, oldPlayer } } };
      socket.api.send(JSON.stringify(payload));
   }

   return (dispatch) => {
      dispatch({ type: SET_TURN, data: { player, phase } })
      if (phase === DRAW && player !== oldPlayer) dispatch(drawPhaseDraw(player, socket));
   };
}

function nextPhase(socket = false) {
   if (socket && socket.api) {
      const payload = { action: PUSH_NEXT_PHASE, data: { token: socket.token, id: socket.matchId } };
      socket.api.send(JSON.stringify(payload));
   }

   return { type: NEXT_PHASE };
}

function prevPhase(socket = false) {
   if (socket && socket.api) {
      const payload = { action: PUSH_PREV_PHASE, data: { token: socket.token, id: socket.matchId } };
      socket.api.send(JSON.stringify(payload));
   }

   return { type: PREV_PHASE };
}

export { setTurn, nextPhase, prevPhase };
