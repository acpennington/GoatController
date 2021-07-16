import { drawPhaseDraw } from "./field.js";
import { SET_TURN, NEW_PHASE, DRAW } from "utils/constants.js";

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

export { setTurn };
