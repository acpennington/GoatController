const jwt = require("jsonwebtoken");
const { jwtsecret } = require("../../config/config.js");

function sendJWT(res, username) {
   const payload = {
      user: username
   };

   jwt.sign(payload, jwtsecret, { expiresIn: 86400 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
   });
}

module.exports = sendJWT;
