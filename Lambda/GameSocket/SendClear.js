const actionAndMessage = require("./utils/actionAndMessage.js");

// @action SendClear
// @desc Sends a message to clear the battle
// @access Private
// @db 1 read, 0 writes
async function sendClear(id, connectionId, api) {
   const action = { action: "CLEAR_BATTLE" };
   await actionAndMessage(id, action, false, connectionId, api);
   return { statusCode: 200, body: "Attack declared" };
}

module.exports = sendClear;
