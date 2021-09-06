const findMatch = require("./utils/findMatch.js");
const sendMultiPayload = require("./utils/sendMultiPayload.js");

// @action PlayerConceded
// @desc Accepts a concession from a player
// @access Private
// @db 1 read, 0 writes
async function playerConceded(id, username, api) {
   const match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Match not found" }] } };
   const { players, watchers, league } = match;

   const action = { action: "CONCEDE_GAME", data: "/league?id=" + league };
   const message = { action: "ADD_MESSAGE", data: { author: "Server", content: `${username} conceded the Duel.` } };

   await sendMultiPayload([action, message], players, watchers, api);
   return { statusCode: 200, body: "Player conceded" };
}

module.exports = playerConceded;
