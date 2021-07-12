const actionAndMessage = require("./utils/actionAndMessage.js");

const HAND = "hand";
const DECK = "deck";
const GRAVEYARD = "graveyard";
const BANISHED = "banished";

async function sendCardMove(id, username, from, fromCard, to, msg, connectionId, api) {
   const player = to.player === username ? " their " : to.player + "'s ";
   const cardName =
      (from.row === DECK && to.row === HAND) || (fromCard.facedown && to.row !== GRAVEYARD && to.row !== BANISHED)
         ? "a card from their " + from.row
         : fromCard.name;
   const adverb = msg || "";

   const message = {
      author: "Server",
      content: username + " " + adverb + " moved " + cardName + " from their " + from.row + " zone to " + player + to.row + " zone."
   };
   const action = { action: "MOVE_CARD", data: { from, to } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "LP adjusted" };
}

module.exports = sendCardMove;
