const actionAndMessage = require("./utils/actionAndMessage.js");
const display = require("./utils/display");

// @action Mill
// @desc Sends a payload to others about a card being milled
// @access Private
// @db 1 read, 0 writes
async function mill(id, username, deck, params, connectionId, api) {
   // This is a really hacky way to check for Merchant vs Reasoning/Gate
   const cardType = params.cardType && params.cardType.operator === "OR" ? "Spell or Trap" : "Normal Summon Monster";

   const message = { author: "Server", content: `${username} milled until a ${cardType} card.` };
   const action = { action: "MILL", data: { player: username, deck, params } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Card milled" };
}

module.exports = mill;
