import { SPELL, SPELL_TRAP, HERO, TOKENS } from "utils/constants.js";

const continuousSpells = {
   "Kishido Spirit": {
      id: "60519422",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Monsters you control are not destroyed by battle if they battle a monster with the same ATK.</effect>"
   },
   "Spring of Rebirth": {
      id: "94425169",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>When a monster(s) return from the field to the hand: Gain 500 Life Points.</effect>",
      prepopLP: { hero: 500 }
   },
   Stumbling: {
      id: "34646691",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>If a monster is Summoned: Change it to Defense Position.</effect>"
   },
   "Blessings of the Nile": {
      id: "30653113",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Each time a card(s) is discarded from your hand to the Graveyard by an opponent's card effect: Gain 1000 Life Points.</effect>"
   },
   "Chain Energy": {
      id: "79323590",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Each player must pay 500 Life Points per card to Normal Summon, Special Summon, Set or activate cards from his/her respective hand.</effect>",
      prepopLP: { hero: -500, villain: -500 }
   },
   "Mass Driver": {
      id: "34906152",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Ignition-like>You can Tribute 1 monster; inflict 400 damage to your opponent.</effect>",
      prepopLP: { villain: -400 }
   },
   "Morale Boost": {
      id: "93671934",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Each time an Equip Spell is equipped, its controller gains 1000 Life Points.</effect> <effect=Continuous-like>Each time an Equip Spell leaves the field, its controller takes 1000 damage.</effect>"
   },
   "The Dark Door": {
      id: "30606547",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Only 1 monster can attack during each Battle Phase.</effect>"
   },
   Toll: {
      id: "82003859",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Players must pay 500 Life Points to declare an attack.</effect>",
      prepopLP: { hero: -500, villain: -500 }
   },
   "Toon World": {
      id: "15259703",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "Activate this card by paying 1000 Life Points.",
      prepopLP: { hero: -1000 }
   },
   "Vengeful Bog Spirit": {
      id: "95220856",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Monsters cannot attack the turn they are Summoned.</effect>"
   },
   "Yellow Luster Shield": {
      id: "04542651",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>All monsters you control gain 300 DEF.</effect>"
   },
   "Swords of Revealing Light": {
      id: "72302403",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "After this card's activation, it remains on the field, but you must destroy it during the End Phase of your opponent's 3rd turn. When this card is activated: If your opponent controls a face-down monster, flip all monsters they control face-up. <effect=Continuous-like>While this card is face-up on the field, your opponent's monsters cannot declare an attack.</effect>",
      limit: 1
   },
   "Wave-Motion Cannon": {
      id: "38992735",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Ignition-like>During your Main Phase: You can send this face-up card to the Graveyard; inflict 1000 damage to your opponent for each of your Standby Phases that have passed since this card was activated.</effect>"
   },
   "Level Limit - Area B": {
      id: "03136426",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Change all face-up Level 4 or higher monsters to Defense Position.</effect>",
      limit: 2
   },
   "Dark Room of Nightmare": {
      id: "85562745",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: '<effect=Trigger-like>Each time your opponent takes damage from a card effect, except "Dark Room of Nightmare": Inflict 300 damage to your opponent.</effect>',
      prepopLP: { villain: -300 }
   },
   "Archfiend's Oath": {
      id: "22796548",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Ignition-like>Once per turn: You can pay 500 Life Points, then declare 1 card name; excavate the top card of your Deck, and if it is the declared card, add it to your hand.</effect> Otherwise, send it to the Graveyard",
      prepopLP: { hero: -500 }
   },
   "Messenger of Peace": {
      id: "44656491",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Monsters with 1500 or more ATK cannot declare an attack.</effect><effect=Maintenance cost>Once per turn, during your Standby Phase, pay 100 Life Points or destroy this card.</effect>",
      prepopLP: { hero: -100 }
   },
   "Spell Economics": {
      id: "04259068",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>You do not pay Life Points to activate Spells.</effect>"
   },
   Prohibition: {
      id: "43711255",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Activate this card by declaring 1 card name; cards with that name, and their effects, cannot be used.</effect> Cards already on the field are not affected (including face-down cards)."
   },
   "Jam Breeding Machine": {
      id: "21770260",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: '<effect=Trigger-like>Once per turn, during your Standby Phase: Special Summon 1 "Slime Token" (Aqua/WATER/LEVEL 1/ATK 500/DEF 500) in Attack Position.</effect> <effect=Continuous-like>You cannot Summon any monsters, except "Slime Tokens" (but you can Set).</effect>',
      script: {
         name: TOKENS,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            name: "Slime Token",
            pos: "atk",
            count: 1
         }
      }
   },
   "Gravekeeper's Servant": {
      id: "16762927",
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Your opponent cannot declare an attack, unless they send 1 card from the top of their Deck to the Graveyard.</effect>"
   },
};

export default continuousSpells;
