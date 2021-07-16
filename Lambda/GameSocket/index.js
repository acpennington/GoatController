const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

const auth = require("./utils/middleware.js");
const joinMatch = require("./JoinMatch.js");
const newChatMessage = require("./NewChatMessage.js");
const newPhase = require("./NewPhase.js");
const nextPhase = require("./NextPhase.js");
const prevPhase = require("./PrevPhase.js");
const sendLpChange = require("./SendLpChange.js");
const sendTokens = require("./SendTokens.js");
const sendReveal = require("./SendReveal.js");
const sendCardMove = require("./SendCardMove.js");
const sendPosChange = require("./SendPosChange.js");
const reorderDeck = require("./ReorderDeck.js");
const mill = require("./Mill.js");
const playerConceded = require("./PlayerConceded.js");
const cleanupGame = require("./CleanupGame.js");
const sendEntireGamestate = require("./sendEntireGamestate.js");

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
      case "SendTokens":
         return await sendTokens(id, username, data.params, connectionId, api);
      case "SendReveal":
         return await sendReveal(id, username, connectionId, api);
      case "SendCardMove":
         return await sendCardMove(id, username, data.from, data.fromCard, data.to, data.settingTrap, data.msg, connectionId, api);
      case "SendPosChange":
         return await sendPosChange(id, username, data.row, data.zone, data.cardName, connectionId, api);
      case "ReorderDeck":
         return await reorderDeck(id, username, data.deck, connectionId, api);
      case "Mill":
         return await mill(id, username, data.deck, data.params, connectionId, api);
      case "PlayerConceded":
         return await playerConceded(id, username, api);
      case "CleanupGame":
         return await cleanupGame(id, connectionId, api);
      case "SendEntireGamestate":
         return await sendEntireGamestate(id, data.gamestate, data.message, connectionId, api);
      default:
         return { statusCode: 400, body: { errors: [{ msg: "Invalid action name" }] } };
   }
};
