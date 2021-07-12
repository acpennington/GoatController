const actionAndMessage = require("./utils/actionAndMessage.js");

// @action NewPhase
// @desc Sends a payload to others when the turn is set
// @access Private
// @db 1 read, 0 writes
async function newPhase(id, username, data, connectionId, api) {
   const message = { author: "Server", content: username + " set the phase to " + data.phase + "." };
   const action = { action: "SET_TURN", data };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Set turn sent" };
}

module.exports = newPhase;
