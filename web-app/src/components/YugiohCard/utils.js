import { MONSTER, SPELL_TRAP, FIELD_SPELL, HAND, DECK, EXTRA_DECK, deckZones, discardZones } from "utils/constants.js";

function getBools(row, zone) {
   const discardZone = discardZones.includes(row);
   const deckZone = deckZones.includes(row) && zone === -1;
   const isDeck = row === DECK && zone === -1;
   const isExtraDeck = row === EXTRA_DECK && zone === -1;
   const isDiscardZone = discardZone && zone === -1;
   const inHand = row === HAND;
   const monsterZone = row === MONSTER;
   const spellTrapZone = row === SPELL_TRAP;
   const fieldZone = row === FIELD_SPELL;

   return { discardZone, deckZone, isDeck, isExtraDeck, isDiscardZone, inHand, monsterZone, spellTrapZone, fieldZone };
}

function rowClass(row) {
   switch (row) {
      case HAND:
         return "Hand";
      case MONSTER:
         return "Monster";
      case SPELL_TRAP:
         return "SpellTrap";
      case FIELD_SPELL:
         return "Field";
      default:
         return "";
   }
}

function isAcceptable(itemType, acceptables) {
   return acceptables.includes(itemType);
}

export { getBools, rowClass, isAcceptable };
