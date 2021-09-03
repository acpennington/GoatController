function getDecks() {
   return JSON.parse(window.sessionStorage.getItem("decks"));
}

function getDeckOptions() {
   const decks = getDecks();
   const options = [];

   for (const deck in decks) options.push({ name: deck, value: deck });

   return options;
}

export { getDecks, getDeckOptions };
