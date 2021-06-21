const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("./utils/middleware.js");

// @route GET api/leagues
// @desc Returns name, description, id of specific league
// @access Public
// @db 1 read, 0 writes
async function get(id, token) {
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

   if (!league) return { statusCode: 400, body: { errors: [{ msg: "League " + id + " not found" }] } };

   const myInfo = league.members[username];
   const members = {
      count: Object.keys(league.members).length,
      pending: myInfo && myInfo.role === "pending",
      isAdmin: myInfo && ["owner", "admin"].includes(myInfo.role)
   };

   deleteAttributes(league, ["members", "paidUntil", "goatGold"]);
   return { statusCode: 200, body: { ...league, members } };
}

function deleteAttributes(variable, attributes) {
   for (const attribute of attributes) delete variable[attribute];
}

module.exports = get;
