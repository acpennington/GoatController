const {orderedCardTypes, spellSubtypes, trapSubtypes, FUSION_MONSTER, TOKEN_MONSTER, SPELL, TRAP, allAttributes, allMonsterTypes, EFFECT_MONSTER} = require("./constants");

const db = require("./db.json");

const CARD_TYPES = [...orderedCardTypes, FUSION_MONSTER, TOKEN_MONSTER];
const MONSTER_TYPES = ["???", ...allMonsterTypes];
const EFFECTS = [
  "Condition", "Summon", "Ignition", "Ignition-like", "Trigger", "Trigger-like",
  "Quick", "Quick-like", "Continuous", "Continuous-like", "Lingering", "Maintenance Cost"
];

const SPELL_TRAP_REQUIRED = ["id", "cardType", "levelOrSubtype", "text"];
const MONSTER_REQUIRED = ["id", "cardType", "attribute", "levelOrSubtype", "atk", "def", "text"];
const OPTIONAL = ["prepopLP", "script", "limit", "art"];
const TOKEN_REQUIRED = MONSTER_REQUIRED.slice(1);
const FUSION_OPTIONAL = ["order", "noMeta", ...OPTIONAL];

function expectFields(name, card, required, optional = OPTIONAL) {
  const r = required.slice();
  const o = optional.slice();
  for (const field of Object.keys(card)) {
    if (r.length) {
      expect(field, `"${name}" has an ${required.includes(field) ? "improperly ordered" : "unknown"} field: '${field}'`).toEqual(r[0]);
      r.shift();
    } else if (o.length) {
      expect(o, `"${name}" has an ${optional.includes(field) ? "improperly ordered" : "unknown"} field: '${field}'`).toContain(field);
      while (o.shift() !== field) continue;
    } else {
      throw new Exception(`"${name}" has an unknown field: '${field}'`);
    }
  }
}

test('database', () => {
  const ids = [];
  const order = [];
  const names = [];
  for (const name in db) {
    const card = db[name];
    if (card.cardType !== TOKEN_MONSTER) {
      expect(/\d{8}/.test(card.id), `"${name}"'s ID is not 8 digits long '${card.id}'`).toBe(true);
      ids.push(card.id);
    }
    expect(CARD_TYPES).toContain(card.cardType);

    expect(card.text.length).toBeGreaterThan(0);
    expect(/ (GY|LP|Extra Deck) /.test(card.text), `"${name}" contains outdated text: '${card.text}'`).toBe(false)

    expect([FUSION_MONSTER, TOKEN_MONSTER].includes(card.cardType) || /\.(<\/effect>)?$/.test(card.text), `"${name}"'s text does not end with a period: '${card.text}'`).toBe(true);
    expect(card.text.includes("><"), `"${name}"'s text is missing a space between tags: '${card.text}'`).toBe(false);
    for (const effect of card.text.matchAll(/<effect=([^>]+)>/g)) {
      expect(EFFECTS, `"${name}" has an unknown effect type: '${effect}'`).toContain(effect[1]);
    }

    if (card.cardType === SPELL) {
      expect(spellSubtypes).toContain(card.levelOrSubtype);
      expectFields(name, card, SPELL_TRAP_REQUIRED);
    } else if (card.cardType === TRAP) {
      expect(trapSubtypes).toContain(card.levelOrSubtype);
      expectFields(name, card, SPELL_TRAP_REQUIRED);
    } else {
      const required = card.cardType === TOKEN_MONSTER ? TOKEN_REQUIRED : MONSTER_REQUIRED;
      const optional = card.cardType === FUSION_MONSTER ? FUSION_OPTIONAL : OPTIONAL;
      expectFields(name, card, required, optional);

      expect(card.attribute === "???" || allAttributes.includes(card.attribute), `"${name}" has an unknown attribute: '${card.attribute}'`).toBe(true);
      expect(card.levelOrSubtype === "???" || !isNaN(card.levelOrSubtype), `"${name}" has an invalid level: '${card.levelOrSubtype}'`).toBe(true);
      expect(card.atk === "?" || !isNaN(card.atk), `"${name}" has an invalid atk: '${card.atk}'`).toBe(true);
      expect(card.def === "?" || !isNaN(card.def), `"${name}" has an invalid def: '${card.def}'`).toBe(true);

      if (card.cardType === FUSION_MONSTER) {
        expect(card.order === undefined || !isNaN(card.order), `"${name}" has an invalid order: '${card.order}'`).toBe(true);
        if (card.order) order.push(card.order);
      }

      expect(card.cardType === TOKEN_MONSTER || card.text.includes(" – "), `"${name}"'s text does not contain an em dash: '${card.text}'`).toBe(true);
      const label = card.text.includes(" – ") ? card.text.split(" – ")[0] : card.text;
      const invalidLabelMessage = `"${name}" has an invalid type: '${label}'`;
      expect(MONSTER_TYPES, invalidLabelMessage).toContain(label.split('/')[0]);
      expect(card.cardType !== FUSION_MONSTER || label.includes("Fusion"), invalidLabelMessage).toBe(true);
      expect(card.cardType !== EFFECT_MONSTER || label.includes("Effect"), invalidLabelMessage).toBe(true);
    }
    expect([undefined, 1, 2].includes(card.limit), `"${name}" has an invalid limit: '${card.limit}'`).toBe(true);
  }
  expect(order.sort((a, b) => a - b)).toEqual(Array.from({length: order.length}, (_, i) => i + 1));
  expect(Array.from(new Set(ids))).toEqual(ids);
  expect(names).toEqual(names.sort());
});
