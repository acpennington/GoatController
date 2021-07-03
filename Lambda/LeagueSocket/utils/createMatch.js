const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

// @function createMatch
// @desc Places two players in a match together
// @db 0 reads, 3 writes
async function createMatch(leagueId, players, api) {
   const [player1, player2] = players;
   const { name: player1name, connectionId: player1connection } = player1;
   const { name: player2name, connectionId: player2connection } = player2;

   const matchId = stripSpecialChars(player1connection) + stripSpecialChars(player2connection);

   let params = {
      TableName: "matches",
      Item: {
         id: matchId,
         league: leagueId,
         players: [
            { name: player1name, connectionId: "" },
            { name: player2name, connectionId: "" }
         ],
         watchers: [],
         gamestate: [],
         chat: []
      }
   };
   await DynamoDB.put(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   params = {
      TableName: "users",
      Key: { username: player1name },
      UpdateExpression: "SET activeMatch = :matchid",
      ExpressionAttributeValues: { ":matchid": matchId }
   };
   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   params.Key = { username: player2name };
   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   const payload = { action: "NewGame", data: matchId };
   await api.postToConnection({ ConnectionId: player1connection, Data: JSON.stringify(payload) }).promise();
   await api.postToConnection({ ConnectionId: player2connection, Data: JSON.stringify(payload) }).promise();
}

function stripSpecialChars(aString) {
   return aString.replace(/[^a-zA-Z0-9]/g, "");
}

module.exports = createMatch;
