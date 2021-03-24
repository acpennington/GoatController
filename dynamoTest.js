const { aws_remote_config } = require("./config/config.js");
const AWS = require("aws-sdk");

AWS.config.update(aws_remote_config);

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
   TableName: "users"
};

docClient.scan(params, onScan);

function onScan(err, data) {
   if (err) {
      console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
   } else {
      // print all the movies
      console.log("Scan succeeded.");
      data.Items.forEach(function (item) {
         console.log(JSON.stringify(item));
      });

      // continue scanning if we have more movies, because
      // scan can retrieve a maximum of 1MB of data
      if (typeof data.LastEvaluatedKey != "undefined") {
         console.log("Scanning for more...");
         params.ExclusiveStartKey = data.LastEvaluatedKey;
         docClient.scan(params, onScan);
      }
   }
}
