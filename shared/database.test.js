const {orderedCardTypes, spellSubtypes, trapSubtypes, FUSION_MONSTER, TOKEN_MONSTER, SPELL, TRAP, allAttributes, allMonsterTypes, EFFECT_MONSTER} = require("./constants");

const db = require("./db.json");

const CARD_TYPES = [...orderedCardTypes, FUSION_MONSTER, TOKEN_MONSTER];
const MONSTER_TYPES = ["???", ...allMonsterTypes];
const MONSTER_EFFECTS = [
  "Condition", "Summon", "Ignition", "Trigger", "Quick", "Continuous", "Lingering", "Maintenance Cost"
];
const OTHER_EFFECTS = [
  "Condition", "Ignition-like", "Trigger-like", "Quick-like", "Continuous-like", "Lingering", "Maintenance Cost"
];
const EFFECTS = [...MONSTER_EFFECTS, ...OTHER_EFFECTS];

const SPELL_TRAP_REQUIRED = ["id", "cardType", "levelOrSubtype", "text"];
const MONSTER_REQUIRED = ["id", "cardType", "attribute", "levelOrSubtype", "atk", "def", "text"];
const OPTIONAL = ["prepopLP", "script", "limit", "art"];
const TOKEN_REQUIRED = MONSTER_REQUIRED.slice(1);
const FUSION_OPTIONAL = ["order", "noMeta", ...OPTIONAL];

const STYLIZATION = {
  // NOTE: custom
  "GY": "Graveyard",
  "LP": "Life Points",
  "Extra Deck": "Fusion Deck",
  "(Quick Effect)": "<effect=Quick>...</effect>",
  // Regular Konami stylization: https://yugioh.fandom.com/wiki/Problem-Solving_Card_Text#Changes
  "Battle Damage": "battle damage",
  "remove from play": "banish",
  "removed from play": "banished",
  "removed from the field": "leaves the field",
  "select": "target",
  "Effect Monster's effect": "monster effect",
  "Union Monster": "Union monster",
  "Toon Monster": "Toon monster",
  "Flip Effect Monster": "Flip monster",
  "Fusion Material": "Fusion material",
  "side of the field": "field",
  "Material": "material",
  "pick up": "excavate",
  "When": "If", // NOTE: Not for optional ("When ... you can")
  "(this is a Quick Effect)": "<effect=Quick>...</effect>",
  "during either player's": "<effect=Quick>...</effect>",
  "Spell Card": "Spell",
  "Trap Card": "Trap",
  "Spell and Trap": "Spell/Trap",
  "Spell/Trap Card": "Spell/Trap",
  "Spell/Trap Cards": "Spells/Traps",
  "(Damage calculation is applied normally)": "",
  "(without damage calculation)": "",
  "(This Special Summon is treated as a Fusion Summon.)": "",
  "-Type": "",
  "selected as an attack target": "targeted for an attack",
  "attack once again": "make a second attack",
  "attack twice": "make a second attack",
  "make 3 attacks": "make a second and third attack",
  "still treated as a Trap Card": "also still a Trap",
  "also still a Trap Card": "also still a Trap",
  "Flip Effects are not activated at this time": "(Flip monsters' effects are not activated at this time)",
  "(Flip Effects are not activated at this time)": "(Flip monsters' effects are not activated at this time)",
  "(Flip Effects are not activated)": "(Flip monsters' effects are not activated at this time)" ,
  "(Flip monsters' effects are not activated)": "(Flip monsters' effects are not activated at this time)",
  "This card's name is treated as": "This card's name becomes",
  "its name is treated as": "This card's name becomes",
  "This card's name is also treated as": "(This card is also always treated as ...)",
  "This card cannot be Normal Summoned or Set.": "Cannot be Normal Summoned/Set.",
  "This card can only be": "Must first be",
  "This card cannot be Special Summoned except": "Must be Special Summoned",
  "and cannot be Special Summoned by other ways": "Must be Special Summoned",
  "This monster can only be Ritual Summoned with the Ritual Spell Card": "You can Ritual Summon this card with",
  "You take no Battle Damage from battles involving this card.": "You take no battle damage from attacks involving this card.",
  "(If it's a tie, you get to choose.)": "(your choice, if tied)",
  "to the Graveyard, the Fusion Material Monsters that are listed on a Fusion Monster Card, then Special Summon that monster from your": "Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters from",
  "At the end of the Battle Phase, if this card attacked or was attacked": "At the end of the Battle Phase, if this card battled",
  "If damage calculation is performed involving this card, at the end of the Battle Phase": "At the end of the Battle Phase, if this card battled",
  "During each of your/your opponent's": "Once per turn, during your/your opponent's",
  "negate its effects / its effects are negated": "negate its effects",
  "it has its effects negated": "negate its effects",
  "Cards and effects cannot be activated in response to this effect's activation": "Neither player can activate cards or effects in response to this effect's activation",
  "Once per turn, during your opponent's turn": "Once per opponent's turn",
  "This effect can only be used once while this card is face-up on the field.": "Once while face-up on the field:",
  "This card gains": "Gains ... ATK/DEF",
  "This card can attack your opponent directly": "This card can attack directly"
};

const STYLE_REGEX = new RegExp(`(${Object.keys(STYLIZATION).map(s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})`, 'g');

const STYLE_WHITELIST = {
  "Agido": "When",
  "Mystical Shine Ball": "When",
  "Fairy Box": "When", // TODO is this correct?
  "Familiar Knight": "When",
};

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
    expect(name.includes("–"), `"${name}" contains an em dash`).toBe(false);
    const card = db[name];
    if (card.cardType !== TOKEN_MONSTER) {
      expect(/\d{8}/.test(card.id), `"${name}"'s ID is not 8 digits long '${card.id}'`).toBe(true);
      ids.push(card.id);
    }
    expect(CARD_TYPES).toContain(card.cardType);

    expect(card.text.length).toBeGreaterThan(0);
    for (const m of card.text.matchAll(STYLE_REGEX)) {
      if (STYLE_WHITELIST[name] === m[0]) continue;
      if (m[0] === "When" && (/When[^.]+[Yy]ou can/.test(card.text) || !card.text.includes("Trigger"))) continue;
      expect(false, `"${name}" contains inconsistent text, '${m[0]}' should be '${STYLIZATION[m[0]]}'`).toBe(true);
    }

    expect([FUSION_MONSTER, TOKEN_MONSTER].includes(card.cardType) || /[^>]\.(<\/effect>)?$/.test(card.text), `"${name}"'s text does not end with a period/contains a period after a tag: '${card.text}'`).toBe(true);
    expect(card.text.includes("><"), `"${name}"'s text is missing a space between tags: '${card.text}'`).toBe(false);
    for (const effect of card.text.matchAll(/<effect=([^>]+)>/g)) {
      expect([SPELL, TRAP].includes(card.cardType) ? OTHER_EFFECTS : card.text.includes("equip") ? EFFECTS : MONSTER_EFFECTS, `"${name}" has an unknown/invalid effect type: '${effect[1]}'`).toContain(effect[1]);
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
