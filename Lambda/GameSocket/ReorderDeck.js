const findMatch = require("./utils/findMatch.js");
const setGamestate = require("./utils/redis/setGamestate.js");
const sendChatMessage = require("./utils/sendChatMessage.js");
const shuffle = require("./shared/shuffle");

// @action ReorderDeck
// @desc Sends a reordered deck from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function reorderDeck(id, username, api, prevData = false) {
   let match = prevData;
   if (!match) match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Match not found" }] } };
   const { players, watchers } = match;

   const message = { author: "Server", content: `${username} shuffled their Deck.` };
   await sendChatMessage(message, players, watchers, api);

   const deck = match.gamestate[username].deck;
   await setGamestate(id, { deck: shuffle(deck) }, username, match);

   return { statusCode: 200, body: "Deck reordered" };
}

module.exports = reorderDeck;
