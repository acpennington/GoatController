const actionAndMessage = require("./utils/actionAndMessage.js");
const changeCardState = require("./utils/redis/changeCardState.js");

// @action SendCounters
// @desc Pushes out a counter adjustment from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendCounters(id, username, row, zone, counters, cardName, connectionId, api) {
   const [verb, preposition] = counters > 0 ? ["added", "to"] : ["removed", "from"];
   const target = cardName === "a facedown card" ? cardName : "<<" + cardName + ">>";
   const message = { author: "Server", content: `${username} ${verb} a counter ${preposition} ${target}.` };
   const data = { player: username, row, zone, counters };
   const action = { action: "ADJUST_COUNTERS", data };

   await actionAndMessage(id, action, message, connectionId, api);

   await changeCardState(id, { counters }, data);

   return { statusCode: 200, body: "Counters adjusted" };
}

module.exports = sendCounters;
