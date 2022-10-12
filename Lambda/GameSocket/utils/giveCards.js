const setGamestate = require("./redis/setGamestate.js");
const findMatch = require("./findMatch.js");
const sendMultiPayload = require("./sendMultiPayload.js");
const { HAND, GRAVEYARD } = require("../shared/constants.js");

async function giveCards(id, player, cards, to, api, addMessage = "", prevData = false) {
   let match = prevData;
   if (!match) match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Match not found" }] } };
   const { players, watchers } = match;

   const deck = match.gamestate[player].deck;
   const toRow = match.gamestate[player][to.row];
   const newDraws = [];

   for (let i = 0; i < cards; i++) {
      const card = deck.pop();
      newDraws.push(card);
      toRow.push(card);
   }

   const verb = to === HAND ? " drew " : to.row === GRAVEYARD ? " milled " : " milled (to banished) ";
   const message = { author: "Server", content: player + verb + (cards === 1 ? "a card" : cards + " cards") + addMessage + "." };
   const action = { action: "RECEIVE_CARD", data: { player, newDraws, to } };
   await sendMultiPayload([action, { action: "ADD_MESSAGE", data: message }], players, watchers, api);

   await setGamestate(id, { [to]: toRow, deck }, player, match);
}

module.exports = giveCards;
