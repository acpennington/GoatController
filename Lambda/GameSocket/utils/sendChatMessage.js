// @function sendChatMessage
// @desc Sends all connected clients a chat message
// @db 0 reads, 0 writes
async function sendChatMessage(message, players, watchers, api, excludeConnection, checkDisconnections = true) {
   const payload = { action: "ADD_MESSAGE", data: message };

   for (let i = 0; i < watchers.length; i++) {
      const watcherConnection = watchers[i];
      if (watcherConnection !== excludeConnection) {
         try {
            await api.postToConnection({ ConnectionId: watcherConnection, Data: JSON.stringify(payload) }).promise();
         } catch (err) {
            if (err.statusCode === 410 && checkDisconnections) {
               watchers.splice(i, 1);
               i--;
            } else throw err;
         }
      }
   }

   const badPlayers = [];
   for (const key in players) {
      const connection = players[key];
      if (connection && connection !== excludeConnection) {
         try {
            await api.postToConnection({ ConnectionId: connection, Data: JSON.stringify(payload) }).promise();
         } catch (err) {
            if (err.statusCode === 410 && checkDisconnections) {
               players[key] = "";
               badPlayers.push(key);
            } else throw err;
         }
      }
   }

   if (badPlayers.length > 0) {
      const message = { author: "Server", content: badPlayers.join(" and ") + " disconnected from the match." };
      sendChatMessage(message, players, watchers, api, excludeConnection, false);
   }
}

module.exports = sendChatMessage;
