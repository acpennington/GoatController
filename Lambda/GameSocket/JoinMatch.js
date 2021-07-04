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
   const { players, watchers, chat } = match;

   let UpdateExpression = "SET players = :players, watchers = :watchers";
   if (players.hasOwnProperty(username)) {
      const message = { author: "Server", content: username + " has connected to the match." };
      await sendChatMessage(message, players, watchers, api, connectionId);
      players[username] = connectionId;
      chat.push(message);
      UpdateExpression += ", chat = :chat";
   } else {
      // Join as a watcher
   }

   params = {
      TableName: "matches",
      Key: { id },
      UpdateExpression,
      ExpressionAttributeValues: { ":players": players, ":watchers": watchers, ":chat": chat }
   };
   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   // send whole chat (and later gamestate as well) back to user
   const payload = { action: "SET_CHAT_TO", data: chat };
   await api.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify(payload) }).promise();

   return { statusCode: 200, body: "Player joined match" };
}

module.exports = joinMatch;
