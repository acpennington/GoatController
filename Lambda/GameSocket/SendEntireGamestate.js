const actionAndMessage = require("./utils/actionAndMessage.js");

// @action NewPhase
// @desc Advances the phase
// @access Private
// @db 1 read, 0 writes
async function sendEntireState(id, gamestate, message, connectionId, api) {
   const sendMessage = { author: "Server", content: message };
   const action = { action: "SET_GAMESTATE_TO", data: gamestate };

   await actionAndMessage(id, action, sendMessage, connectionId, api);
   return { statusCode: 200, body: "New gamestate pushed out" };
}

module.exports = sendEntireState;
