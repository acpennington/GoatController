const actionAndMessage = require("./utils/actionAndMessage.js");

// @action ReorderDeck
// @desc Sends a reordered deck from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function reorderDeck(id, username, deck, connectionId, api) {
   const message = { author: "Server", content: `${username} shuffled their Deck.` };
   const action = { action: "SET_DECK", data: { player: username, deck } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "LP adjusted" };
}

module.exports = reorderDeck;
