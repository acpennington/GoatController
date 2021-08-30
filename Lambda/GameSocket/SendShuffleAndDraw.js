const actionAndMessage = require("./utils/actionAndMessage.js");
const display = require("./shared/display");

// @action SendShuffleAndDraw
// @desc Sends a shuffle and draw action from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function SendShuffleAndDraw(id, username, source, count, connectionId, api) {
   const message = {
      author: "Server",
      content: `${username} shuffled their ${display(source)} into their Deck${count > 0 ? ` and drew ${count} cards.` : "."}`
   };
   const action = { action: "SHUFFLE_AND_DRAW", data: { player: username, source, count } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Shuffle and draw" };
}

module.exports = SendShuffleAndDraw;
