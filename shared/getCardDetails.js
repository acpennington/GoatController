const { cards, tokens } = require("./database");
const { SENTINEL } = require("./constants");

const emptyCard = {
   cardType: null,
   attribute: null,
   levelOrSubtype: null,
   atk: null,
   def: null,
   text: null
};

module.exports = function getCardDetails(raw) {
   if (!raw) return false;
   const name = raw.split(SENTINEL)[0];
   if (name.includes("Token")) return tokens[name] ? tokens[name] : emptyCard;
   return cards[name] ? cards[name] : emptyCard;
};
