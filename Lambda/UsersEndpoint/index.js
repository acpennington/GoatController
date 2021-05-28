const post = require("./post.js");

// Routes API requests to the appropriate function
exports.handler = async (event) => {
   const { body, httpmethod } = event;

   switch (httpmethod) {
      case "POST":
         return post(body);
      default:
         return {
            statusCode: 400,
            body: JSON.stringify(event),
         };
   }
};
