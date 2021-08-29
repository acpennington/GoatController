const Redis = require("ioredis");
const redis = new Redis("goatmatches.z9dvan.0001.use2.cache.amazonaws.com:6379");

exports.handler = async (event) => {
   await redis.set("foo", "bar");
   const res = await redis.get("foo");

   const response = {
      statusCode: 200,
      body: res
   };
   return response;
};
