const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const createMatch = require("./utils/createMatch.js");

// @action EnterQueue
// @desc Adds a member to a league's queue
// @access Private
// @db 1 read, 1 write (or more, if creating matches)
async function enterQueue(id, requestContext, username) {
   const { domainName, stage, connectionId } = requestContext;

   let params = {
      TableName: "leagues",
      Key: { id }
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const league = result.Item;

   if (!league) return { statusCode: 400, body: { errors: [{ msg: "League " + id + " not found" }] } };

   const { useQueue, matchmaking, members } = league;
   if (!useQueue) return { statusCode: 400, body: { errors: [{ msg: "League does not use queue for matchmaking" }] } };

   const api = new AWS.ApiGatewayManagementApi({ endpoint: domainName + "/" + stage });

   // Check for dead connections and delete them
   for (let i = 0; i < matchmaking.length; ) {
      const { connectionId, name } = matchmaking[i];
      if (name === username) matchmaking.splice(i, 1);
      else {
         try {
            await api.postToConnection({ ConnectionId: connectionId, Data: "ping" }).promise();
            i++;
         } catch (err) {
            if (err.statusCode === 410) matchmaking.splice(i, 1);
            else throw err;
         }
      }
   }

   matchmaking.push({ name: username, connectionId });

   // match players with each other, if applicable

   params = {
      TableName: "leagues",
      Key: { id },
      UpdateExpression: "SET matchmaking = :updatedmatchmaking",
      ExpressionAttributeValues: { ":updatedmatchmaking": matchmaking }
   };

   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   await api.postToConnection({ ConnectionId: connectionId, Data: "Member entered queue" }).promise();
   return { statusCode: 200, body: "Member entered queue" };
}

module.exports = enterQueue;
