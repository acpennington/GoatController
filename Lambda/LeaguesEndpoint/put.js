const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("./utils/middleware.js");
const addMemberToLeague = require("./utils/addMemberToLeague.js");
const findLeague = require("./utils/findLeague.js");

// @route POST api/leagues
// @desc Adds a user to a league or removes them from it
// @access Public
// @db 1 reads, 2 writes
async function put(id, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const league = await findLeague(id, "members");
   if (!league) return { statusCode: 400, body: { errors: [{ msg: "League not found" }] } };
   const { members } = league;

   let UpdateExpression;
   if (members[username]) {
      const role = members[username].role;
      if (role === "banned") return { statusCode: 401, body: { errors: [{ msg: "User is banned from this league" }] } };
      else if (role === "left") {
         UpdateExpression = "ADD leagues :league";
         members[username].role = "member";
      } else {
         UpdateExpression = "DELETE leagues :league";
         members[username].role = "left";
      }
   } else {
      UpdateExpression = "ADD leagues :league";
      addMemberToLeague(league, username);
   }

   let params = {
      TableName: "users",
      Key: { username },
      UpdateExpression,
      ExpressionAttributeValues: { ":league": DynamoDB.createSet([id]) }
   };
   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   params = {
      TableName: "leagues",
      Key: { id },
      UpdateExpression: "SET members = :updatedmembers",
      ExpressionAttributeValues: { ":updatedmembers": members }
   };
   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return { statusCode: 200, body: { role: members[username].role } };
}

module.exports = put;
