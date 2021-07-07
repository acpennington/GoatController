const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const sendChatMessage = require("./utils/sendChatMessage.js");
const findMatch = require("./utils/findMatch.js");

// @action JoinMatch
// @desc Connects one of the players to the game
// @access Private
// @db 1 read, 1 write
async function joinMatch(id, username, requestContext) {
   const match = await findMatch(id, "players, watchers, chat").promise();
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Game " + id + " not found" }] } };
   const { players, watchers, chat } = match;

   const { domainName, stage, connectionId } = requestContext;
   const api = new AWS.ApiGatewayManagementApi({ endpoint: domainName + "/" + stage });

   let UpdateExpression = "SET players.#name = :connectId, watchers = :watchers";
   const message = { author: "Server", content: username + " has connected to the match." };
   if (players.hasOwnProperty(username)) {
      await sendChatMessage(message, players, watchers, api, connectionId).promise();
      UpdateExpression += ", chat = list_append(chat, :messages)";
      chat.push(message);
   } else {
      // Join as a watcher
   }

   const params = {
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
