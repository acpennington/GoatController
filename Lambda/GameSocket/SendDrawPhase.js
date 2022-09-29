const sendChatMessage = require("./utils/sendChatMessage.js");
const setGamestate = require("./utils/redis/setGamestate.js");
const findMatch = require("./utils/findMatch.js");
const GiveDraws = require("./GiveDraws.js");

// @action SendDrawPhase
// @desc Pushes out a draw phase draw from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendDrawPhase(id, username, shouldSkipDraw, connectionId, api) {
   const match = await findMatch(id);
   const { players, watchers } = match;

   const drawMessage = shouldSkipDraw ? `${username} skipped their Draw Phase.` : `${username} drew a card for their Draw Phase.`;
   const message = { author: "Server", content: drawMessage };

   await sendChatMessage(message, players, watchers, api);

   if (shouldSkipDraw) await setGamestate(id, { skippedDraws: -1, adjust: true }, username);
   else await GiveDraws(id, username, 1, connectionId, api, false);

   return { statusCode: 200, body: "Draw phase draw sent" };
}

module.exports = sendDrawPhase;
