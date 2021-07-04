// @function sendChatMessage
// @desc Sends all connected clients a chat message
// @db 0 reads, 0 writes
async function sendChatMessage(author, content, players, watchers, api, checkDisconnection = true) {
   const payload = { action: "ADD_MESSAGE", data: { author, content } };

   for (let i = 0; i < watchers.length; i++) {
      const watcherConnection = watcher[i];
      try {
         await api.postToConnection({ ConnectionId: watcherConnection, Data: JSON.stringify(payload) }).promise();
      } catch (err) {
         if (err.statusCode === 410) {
            watchers.splice(i, 1);
            i--;
         } else throw err;
      }
   }

   for (const key in players) {
      const connection = players[key];
      if (connection) {
         try {
            await api.postToConnection({ ConnectionId: connection, Data: JSON.stringify(payload) }).promise();
         } catch (err) {
            if (err.statusCode === 410) {
               players[key] = "";
               sendChatMessage("Server", key + " disconnected from the match.", players, watchers, api);
            } else throw err;
         }
      }
   }
}

module.exports = sendChatMessage;
