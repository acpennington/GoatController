const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const findMatch = require("./utils/findMatch.js")
const sendChatMessage = require("./utils/sendChatMessage.js");

// @action NewChatMessage
// @desc Sends a chat message from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 write
async function newChatMessage(id, username, requestContext) {
    const match = await findMatch(id, "players, watchers, chat").promise();
    if (!match || (match.statusCode && match.statusCode === 400)) return { statusCode: 400, body: { errors: [{ msg: "Game " + id + " not found" }] } };
    const { players, watchers, chat } = match;

    const { domainName, stage, connectionId } = requestContext;
    const api = new AWS.ApiGatewayManagementApi({ endpoint: domainName + "/" + stage });
}

module.exports = newChatMessage;