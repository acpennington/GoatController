const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
   /*const putParams = {
    TableName: "simplechat_connections",
    Item: {
      connectionId: event.requestContext.connectionId
    }
  };

  try {
    await ddb.put(putParams).promise();
  } catch (err) {
    return { statusCode: 500, body: 'Failed to connect: ' + JSON.stringify(err) };
  }*/

   return { statusCode: 200, body: "Connected." };
};
