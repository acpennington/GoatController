const { SPELL_TRAP } = require("./constants");

module.exports = function fieldContains(field, cardArray) {
   for (const key in field) for (const zone of field[key][SPELL_TRAP]) if (zone && !zone.facedown && cardArray.includes(zone.name)) return zone.name;
   return false;
};
