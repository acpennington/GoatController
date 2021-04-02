import { cards } from "databases/cardDB.js";

const emptyCard = {
   cardType: null,
   attribute: null,
   levelOrSubtype: null,
   atk: null,
   def: null,
   text: null
};

function getCardDetails(name) {
   return name && cards[name] ? cards[name] : emptyCard;
}

export default getCardDetails;
