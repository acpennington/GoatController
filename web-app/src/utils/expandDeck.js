export default function expandDeck(decklist) {
   const expandedDeck = [];

   for (const name in decklist) {
      const count = decklist[name];
      for (let i = 0; i < count; i++) expandedDeck.push({ name });
   }

   return expandedDeck;
}
