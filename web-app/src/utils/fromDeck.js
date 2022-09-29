import { DECK } from "shared/constants.js";

export default function fromDeck(item) {
   return item.row === DECK && item.zone === -1;
}
