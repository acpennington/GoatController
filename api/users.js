const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const { aws_remote_config } = require("../config/config.js");
const AWS = require("aws-sdk");
AWS.config.update(aws_remote_config);
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const getJwt = require("./utils/getJwt.js");

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

         const goatgold = 0;
         const gamebg = "default.png";
         const settings = { gamebg };

         params = {
            TableName: "users",
            Item: {
               username,
               hashword,
               goatgold,
               settings
            }
         };

         await DynamoDB.put(params, (err) => {
            if (err) res.status(400).json({ errors: [err] });
         }).promise();

         const token = getJwt(username);
         res.json({ token, username, goatgold, settings: { gamebg } });
      } else res.status(400).json({ errors: errors.array() });
   }
);

module.exports = router;
