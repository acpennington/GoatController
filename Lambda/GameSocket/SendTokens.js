const actionAndMessage = require("./utils/actionAndMessage.js");

// @action NewChatMessage
// @desc Sends a chat message from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendTokens(id, username, params, connectionId, api) {
   const count = params.match(/\d+/);
   const message = { author: "Server", content: `${username} Special Summoned ${count} Tokens.` };
   const action = { action: "CREATE_TOKEN", data: { player: username, params } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Tokens summoned" };
}

module.exports = sendTokens;
