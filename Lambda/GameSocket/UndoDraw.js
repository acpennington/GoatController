const actionAndMessage = require("./utils/actionAndMessage.js");

// @action UndoDraw
// @desc Pushes out an undo draw from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function undoDraw(id, username, connectionId, api) {
   const message = { author: "Server", content: `${username} returned the last card they drew to the top of their Deck.` };
   const action = { action: "UNDO_DRAW", data: { player: username } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Draw undone" };
}

module.exports = undoDraw;
