const post = require("./post.js");
const getAll = require("./getAll.js");
const getOne = require("./getOne.js");
const put = require("./put.js");

// Routes API requests to the appropriate function
exports.handler = async (event) => {
   const { body, token, httpmethod } = event;

   switch (httpmethod) {
      case "POST":
         return await post(body, token);
      case "GET":
         if (body.id) return await getOne(body.id, token);
         else return await getAll();
      case "PUT":
         return await put(body.id, token);
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid HTTP method" }] } };
   }
};
