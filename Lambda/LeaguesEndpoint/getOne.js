const auth = require("./utils/middleware.js");
const findLeague = require("./utils/findLeague.js");

// @route GET api/leagues
// @desc Returns name, description, id of specific league
// @access Public
// @db 1 read, 0 writes
async function get(id, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const league = await findLeague(id);
   if (!league) return { statusCode: 400, body: { errors: [{ msg: "League not found" }] } };

   const myInfo = league.members[username];
   const role = myInfo && myInfo.role;
   const members = {
      count: Object.keys(league.members).length,
      pending: role === "pending",
      isBanned: role === "banned",
      isAdmin: ["owner", "admin"].includes(role)
   };

   deleteAttributes(league, ["members", "paidUntil", "goatGold"]);
   return { statusCode: 200, body: { ...league, members } };
}

function deleteAttributes(variable, attributes) {
   for (const attribute of attributes) delete variable[attribute];
}

module.exports = get;
