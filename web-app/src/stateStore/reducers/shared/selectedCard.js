import { NEW_SELECTION, CLEAR_SELECTION, SEND_SELECTION, REMOVE_SELECTION } from "shared/constants.js";

const initialState = {};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case NEW_SELECTION: {
         const { selectingPlayer, socket, player, ...rest } = data;

         if (socket && socket.api) {
            if (selectingPlayer === player) {
               if (state[selectingPlayer] && state[selectingPlayer].player !== player) {
                  const payload = { action: REMOVE_SELECTION, data: { token: socket.token, id: socket.matchId } };
                  socket.api.send(JSON.stringify(payload));
               }
            } else {
               const payload = { action: SEND_SELECTION, data: { token: socket.token, id: socket.matchId, selectingPlayer, player, ...rest } };
               socket.api.send(JSON.stringify(payload));
            }
         }

         state[selectingPlayer] = { player, ...rest };
         return { ...state };
      }
      case CLEAR_SELECTION: {
         const { socket } = data;

         if (socket && socket.api) {
            const payload = { action: REMOVE_SELECTION, data: { token: socket.token, id: socket.matchId } };
            socket.api.send(JSON.stringify(payload));
         }

         return {};
      }
      default:
         return state;
   }
}
