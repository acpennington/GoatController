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
   },
   "Emergency Provisions": {
      id: "53046408",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Send any number of other Spells/Traps you control to the Graveyard; gain 1000 Life Points for each card sent to the Graveyard this way.",
      limit: 2
   },
   "Enemy Controller": {
      id: "98045062",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Activate 1 of these effects.● Target 1 face-up monster your opponent controls; change that target's battle position.● Tribute 1 monster, then target 1 face-up monster your opponent controls; take control of that target until the End Phase."
   },
   "Poison of the Old Man": {
      id: "08842266",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Activate 1 of these effects;● Gain 1200 Life Points.● Inflict 800 damage to your opponent",
      prepopLP: { hero: 1200, villain: -800 }
   },
   "Serial Spell": {
      id: "49398568",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "When you activate a Normal Spell Card: Discard all cards in your hand to the Graveyard; the effect of this card becomes the same as that Normal Spell Card."
   },
   "Swords of Concealing Light": {
      id: "12923641",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Destroy this card during your 2nd Standby Phase after activation. When this card resolves, change all monsters your opponent controls to face-down Defense Position.<effect=Continuous-like>Monsters your opponent controls cannot change their battle positions.</effect>"
   },
   "My Body as a Shield": {
      id: "69279219",
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "When your opponent activates a Spell/Trap Card or monster effect that would destroy a monster(s) on the field: Pay 1500 Life Points; negate the activation, and if you do, destroy it.",
      prepopLP: { hero: -1500 }
   },
};

export default quickplaySpells;
