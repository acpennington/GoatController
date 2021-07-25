const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("../utils/middleware.js");

// @route PUT api/users/deck
// @desc Create a blank deck with a specified name
// @access Private
// @db 0 reads, 1 write
async function save(body, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const { deckName, maindeck, sidedeck } = body;
   const params = {
      TableName: "users",
      Key: { username },
      UpdateExpression: "SET decks.#name.maindeck = :main, decks.#name.sidedeck = :side",
      ExpressionAttributeNames: { "#name": deckName },
      ExpressionAttributeValues: { ":main": maindeck, ":side": sidedeck }
   };

   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return { statusCode: 200, body: { msg: "Blank deck created" } };
}

module.exports = save;
