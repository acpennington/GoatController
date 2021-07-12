const actionAndMessage = require("./utils/actionAndMessage.js");

async function sendCardMove(id, username, from, fromCard, to, connectionId, api) {
   const player = to.player === username ? " their " : to.player + "'s ";
   const cardName = fromCard.name;

   const message = { author: "Server", content: username + " moved " + cardName + " to " + player + to.row + " zone." };
   const action = { action: "MOVE_CARD", data: { from, to } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "LP adjusted" };
}

module.exports = sendCardMove;
