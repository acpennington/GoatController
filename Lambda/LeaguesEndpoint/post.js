const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("./utils/middleware.js");
const { todaysDate, plusThirty } = require("./utils/dates.js");
const addMemberToLeague = require("./utils/addMemberToLeague.js");
const findLeague = require("./utils/findLeague.js");

// @route POST api/leagues
// @desc Create a new league
// @access Private
// @db 1 reads, 2 writes
async function post(body, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const { id, useQueue } = body;

   const league = await findLeague(id, "id");
   if (league) return { statusCode: 400, body: { errors: [{ msg: "A league with this id already exists" }] } };

   const newLeague = {
      ...body,
      goatGold: 0,
      creationDate: todaysDate(),
      paidUntil: plusThirty(),
      matchmaking: useQueue ? [] : {},
      posts: [],
      members: {}
   };
   addMemberToLeague(newLeague, username, "owner");

   let params = {
      TableName: "leagues",
      Item: { ...newLeague }
   };
   try {
      await DynamoDB.put(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   params = {
      TableName: "users",
      Key: { username },
      UpdateExpression: "ADD leagues :league",
      ExpressionAttributeValues: { ":league": DynamoDB.createSet([id]) }
   };
   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return { statusCode: 200, body: { msg: "League successfully created" } };
}

module.exports = post;
