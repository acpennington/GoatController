function moveCard(data) {
   return { type: "MOVE_CARD", data };
}

function switchPosition(data) {
   return { type: "SWITCH_POSITION", data };
}

export { moveCard, switchPosition };
