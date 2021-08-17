import { cards } from "databases/cardDB";
import { SENTINEL, FUSION_MONSTER } from "utils/constants.js";

// Verifies that the decks have a legal number of cards and that no cards are used more than
// their limits. Returns an array of all the issues with the deck (empty if the deck is valid).
export default function verifyDecks(main, side) {
  let total = {main: 0, side: 0};
  const errors = [];
  const names = {};
  const excess = {};

  const decks = {main, side};
  for (const deck in decks) {
    for (const raw in decks[deck]) {
      const name = raw.split(SENTINEL)[0];
      names[name] += decks[deck][raw];
      total[deck] += decks[deck][raw];

      const card = cards[name];
      if (!card) {
        errors.push(`Unknown card: "${name}".`);
        continue;
      } else if (card.cardType === FUSION_MONSTER) {
        errors.push(`"${name}" is a Fusion Monster and is only allowed in the Fusion Deck.`);
      }

      const limit = card.limit || 3;
      if (names[name] > limit) {
        excess[name] = {limit, actual: names[name]};
      }
    }
  }

  for (const name in excess) {
    const {limit, actual} = excess[name];
    errors.push(`"${name} is limited to ${limit} but you have ${actual}.`);
  }

  if (total.main < 40) errors.push(`Your main deck must contain at least 40 cards.`);
  if (total.side > 15) errors.push(`Your side deck may contain at most 15 cards.`);
  return errors;
}
