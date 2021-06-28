const auth = require("./utils/middleware.js");
const enterQueue = require("./enterQueue.js");
const leaveQueue = require("./leaveQueue.js");

exports.handler = async (event) => {
   const { requestContext } = event;
   const body = JSON.parse(event.body);
   const { action, data } = body;
   const { id, token } = data;

   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   switch (action) {
      case "EnterQueue":
         return await enterQueue(id, requestContext, username);
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid action name" }] } };
   }
};
