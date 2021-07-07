const auth = require("./utils/middleware.js");
const joinMatch = require("./JoinMatch.js");
const newChatMessage = require("./NewChatMessage.js");

// Routes GameSocket actions
exports.handler = async (event) => {
   const { requestContext } = event;
   const body = JSON.parse(event.body);
   const { action, data } = body;
   const { id, token } = data;

   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   switch (action) {
      case "JoinMatch":
         return await joinMatch(id, username, requestContext);
      case "NewChatMessage":
         return await newChatMessage(id, username, data.message, requestContext);
      case "GamestateChange":
         return;
      case "EntireState":
         return;
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid action name" }] } };
   }
};
