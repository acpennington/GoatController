import { SPELL, HERO, TOKENS, SPELL_TRAP, SKIP_DRAWS } from "utils/constants.js";

const quickplaySpells = {
   "Offerings to the Doomed": {
      id: "19230407",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 face-up monster on the field; destroy that target, also skip your next Draw Phase.",
      script: {
         name: SKIP_DRAWS,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: 1
      }
   },
   "Mystical Space Typhoon": {
      id: "05318639",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 Spell/Trap on the field; destroy that target.",
      limit: 1
   },
   Scapegoat: {
      id: "73915051",
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
      id: "14087893",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 face-up monster on the field; change that target to face-down Defense Position."
   },
   "Soul Reversal": {
      id: "78864369",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 Flip monster in your Graveyard; add that target to the top of the Deck."
   },
   "The Reliable Guardian": {
      id: "16430187",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 face-up monster on the field; it gains 700 DEF until the end of this turn."
   }
};

export default quickplaySpells;
