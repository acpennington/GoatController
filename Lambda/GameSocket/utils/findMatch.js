const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

// @function findMatch
// @desc Finds a match by id and returns it
// @db 1 reads, 0 writes
async function findMatch(id, projection = false) {
   const params = {
      TableName: "matches",
      Key: { id }
   };
   if (projection) params.ProjectionExpression = projection;

   try {
      const result = await DynamoDB.get(params).promise();
      return result.Item;
   } catch (err) {
      return false;
   }
}

module.exports = findMatch;
