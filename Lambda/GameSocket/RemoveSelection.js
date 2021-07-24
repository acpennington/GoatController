const actionAndMessage = require("./utils/actionAndMessage.js");

// @action RemoveSelection
// @desc Sends a chat message from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function removeSelection(id, connectionId, api) {
   const action = { action: "CLEAR_SELECTION" };
   await actionAndMessage(id, action, false, connectionId, api);
   return { statusCode: 200, body: "Removed selection" };
}

module.exports = removeSelection;
