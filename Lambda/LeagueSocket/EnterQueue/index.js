const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("./utils/middleware.js");

// @route GET api/leagues
// @desc Returns name, description, id of all leagues
// @access Private
// @db 1 read, 1 writes
exports.handler = async (event) => {
   const data = JSON.parse(event.body).data;
   const { token, id } = data;

   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   let params = {
      TableName: "leagues",
      Key: { id }
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const league = result.Item;

   if (!league) return { statusCode: 400, body: { errors: [{ msg: "League " + id + " not found" }] } };

   const { useQueue, matchmaking } = league;
   if (!useQueue) return { statusCode: 400, body: { errors: [{ msg: "League does not use queue for matchmaking" }] } };

   const api = new AWS.ApiGatewayManagementApi({ endpoint: event.requestContext.domainName + "/" + event.requestContext.stage });

   /*for (let i = 0; i < matchmaking.length; i++) {
       const connectionId = matchmaking[i].connectionId;
   }*/

   matchmaking.push({ name: username, connectionId: event.requestContext.connectionId });

   params = {
      TableName: "leagues",
      Key: { id },
      UpdateExpression: "SET matchmaking = :updatedmatchmaking",
      ExpressionAttributeValues: { ":updatedmatchmaking": matchmaking }
   };

   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   await api.postToConnection({ ConnectionId: event.requestContext.connectionId, Data: "Joined queue" }).promise();

   return { statusCode: 200, body: "Member joined queue." };
};
