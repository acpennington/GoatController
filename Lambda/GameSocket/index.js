const auth = require("./utils/middleware.js");
const joinMatch = require("./JoinMatch.js");

// Routes GameSocket Actions
exports.handler = async (event) => {
   const { requestContext } = event;
   const body = JSON.parse(event.body);
   const { action, data } = body;
   const { game, token } = data;

   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   switch (action) {
      case "JoinMatch":
         return await joinMatch(game, username, requestContext);
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid action name" }] } };
   }
};
