const setGamestate = require("./utils/redis/setGamestate.js");
const findMatch = require("./utils/findMatch.js");
const actionAndMessage = require("./utils/actionAndMessage.js");

async function giveCards(id, player, numDraws, to, api, sendMessage = true) {
   const match = await findMatch(id);
   const deck = match.gamestate[player].deck;
   const toRow = match.gamestate[player][to];
   const newDraws = [];

   for (let i = 0; i < numDraws; i++) {
      const card = deck.pop();
      newDraws.push(card);
      toRow.push(card);
   }

   const message = player + " drew " + (numDraws === 1 ? "a card." : numDraws + " cards.");
   const action = { action: "RECEIVE_CARD", data: { player, newDraws, to } };
   await actionAndMessage(id, action, sendMessage && message, false, api, match);

   await setGamestate(id, { [to]: toRow, deck }, player, match);
}

module.exports = giveCards;
