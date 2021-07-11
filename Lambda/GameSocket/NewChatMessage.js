const findMatch = require("./utils/findMatch.js");
const sendChatMessage = require("./utils/sendChatMessage.js");
const handleDisconnect = require("./utils/handleDisconnect.js");

// @action NewChatMessage
// @desc Sends a chat message from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function newChatMessage(id, username, message, connectionId, api) {
   if (message.author !== username) return { statusCode: 401, body: { errors: [{ msg: "You are not authorized to send this message" }] } };

   const match = await findMatch(id, "players, watchers");
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Game not found" }] } };
   const { players, watchers } = match;

   const badConnection = await sendChatMessage(message, players, watchers, api, connectionId);
   if (badConnection) await handleDisconnect(badConnection, players, watchers, api);

   return { statusCode: 200, body: "Chat message sent" };
}

module.exports = newChatMessage;
