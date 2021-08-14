import fusions from "./monsters/fusionMonsters.js";
import vanillas from "./monsters/normalMonsters.js";
import rituals from "./monsters/ritualMonsters.js";
import effectMonsters from "./monsters/effectMonsters.js";

import spells from "./spells/spells.js";
import traps from "./traps/traps.js";

import tokens from "./tokens.js";

const monsters = { ...vanillas, ...rituals, ...effectMonsters };
const nonfusions = { ...monsters, ...spells, ...traps };
const cards = { ...fusions, ...nonfusions };

export { cards, fusions, nonfusions, monsters, vanillas, effectMonsters, spells, traps, tokens };
