const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const sendChatMessage = require("./utils/sendChatMessage.js");
const findMatch = require("./utils/findMatch.js");

// @action JoinMatch
// @desc Connects one of the players to the game
// @access Private
// @db 1 read, 1 write
async function joinMatch(id, username, connectionId, api) {
   const match = await findMatch(id, "players, watchers, chat, gamestate, turn");
   if (!match) return { statusCode: 400, body: { errors: [{ msg: `Match ${id} not found` }] } };
   const { players, watchers, chat, gamestate, turn } = match;

   let UpdateExpression = "SET players.#name = :connectId, watchers = :watchers";
   const message = { author: "Server", content: `${username} has connected to the Match.` };
   if (players.hasOwnProperty(username)) {
      await sendChatMessage(message, players, watchers, api, connectionId);
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
   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   // when the user connects, we send back multiple actions to the client, but all in one message
   const payload = {
      action: "CONNECTED",
      data: [
         { action: "SET_CHAT_TO", data: chat },
         { action: "SET_GAMESTATE_TO", data: gamestate },
         { action: "SET_TURN", data: turn }
      ]
   };
   await api.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify(payload) }).promise();

   return { statusCode: 200, body: "Player joined Match" };
}

module.exports = joinMatch;
