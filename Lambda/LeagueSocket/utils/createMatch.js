const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const Redis = require("ioredis");
const redis = new Redis("goatmatches.z9dvan.0001.use2.cache.amazonaws.com:6379");

const { blankField } = require("../config/config.js");
const { shuffle, expandDeck, verifyDecks } = require("../shared");

// @function createMatch
// @desc Places two players in a match together
// @db 1 reads, 3 writes
async function createMatch(leagueId, playersParam, api) {
   const [player1, player2] = playersParam;
   const { name: player1name, connectionId: player1connection } = player1;
   const { name: player2name, connectionId: player2connection } = player2;

   const matchId = stripSpecialChars(player1connection) + stripSpecialChars(player2connection);

   let playersInGame;
   const params = {
      RequestItems: {
         users: {
            Keys: [{ username: player1name }, { username: player2name }],
            ProjectionExpression: "username, decks, activeDeck, settings"
         }
      }
   };
   try {
      const result = await DynamoDB.batchGet(params).promise();
      playersInGame = result.Responses.users;
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   const goingFirstPlayer = Math.random() > 0.5 ? player1name : player2name;
   const gamestate = {};
   if (!setGamestate(gamestate, playersInGame[0], goingFirstPlayer)) return { statusCode: 400, body: { errors: [{ msg: "Illegal deck" }] } };
   if (!setGamestate(gamestate, playersInGame[1], goingFirstPlayer)) return { statusCode: 400, body: { errors: [{ msg: "Illegal deck" }] } };

   const players = {};
   players[player1name] = "";
   players[player2name] = "";

   try {
      await redis.set(
         matchId,
         JSON.stringify({
            league: leagueId,
            players,
            watchers: [],
            gamestate,
            turn: { player: goingFirstPlayer, phase: "Draw" },
            chat: [{ author: "Server", content: `New Match started. ${goingFirstPlayer} will go first. Good luck to both Duelists.` }]
         })
      );
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   let updateError = await updatePlayer(player1name, matchId, api);
   if (!updateError) updateError = await updatePlayer(player2name, matchId, api);
   if (updateError) return updateError;

   const payload = { action: "NewGame", data: matchId };
   await api.postToConnection({ ConnectionId: player1connection, Data: JSON.stringify(payload) }).promise();
   await api.postToConnection({ ConnectionId: player2connection, Data: JSON.stringify(payload) }).promise();
}

function stripSpecialChars(aString) {
   return aString.replace(/[^a-zA-Z0-9_]/g, "");
}

function setGamestate(gamestate, player, goingFirstPlayer) {
   const { username, decks, activeDeck, settings } = player;
   gamestate[username] = JSON.parse(JSON.stringify(blankField));

   // TODO: pass in whether Exarion Universe is allowed or not
   const valid = verifyDecks(decks[activeDeck].maindeck, decks[activeDeck].sideDeck);
   // TODO: return invalidation messages instead of just a boolean?
   if (!valid) return false;

   const expandedMain = expandDeck(decks[activeDeck].maindeck);
   const shuffledDeck = shuffle(expandedMain);

   const hand = [];
   const drawNumber = goingFirstPlayer === username ? 6 : 5;
   for (let i = 0; i < drawNumber; i++) hand.push(shuffledDeck.pop());

   gamestate[username].sleeves = settings.sleeves;
   gamestate[username].hand = hand;
   gamestate[username].deck = shuffledDeck;

   return true;
}

async function updatePlayer(playerName, matchId) {
   const params = {
      TableName: "users",
      Key: { username: playerName },
      UpdateExpression: "SET activeMatch = :matchid",
      ExpressionAttributeValues: { ":matchid": matchId }
   };
   try {
      await DynamoDB.update(params).promise();
   } catch (err) {
      return { statusCode: 400, body: { errors: [err] } };
   }

   return false;
}

module.exports = createMatch;
