import { NEW_SELECTION, CLEAR_SELECTION } from "utils/constants.js";

const initialState = {};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case NEW_SELECTION: {
         const { selectingPlayer, socket, player, ...rest } = data;

         state[selectingPlayer] = { player, ...rest };

         if (socket && socket.api && selectingPlayer !== player) {
            if (selectingPlayer === player) {
               if (state[player].player !== player) {
                  // equivalent to clear selection
               }
            } else {
               // send over my selection
            }
         }

         return state;
      }
      case CLEAR_SELECTION:
         const { player, socket } = data;

         if (socket && socket.api && state[player].player !== player) {
            // send clear
         }

         delete state[player];
         return state;
      default:
         return state;
   }
}
