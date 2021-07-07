const findUser = require("./utils/findUser.js");

// @route GET api/users
// @desc Get another user's info
// @access Public
// @db 1 read, 0 writes
async function get(body) {
   const { username } = body;
   const errors = [];

   // Username validation
   if (username.length < 1) errors.push({ msg: "Username is required" });
   if (errors.length > 0) return { statusCode: 400, body: { errors } };

   const user = findUser(username, "joinDate");
   if (!user || (user.statusCode && user.statusCode === 400)) return { statusCode: 400, body: { errors: [{ msg: "User not found" }] } };
   else return { statusCode: 200, body: { joinDate: user.joinDate } };
}

module.exports = get;
