const sendPayload = require("./sendPayload.js");

// @function sendChatMessage
// @desc Sends all connected clients a chat message
// @db 0 reads, 0 writes
async function sendChatMessage(message, players, watchers, api, excludeConnection = "", checkDisconnections = true) {
   const payload = { action: "ADD_MESSAGE", data: message };
   return await sendPayload(payload, players, watchers, api, excludeConnection, checkDisconnections);
}

module.exports = sendChatMessage;
