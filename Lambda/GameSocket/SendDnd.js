const actionAndMessage = require("./utils/actionAndMessage.js");

// @action SendDnd
// @desc Sends a draw and discard effect from one player to the oher (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendAttack(id, username, count, connectionId, api) {
   const message = { author: "Server", content: username + " discarded their hand" + (count > 0 ? " and drew " + count + " cards." : ".") };
   const action = { action: "DISCARD_AND_DRAW", data: { player: username, count } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Discard and draw" };
}

module.exports = sendAttack;
