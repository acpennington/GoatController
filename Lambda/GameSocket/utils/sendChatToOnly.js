// @function sendChatToOnly
// @desc Sends one specific client a chat message
// @db 0 reads, 0 writes
async function sendChatToOnly(message, connectionId, api) {
   const payload = { action: "ADD_MESSAGE", data: message };
   await api.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify(payload) }).promise();
}

module.exports = sendChatToOnly;
