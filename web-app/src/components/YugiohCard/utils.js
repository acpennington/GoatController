import getCardDetails from "shared/getCardDetails.js";
import { MONSTER, SPELL_TRAP, FIELD_SPELL, HAND, DECK, EXTRA_DECK, deckZones, discardZones, GRAVEYARD, BOTTOM } from "shared/constants.js";

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

function checkBottom(field) {
   const checkRows = [MONSTER, SPELL_TRAP];
   for (const row of checkRows) {
      for (const card of field[row]) {
         const bottom = checkCardForBottom(card, row);
         if (bottom) return bottom;
      }
   }

   const graveyard = field[GRAVEYARD];
   if (graveyard) {
      const bottom = checkCardForBottom(graveyard[graveyard.length - 1], GRAVEYARD);
      if (bottom) return bottom;
   }

   return false;
}

function checkCardForBottom(card, row) {
   if (card && !card.facedown) {
      const { script } = getCardDetails(card.name);
      if (script && script.name === BOTTOM && script.displayCondition.row === row) return script.params;
   }
   return false;
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

export { getBools, checkBottom, rowClass, isAcceptable };
