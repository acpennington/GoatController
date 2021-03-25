const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

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
      check("name", "Name is required").notEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check("password", "Please use a password with 10 or more characters").isLength({ min: 10 })
   ],
   async (req, res) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
         const { name, email, password } = req.body;
         // See if user exists

         const params = {
            TableName: "users",
            Key: {
               email: { S: email }
            }
         };

         await DynamoDB.getItem(params, (err, data) => {
            console.log("hello");
            if (err) console.log(err);
            else console.log(data.Item);
         }).promise();

         res.send("done");

         // Encrypt password

         // Return a JWT (so they can set an email/phone number for password recovery)
      } else res.status(400).json({ errors: errors.array() });
   }
);

module.exports = router;
