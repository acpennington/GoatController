import { NEW_HOVER, CLEAR_HOVER } from "utils/constants.js";

function newHover(player, row, zone, name, facedown = false) {
   return {
      type: NEW_HOVER,
      data: { player, row, zone, name, facedown }
   };
}

function clearHover() {
   return {
      type: CLEAR_HOVER
   };
}

export { newHover, clearHover };
