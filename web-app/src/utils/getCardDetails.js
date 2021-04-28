import { cards, tokens } from "databases/cardDB.js";

const emptyCard = {
   cardType: null,
   attribute: null,
   levelOrSubtype: null,
   atk: null,
   def: null,
   text: null
};

function getCardDetails(name) {
   if (!name) return false;
   else if (name.includes("Token")) return tokens[name] ? tokens[name] : emptyCard;
   else return cards[name] ? cards[name] : emptyCard;
}

export default getCardDetails;
