const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const { blankField } = require("./config/config.js");

// @function createMatch
// @desc Places two players in a match together
// @db 2 reads, 3 writes
async function createMatch(leagueId, playersParam, api) {
   const [player1, player2] = playersParam;
   const { name: player1name, connectionId: player1connection } = player1;
   const { name: player2name, connectionId: player2connection } = player2;

   const matchId = stripSpecialChars(player1connection) + stripSpecialChars(player2connection);

   const players = {};
   players[player1name] = "";
   players[player2name] = "";

   const goingFirstPlayer = Math.random() > 0.5 ? player1name : player2name;

   const gamestate = {};
   await setGamestate(gamestate, player1name, goingFirstPlayer);
   await setGamestate(gamestate, player2name, goingFirstPlayer);

   const params = {
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
}

function stripSpecialChars(aString) {
   return aString.replace(/[^a-zA-Z0-9_]/g, "");
}

async function setGamestate(gamestate, playerName, goingFirstPlayer) {
   gamestate[playerName] = JSON.parse(JSON.stringify(blankField));

   const params = {
      TableName: "users",
      Key: { id: playerName }
   };
   const result = await DynamoDB.get(params, (err) => {
      if (err) return { statusCode: 400, body: { errors: [err] } };
   }).promise();
   const player = result.Item;

   const shuffledDeck = shuffle(player.decks[player.activeDeck].maindeck);
   const hand = [];
   const drawNumber = goingFirstPlayer === playerName ? 6 : 5;
   for (let i = 0; i < drawNumber; i++) hand.push(shuffledDeck.pop());

   gamestate[playerName].sleeves = player.settings.sleeves;
   gamestate[playerName].hand = hand;
   gamestate[playerName].deck = shuffledDeck;
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

   const payload = { action: "NewGame", data: matchId };
   await api.postToConnection({ ConnectionId: player1connection, Data: JSON.stringify(payload) }).promise();
}

module.exports = createMatch;
