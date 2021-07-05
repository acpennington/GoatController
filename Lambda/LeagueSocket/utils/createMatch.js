const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const { blankField } = require("../config/config.js");

// @function createMatch
// @desc Places two players in a match together
// @db 1 reads, 3 writes
async function createMatch(leagueId, playersParam, api) {
   const [player1, player2] = playersParam;
   const { name: player1name, connectionId: player1connection } = player1;
   const { name: player2name, connectionId: player2connection } = player2;

   const matchId = stripSpecialChars(player1connection) + stripSpecialChars(player2connection);

   let params = {
      RequestItems: {
         users: {
            Keys: [{ username: player1name }, { username: player2name }],
            ProjectionExpression: "username, decks, activeDeck, settings"
         }
      }
   };
   const result = await DynamoDB.batchGet(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const playersInGame = result.Responses.users;

   const goingFirstPlayer = Math.random() > 0.5 ? player1name : player2name;
   const gamestate = {};
   await setGamestate(gamestate, playersInGame[0], goingFirstPlayer);
   await setGamestate(gamestate, playersInGame[1], goingFirstPlayer);

   const players = {};
   players[player1name] = "";
   players[player2name] = "";

   params = {
      TableName: "matches",
      Item: {
         id: matchId,
         league: leagueId,
         players,
         watchers: [],
         gamestate,
         chat: [{ author: "Server", content: "New match started. " + goingFirstPlayer + " will go first. Good luck to both players." }]
      }
   };
   await DynamoDB.put(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();

   await updatePlayer(player1name, matchId, api);
   await updatePlayer(player2name, matchId, api);

   const payload = { action: "NewGame", data: matchId };
   await api.postToConnection({ ConnectionId: player1connection, Data: JSON.stringify(payload) }).promise();
   await api.postToConnection({ ConnectionId: player2connection, Data: JSON.stringify(payload) }).promise();
}

function stripSpecialChars(aString) {
   return aString.replace(/[^a-zA-Z0-9_]/g, "");
}

async function setGamestate(gamestate, player, goingFirstPlayer) {
   const { username, decks, activeDeck, settings } = player;
   gamestate[username] = JSON.parse(JSON.stringify(blankField));

   const shuffledDeck = shuffle(decks[activeDeck].maindeck);
   const hand = [];
   const drawNumber = goingFirstPlayer === username ? 6 : 5;
   for (let i = 0; i < drawNumber; i++) hand.push(shuffledDeck.pop());

   gamestate[username].sleeves = settings.sleeves;
   gamestate[username].hand = hand;
   gamestate[username].deck = shuffledDeck;
}

function shuffle(deck) {
   for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
   }

   return deck;
}

async function updatePlayer(playerName, matchId, api) {
   const params = {
      TableName: "users",
      Key: { username: playerName },
      UpdateExpression: "SET activeMatch = :matchid",
      ExpressionAttributeValues: { ":matchid": matchId }
   };
   await DynamoDB.update(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
}

module.exports = createMatch;
