import fusions from "./fusionMonsters.js";
import vanillas from "./normalMonsters.js";
import rituals from "./ritualMonsters.js";
import effectMonsters from "./effectMonsters.js";
import spells from "./spells.js";
import traps from "./traps.js";
import tokens from "./tokens.js";

const monsters = { ...vanillas, ...rituals, ...effectMonsters };
const nonfusions = { ...monsters, ...spells, ...traps };
const cards = { ...fusions, ...nonfusions };

export { cards, fusions, nonfusions, monsters, vanillas, effectMonsters, spells, traps, tokens };
