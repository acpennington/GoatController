import normalSpells from "./normalSpells.js";
import fieldSpells from "./fieldSpells.js";
import equipSpells from "./equipSpells.js";
import continuousSpells from "./continuousSpells.js";
import ritualSpells from "./ritualSpells.js";

const spells = { ...normalSpells, ...fieldSpells, ...equipSpells, ...continuousSpells, ...ritualSpells };

export default spells;
