const actionAndMessage = require("./utils/actionAndMessage.js");
const display = require("./utils/display");

// @action Mill
// @desc Sends a payload to others about a card being milled
// @access Private
// @db 1 read, 0 writes
async function mill(id, username, deck, params, fail, connectionId, api) {
   // This is a really hacky way to check for Merchant vs Reasoning/Gate
   const cardType = params.cardType && params.cardType.operator === "OR" ? "Spell or Trap" : "Normal Summon Monster";

   const content =  fail
      ? `${username} was unable to mill until a ${cardType} card as there are no legal targets remaining.`
      : `${username} milled until a ${cardType} card.`;
   const message = { author: "Server", content };
   const action = { action: "MILL_UNTIL", data: { player: username, deck, params, fail } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Card milled" };
}

module.exports = mill;
