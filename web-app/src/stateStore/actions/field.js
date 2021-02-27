function moveCard(data) {
   return { type: "MOVE_CARD", data };
}

function switchPosition(row, zone) {
   const data = { row, zone };
   return { type: "SWITCH_POSITION", data };
}

export { moveCard, switchPosition };
