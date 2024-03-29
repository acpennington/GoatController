const Redis = require("ioredis");
const redis = new Redis("goatmatches.z9dvan.0001.use2.cache.amazonaws.com:6379");
const findMatch = require("../findMatch.js");

// @function setGamestate
// @desc Alter a gamestate in the redis table
// @db 0/1 reads, 1 writes
async function setGamestate(id, data, player, prevData = false) {
   // We assign match conditionally in order to avoid reading the same data from redis repeatedly if the function that called this already did so
   let match = prevData;
   if (!match) match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Match not found" }] } };

   const exportData = { gamestate: match.gamestate };
   if (data.adjust) {
      delete data.adjust;
      for (const key in data) data[key] += exportData.gamestate[player][key];
   } else exportData.gamestate[player] = { ...exportData.gamestate[player], ...data };

   await redis.set(id, JSON.stringify({ ...match, ...exportData }));
}

module.exports = setGamestate;
