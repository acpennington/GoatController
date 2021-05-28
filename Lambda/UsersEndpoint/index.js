const post = require("./post.js");
const get = require("./get.js");

// Routes API requests to the appropriate function
exports.handler = async (event) => {
   const { body, httpmethod } = event;

   switch (httpmethod) {
      case "POST":
         return await post(body);
      case "GET":
         return await get(body);
      default:
         return {
            statusCode: 400,
            body: { errors: [{ msg: "Invalid HTTP method" }] },
         };
   }
};
