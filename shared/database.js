const db = require("./db.json");
const { EFFECT_MONSTER, FUSION_MONSTER, NORMAL_MONSTER, RITUAL_MONSTER, TOKEN_MONSTER, SPELL, TRAP } = require("./constants");

const fusions = {};
const vanillas = {};
const rituals = {};
const effectMonsters = {};

const spells = {};
const traps = {};

const cards = {};
const tokens = {};

const monsters = {};
const nonfusions = {};

const lookupByID = {};

for (const name in db) {
  const card = db[name];
  lookupByID[card.id] = name;
  switch (card.cardType) {
    case FUSION_MONSTER:
      fusions[name] = cards[name] = card;
      break;
    case NORMAL_MONSTER:
      vanillas[name] = monsters[name] = nonfusions[name] = cards[name] = card;
      break;
    case RITUAL_MONSTER:
      rituals[name] = monsters[name] = nonfusions[name] = cards[name] = card;
      break;
    case EFFECT_MONSTER:
      effectMonsters[name] = monsters[name] = nonfusions[name] = cards[name] = card;
      break;
    case SPELL:
      spells[name] = nonfusions[name] = cards[name] = card;
      break;
    case TRAP:
      spells[name] = nonfusions[name] = cards[name] = card;
      break;
    case TOKEN_MONSTER:
      tokens[name] = card;
      break;
    default:
      throw new Error(`"${name}" has unknown card type "${card.cardType}".`);
  }
}

module.exports = { cards, fusions, nonfusions, monsters, vanillas, effectMonsters, spells, traps, tokens, lookupByID };
