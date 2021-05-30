const bcrypt = require("bcryptjs");

const AWS = require("aws-sdk");
AWS.config.update(aws_remote_config);
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const getJwt = require("../utils/getJwt.js");

// @route POST api/auth
// @desc Login/authenticate a user
// @access Public
// @db 1 read, 0 writes
function auth(body) {
   const { username, password } = body;

   const params = {
      TableName: "users",
      Key: {
         username,
      },
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return res.status(400).json({ errors: [err.message] });
   }).promise();
   const user = result.Item;

   if (user) {
      const isMatch = await bcrypt.compare(password, user.hashword);
      if (isMatch) {
         const token = getJwt(username);
         delete user.hashword;
         return res.json({ token, ...user });
      } else return invalidCredentials();
   } else return invalidCredentials();
}

function invalidCredentials() {
   return { statusCode: 400, body: { errors: [{ msg: "Invalid credentials" }] } };
}

module.exports = auth;
