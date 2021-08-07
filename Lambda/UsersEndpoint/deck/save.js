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
   if (maindeck) UpdateExpression += "decks.#name.maindeck = :main, decks.#name.sidedeck = :side";
   else if (isPublic || isPublic === false) UpdateExpression += "decks.#name.public = :public";

   const params = {
      TableName: "users",
      Key: { username },
      UpdateExpression,
      ExpressionAttributeNames: { "#name": deckName },
      ExpressionAttributeValues: { ":main": maindeck, ":side": sidedeck, ":public": isPublic }
   };

   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return { statusCode: 200, body: { msg: "Deck saved" } };
}

module.exports = save;
