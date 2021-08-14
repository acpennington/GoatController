import { TRAP, VILLAIN, SPELL_TRAP, RANDOM_DISCARD } from "utils/constants.js";

const continuousTraps = {
   "Astral Barrier": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>If your opponent's monster attacks a monster you control: You can make the attack a direct attack instead.</effect>"
   },
   "Bad Reaction to Simochi": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Any effect that would make your opponent gain Life Points inflicts the same amount of damage to them, instead.</effect>"
   },
   "Bottomless Shifting Sand": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Once per turn, during your opponent's End Phase: Destroy the face-up monster(s) on the field with the highest ATK.</effect> <effect=Continuous-like>During your Standby Phase, if you have 4 or less cards in your hand, destroy this card.</effect>"
   },
   "Des Counterblow": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>When a monster inflicts battle damage by a direct attack: Destroy that monster.</effect>"
   },
   "Dragon Capture Jar": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Change all face-up Dragon-Type monsters on the field to Defense Position, also they cannot change their battle positions.</effect>"
   },
   "Enervating Mist": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Your opponent's hand size limit becomes 5.</effect>"
   },
   "Fatal Abacus": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>When a monster(s) is sent from the field to the Graveyard: Inflict 500 damage per card to its owner.</effect>"
   },
   "Graverobber's Retribution": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Once per turn, during your Standby Phase: Your opponent takes 100 damage for each of their banished monsters.</effect>"
   },
   "Gravity Bind": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Level 4 or higher monsters cannot attack.</effect>"
   },
   "Infinite Dismissal": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Once per turn, during the End Phase: Destroy all Level 3 or lower monsters that were Normal or Flip Summoned this turn.</effect>"
   },
   "Jam Defender": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: '<effect=Trigger-like>When an opponent\'s monster declares an attack on a monster you control: You can target 1 "Revival Jam" you control; switch the attack target to that target.</effect>'
   },
   "Life Absorbing Machine": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Once per turn, during your Standby Phase: Gain Life Points equal to half the total Life Points you paid during your last turn.</effect>"
   },
   "Ninjitsu Art of Decoy": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: '<effect=Continuous-like>Target 1 face-up "Ninja" monster you control; it cannot be destroyed by battle.</effect>'
   },
   "Pyramid of Light": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: '<effect=Continuous-like>If this face-up card leaves the field, destroy "Andro Sphinx" and "Sphinx Teleia" on your side of the field, and if you do, banish them.</effect>'
   },
   "Respect Play": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>The turn player must play with their hand revealed.</effect>"
   },
   "Robbin' Goblin": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>If your monster inflicts Battle Damage to your opponent: Discard 1 random card from their hand.</effect>",
      script: {
         name: RANDOM_DISCARD,
         displayCondition: {
            players: [VILLAIN],
            row: SPELL_TRAP
         }
      }
   },
   "Robbin' Zombie": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>If your monster inflicts Battle Damage to your opponent: Send the top card of their Deck to the Graveyard.</effect>"
   },
   "Royal Oppression": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Quick-like>If a monster would be Special Summoned or an effect that Special Summons a monster(s) is activated (except during Damage Step): Either player may pay 800 Life Points; negate the Summon or activation, and if you do, destroy that card.</effect>",
      prepopLP: { hero: -800, villain: -800 }
   },
   "Shadow Spell": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Activate this card by targeting 1 face-up monster your opponent controls; it loses 700 ATK, also it cannot attack or change its battle position.</effect> <effect=Continuous-like>When it leaves the field, destroy this card.</effect>"
   },
   "Skill Drain": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "Activate by paying 1000 Life Points. <effect=Continuous-like>The effects of all face-up monsters on the field are negated while those monsters are face-up on the field (but their effects can still be activated).</effect>",
      prepopLP: { hero: -1000 }
   },
   "Skull Lair": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Quick-like>You can target 1 face-up monster on the field, then banish monsters from your Graveyard equal to its Level; destroy that face-up monster.</effect>"
   },
   "The Emperor's Holiday": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Negate the effects of all Equip Spells.</effect>"
   },
   "Type Zero Magic Crusher": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Quick-like>You can discard 1 Spell; inflict 500 damage to your opponent.</effect>",
      prepopLP: { villain: -500 }
   },
   "Call of the Haunted": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "Activate this card by targeting 1 monster in your Graveyard; Special Summon that target in Attack Position. <effect=Continuous-like>When this card leaves the field, destroy that monster.</effect> <effect=Continuous-like>When that monster is destroyed, destroy this card.</effect>",
      limit: 1
   },
   "Royal Decree": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Negate all other Trap effects on the field.</effect>"
   }
};

export default continuousTraps;
