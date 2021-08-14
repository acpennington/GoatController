import { SPELL, HERO, TOKENS, SPELL_TRAP } from "utils/constants.js";

const quickplaySpells = {
   "Mystical Space Typhoon": {
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 Spell/Trap on the field; destroy that target.",
      limit: 1
   },
   Scapegoat: {
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: 'Special Summon 4 "Sheep Tokens" (Beast/EARTH/Level 1/ATK 0/DEF 0) in Defense Position. They cannot be Tributed for a Tribute Summon. You cannot Summon other monsters the turn you activate this card (but you can Normal Set).',
      script: {
         name: TOKENS,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            name: "Sheep Token",
            pos: "def",
            count: 4
         }
      }
   },
   "Book of Moon": {
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 face-up monster on the field; change that target to face-down Defense Position."
   },
   "Soul Reversal": {
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 Flip monster in your Graveyard; add that target to the top of the Deck."
   },
   "The Reliable Guardian": {
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 face-up monster on the field; it gains 700 DEF until the end of this turn."
   }
};

export default quickplaySpells;
