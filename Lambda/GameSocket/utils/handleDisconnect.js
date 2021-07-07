const sendChatMessage = require("./utils/sendChatMessage.js");

// @function handDisconnection
// @desc Sends a chat message from one player to the other (and watchers)
// @db 0 read, 0 write
async function handleDisconnect(badConnection, players, watchers, api) {
    const disconnectMessage = { author: "Server", content: badConnection + " has disconnected from the match." };
    await sendChatMessage(disconnectMessage, players, watchers, api, "", false).promise();
}

module.exports = handleDisconnect;