const { MONSTER, SPELL_TRAP, FIELD_SPELL, HAND, DECK, EXTRA_DECK, GRAVEYARD, BANISHED } = require("utils/constants");

function display(rowOrZone) {
  switch (rowOrZone) {
    case MONSTER: return "monster";
    case SPELL_TRAP: return "s/t";
    case FIELD_SPELL: return "field spell";
    case HAND: return "hand";
    case DECK: return "deck";
    case EXTRA_DECK: return "Fusion Deck";
    case GRAVEYARD: return "graveyard";
    case BANISHED: return "banished";
    default: return rowOrZone;
  }
}

module.exports = display;