const findMatch = require("./utils/findMatch.js");
const actionAndMessage = require("./utils/actionAndMessage.js");
const setGamestate = require("./utils/redis/setGamestate.js");
const reorderDeck = require("./ReorderDeck.js");
const getMoveMessage = require("./utils/getMoveMessage.js");
const { giveRowCard } = require("./shared");

async function sendSearch(id, username, from, to, shouldShuffle, connectionId, api) {
   const match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Match not found" }] } };

   const message = { author: "Server", content: getMoveMessage(username, from, to) };
   const action = { action: "SEARCH_DECK", data: { from, to, shouldShuffle } };
   await actionAndMessage(id, action, message, connectionId, api);

   match.gamestate[username].deck.splice(
      match.gamestate[username].deck.findIndex((object) => object.name === from.cardName),
      1
   );
   giveRowCard(match.gamestate, { name: from.cardName }, to);
   console.log(JSON.stringify(match.gamestate[username][to.row]));
   await setGamestate(id, match.gamestate[username], username, match);

   if (shouldShuffle) reorderDeck(id, username, api, match);

   return { statusCode: 200, body: "Card searched from deck" };
}

module.exports = sendSearch;
