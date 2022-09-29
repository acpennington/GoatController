const setGamestate = require("./redis/setGamestate.js");
const findMatch = require("./findMatch.js");
const sendMultiPayload = require("./sendMultiPayload.js");

async function giveCards(id, player, cards, to, api, addMessage = "", prevData = false) {
   let match = prevData;
   if (!match) match = await findMatch(id);
   if (!match) return { statusCode: 400, body: { errors: [{ msg: "Match not found" }] } };
   const { players, watchers } = match;

   const deck = match.gamestate[player].deck;
   const toRow = match.gamestate[player][to.row];
   const newDraws = [];

   if (typeof cards === "number")
      for (let i = 0; i < cards; i++) {
         const card = deck.pop();
         newDraws.push(card);
         toRow.push(card);
      }
   else
      for (let i = 0; i < deck.length; i++) {
         if (deck[i].name === cardName) {
            const foundCard = deck[i];
            newDraws.push(foundCard);
            deck.splice(i, 1);
            // TODO: add card to toRow
            break;
         }
      }

   const message = { author: "Server", content: player + " drew " + (cards === 1 ? "a card" : cards + " cards") + addMessage + "." };
   const action = { action: "RECEIVE_CARD", data: { player, newDraws, to } };
   await sendMultiPayload([action, { action: "ADD_MESSAGE", data: message }], players, watchers, api);

   await setGamestate(id, { [to]: toRow, deck }, player, match);
}

module.exports = giveCards;
