const auth = require("./utils/middleware.js");
const enterQueue = require("./enterQueue.js");

exports.handler = async (event) => {
   const { requestContext } = event;
   const body = JSON.parse(event.body);
   const { action, data } = body;

   const username = auth(data.token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   switch (action) {
      case "EnterQueue":
         return await enterQueue(data.id, requestContext, username);
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid action name" }] } };
   }
};
