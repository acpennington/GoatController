const jwt = require("jsonwebtoken");
const { jwtsecret } = require("../../config/config.js");

function getJwt(username) {
   const payload = {
      user: username
   };

   return jwt.sign(payload, jwtsecret, { expiresIn: 86400 });
}

module.exports = getJwt;
