const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const { aws_remote_config } = require("../config/config.js");
const AWS = require("aws-sdk");
AWS.config.update(aws_remote_config);
const DynamoDB = new AWS.DynamoDB();

const getJwt = require("./utils/getJwt.js");

// @route POST api/auth
// @desc Login/authenticate a user
// @access Public
router.post(
   "/",
   [check("username", "Userame is required").notEmpty(), check("password", "Password is required").notEmpty()],
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

         if (user) {
            const isMatch = await bcrypt.compare(password, user.hashword.S);

            if (isMatch) {
               const token = getJwt(username);
               console.log(token);
               res.json({ token });
            } else invalidCredentials(res);
         } else invalidCredentials(res);
      } else res.status(400).json({ errors: errors.array() });
   }
);

function invalidCredentials(res) {
   res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
}

module.exports = router;
