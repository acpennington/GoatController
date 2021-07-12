const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

const auth = require("./utils/middleware.js");
const joinMatch = require("./JoinMatch.js");
const newChatMessage = require("./NewChatMessage.js");
const newPhase = require("./NewPhase.js");
const nextPhase = require("./NextPhase.js");
const prevPhase = require("./PrevPhase.js");
const sendLpChange = require("./SendLpChange.js");

// Routes GameSocket actions
exports.handler = async (event) => {
   const { requestContext } = event;
   const body = JSON.parse(event.body);
   const { action, data } = body;
   const { id, token } = data;

   const username = auth(token);
   if (!username) return { statusCode: 401, body: { errors: [{ msg: "Unauthorized, token invalid" }] } };

   const { domainName, stage, connectionId } = requestContext;
   const api = new AWS.ApiGatewayManagementApi({ endpoint: domainName + "/" + stage });

   switch (action) {
      case "JoinMatch":
         return await joinMatch(id, username, connectionId, api);
      case "NewChatMessage":
         return await newChatMessage(id, username, data.message, connectionId, api);
      case "NewPhase":
         return await newPhase(id, username, data.data, connectionId, api);
      case "PushNextPhase":
         return await nextPhase(id, username, connectionId, api);
      case "PushPrevPhase":
         return await prevPhase(id, username, connectionId, api);
      case "SendLpChange":
         return await sendLpChange(id, username, data.amount, data.currentLP, connectionId, api);
      case "GamestateChange":
         return;
      case "EntireState":
         return;
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid action name" }] } };
   }
};
