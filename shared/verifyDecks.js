const { cards } = require("./database");
const { SENTINEL, FUSION_MONSTER } = require("./constants");

// Verifies that the decks have a legal number of cards and that no cards are used more than
// their limits. Returns an array of all the issues with the deck (empty if the deck is valid).
module.exports = function verifyDecks(main, side, exarion = false) {
   let total = { main: 0, side: 0 };
   const errors = [];
   const names = {};
   const excess = {};

   const decks = { main, side };
   for (const deck in decks) {
      for (const raw in decks[deck]) {
         const name = raw.split(SENTINEL)[0];
         const card = cards[name];
         const deduped = card.treatedAs || name;

         names[deduped] = names[deduped] ? names[deduped] + decks[deck][raw] : decks[deck][raw];
         total[deck] += decks[deck][raw];

         if (!card) {
            errors.push(`Unknown card: "${name}".`);
            continue;
         } else if (card.cardType === FUSION_MONSTER) {
            errors.push(`"${name}" is a Fusion Monster and is only allowed in the Fusion Deck.`);
         } else if (!exarion && name === "Exarion Universe") {
            errors.push(`"${name}" is not allowed.`);
         }

         const limit = card.limit || 3;
         if (names[deduped] > limit) {
            excess[deduped] = { limit, actual: names[deduped] };
         }
      }
   }

   for (const name in excess) {
      const { limit, actual } = excess[name];
      errors.push(`"${name}" is limited to ${limit} but you have ${actual}.`);
   }

   if (total.main < 40) errors.push(`Your main deck must contain at least 40 cards.`);
   if (total.side > 15) errors.push(`Your side deck may contain at most 15 cards.`);
   return errors;
};
