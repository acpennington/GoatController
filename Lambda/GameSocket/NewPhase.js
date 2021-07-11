const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

const findMatch = require("./utils/findMatch.js");
const handleDisconnect = require("./utils/handleDisconnect.js");
const sendMultiPayload = require("./utils/sendMultiPayload.js");

// @action JoinMatch
// @desc Sends a payload to others when the turn is set
// @access Private
// @db 1 read, 0 writes
async function newPhase(id, username, data, connectionId, api) {
   const match = await findMatch(id, "players, watchers");
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Game not found" }] } };
   const { players, watchers } = match;

   const payloads = [
      { action: "SET_TURN", data },
      { action: "ADD_MESSAGE", data: { author: "Server", content: username + " set the phase to " + data.phase + "." } }
   ];
   const badConnection = await sendMultiPayload(payloads, players, watchers, api, connectionId);
   if (badConnection) await handleDisconnect(badConnection, players, watchers, api);

   return { statusCode: 200, body: "Set turn sent" };
}

module.exports = newPhase;
