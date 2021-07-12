const actionAndMessage = require("./utils/actionAndMessage.js");

// @action NewPhase
// @desc Sends a payload to others when the turn is set
// @access Private
// @db 1 read, 0 writes
async function mill(id, username, deck, params, connectionId, api) {
   const message = { author: "Server", content: username + " milled until a " + params + "." };
   const action = { action: "Mill_Until", data: { player: username, deck, params } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Set turn sent" };
}

module.exports = mill;
