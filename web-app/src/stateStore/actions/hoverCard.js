import { NEW_HOVER, CLEAR_HOVER } from "utils/constants.js";

function newHover(name) {
   return {
      type: NEW_HOVER,
      data: name
   };
}

function clearHover() {
   return {
      type: CLEAR_HOVER
   };
}

export { newHover, clearHover };
