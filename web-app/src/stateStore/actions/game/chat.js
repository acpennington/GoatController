import { ADD_MESSAGE, NEW_CHAT_MESSAGE } from "utils/constants";

function addMessage(author, content, socket = false) {
   if (socket && socket.api) {
      const payload = { action: NEW_CHAT_MESSAGE, data: { token: socket.token, id: socket.matchId, message: { author, content } } };
      socket.api.send(JSON.stringify(payload));
   }

   return { type: ADD_MESSAGE, data: { author, content } };
}

export { addMessage };
