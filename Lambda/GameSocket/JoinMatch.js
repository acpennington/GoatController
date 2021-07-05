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
      Key: { id },
      ProjectionExpression: "players, watchers, chat"
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const match = result.Item;
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Game " + id + " not found" }] } };

   const api = new AWS.ApiGatewayManagementApi({ endpoint: domainName + "/" + stage });
   let { players, watchers, chat } = match;

   let UpdateExpression = "SET players.#name = :connectId, watchers = :watchers";
   const message = { author: "Server", content: username + " has connected to the match." };
   if (players.hasOwnProperty(username)) {
      await sendChatMessage(message, players, watchers, api, connectionId);
      UpdateExpression += ", chat = list_append(chat, :messages)";
      chat.push(message);
   } else {
      // Join as a watcher
   }

   params = {
      TableName: "matches",
      Key: { id },
      UpdateExpression,
      ExpressionAttributeNames: { "#name": username },
      ExpressionAttributeValues: { ":connectId": connectionId, ":watchers": watchers, ":messages": [message] }
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
