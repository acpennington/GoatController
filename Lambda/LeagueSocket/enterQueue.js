const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const createMatch = require("./utils/createMatch.js");
const findLeague = require("./utils/findLeague.js");

// @action EnterQueue
// @desc Adds a member to a league's queue
// @access Private
// @db 1 read, 1 write (or more, if creating matches)
async function enterQueue(id, requestContext, username) {
   const { domainName, stage, connectionId } = requestContext;

   const league = await findLeague(id, "useQueue, matchmaking, members");
   if (!league) return { statusCode: 400, body: { errors: [{ msg: "League not found" }] } };

   const { useQueue, matchmaking, members } = league;
   if (!useQueue) return { statusCode: 400, body: { errors: [{ msg: "League does not use queue for matchmaking" }] } };

   const api = new AWS.ApiGatewayManagementApi({ endpoint: domainName + "/" + stage });

   // Check for dead connections and delete them
   for (let i = 0; i < matchmaking.length; ) {
      const { connectionId, name } = matchmaking[i];
      if (name === username) matchmaking.splice(i, 1);
      else {
         try {
            await api.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify({ msg: "ping" }) }).promise();
            i++;
         } catch (err) {
            if (err.statusCode === 410) matchmaking.splice(i, 1);
            else throw err;
         }
      }
   }

   matchmaking.push({ name: username, connectionId });

   // match players with each other, if possible, and send results to createMatch
   const [playerA, playerB, playerC] = matchmaking;
   const mmLength = matchmaking.length;
   if (mmLength === 2) {
      if (!lastPlayed(members, playerA, playerB)) {
         await createMatch(id, [playerA, playerB], api);
         matchmaking.splice(0, 2);
      }
   } else if (mmLength === 3) {
      if (!lastPlayed(members, playerA, playerB)) {
         await createMatch(id, [playerA, playerB], api);
         matchmaking.splice(0, 2);
      } else if (!lastPlayed(members, playerA, playerC)) {
         await createMatch(id, [playerA, playerC], api);
         matchmaking.splice(2, 1);
         matchmaking.splice(0, 1);
      } else {
         await createMatch(id, [playerB, playerC], api);
         matchmaking.splice(1, 2);
      }
   } else if (mmLength > 3) return { statusCode: 400, body: { errors: [{ msg: "Queue length is erroneously greater than 3" }] } };

   const params = {
      TableName: "leagues",
      Key: { id },
      UpdateExpression: "SET matchmaking = :updatedmatchmaking",
      ExpressionAttributeValues: { ":updatedmatchmaking": matchmaking }
   };
   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return { statusCode: 200, body: "Member entered queue" };
}

function lastPlayed(members, playerA, playerB) {
   const playerAname = playerA.name;
   const playerBname = playerB.name;
   return members[playerAname].lastPlayed === playerBname || members[playerBname].lastPlayed === playerAname;
}

module.exports = enterQueue;
