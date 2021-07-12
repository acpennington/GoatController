const findMatch = require("./findMatch.js");
const sendMultiPayload = require("./sendMultiPayload.js");
const sendPayload = require("./sendPayload.js");
const handleDisconnect = require("./handleDisconnect.js");
const sendChatToOnly = require("./sendChatToOnly.js");

// @function actionAndMessage
// @desc Sends a chat message to the player, and an action/message to everyone else
// @db 1 reads, 0 writes
async function actionAndMessage(id, action, message, connectionId, api) {
   const match = await findMatch(id, "players, watchers");
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Game not found" }] } };
   const { players, watchers } = match;

   const badConnection = message
      ? await sendMultiPayload([action, { action: "ADD_MESSAGE", data: message }], players, watchers, api, connectionId)
      : await sendPayload(action, players, watchers, api, connectionId);
   if (badConnection) await handleDisconnect(badConnection, players, watchers, api);

   if (message) await sendChatToOnly(message, connectionId, api);
}

module.exports = actionAndMessage;
