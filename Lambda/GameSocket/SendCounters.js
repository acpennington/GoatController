const actionAndMessage = require("./utils/actionAndMessage.js");

// @action SendCounters
// @desc Pushes out a counter adjustment from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendCounters(id, username, row, zone, counters, cardName, connectionId, api) {
   const verb = counters > 0 ? "added" : "removed";
   const preposition = counters > 0 ? "to" : "from";
   const message = { author: "Server", content: `${username} ${verb} a counter ${preposition} ${cardName}.` };
   const action = { action: "ADJUST_COUNTERS", data: { player: username, row, zone, counters } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Counters adjusted" };
}

module.exports = sendCounters;
