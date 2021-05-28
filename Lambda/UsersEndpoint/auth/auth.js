const AWS = require("aws-sdk");
AWS.config.update(aws_remote_config);
const DynamoDB = new AWS.DynamoDB.DocumentClient();
