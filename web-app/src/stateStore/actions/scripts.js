import { openModal } from "./settings";
import { HERO, DECK } from "utils/constants.js";

function filterDeck(params) {
   return openModal(HERO, DECK, params);
}

export { filterDeck };
