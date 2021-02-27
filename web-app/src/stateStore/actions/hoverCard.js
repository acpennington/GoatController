function newHover(name) {
   return {
      type: "NEW_HOVER",
      data: name
   };
}

function clearHover() {
   return {
      type: "CLEAR_HOVER"
   };
}

export { newHover, clearHover };
