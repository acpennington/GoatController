import { cards } from "./cardDB.js";

const emptyCard = {
   cardType: null,
   attribute: null,
   levelOrSubtype: null,
   atk: null,
   def: null,
   text: null
};

export default function getCardDetails(name) {
   return name && cards[name] ? cards[name] : emptyCard;
}
