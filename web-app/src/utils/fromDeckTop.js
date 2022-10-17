import { DECK } from "shared/constants.js";

export default function fromDeckTop(item) {
   return item.row === DECK && item.zone === -1;
}
