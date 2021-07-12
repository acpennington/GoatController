const actionAndMessage = require("./utils/actionAndMessage.js");

async function reorderDeck(id, username, deck, connectionId, api) {
   const message = { author: "Server", content: username + " shuffled their deck." };
   const action = { action: "SET_DECK", data: { player: username, deck } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "LP adjusted" };
}

module.exports = reorderDeck;
