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

    const result = await DynamoDB.get(params, (err) => {
        if (err) return false;
    }).promise();
    return result.Item;
}

module.exports = findMatch;