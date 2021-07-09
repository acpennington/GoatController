const bcrypt = require("bcryptjs");

const getJwt = require("../utils/getJwt.js");
const findUser = require("../utils/findUser.js");

// @route POST api/auth
// @desc Login/authenticate a user
// @access Public
// @db 1 read, 0 writes
async function auth(body) {
   const { username, password } = body;

   const user = await findUser(username);
   if (user) {
      const isMatch = await bcrypt.compare(password, user.hashword);
      if (isMatch) {
         const token = getJwt(username);
         delete user.hashword;
         return { statusCode: 200, body: { token, ...user } };
      } else return invalidCredentials();
   } else return invalidCredentials();
}

function invalidCredentials() {
   return { statusCode: 400, body: { errors: [{ msg: "Invalid credentials" }] } };
}

module.exports = auth;
