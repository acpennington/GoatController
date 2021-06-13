const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

const auth = require("./utils/middleware.js");
const { todaysDate, plusThirty } = require("./utils/dates.js");
const addMemberToLeague = require("./utils/addMemberToLeague.js");

// @route POST api/leagues
// @desc Create a new league
// @access Private
// @db 1 read, 2 writes
async function post(body, token) {
   // Auth validation
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const { id } = body;

   const params = {
      TableName: "users",
      Key: { id }
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const league = result.Item;

   if (league) return { statusCode: 400, body: { errors: [{ msg: "A league with this id already exists" }] } };

   const newLeague = {
      ...body,
      goatGold: 0,
      creationDate: todaysDate(),
      paidUtil: plusThirty(),
      members: []
   };

   addMemberToLeague(newLeague, username, "owner");
}

module.exports = post;
