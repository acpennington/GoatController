const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const { blankDeck } = require("../config/config.js");
const auth = require("./utils/middleware.js");

// @route POST api/users
// @desc Create a blank deck with a specified name
// @access Private
// @db 0 read, 1 write
async function create(body, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const { deckName } = body;
   const params = {
      TableName: "users",
      Key: { username },
      UpdateExpression: "SET decks.#name = :blank",
      ExpressionAttributeNames: { "#name": deckName },
      ExpressionAttributeValues: { ":blank": blankDeck },
      ConditionExpression: "attribute_not_exists(decks.#name)"
   };

   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return { statusCode: 200, body: { msg: "Blank deck created" } };
}

module.exports = create;
