const post = require("./post.js");

// Routes API requests to the appropriate function
exports.handler = async (event) => {
   const { body, token, httpmethod, path } = event;

   switch (httpmethod) {
      case "POST":
         return await post(body, token);
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid HTTP method" }] } };
   }
};
