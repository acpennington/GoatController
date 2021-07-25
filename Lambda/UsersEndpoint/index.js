const post = require("./post.js");
const get = require("./get.js");
const put = require("./put.js");
const auth = require("./auth/auth.js");
const create = require("./deck/create.js");
const deleteDeck = require("./deck/delete.js");
const save = require("./deck/save.js");

// Routes API requests to the appropriate function
exports.handler = async (event) => {
   const { body, token, httpmethod, path } = event;

   switch (httpmethod) {
      case "POST":
         if (path === "/users/auth") return await auth(body);
         else if (path === "/users/deck") return await create(body, token);
         else return await post(body);
      case "GET":
         return await get(body);
      case "PUT":
         if (path === "/users/deck") return await save(body, token);
         return await put(body, token);
      case "DELETE":
         return await deleteDeck(body, token);
      case "PATCH":
         return;
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid HTTP method" }] } };
   }
};
