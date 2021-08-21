const {orderedCardTypes, spellSubtypes, trapSubtypes, FUSION_MONSTER, TOKEN_MONSTER, SPELL, TRAP} = require("./constants");

const db = require("./db.json");

const TYPES = [...orderedCardTypes, FUSION_MONSTER, TOKEN_MONSTER];

// TODO: enforce order of these fields
// const SPELL_TRAP_REQUIRED = ["id", "cardType", "levelOrSubtype", "text"];
// const MONSTER_REQUIRED = ["id", "cardType", "attribute", "levelOrSubtype", "atk", "def", "text"];
// const OPTIONAL = ["script", "limit", "art"];

test('database', () => {
  const ids = [];
  const names = [];
  for (const name in db) {
    const card = db[name];
    if (card.cardType !== TOKEN_MONSTER) {
      expect(/\d{8}/.test(card.id), `"${name}"'s ID is not 8 digits long '${card.id}'`).toBe(true);
      ids.push(card.id);
    }
    expect(TYPES).toContain(card.cardType);
    expect(card.text.length).toBeGreaterThan(0);

    if (card.cardType === SPELL) {
      expect(spellSubtypes).toContain(card.levelOrSubtype);
    } else if (card.cardType === TRAP) {
      expect(trapSubtypes).toContain(card.levelOrSubtype);
    } else {
      // TODO
    }
  }
  expect(Array.from(new Set(ids))).toEqual(ids);
  expect(names).toEqual(names.sort());
});
