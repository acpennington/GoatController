import { SENTINEL } from "shared/constants.js";

function removeArt(cardName) {
   return cardName.split(SENTINEL)[0];
}

function splitArt(cardName) {
   return cardName.split(SENTINEL);
}

export { removeArt, splitArt };
