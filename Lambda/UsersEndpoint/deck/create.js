const auth = require("./utils/middleware.js");

// @route POST api/users
// @desc Create a blank deck with a specified name
// @access Private
// @db 1 read, 1 write
async function create(body, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const { deckName } = body;

   const params = {
      TableName: "users",
      Key: { username }
   };
}

module.exports = create;
