const findMatch = require("./utils/findMatch.js");
const sendChatMessage = require("./utils/sendChatMessage.js");
const checkParams = require("./shared/checkParams.js");
const giveCards = require("./utils/giveCards.js");

// @action Mill
// @desc Sends a payload to others about a card being milled
// @access Private
// @db 1 read, 0 writes
async function mill(id, username, row, params, api) {
   const match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Match not found" }] } };
   const deck = match.gamestate[username].deck;

   // find the card(s)
   let found = -1;
   if (typeof params === "number") {
      found = Math.max(0, deck.length - params);
   } else {
      const topCard = deck.length - 1;
      for (let i = topCard; i >= 0 && found < 0; i--) {
         const card = deck[i];
         const { fail } = checkParams(card, params);
         if (fail.length === 0) found = i;
      }
   }

   // This is a really hacky way to check for Merchant vs Reasoning/Gate
   const cardType = params.text ? "Normal Summon Monster" : "Spell or Trap";

   if (found < 0) {
      const { players, watchers } = match;
      const message = { author: "Server", content: `${username} was unable to mill until a ${cardType} card as there are no legal targets remaining.` };
      await sendChatMessage(message, players, watchers, api);
      return { statusCode: 200, body: "No cards milled" };
   } else {
      const addMessage = typeof params === "number" ? "" : `(until a ${cardType} card)`;
      await giveCards(id, username, deck.length - found, { row }, api, addMessage, match);
   }

   return { statusCode: 200, body: "Cards milled" };
}

module.exports = mill;
