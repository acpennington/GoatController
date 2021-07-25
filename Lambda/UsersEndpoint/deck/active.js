const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const { blankDeck } = require("../config/config.js");
const auth = require("../utils/middleware.js");

// @route PATCH api/users/deck
// @desc Set a deck as the activeDeck
// @access Private
// @db 0 reads, 1 write
async function create(body, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const { deckName } = body;
   const params = {
      TableName: "users",
      Key: { username },
      UpdateExpression: "SET activeDeck = :deck",
      ExpressionAttributeValues: { ":deck": deckName }
   };

   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return { statusCode: 200, body: { msg: "Active deck changed" } };
}

module.exports = create;
