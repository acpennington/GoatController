function newSelection(data) {
   return { type: "NEW_SELECTION", data };
}

function clearSelection() {
   return { type: "CLEAR_SELECTION" };
}

export { newSelection, clearSelection };
