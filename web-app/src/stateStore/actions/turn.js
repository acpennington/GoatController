import { addMessage } from "./chat.js";
import { drawPhaseDraw } from "./field.js";
import { SET_TURN, NEW_PHASE, DRAW, BATTLE, NEXT_TURN, CLEAR_BATTLE } from "utils/constants.js";

function setTurn(player, phase, socket = false, oldPlayer = false, handCount = 0) {
   if (socket && socket.api) {
      const payload = { action: NEW_PHASE, data: { token: socket.token, id: socket.matchId, data: { player, phase, oldPlayer } } };
      socket.api.send(JSON.stringify(payload));
   }

   return (dispatch) => {
      dispatch({ type: SET_TURN, data: { player, phase } });
      if (player === oldPlayer && phase !== BATTLE) dispatch({ type: CLEAR_BATTLE, data: socket });
      if (phase === DRAW && player !== oldPlayer) dispatch(drawPhaseDraw(player, socket));
      else if (phase === NEXT_TURN && handCount > 6) {
         const message = player + " has " + handCount + " cards in hand. Please discard down to 6.";
         dispatch(addMessage("Game", message, socket));
      }
   };
}

export { setTurn };
