const bcrypt = require("bcryptjs");
const { defaultDeck } = require("./config/config.js");

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const getJwt = require("./utils/getJwt.js");
const todaysDate = require("./utils/todaysDate.js");
const findUser = require("./utils/findUser.js");

const RESERVED = ["Server", "Game"];

// @route POST api/users
// @desc Register a user
// @access Public
// @db 1 read, 1 write
async function post(body) {
   const { username, password, referredby } = body;
   const errors = [];

   // Username/password validation
   if (username.length < 1) errors.push({ msg: "Username is required" });
   else if (username.trim() !== username) errors.push({ msg: "Username cannot start or end with a space" });
   else if (!/^([a-z0-9 ]+)$/i.test(username)) errors.push({ msg: "Username must contain only letters, numbers, and spaces" });
   else if (RESERVED.includes(username)) errors.push({ msg: "Username is reserved" });

   if (password.length < 10) errors.push({ msg: "Password must be at least 10 characters" });
   if (errors.length > 0) return { statusCode: 400, body: { errors } };

   const user = await findUser(username, "username");
   if (user) return { statusCode: 400, body: { errors: [{ msg: "User already exists" }] } };

   const salt = await bcrypt.genSalt(7);
   const hashword = await bcrypt.hash(password, salt);

   const newUser = {
      username,
      hashword,
      referredby,
      banned: false,
      verified: false,
      goatGold: 0,
      joinDate: todaysDate(),
      lastMatch: "Never",
      settings: {
         gamebg: "Default.png",
         sleeves: "Default.png",
         foilAnimations: true
      },
      leagues: DynamoDB.createSet(["GoatsDuels_FunTesting"]),
      activeDeck: "Good Ol Goats",
      activeMatch: "",
      decks: {
         "Good Ol Goats": defaultDeck
      }
   };

   const params = {
      TableName: "users",
      Item: { ...newUser }
   };
   try {
      await DynamoDB.put(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   const token = getJwt(username);
   delete newUser.hashword;
   return { statusCode: 200, body: { token, ...newUser } };
}

module.exports = post;
