const {
   allAttributes,
   allMonsterTypes,
   allZones,
   DISCARD_AND_DRAW,
   DRAW_N,
   EFFECT_MONSTER,
   FLIP_COINS,
   FUSION_MONSTER,
   MILL_UNTIL,
   NORMAL_MONSTER,
   orderedCardTypes,
   RANDOM_DISCARD,
   ROLL_DICE,
   scriptNames,
   SEARCH_DECK,
   SHUFFLE_AND_DRAW,
   SKIP_DRAWS,
   SPELL,
   spellSubtypes,
   TOKEN_MONSTER,
   TOKENS,
   TRAP,
   trapSubtypes,
   PREPOP_LP_HELPER
} = require("./constants");

const db = require("./db.json");

const CARD_TYPES = [...orderedCardTypes, FUSION_MONSTER, TOKEN_MONSTER];
const MONSTER_TYPES = ["???", ...allMonsterTypes];
const MONSTER_EFFECTS = ["Condition", "Summon", "Ignition", "Trigger", "Quick", "Continuous", "Lingering", "Maintenance Cost"];
const OTHER_EFFECTS = ["Condition", "Ignition-like", "Trigger-like", "Quick-like", "Continuous-like", "Lingering", "Maintenance Cost"];
const EFFECTS = [...MONSTER_EFFECTS, ...OTHER_EFFECTS];

const SPELL_TRAP_REQUIRED = ["id", "cardType", "levelOrSubtype", "text"];
const MONSTER_REQUIRED = ["id", "cardType", "attribute", "levelOrSubtype", "atk", "def", "text"];
const OPTIONAL = ["prepopLP", "script", "limit", "art"];
const TOKEN_REQUIRED = MONSTER_REQUIRED.slice(1);
const FUSION_OPTIONAL = ["order", "noMeta", ...OPTIONAL];

// NB: MONSTER_REQUIRED is a superset of SPELL_TRAP_REQUIRED.
const PARAMS = ["name", ...MONSTER_REQUIRED, "text2", "text3"];
const OPERATORS = [">", "<", "OR", "TYPEMATCH", "CONTAINS", "DOES_NOT_CONTAIN"];

// Regular Konami stylization: https://yugioh.fandom.com/wiki/Problem-Solving_Card_Text#Changes

const CASE_SENSITIVE = {
   // NOTE: custom
   GY: "Graveyard",
   LP: "Life Points",
   "Extra Deck": "Fusion Deck",
   "(Quick Effect)": "<effect=Quick>...</effect>",
   "Battle Damage": "battle damage",
   "Union Monster": "Union monster",
   "Toon Monster": "Toon monster",
   "Fusion Material": "Fusion material",
   Material: "material",
   When: "If", // NOTE: For triggers, and not for optional ("When ... you can")
   "(this is a Quick Effect)": "<effect=Quick>...</effect>",
   "Spell Card": "Spell",
   "Trap Card": "Trap",
   "Spell and Trap": "Spell/Trap",
   "Spell/Trap Card": "Spell/Trap",
   "Spell/Trap Cards": "Spells/Traps",
   "(This Special Summon is treated as a Fusion Summon.)": "",
   "-Type": "",
   "This card cannot be Normal Summoned or Set.": "Cannot be Normal Summoned/Set."
};

const STYLIZATION = {
   "remove from play": "banish",
   "removed from play": "banished",
   "removed from the field": "leaves the field",
   select: "target",
   "Effect Monster's effect": "monster effect",
   "Flip Effect Monster": "Flip monster",
   "side of the field": "field",
   "pick up": "excavate",
   "during either player's": "<effect=Quick>...</effect>",
   "(Damage calculation is applied normally)": "",
   "(without damage calculation)": "",
   "selected as an attack target": "targeted for an attack",
   "attack once again": "make a second attack",
   "attack twice": "make a second attack",
   "make 3 attacks": "make a second and third attack",
   "still treated as a Trap Card": "also still a Trap",
   "also still a Trap Card": "also still a Trap",
   "(Flip Effects are not activated at this time)": "(Flip monsters' effects are not activated at this time)",
   "(Flip Effects are not activated)": "(Flip monsters' effects are not activated at this time)",
   "(Flip monsters' effects are not activated)": "(Flip monsters' effects are not activated at this time)",
   "This card's name is treated as": "This card's name becomes",
   "its name is treated as": "This card's name becomes",
   "This card's name is also treated as": "(This card is also always treated as ...)",
   "This card can only be": "Must first be",
   "This card cannot be Special Summoned except": "Must be Special Summoned",
   "and cannot be Special Summoned by other ways": "Must be Special Summoned",
   "This monster can only be Ritual Summoned with the Ritual Spell Card": "You can Ritual Summon this card with",
   "You take no Battle Damage from battles involving this card.": "You take no battle damage from attacks involving this card.",
   "(If it's a tie, you get to choose.)": "(your choice, if tied)",
   "to the Graveyard, the Fusion Material Monsters that are listed on a Fusion Monster Card, then Special Summon that monster from your":
      "Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters from",
   "At the end of the Battle Phase, if this card attacked or was attacked": "At the end of the Battle Phase, if this card battled",
   "If damage calculation is performed involving this card, at the end of the Battle Phase": "At the end of the Battle Phase, if this card battled",
   "During each of your/your opponent's": "Once per turn, during your/your opponent's",
   "negate its effects / its effects are negated": "negate its effects",
   "it has its effects negated": "negate its effects",
   "Cards and effects cannot be activated in response to this effect's activation":
      "Neither player can activate cards or effects in response to this effect's activation",
   "Once per turn, during your opponent's turn": "Once per opponent's turn",
   "This effect can only be used once while this card is face-up on the field.": "Once while face-up on the field:",
   "This card gains": "Gain(s) ... ATK/DEF",
   "This card loses": "Lose(s) ... ATK/DEF",
   "This card can attack your opponent directly": "This card can attack directly",
   "Until the End Phase": "Until the end of this turn"
};

const CASE_INSENSITIVE = {};
for (const key in STYLIZATION) {
   CASE_INSENSITIVE[key.toLowerCase()] = STYLIZATION[key];
}

const CASE_SENSITIVE_REGEX = new RegExp(
   `(${Object.keys(CASE_SENSITIVE)
      .map((s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
      .join("|")})`,
   "g"
);
const CASE_INSENSITIVE_REGEX = new RegExp(
   `(${Object.keys(CASE_INSENSITIVE)
      .map((s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
      .join("|")})`,
   "g"
);

const STYLE_WHITELIST = {
   Agido: "When",
   "Blade Knight": "this card gains",
   "Burning Land": "When",
   "Cobra Jar": "When",
   "Destiny Board": "When",
   "Familiar Knight": "When",
   "Gaia Soul the Combustible Collective": "this card gains",
   "Insect Soldiers of the Sky": "this card gains",
   "Luminous Soldier": "this card gains",
   "Mask of Dispel": "When",
   "Mucus Yolk": "this card gains",
   "Nightmare Wheel": "When",
   "Ojama Trio": "each time",
   "Pumpking the King of Ghosts": "this card gains",
   "The Agent of Force - Mars": "this card gains",
   "Violet Crystal": "this card gains"
};

const KONAMI_TERMS = new Set([
   "Graveyard",
   "Life",
   "Extra",
   "Fusion",
   "Union",
   "Toon",
   "Special",
   "Spell",
   "Spells",
   "Trap",
   "Traps",
   "Tribute",
   "Summon",
   "Normal",
   "Ritual",
   "Field",
   "Monster",
   "Flip",
   "Battle"
]);

// NB: Javascript is stupid and !isNaN is different than this...
function isNumber(value) {
   return typeof value === "number";
}

function expectFields(name, obj, required, optional = OPTIONAL) {
   const r = required.slice();
   const o = optional.slice();
   for (const field of Object.keys(obj)) {
      if (r.length) {
         expect(field, `${name} has an ${required.includes(field) ? "improperly ordered" : "unknown"} field: '${field}'`).toEqual(r[0]);
         r.shift();
      } else if (o.length) {
         expect(o, `${name} has an ${optional.includes(field) ? "improperly ordered" : "unknown"} field: '${field}'`).toContain(field);
         while (o.shift() !== field) continue;
      } else {
         throw new Error(`${name} has an ${[...required, ...optional].includes(field) ? "improperly ordered" : "unknown"} field: '${field}'`);
      }
   }
}

function verifyComplexPrepopLP(name, prepopLP) {
   expectFields(name, prepopLP, ["name", "params"]);
   expect(Object.values(PREPOP_LP_HELPER)).toContain(prepopLP.name);
   const params = prepopLP.params;
   switch (prepopLP.name) {
      case PREPOP_LP_HELPER.COUNTER:
      case PREPOP_LP_HELPER.EXPONENTIAL_COUNTER:
      case PREPOP_LP_HELPER.VILLAIN_BANISHED:
      case PREPOP_LP_HELPER.VILLAIN_HAND:
         expect(isNumber(params)).toBe(true);
      case PREPOP_LP_HELPER.HERO_GRAVEYARD:
      case PREPOP_LP_HELPER.VILLAIN_GRAVEYARD:
      case PREPOP_LP_HELPER.VILLAIN_FIELD:
      case PREPOP_LP_HELPER.VILLAIN_HAND_AND_FIELD:
      case PREPOP_LP_HELPER.FIELD_MONSTER:
      case PREPOP_LP_HELPER.HERO_MONSTER:
      case PREPOP_LP_HELPER.VILLAIN_MONSTER: {
         if (!isNumber(params)) {
            expectFields(`${name}.params`, params, [], ["filter", "faceup", "multiplier", "base"]);
            expect(params.base === undefined || isNumber(params.base)).toBe(true);
            expect(params.multiplier === undefined || isNumber(params.multiplier)).toBe(true);
            expect(isNumber(params.base || params.multiplier)).toBe(true);
            expect([undefined, true].includes(params.faceup)).toBe(true);
            if (params.filter) verifyParams(`${name}.filter`, params.filter);
         }
         break;
      }
      default:
         throw new Error(`${name} has an unknown prepopLP helper name: '${prepopLP.name}'`);
   }
}

function verifyParams(name, params) {
   expectFields(name, params, [], PARAMS);
   for (const field in params) {
      expect(params[field].value).toBeDefined();
      if (params[field].operator) {
         switch (params[field].operator) {
            case ">":
            case "<":
               expect(isNumber(params[field].value)).toBe(true);
               break;
            case "OR":
               expect(Array.isArray(params[field].value)).toBe(true);
               expect(Array.isArray(params[field].value)).toBe(true);
               break;
            case "CONTAINS":
            case "DOES_NOT_CONTAIN":
               expect(typeof params[field].value === "string").toBe(true)
               expect(params[field].value.length).toBeGreaterThan(0);
               break;
            case "TYPEMATCH":
               expect(MONSTER_TYPES).toContain(params[field].value);
               break;
            default:
               throw new Error(`${name} has an unknown operator name: '${params}'`);
         }
      }
   }
}

function verifyScriptParams(name, script) {
   const params = script.params;
   switch (script.name) {
      case SEARCH_DECK:
         if (params) verifyParams(`"${name}" script.params`, params);
         break;
      case MILL_UNTIL:
         if (isNumber(params)) {
            expect(params).toBeGreaterThan(0);
         } else {
            verifyParams(`"${name}" script.params`, params);
         }
         break;
      case TOKENS:
         expectFields(`"${name}" script.params`, params, ["name", "pos", "count"]);
         expect(params.name.length).toBeGreaterThan(0);
         expect(["atk", "def"]).toContain(params.pos);
         expect(params.count).toBeGreaterThan(0);
         break;
      case RANDOM_DISCARD:
         expect(isNumber(params) || params === undefined).toBe(true);
         break;
      case DRAW_N:
      case FLIP_COINS:
      case ROLL_DICE:
      case SKIP_DRAWS:
         expect(params).toBeGreaterThan(0);
         break;
      case DISCARD_AND_DRAW:
         expect(isNumber(params) || params === "same").toBe(true);
         break;
      case SHUFFLE_AND_DRAW:
         expect(isNumber(params) || params === "same" || params === "graveyard").toBe(true);
         break;
      default:
         throw new Error(`"${name}" has an unknown script name: '${script.name}'`);
   }
}

test("database", () => {
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
      for (const [re, map] of [
         [CASE_SENSITIVE_REGEX, CASE_SENSITIVE],
         [CASE_INSENSITIVE_REGEX, CASE_INSENSITIVE]
      ]) {
         for (const m of card.text.matchAll(re)) {
            if (STYLE_WHITELIST[name] === m[0]) continue;
            if (m[0] === "When" && (/When[^.]+[Yy]ou can/.test(card.text) || !card.text.includes("Trigger"))) continue;
            if (/^this card (gains|loses)/.test(m[0]) && (!card.text.includes("Continuous") || card.text.includes("Union"))) continue;
            expect(false, `"${name}" contains inconsistent text, '${m[0]}' should be '${map[m[0]]}'`).toBe(true);
            if (!card.text.includes("Continuous"))
               expect(card.text.includes("each time"), `"${name}": "each time" should be replaced with "when" or "if"`).toBe(false);
         }
      }

      if (/: [a-z]/.test(card.text)) console.log(`"${name}" contains inconsistent text which has a lower-case letter after a colon`);
      for (const m of card.text.matchAll(/; ([A-Z]\w*)/g)) {
         if (KONAMI_TERMS.has(m[1])) continue;
         console.log(`"${name}" contains inconsistent text which has an upper-case letter after a semi-colon`);
      }

      expect(
         [FUSION_MONSTER, TOKEN_MONSTER].includes(card.cardType) || /[^>]\.(<\/effect>)?$/.test(card.text),
         `"${name}"'s text does not end with a period/contains a period after a tag: '${card.text}'`
      ).toBe(true);
      expect(card.text.includes("><"), `"${name}"'s text is missing a space between tags: '${card.text}'`).toBe(false);
      for (const effect of card.text.matchAll(/<effect=([^>]+)>/g)) {
         expect(
            [SPELL, TRAP].includes(card.cardType) ? OTHER_EFFECTS : card.text.includes("equip") ? EFFECTS : MONSTER_EFFECTS,
            `"${name}" has an unknown/invalid effect type: '${effect[1]}'`
         ).toContain(effect[1]);
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
         expect(card.levelOrSubtype === "???" || isNumber(card.levelOrSubtype), `"${name}" has an invalid level: '${card.levelOrSubtype}'`).toBe(true);
         expect(card.atk === "?" || isNumber(card.atk), `"${name}" has an invalid atk: '${card.atk}'`).toBe(true);
         expect(card.def === "?" || isNumber(card.def), `"${name}" has an invalid def: '${card.def}'`).toBe(true);

         if (card.cardType === FUSION_MONSTER) {
            expect(card.order === undefined || isNumber(card.order), `"${name}" has an invalid order: '${card.order}'`).toBe(true);
            if (card.order) order.push(card.order);
         }

         expect(card.cardType === TOKEN_MONSTER || card.text.includes(" – "), `"${name}"'s text does not contain an em dash: '${card.text}'`).toBe(true);
         const label = card.text.includes(" – ") ? card.text.split(" – ")[0] : card.text;
         const invalidLabelMessage = `"${name}" has an invalid type: '${label}'`;
         expect(MONSTER_TYPES, invalidLabelMessage).toContain(label.split("/")[0]);
         expect(card.cardType !== FUSION_MONSTER || label.includes("Fusion"), invalidLabelMessage).toBe(true);
         expect(card.cardType !== EFFECT_MONSTER || label.includes("Effect"), invalidLabelMessage).toBe(true);
      }

      const prepopLP = card.prepopLP;
      if (prepopLP) {
         expectFields(`"${name}" prepopLP`, prepopLP, [], ["hero", "villain"]);

         if (typeof prepopLP.hero === "object") {
            verifyComplexPrepopLP(`"${name}" prepopLP.hero`, prepopLP.hero);
         } else {
            expect(prepopLP.hero === undefined || prepopLP.hero === "half" || isNumber(prepopLP.hero), `"${name}" has an invalid hero prepopLP: '${prepopLP.hero}'`).toBe(true);
         }

         if (typeof prepopLP.villain === "object") {
            verifyComplexPrepopLP(`"${name}" prepopLP.villain`, prepopLP.villain);
         } else {
            expect(prepopLP.villain === undefined || prepopLP.villain === "half" || isNumber(prepopLP.villain), `"${name}" has an invalid villain prepopLP: '${prepopLP.villain}'`).toBe(true);
         }
      }

      const script = card.script;
      if (script) {
         expectFields(`"${name}" script.displayCondition`, script, [], ["name", "tooltip", "displayCondition", "params", "oneParam", "autoClose"]);
         expect(scriptNames).toContain(script.name);
         if (script.tooltip) expect(script.tooltip.length).toBeGreaterThan(0);
         expectFields(`"${name}" script.displayCondition`, script.displayCondition, ["players", "row"]);
         expect(allZones).toContain(script.displayCondition.row);

         const players = JSON.stringify(script.displayCondition.players);
         expect(['["HERO"]', '["VILLAIN"]', '["HERO","VILLAIN"]'].includes(players), `"${name}" has an invalid script.displayConditions.players: "${players}"`).toBe(true);

         verifyScriptParams(name, script);

         expect([undefined, true].includes(script.oneParam)).toBe(true);
         expect([undefined, true].includes(script.autoClose)).toBe(true);
      }

      expect([undefined, 1, 2].includes(card.limit), `"${name}" has an invalid limit: '${card.limit}'`).toBe(true);
      expect(card.cardType !== NORMAL_MONSTER && card.text.includes(".."), `"${name}" has a double period ..`).toBe(false);
   }
   expect(order.sort((a, b) => a - b)).toEqual(Array.from({ length: order.length }, (_, i) => i + 1));
   expect(Array.from(new Set(ids))).toEqual(ids);
   expect(names).toEqual(names.sort());
});
