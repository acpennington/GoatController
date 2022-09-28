const Redis = require("ioredis");
const redis = new Redis("goatmatches.z9dvan.0001.use2.cache.amazonaws.com:6379");
const findMatch = require("../findMatch.js");

// @function redisSet
// @desc Alter a match's data in the redis table
// @db 0/1 reads, 1 writes
async function redisSet(id, data, prevData = false) {
   // We assign match conditionally in order to avoid reading the same data from redis repeatedly if the function that called redisSet already did so
   let match = prevData;
   if (!match) match = await findMatch(id);

   await redis.set(id, JSON.stringify({ ...match, ...data }));
}

module.exports = redisSet;
