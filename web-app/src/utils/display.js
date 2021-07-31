const { MONSTER, SPELL_TRAP, FIELD_SPELL, HAND, DECK, EXTRA_DECK, GRAVEYARD, BANISHED } = require("utils/constants");

function display(rowOrZone) {
  switch (rowOrZone) {
    case MONSTER: return "Monster";
    case SPELL_TRAP: return "Spell & Trap";
    case FIELD_SPELL: return "Field Spell";
    case HAND: return "hand";
    case DECK: return "Deck";
    case EXTRA_DECK: return "Fusion Deck";
    case GRAVEYARD: return "Graveyard";
    case BANISHED: return "banished cards";
    default: return rowOrZone;
  }
}

module.exports = display;