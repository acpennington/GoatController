const Redis = require("ioredis");
const redis = new Redis("goatmatches.z9dvan.0001.use2.cache.amazonaws.com:6379");
const findMatch = require("../findMatch.js");

// @function changeCardState
// @desc Change the state of a card
// @db 0/1 reads, 1 writes
async function changeCardState(id, data, location, prevData = false) {
   // We assign match conditionally in order to avoid reading the same data from redis repeatedly if the function that called this already did so
   let match = prevData;
   if (!match) match = await findMatch(id);

   const { player, row, zone } = location;
   const exportData = { gamestate: match.gamestate };
   const card = exportData.gamestate[player][row][zone];

   const dataKey = Objects.keys(data)[0];
   if (dataKey === "counters") {
      const currentCounters = card.counters || 0;
      data[counters] += currentCounters;
   }

   card = { ...card, ...data };

   await redis.set(id, JSON.stringify({ ...match, ...exportData }));
}

module.exports = changeCardState;
