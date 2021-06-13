const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

const auth = require("./utils/middleware.js");

// @route POST api/leagues
// @desc Create a new league
// @access Private
// @db 1 read, 1 write
async function post(body, token) {
   // Auth validation
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };
}

module.exports = post;
