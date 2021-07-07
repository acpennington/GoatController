const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

// @function findMatch
// @desc Finds a match by id and returns it
// @db 1 reads, 0 writes
async function findMatch(id, ProjectionExpression = false) {
    const params = ProjectionExpression ?  {
        TableName: "matches",
        Key: { id },
        ProjectionExpression
     } : {
        TableName: "matches",
        Key: { id }
     };

     const result = await DynamoDB.get(params, (err) => {
        if (err) return { statusCode: 400, body: { errors: [err] } };
     }).promise();
     return result.Item;
}

module.exports = findMatch;