const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const { aws_remote_config } = require("../config/config.js");
const AWS = require("aws-sdk");
AWS.config.update(aws_remote_config);
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const getJwt = require("./utils/getJwt.js");

// @route POST api/auth
// @desc Login/authenticate a user
// @access Public
// @db 1 read, 0 writes
router.post(
   "/",
   [check("username", "Userame is required").notEmpty(), check("password", "Password is required").notEmpty()],
   async (req, res) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
         const { username, password } = req.body;

         let params = {
            TableName: "users",
            Key: {
               username
            }
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
            } else return invalidCredentials(res);
         } else return invalidCredentials(res);
      } else return res.status(400).json({ errors: errors.array() });
   }
);

function invalidCredentials(res) {
   res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
}

module.exports = router;
