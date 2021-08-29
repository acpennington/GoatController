const actionAndMessage = require("./utils/actionAndMessage.js");

// @action SendDiscardAndDraw
// @desc Sends a discard and draw action from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function SendDiscardAndDraw(id, username, count, connectionId, api) {
   const message = { author: "Server", content: username + " discarded their hand" + (count > 0 ? " and drew " + count + " cards." : ".") };
   const action = { action: "DISCARD_AND_DRAW", data: { player: username, count } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Discard and draw" };
}

module.exports = SendDnd;
