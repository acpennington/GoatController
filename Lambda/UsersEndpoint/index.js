const post = require("./post.js");
const get = require("./get.js");
const put = require("./put.js");
const auth = require("./auth/auth.js");

// Routes API requests to the appropriate function
exports.handler = async (event) => {
   const { body, token, httpmethod, path } = event;

   switch (httpmethod) {
      case "POST":
         if (path === "/users/auth") return await auth(body);
         else return await post(body);
      case "GET":
         return await get(body);
      case "PUT":
         return await put(body, token);
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid HTTP method" }] } };
   }
};
