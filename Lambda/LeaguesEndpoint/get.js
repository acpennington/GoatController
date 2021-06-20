const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

// @route GET api/leagues
// @desc Returns name, description, id all of leagues
// @access Public
// @db 1 read, 0 writes
async function get() {
   const params = {
      TableName: "leagues",
      ProjectionExpression: "id, #lname, description",
      ExpressionAttributeNames: {
         "#lname": "name"
      }
   };

   const leagues = await DynamoDB.scan(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   return { statusCode: 200, body: leagues.Items };
}

module.exports = get;
