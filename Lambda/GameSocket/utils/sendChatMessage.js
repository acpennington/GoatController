// @function sendChatMessage
// @desc Sends all connected clients a chat message
// @db 0 reads, 0 writes
async function sendChatMessage(message, sendTo) {
   const payload = { action: "NewChatMessage", data: message };

   for (connection of sendTo) {
      // post to connection
   }

   return { statusCode: 200, body: "Player joined match" };
}

module.exports = sendChatMessage;
