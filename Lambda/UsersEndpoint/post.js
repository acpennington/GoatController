const bcrypt = require("bcryptjs");
const { defaultDeck } = require("../config/config.js");

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const getJwt = require("./utils/getJwt.js");
const todaysDate = require("./utils/todaysDate.js");

// @route POST api/users
// @desc Register a user
// @access Public
// @db 1 read, 1 write
async function post(body) {
   const { username, password, referredby } = body;
   const errors = [];

   // Username/password validation
   if (username.length < 1) errors.push({ msg: "Username is required" });
   else if (username.trim() !== username)
      errors.push({ msg: "Username cannot start or end with a space" });
   else if (!/^([a-z0-9 ]+)$/i.test(username))
      errors.push({ msg: "Username must contain only letters, numbers, and spaces" });

   if (password.length < 10) errors.push({ msg: "Password must be at least 10 characters" });

   if (errors)
      return {
         statusCode: 400,
         body: { errors },
      };

   let params = {
      TableName: "users",
      Key: {
         username,
      },
   };

   const result = await DynamoDB.get(params, (err) => {
      if (err) return res.status(400).json({ errors: [err] });
   }).promise();
   const user = result.Item;

   if (user)
      return {
         statusCode: 400,
         body: { errors: [{ msg: "User already exists" }] },
      };

   const salt = await bcrypt.genSalt(7);
   const hashword = await bcrypt.hash(password, salt);

   const newUser = {
      username,
      hashword,
      referredby,
      goatGold: 0,
      joinDate: todaysDate(),
      lastMatch: "Never",
      settings: {
         gamebg: "Default.png",
         sleeves: "Goat.png",
      },
      decks: {
         "Good Ol Goats": defaultDeck,
      },
   };

   params = {
      TableName: "users",
      Item: {
         ...newUser,
      },
   };

   await DynamoDB.put(params, (err) => {
      if (err) return res.status(400).json({ errors: [err.message] });
   }).promise();

   const token = getJwt(username);
   delete newUser.hashword;
   return { token, ...newUser };
}

module.exports = post;