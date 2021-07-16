const actionAndMessage = require("./utils/actionAndMessage.js");
const { HAND, DECK, GRAVEYARD, BANISHED } = require("./utils/constants");

// @action SendCardMove
// @desc Sends a card movement from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendCardMove(id, username, from, fromCard, to, settingTrap, msg, connectionId, api) {
   const player = to.player === username ? " their " : to.player + "'s ";
   const cardName =
      settingTrap || (from.row === DECK && to.row === HAND && from.zone === -1) || (fromCard.facedown && to.row !== GRAVEYARD && to.row !== BANISHED)
         ? "a card "
         : fromCard.name;
   const adverb = msg || "";
   const noMessage = (from.row === HAND && to.row === HAND) || (from.row === DECK && to.row === DECK);

   const message = !noMessage && {
      author: "Server",
      content: username + " " + adverb + " moved " + cardName + " from their " + from.row + " zone to " + player + to.row + " zone."
   };
   const action = { action: "MOVE_CARD", data: { from, to } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "LP adjusted" };
}

module.exports = sendCardMove;
