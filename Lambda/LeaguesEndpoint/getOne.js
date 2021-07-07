const auth = require("./utils/middleware.js");
const findLeague = require("./utils/findLeague.js");

// @route GET api/leagues
// @desc Returns name, description, id of specific league
// @access Public
// @db 1 read, 0 writes
async function get(id, token) {
   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const league = await findLeague(id, "members").promise();
   if (league) return { statusCode: 400, body: { errors: [{ msg: "A league with this id already exists" }] } };

   const myInfo = league.members[username];
   const members = {
      count: Object.keys(league.members).length,
      pending: myInfo && myInfo.role === "pending",
      isBanned: myInfo && myInfo.role === "banned",
      isAdmin: myInfo && ["owner", "admin"].includes(myInfo.role)
   };

   deleteAttributes(league, ["members", "paidUntil", "goatGold"]);
   return { statusCode: 200, body: { ...league, members } };
}

function deleteAttributes(variable, attributes) {
   for (const attribute of attributes) delete variable[attribute];
}

module.exports = get;
