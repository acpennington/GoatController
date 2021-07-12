const actionAndMessage = require("./utils/actionAndMessage.js");

// @action NewChatMessage
// @desc Sends a chat message from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendLpChange(id, username, amount, currentLP, connectionId, api) {
   const plusMinus = amount > 0 ? "+" : "";
   const message = { author: "Server", content: username + " adjusted their lifepoints by " + plusMinus + amount + "." };
   const action = { action: "ADJUST_LP", data: { player: username, change: amount, currentLP } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "LP adjusted" };
}

module.exports = sendLpChange;
