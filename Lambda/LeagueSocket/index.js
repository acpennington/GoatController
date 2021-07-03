const auth = require("./utils/middleware.js");
const enterQueue = require("./enterQueue.js");

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
      case "HostMatchRoom":
         return;
      case "EnterMatchRoom":
         return;
      case "LeaveMatchRoom":
         return;
      case "AcceptChallenger":
         return;
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid action name" }] } };
   }
};
