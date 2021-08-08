const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("../utils/middleware.js");

// @route PUT api/users/deck
// @desc Save the cards in a deck
// @access Private
// @db 0 reads, 1 write
async function save(body, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const { deckName, maindeck, sidedeck, isPublic } = body;
   let UpdateExpression = "SET ";
   const ExpressionAttributeNames = { "#name": deckName };
   let ExpressionAttributeValues = {};

   if (maindeck) {
      UpdateExpression += "decks.#name.maindeck = :main, decks.#name.sidedeck = :side";
      ExpressionAttributeValues = { ":main": maindeck, ":side": sidedeck };
   } else if (isPublic || isPublic === false) {
      UpdateExpression += "decks.#name.#isPublic = :public";
      ExpressionAttributeNames["#isPublic"] = "public";
      ExpressionAttributeValues = { ":public": isPublic };
   }

   const params = {
      TableName: "users",
      Key: { username },
      UpdateExpression,
      ExpressionAttributeNames,
      ExpressionAttributeValues
   };

   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return { statusCode: 200, body: { msg: "Deck saved" } };
}

module.exports = save;
