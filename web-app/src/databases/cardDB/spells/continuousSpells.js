import { SPELL } from "utils/constants.js";

const continuousSpells = {
   "Kishido Spirit": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Monsters you control are not destroyed by battle if they battle a monster with the same ATK.</effect>"
   },
   "Spring of Rebirth": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>When a monster(s) return from the field to the hand: Gain 500 Life Points.</effect>",
      prepopLP: { hero: 500 }
   },
   Stumbling: {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>If a monster is Summoned: Change it to Defense Position.</effect>"
   },
   "Blessings of the Nile": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Each time a card(s) is discarded from your hand to the Graveyard by an opponent's card effect: Gain 1000 Life Points.</effect>"
   },
   "Chain Energy": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Each player must pay 500 Life Points per card to Normal Summon, Special Summon, Set or activate cards from his/her respective hand.</effect>",
      prepopLP: { hero: -500, villain: -500 }
   },
   "Mass Driver": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Ignition-like>You can Tribute 1 monster; inflict 400 damage to your opponent.</effect>"
   },
   "Morale Boost": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Each time an Equip Spell is equipped, its controller gains 1000 Life Points.</effect> <effect=Continuous-like>Each time an Equip Spell leaves the field, its controller takes 1000 damage.</effect>"
   },
   "The Dark Door": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Only 1 monster can attack during each Battle Phase.</effect>"
   },
   Toll: {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Players must pay 500 Life Points to declare an attack.</effect>",
      prepopLP: { hero: -500, villain: -500 }
   },
   "Toon World": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "Activate this card by paying 1000 Life Points.",
      prepopLP: { hero: -1000 }
   },
   "Vengeful Bog Spirit": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Monsters cannot attack the turn they are Summoned.</effect>"
   },
   "Yellow Luster Shield": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>All monsters you control gain 300 DEF.</effect>"
   }
};

export default continuousSpells;
