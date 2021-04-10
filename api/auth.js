const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const { aws_remote_config } = require("../config/config.js");
const AWS = require("aws-sdk");
AWS.config.update(aws_remote_config);
const DynamoDB = new AWS.DynamoDB();

const sendJWT = require("./utils/sendJWT");

// @route POST api/auth
// @desc Login/authenticate a user
// @access Public
router.post(
   "/",
   [check("username", "Userame is required").notEmpty(), check("password", "Password is required").exists()],
   async (req, res) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
         const { username, password } = req.body;
         // See if user exists

         let params = {
            TableName: "users",
            Key: {
               username: { S: username }
            }
         };

         const result = await DynamoDB.getItem(params, (err) => {
            if (err) res.status(400).json({ errors: [err] });
         }).promise();
         const user = result.Item;

         if (!user) invalidCredentials(res);
         const hashword = user.hashword.S;

         const isMatch = await bcrypt.compare(password, hashword);

         if (isMatch) sendJWT(res, username);
         else invalidCredentials(res);
      } else res.status(400).json({ errors: errors.array() });
   }
);

function invalidCredentials(res) {
   res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
}

module.exports = router;
