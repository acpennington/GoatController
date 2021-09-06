const Redis = require("ioredis");
const redis = new Redis("goatmatches.z9dvan.0001.use2.cache.amazonaws.com:6379");

// @function findMatch
// @desc Finds a match by id and returns it
// @db 1 reads, 0 writes
async function findMatch(id, noParse = false) {
   const match = await redis.get(id);
   return noParse ? match : JSON.parse(match);
}

module.exports = findMatch;
