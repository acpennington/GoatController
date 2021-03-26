const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const { aws_remote_config } = require("../config/config.js");
const AWS = require("aws-sdk");
AWS.config.update(aws_remote_config);
const DynamoDB = new AWS.DynamoDB();

// @route POST api/users
// @desc Register a user
// @access Public
router.post(
   "/",
   [
      check("username", "Userame is required").notEmpty(),
      check("password", "Please use a password with 10 or more characters").isLength({ min: 10 })
   ],
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

         if (user) res.status(400).json({ errors: [{ msg: "User already exists" }] });

         const salt = await bcrypt.genSalt(7);
         const hashword = await bcrypt.hash(password, salt);

         params = {
            TableName: "users",
            Item: {
               username: { S: username },
               hashword: { S: hashword }
            }
         };
         await DynamoDB.putItem(params, (err) => {
            if (err) res.status(400).json({ errors: [err] });
         }).promise();

         // Return a JWT (so they can set an email/phone number for password recovery)
         res.send("done");
      } else res.status(400).json({ errors: errors.array() });
   }
);

module.exports = router;
