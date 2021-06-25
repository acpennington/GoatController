const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("./utils/middleware.js");
const addMemberToLeague = require("./utils/addMemberToLeague.js");

// @route POST api/leagues
// @desc Adds a user to a league or removes them from it
// @access Public
// @db 1 reads, 2 writes
async function put(id, token) {
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
   const leagueMembers = league.members;

   let UpdateExpression;
   if (leagueMembers[username]) {
      const role = leagueMembers[username].role;
      if (role === "banned") return { statusCode: 401, body: { errors: [{ msg: "User is banned from this league" }] } };
      else if (role === "left") {
         UpdateExpression = "ADD leagues :league";
         leagueMembers[username].role = "member";
      } else {
         UpdateExpression = "DELETE leagues :league";
         leagueMembers[username].role = "left";
      }
   } else {
      UpdateExpression = "ADD leagues :league";
      addMemberToLeague(league, username);
   }

   params = {
      TableName: "users",
      Key: { username },
      UpdateExpression,
      ExpressionAttributeValues: { ":league": DynamoDB.createSet([id]) }
   };
   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   params = {
      TableName: "leagues",
      Key: { id },
      UpdateExpression: "SET members = :updatedmembers",
      ExpressionAttributeValues: { ":updatedmembers": leagueMembers }
   };
   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   return { statusCode: 200, body: { role: leagueMembers[username].role } };
}

module.exports = put;
