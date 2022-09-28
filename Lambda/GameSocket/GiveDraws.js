const setGamestate = require("./utils/redis/setGamestate.js");
const findMatch = require("./utils/findMatch.js");
const actionAndMessage = require("./utils/actionAndMessage.js");

async function giveDraws(id, player, numDraws, connectionId, api, sendMessage = true) {
   const match = await findMatch(id);
   const deck = match.gamestate[player].deck;
   const hand = match.gamestate[player].hand;
   const newDraws = [];

   for (let i = 0; i < numDraws; i++) {
      const card = deck.pop();
      newDraws.push(card);
      hand.push(card);
   }

   const message = player + " drew " + (numDraws === 1 ? "a card." : numDraws + " cards.");
   const action = { action: "RECEIVE_DRAW", data: { player, newDraws } };
   await actionAndMessage(id, action, sendMessage && message, false, api, match);

   await setGamestate(id, { hand, deck }, player, match);
}

module.exports = giveDraws;
