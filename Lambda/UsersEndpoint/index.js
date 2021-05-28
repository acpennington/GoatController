const post = require("./post.js");
const get = require("./get.js");
const put = require("./put.js");

// Routes API requests to the appropriate function
exports.handler = async (event) => {
   const { body, token, httpmethod } = event;

   switch (httpmethod) {
      case "POST":
         return await post(body);
      case "GET":
         return await get(body);
      case "PUT":
         return await put(body, token);
      default:
         return {
            statusCode: 400,
            body: { errors: [{ msg: "Invalid HTTP method" }] },
         };
   }
};
