const jwt = require("jsonwebtoken");
const { jwtsecret } = require("../../config/config.js");

module.exports = function (req, res, next) {
   const token = req.header("x-auth-token");

   if (token && token !== "null") {
      try {
         const decoded = jwt.verify(token, jwtsecret);
         req.username = decoded.username;
         next();
      } catch (err) {
         res.status(401).json({ msg: "Token is not valid" });
      }
   } else res.status(401).json({ msg: "No token, authorization denied" });
};
