const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

// @function findUser
// @desc Finds a user by username and returns it
// @db 1 reads, 0 writes
async function findUser(username, projection = false) {
    const params = {
        TableName: "users",
        Key: { username }
    };
    if (projection) params.ProjectionExpression = projection;

    const result = await DynamoDB.get(params, (err) => {
        if (err) return { statusCode: 400, body: { errors: [err] } };
    }).promise();
    return result.Item;
}

module.export = findUser