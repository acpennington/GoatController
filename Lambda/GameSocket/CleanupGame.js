const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const sendPayload = require("./utils/sendPayload.js");
const findMatch = require("./utils/findMatch.js");

// @action CleanupGame
// @desc Cleans up databases after one player quits out of the game
// @access Private
// @db 1 read, 3 writes
async function cleanupGame(id, connectionId, api) {
   const match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Match not found" }] } };

   const params = {
      TableName: "matches",
      Key: { id }
   };
   try {
      await DynamoDB.delete(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   const { players, league } = match;
   for (const player in players) {
      const params = {
         TableName: "users",
         Key: { username: player },
         UpdateExpression: "SET activeMatch = :none",
         ExpressionAttributeValues: { ":none": "" }
      };
      try {
         await DynamoDB.update(params).promise();
      } catch (err) {
         return { statusCode: 400, body: { errors: [err] } };
      }
   }

   const payload = { action: "REDIRECT", data: "/league?id=" + league };
   await sendPayload(payload, players, [], api, connectionId, false);
   return { statusCode: 200, body: "Match cleaned up" };
}

module.exports = cleanupGame;
