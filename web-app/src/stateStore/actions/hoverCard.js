import { NEW_HOVER, CLEAR_HOVER } from "utils/constants.js";

function newHover(player, row, zone, name) {
   return {
      type: NEW_HOVER,
      data: { player, row, zone, name }
   };
}

function clearHover() {
   return {
      type: CLEAR_HOVER
   };
}

export { newHover, clearHover };
