const sendPayload = require("./sendPayload.js");

// @function sendMultiPayload
// @desc Sends all connected clients multiple payloads
// @db 0 reads, 0 writes
async function sendMultiPayload(payloads, players, watchers, api, excludeConnection = "", checkDisconnections = true) {
   const payload = { action: "MULTIPLE_ACTIONS", data: payloads };
   return await sendPayload(payload, players, watchers, api, excludeConnection, checkDisconnections);
}

module.exports = sendMultiPayload;
