import { cards, tokens } from "databases/cardDB/index.js";
import { SENTINEL } from "utils/constants.js";

const emptyCard = {
   cardType: null,
   attribute: null,
   levelOrSubtype: null,
   atk: null,
   def: null,
   text: null
};

function getCardDetails(raw) {
   if (!raw) return false;
   const name = raw.split(SENTINEL)[0];
   if (name.includes("Token")) return tokens[name] ? tokens[name] : emptyCard;
   return cards[name] ? cards[name] : emptyCard;
}

export default getCardDetails;
