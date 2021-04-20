const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const { aws_remote_config } = require("../config/config.js");
const AWS = require("aws-sdk");
AWS.config.update(aws_remote_config);
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const getJwt = require("./utils/getJwt.js");
const todaysDate = require("./utils/todaysDate.js");
const auth = require("./utils/middleware.js");

// @route POST api/users
// @desc Register a user
// @access Public
router.post(
   "/",
   [
      check("username", "Username is required").notEmpty(),
      check("password", "Please use a password with 10 or more characters").isLength({ min: 10 })
   ],
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
            if (err) res.status(400).json({ errors: [err] });
         }).promise();
         const user = result.Item;

         if (user) res.status(400).json({ errors: [{ msg: "User already exists" }] });

         const salt = await bcrypt.genSalt(7);
         const hashword = await bcrypt.hash(password, salt);

         const newUser = {
            username,
            hashword,
            goatGold: 0,
            joinDate: todaysDate(),
            settings: {
               gamebg: "Default.png",
               sleeves: "goat.png"
            }
         };

         params = {
            TableName: "users",
            Item: {
               ...newUser
            }
         };

         await DynamoDB.put(params, (err) => {
            if (err) res.status(400).json({ errors: [err.message] });
         }).promise();

         const token = getJwt(username);
         delete newUser.hashword;
         res.json({ token, ...newUser });
      } else res.status(400).json({ errors: errors.array() });
   }
);

// @route GET api/users
// @desc Get another user's info
// @access Public
router.get("/", [check("username", "Username is required").notEmpty()], async (req, res) => {
   const errors = validationResult(req);
   if (errors.isEmpty()) {
      const { username } = req.body;

      let params = {
         TableName: "users",
         Key: {
            username
         }
      };

      const result = await DynamoDB.get(params, (err) => {
         if (err) res.status(400).json({ errors: [err.message] });
      }).promise();
      const user = result.Item;

      if (user) res.json({ joinDate: user.joinDate });
      else res.status(400).json({ errors: [{ msg: "User not found" }] });
   } else res.status(400).json({ errors: errors.array() });
});

// @route PUT api/users
// @desc Update your a part of your user's profile/attributes
// @access Public
router.put("/", auth, async (req, res) => {
   const body = { ...req.body };
   deleteAttributes(body, ["username", "hashword", "goatGold", "joinDate"]);

   const params = {
      TableName: "users",
      Key: {
         username: req.username
      },
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
      if (err) res.status(400).json({ errors: [err.message] });
   }).promise();
   res.json({ msg: "User successfully updated" });
});

function deleteAttributes(variable, attributes) {
   for (const attribute of attributes) delete variable[attribute];
}

module.exports = router;
