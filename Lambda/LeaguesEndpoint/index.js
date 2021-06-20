const getAll = require("./getAll.js");
const getOne = require("./getOne.js");
const post = require("./post.js");

// Routes API requests to the appropriate function
exports.handler = async (event) => {
   const { body, token, httpmethod } = event;

   switch (httpmethod) {
      case "POST":
         return await post(body, token);
      case "GET":
         if (body) await getOne(body);
         return await getAll();
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid HTTP method" }] } };
   }
};
