import { SET_TURN, NEXT_PHASE, PREV_PHASE, NEW_PHASE, PUSH_NEXT_PHASE, PUSH_PREV_PHASE } from "utils/constants.js";

function setTurn(player, phase, socket) {
   if (socket && socket.api) {
      const payload = { action: NEW_PHASE, data: { token: socket.token, id: socket.matchId, data: { player, phase } } };
      socket.api.send(JSON.stringify(payload));
   }

   return { type: SET_TURN, data: { player, phase } };
}

function nextPhase(socket) {
   if (socket && socket.api) {
      const payload = { action: PUSH_NEXT_PHASE, data: { token: socket.token, id: socket.matchId } };
      socket.api.send(JSON.stringify(payload));
   }

   return { type: NEXT_PHASE };
}

function prevPhase(socket) {
   if (socket && socket.api) {
      const payload = { action: PUSH_PREV_PHASE, data: { token: socket.token, id: socket.matchId } };
      socket.api.send(JSON.stringify(payload));
   }

   return { type: PREV_PHASE };
}

export { setTurn, nextPhase, prevPhase };
