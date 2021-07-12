const actionAndMessage = require("./actionAndMessage.js");

// @action NewPhase
// @desc Sends a payload to others when the turn is set
// @access Private
// @db 1 read, 0 writes
async function phaseStep(id, username, connectionId, api, isForward) {
   const advanceOrRewind = isForward ? " advanced" : " rewinded";
   const message = { author: "Server", content: username + advanceOrRewind + " the phase." };
   const action = { action: isForward ? "NEXT_PHASE" : "PREV_PHASE" };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Phase" + advanceOrRewind };
}

module.exports = phaseStep;
