const actionAndMessage = require("./utils/actionAndMessage.js");

// @action SendDrawPhase
// @desc Pushes out a draw phase draw from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendDrawPhase(id, username, shouldSkipDraw, connectionId, api) {
   const drawMessage = shouldSkipDraw ? `${username} skipped their Draw Phase.` : `${username} drew a card for their Draw Phase.`;
   const message = { author: "Server", content: drawMessage };
   const action = { action: "DRAW_PHASE_DRAW", data: { player: username } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Draw phase draw sent" };
}

module.exports = sendDrawPhase;
