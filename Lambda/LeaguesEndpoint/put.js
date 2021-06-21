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

   const params = {
      TableName: "leagues",
      Key: { id }
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const league = result.Item;

   if (league.members[username]) {
      league.members[username].role = "left";
   } else {
      addMemberToLeague(league, username);
   }
}

module.exports = put;
