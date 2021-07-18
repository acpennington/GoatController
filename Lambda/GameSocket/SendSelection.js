const actionAndMessage = require("./utils/actionAndMessage.js");

// @action SendSelection
// @desc Sends a chat message from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendSelection(id, data, connectionId, api) {
   const action = { action: "NEW_SELECTION", data };
   await actionAndMessage(id, action, false, connectionId, api);
   return { statusCode: 200, body: "New selection" };
}

module.exports = sendSelection;
