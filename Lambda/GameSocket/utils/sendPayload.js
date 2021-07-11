// @function sendPayload
// @desc Sends all connected clients a payload
// @db 0 reads, 0 writes
async function sendChatMessage(payload, players, watchers, api, excludeConnection = "", checkDisconnections = true) {
   let badConnection = false;

   for (const key in players) {
      const connection = players[key];
      if (connection && connection !== excludeConnection) {
         try {
            await api.postToConnection({ ConnectionId: connection, Data: JSON.stringify(payload) }).promise();
         } catch (err) {
            if (err.statusCode === 410 && checkDisconnections) {
               players[key] = "";
               badConnection = key;
            } else throw err;
         }
      }
   }

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

   return badConnection;
}

module.exports = sendChatMessage;
