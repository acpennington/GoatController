export default function expandDeck(decklist) {
   const expandedDeck = [];

   for (const card of decklist) {
      const { count, name } = card;
      for (let i = 0; i < count; i++) expandedDeck.push({ name });
   }

   return expandedDeck;
}
