const { MONSTER, SPELL_TRAP, FIELD_SPELL } = require("./constants");

function giveRowCard(state, fromCard, to) {
   if (to.row === FIELD_SPELL) state[to.player][FIELD_SPELL] = { ...fromCard };
   else if (to.row === MONSTER || to.row === SPELL_TRAP) state[to.player][to.row][to.zone] = { ...fromCard };
   else state[to.player][to.row].push(fromCard);
}

module.exports = { giveRowCard };
