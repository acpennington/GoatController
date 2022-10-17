const sendChatMessage = require("./utils/sendChatMessage.js");
const setGamestate = require("./utils/redis/setGamestate.js");
const findMatch = require("./utils/findMatch.js");
const giveCards = require("./utils/giveCards.js");

const { HAND } = require("./shared/constants.js");

// @action SendDrawPhase
// @desc Pushes out a draw phase draw from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendDrawPhase(id, username, shouldSkipDraw, api) {
   if (shouldSkipDraw) {
      const match = await findMatch(id);
      const { players, watchers } = match;
      const message = { author: "Server", content: `${username} skipped their Draw Phase.` };

      await sendChatMessage(message, players, watchers, api);
      await setGamestate(id, { skippedDraws: -1, adjust: true }, username);
   } else await giveCards(id, username, 1, { row: HAND }, api, " for their Draw Phase");

   return { statusCode: 200, body: "Draw phase draw sent" };
}

module.exports = sendDrawPhase;
