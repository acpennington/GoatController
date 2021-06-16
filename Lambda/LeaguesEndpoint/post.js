const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("./utils/middleware.js");
const { todaysDate, plusThirty } = require("./utils/dates.js");
const addMemberToLeague = require("./utils/addMemberToLeague.js");

// @route POST api/leagues
// @desc Create a new league
// @access Private
// @db 1 reads, 2 writes
async function post(body, token) {
   // Auth validation
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const { id, name } = body;

   let params = {
      TableName: "leagues",
      Key: { id }
   };
   let result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const league = result.Item;
   if (league) return { statusCode: 400, body: { errors: [{ msg: "A league with this id already exists" }] } };

   const newLeague = {
      ...body,
      goatGold: 0,
      creationDate: todaysDate(),
      paidUtil: plusThirty(),
      members: {}
   };
   addMemberToLeague(newLeague, username, "owner");

   params = {
      TableName: "leagues",
      Item: { ...newLeague }
   };
   await DynamoDB.put(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   params = {
      TableName: "users",
      Key: { username },
      UpdateExpression: "SET leagues = list_append(leagues, :league)",
      ExpressionAttributeValues: { ":league": [name] }
   };
   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   return { statusCode: 200, body: { msg: "League successfully created" } };
}

module.exports = post;
