import { openModal } from "./settings";
import { DECK } from "utils/constants.js";

function filterDeck(player, params) {
   return openModal(player, DECK, params);
}

export { filterDeck };
