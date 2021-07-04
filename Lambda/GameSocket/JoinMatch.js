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

   const params = {
      TableName: "matches",
      Key: { id }
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const game = result.Item;

   if (!game) return { statusCode: 400, body: { errors: [{ msg: "Game " + id + " not found" }] } };

   const api = new AWS.ApiGatewayManagementApi({ endpoint: domainName + "/" + stage });
   const { players, watchers } = game;

   if (players[username]) {
      players[username] = connectionId;
      await sendChatMessage("Server", username + " has connected to the match.", players, watchers, api);
   } else {
      return; // Join as a watcher
   }
}

module.exports = joinMatch;
