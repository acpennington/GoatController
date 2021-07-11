const findMatch = require("./findMatch.js");
const handleDisconnect = require("./handleDisconnect.js");
const sendMultiPayload = require("./sendMultiPayload.js");
const sendChatToOnly = require("./sendChatToOnly.js");

// @action NewPhase
// @desc Sends a payload to others when the turn is set
// @access Private
// @db 1 read, 0 writes
async function phaseStep(id, username, connectionId, api, isForward) {
   const match = await findMatch(id, "players, watchers");
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Game not found" }] } };
   const { players, watchers } = match;

   const advanceOrRewind = isForward ? " advanced" : "rewinded";
   const message = { author: "Server", content: username + advanceOrRewind + " the phase." };
   const payloads = [{ action: isForward ? "NEXT_PHASE" : "PREV_PHASE" }, { action: "ADD_MESSAGE", data: message }];
   const badConnection = await sendMultiPayload(payloads, players, watchers, api, connectionId);
   if (badConnection) await handleDisconnect(badConnection, players, watchers, api);

   await sendChatToOnly(message, connectionId, api);
   return { statusCode: 200, body: "Phase" + advanceOrRewind };
}

module.exports = phaseStep;
