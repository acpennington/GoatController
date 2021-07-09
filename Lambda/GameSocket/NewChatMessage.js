const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

const findMatch = require("./utils/findMatch.js");
const sendChatMessage = require("./utils/sendChatMessage.js");
const handleDisconnect = require("./utils/handleDisconnect.js");

// @action NewChatMessage
// @desc Sends a chat message from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 write
async function newChatMessage(id, username, message, requestContext) {
   const match = await findMatch(id, "players, watchers");
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Game " + id + " not found" }] } };
   const { players, watchers } = match;

   const { domainName, stage, connectionId } = requestContext;
   const api = new AWS.ApiGatewayManagementApi({ endpoint: domainName + "/" + stage });

   if (message.author !== username) return { statusCode: 401, body: { errors: [{ msg: "You are not authorized to send this message" }] } };

   const badConnection = await sendChatMessage(message, players, watchers, api, connectionId);
   if (badConnection) await handleDisconnect(badConnection, players, watchers, api);

   return { statusCode: 200, body: "Chat message sent" };
}

module.exports = newChatMessage;
