import { TRAP, VILLAIN, SPELL_TRAP, RANDOM_DISCARD } from "utils/constants.js";

const continuousTraps = {
   "Astral Barrier": {
      id: "37053871",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>If your opponent's monster attacks a monster you control: You can make the attack a direct attack instead.</effect>"
   },
   "Bad Reaction to Simochi": {
      id: "40633297",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Any effect that would make your opponent gain Life Points inflicts the same amount of damage to them, instead.</effect>"
   },
   "Bottomless Shifting Sand": {
      id: "76532077",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Once per turn, during your opponent's End Phase: Destroy the face-up monster(s) on the field with the highest ATK.</effect> <effect=Continuous-like>During your Standby Phase, if you have 4 or less cards in your hand, destroy this card.</effect>"
   },
   "Des Counterblow": {
      id: "39131963",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>When a monster inflicts battle damage by a direct attack: Destroy that monster.</effect>"
   },
   "Dragon Capture Jar": {
      id: "50045299",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Change all face-up Dragon-Type monsters on the field to Defense Position, also they cannot change their battle positions.</effect>"
   },
   "Enervating Mist": {
      id: "26022485",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Your opponent's hand size limit becomes 5.</effect>"
   },
   "Fatal Abacus": {
      id: "77910045",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>When a monster(s) is sent from the field to the Graveyard: Inflict 500 damage per card to its owner.</effect>"
   },
   "Graverobber's Retribution": {
      id: "33737664",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Once per turn, during your Standby Phase: Your opponent takes 100 damage for each of their banished monsters.</effect>"
   },
   "Gravity Bind": {
      id: "85742772",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Level 4 or higher monsters cannot attack.</effect>",
      limit: 2
   },
   "Infinite Dismissal": {
      id: "54109233",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Once per turn, during the End Phase: Destroy all Level 3 or lower monsters that were Normal or Flip Summoned this turn.</effect>"
   },
   "Jam Defender": {
      id: "21558682",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: '<effect=Trigger-like>When an opponent\'s monster declares an attack on a monster you control: You can target 1 "Revival Jam" you control; switch the attack target to that target.</effect>'
   },
   "Life Absorbing Machine": {
      id: "14318794",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Once per turn, during your Standby Phase: Gain Life Points equal to half the total Life Points you paid during your last turn.</effect>"
   },
   "Ninjitsu Art of Decoy": {
      id: "89628781",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: '<effect=Continuous-like>Target 1 face-up "Ninja" monster you control; it cannot be destroyed by battle.</effect>'
   },
   "Pyramid of Light": {
      id: "53569894",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: '<effect=Continuous-like>If this face-up card leaves the field, destroy "Andro Sphinx" and "Sphinx Teleia" on your side of the field, and if you do, banish them.</effect>'
   },
   "Respect Play": {
      id: "08951260",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>The turn player must play with their hand revealed.</effect>"
   },
   "Robbin' Goblin": {
      id: "88279736",
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
      id: "83258273",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>If your monster inflicts Battle Damage to your opponent: Send the top card of their Deck to the Graveyard.</effect>"
   },
   "Royal Oppression": {
      id: "93016201",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Quick-like>If a monster would be Special Summoned or an effect that Special Summons a monster(s) is activated (except during Damage Step): Either player may pay 800 Life Points; negate the Summon or activation, and if you do, destroy that card.</effect>",
      prepopLP: { hero: -800, villain: -800 }
   },
   "Shadow Spell": {
      id: "29267084",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Activate this card by targeting 1 face-up monster your opponent controls; it loses 700 ATK, also it cannot attack or change its battle position.</effect> <effect=Continuous-like>When it leaves the field, destroy this card.</effect>"
   },
   "Skill Drain": {
      id: "82732705",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "Activate by paying 1000 Life Points. <effect=Continuous-like>The effects of all face-up monsters on the field are negated while those monsters are face-up on the field (but their effects can still be activated).</effect>",
      prepopLP: { hero: -1000 }
   },
   "Skull Lair": {
      id: "06733059",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Quick-like>You can target 1 face-up monster on the field, then banish monsters from your Graveyard equal to its Level; destroy that face-up monster.</effect>"
   },
   "The Emperor's Holiday": {
      id: "68400115",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Negate the effects of all Equip Spells.</effect>"
   },
   "Type Zero Magic Crusher": {
      id: "21237481",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Quick-like>You can discard 1 Spell; inflict 500 damage to your opponent.</effect>",
      prepopLP: { villain: -500 }
   },
   "Call of the Haunted": {
      id: "97077563",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "Activate this card by targeting 1 monster in your Graveyard; Special Summon that target in Attack Position. <effect=Continuous-like>When this card leaves the field, destroy that monster.</effect> <effect=Continuous-like>When that monster is destroyed, destroy this card.</effect>",
      limit: 1
   },
   "Royal Decree": {
      id: "51452091",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Negate all other Trap effects on the field.</effect>"
   },
   "Anti-Spell Fragrance": {
      id: "58921041",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Both players must Set Spells before activating them, and cannot activate them until their next turn after Setting them.</effect>"
   },
   "Nightmare Wheel": {
      id: "54704216",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Activate this card by targeting 1 monster your opponent controls; it cannot attack or change its battle position.</effect><effect=Continuous-like>When it leaves the field, destroy this card.</effect><effect=Trigger-like>During each of your Standby Phases: Inflict 500 damage to your opponent.</effect> That monster must be on the field to activate and to resolve this effect.",
      prepopLP: { villain: -500 }
   },
   "Xing Zhen Hu": {
      id: "76515293",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Activate by targeting 2 Set Spells/Traps on the field; those targets cannot be activated.</effect>"
   }
};

export default continuousTraps;
