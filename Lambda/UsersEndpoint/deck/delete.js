const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("../utils/middleware.js");

// @route DELETE api/users/deck
// @desc Create a blank deck with a specified name
// @access Private
// @db 0 reads, 1 write
async function deleteDeck(body, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid: " + token }] } };

   const { deckName } = body;
   const params = {
      TableName: "users",
      Key: { username },
      UpdateExpression: "REMOVE decks.#name",
      ExpressionAttributeNames: { "#name": deckName }
   };

   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return { statusCode: 200, body: { msg: "Deck deleted" } };
}

module.exports = deleteDeck;
