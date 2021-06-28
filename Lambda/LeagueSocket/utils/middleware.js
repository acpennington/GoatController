const jwt = require("jsonwebtoken");
const { jwtsecret } = require("../config/config.js");

module.exports = function auth(token) {
   if (token && token !== "null") {
      try {
         const decoded = jwt.verify(token, jwtsecret);
         return decoded.username;
      } catch (err) {
         return null;
      }
   } else return null;
};
