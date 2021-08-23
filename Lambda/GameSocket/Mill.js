const actionAndMessage = require("./utils/actionAndMessage.js");

// @action Mill
// @desc Sends a payload to others about a card being milled
// @access Private
// @db 1 read, 0 writes
async function mill(id, username, deck, params, fail, message, connectionId, api) {
   let content;
   if (typeof params === "number") {
      content = `${username} milled ${params} card${params === 1 ? '' : 's'}.`;
   } else {
      content = fail
         ? `${username} was unable to mill until a ${message} card as there are no legal targets remaining.`
         : `${username} milled until a ${message} card.`;
   }
   const message = { author: "Server", content };
   const action = { action: "MILL_UNTIL", data: { player: username, deck, params, fail, message } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Card milled" };
}

module.exports = mill;
