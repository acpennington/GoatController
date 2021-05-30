const bcrypt = require("bcryptjs");

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const getJwt = require("../utils/getJwt.js");

// @route POST api/auth
// @desc Login/authenticate a user
// @access Public
// @db 1 read, 0 writes
async function auth(body) {
   const { username, password } = body;

   const params = {
      TableName: "users",
      Key: { username }
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const user = result.Item;

   if (user) {
      const isMatch = await bcrypt.compare(password, user.hashword);
      if (isMatch) {
         const token = getJwt(username);
         delete user.hashword;
         return { statusCode: 200, body: { token, ...user } };
      } else return invalidCredentials();
   } else return invalidCredentials();
}

function invalidCredentials() {
   return { statusCode: 400, body: { errors: [{ msg: "Invalid credentials" }] } };
}

module.exports = auth;
