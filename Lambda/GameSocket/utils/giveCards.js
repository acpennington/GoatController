const setGamestate = require("./redis/setGamestate.js");
const findMatch = require("./findMatch.js");
const sendMultiPayload = require("./sendMultiPayload.js");

async function giveCards(id, player, numCards, to, api, addMessage = "", prevData = false) {
   let match = prevData;
   if (!match) match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Match not found" }] } };
   const { players, watchers } = match;

   const deck = match.gamestate[player].deck;
   const toRow = match.gamestate[player][to];
   const newDraws = [];

   for (let i = 0; i < numCards; i++) {
      const card = deck.pop();
      newDraws.push(card);
      toRow.push(card);
   }

   const message = { author: "Server", content: player + " drew " + (numCards === 1 ? "a card" : numCards + " cards") + addMessage + "." };
   const action = { action: "RECEIVE_CARD", data: { player, newDraws, to } };
   await sendMultiPayload([action, { action: "ADD_MESSAGE", data: message }], players, watchers, api);

   await setGamestate(id, { [to]: toRow, deck }, player, match);
}

module.exports = giveCards;
