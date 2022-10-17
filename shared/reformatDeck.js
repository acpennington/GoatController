function expandDeck(decklist) {
   const expandedDeck = [];

   for (const name in decklist) {
      const count = decklist[name];
      for (let i = 0; i < count; i++) expandedDeck.push({ name });
   }

   return expandedDeck;
}

function collapseDeck(deck) {
   const collapsedDeck = {};

   for (const card of deck) {
      const cardName = card.name;
      if (collapsedDeck[cardName]) collapsedDeck[cardName] += 1;
      else collapsedDeck[cardName] = 1;
   }

   return collapsedDeck;
}

module.exports = { expandDeck, collapseDeck };
