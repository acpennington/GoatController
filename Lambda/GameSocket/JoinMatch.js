const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const sendChatMessage = require("./utils/sendChatMessage.js");

// @action JoinMatch
// @desc Connects one of the players to the game
// @access Private
// @db 1 read, 1 write

async function joinMatch(id, username, requestContext) {
   const { domainName, stage, connectionId } = requestContext;

   let params = {
      TableName: "matches",
      Key: { id }
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const match = result.Item;

   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Game " + id + " not found" }] } };

   const api = new AWS.ApiGatewayManagementApi({ endpoint: domainName + "/" + stage });
   const { players, watchers } = match;

   if (players.hasOwnProperty(username)) {
      players[username] = connectionId;
      await sendChatMessage("Server", username + " has connected to the match.", players, watchers, api);
   } else {
      // Join as a watcher
   }

   params = {
      TableName: "matches",
      Key: { id },
      UpdateExpression: "SET players = :players, watchers = :watchers",
      ExpressionAttributeValues: { ":players": players, ":watchers": watchers }
   };
   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   return { statusCode: 200, body: "Player joined match" };
}

module.exports = joinMatch;
