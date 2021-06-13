const bcrypt = require("bcryptjs");

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const auth = require("./utils/middleware.js");

// @route PUT api/users
// @desc Update a part of your user's profile/attributes
// @access Private
// @db 1 read, 1 write
async function put(body, token) {
   // Auth validation
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   deleteAttributes(body, ["username", "hashword", "goatGold", "joinDate", "lastMatch"]);

   if ("oldPassword" in body) {
      const params = {
         TableName: "users",
         Key: { username }
      };

      const result = await DynamoDB.get(params, (err) => {
         if (err) return { statusCode: 400, body: { errors: [err] } };
      }).promise();
      const user = result.Item;
      if (!user) return { statusCode: 400, body: { errors: [{ msg: "Username " + username + " not found." }] } };

      const isMatch = await bcrypt.compare(body.oldPassword, user.hashword);
      if (isMatch) {
         const { newPassword } = body;
         if (newPassword) {
            if (newPassword.length < 10) return { statusCode: 400, body: { errors: [{ msg: "Your new password must be at least 10 characters" }] } };
            else {
               const salt = await bcrypt.genSalt(7);
               body.hashword = await bcrypt.hash(newPassword, salt);
            }
         }
      } else return { statusCode: 400, body: { errors: [{ msg: "Password is not correct" }] } };

      deleteAttributes(body, ["oldPassword", "newPassword"]);
   }

   const params = {
      TableName: "users",
      Key: { username },
      UpdateExpression: "set ",
      ExpressionAttributeValues: {}
   };

   let counter = 0;
   for (const attribute in body) {
      params.UpdateExpression += attribute + " = :var" + counter + ", ";
      params.ExpressionAttributeValues[":var" + counter] = body[attribute];
      counter += 1;
   }
   params.UpdateExpression = params.UpdateExpression.slice(0, -2);

   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   });
   return { statusCode: 200, body: { msg: "User successfully updated" } };
}

function deleteAttributes(variable, attributes) {
   for (const attribute of attributes) delete variable[attribute];
}

module.exports = put;
