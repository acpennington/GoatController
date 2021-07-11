const sendPayload = require("./sendPayload.js");

// @function sendChatMessage
// @desc Sends all connected clients multiple payloads
// @db 0 reads, 0 writes
async function sendChatMessage(payloads, players, watchers, api, excludeConnection = "", checkDisconnections = true) {
   const payload = { action: "MULTIPLE_ACTIONS", data: payloads };
   return await sendPayload(payload, players, watchers, api, excludeConnection, checkDisconnections);
}

module.exports = sendChatMessage;
