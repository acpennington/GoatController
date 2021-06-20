const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

// @route GET api/leagues
// @desc Returns name, description, id of specific league
// @access Public
// @db 1 read, 0 writes
async function get() {}

module.exports = get;
