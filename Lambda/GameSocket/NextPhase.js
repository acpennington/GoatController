const findMatch = require("./utils/findMatch.js");
const handleDisconnect = require("./utils/handleDisconnect.js");
const sendMultiPayload = require("./utils/sendMultiPayload.js");
const sendChatToOnly = require("./utils/sendChatToOnly.js");

// @action NewPhase
// @desc Sends a payload to others when the turn is set
// @access Private
// @db 1 read, 0 writes
async function nextPhase(id, username, connectionId, api) {
   const match = await findMatch(id, "players, watchers");
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Game not found" }] } };
   const { players, watchers } = match;

   const message = { author: "Server", content: username + " advanced the phase." };
   const payloads = [{ action: "NEXT_PHASE" }, { action: "ADD_MESSAGE", data: message }];
   const badConnection = await sendMultiPayload(payloads, players, watchers, api, connectionId);
   if (badConnection) await handleDisconnect(badConnection, players, watchers, api);

   await sendChatToOnly(message, connectionId, api);
   return { statusCode: 200, body: "Phase advanced" };
}

module.exports = nextPhase;
