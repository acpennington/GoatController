const Redis = require("ioredis");
const redis = new Redis("goatmatches.z9dvan.0001.use2.cache.amazonaws.com:6379");

const sendChatMessage = require("./utils/sendChatMessage.js");
const findMatch = require("./utils/findMatch.js");
const redisSet = require("./utils/redisSet.js");

// @action JoinMatch
// @desc Connects one of the players to the game
// @access Private
// @db 1 read, 1 write
async function joinMatch(id, username, connectionId, api) {
   const match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: `Match ${id} not found` }] } };
   const { players, watchers, chat, gamestate, turn } = match;

   const message = { author: "Server", content: `${username} has connected to the Match.` };
   if (players.hasOwnProperty(username)) {
      await sendChatMessage(message, players, watchers, api, connectionId);
      chat.push(message);
      const data = { players: { ...players, [username]: connectionId }, chat };
      await redisSet(id, data, match);
   } else {
      // Join as a watcher
   }

   // when the user connects, we send back multiple actions to the client, but all in one message
   const payload = {
      action: "CONNECTED",
      data: [
         { action: "SET_CHAT_TO", data: chat },
         { action: "SET_GAMESTATE_TO", data: gamestate },
         { action: "SET_TURN", data: turn }
      ]
   };
   await api.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify(payload) }).promise();

   return { statusCode: 200, body: "Player joined Match" };
}

module.exports = joinMatch;
