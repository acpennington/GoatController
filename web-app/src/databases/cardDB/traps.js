import { TRAP } from "utils/constants";

const traps = {
   "Call of the Haunted": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "Activate this card by targeting 1 monster in your Graveyard; Special Summon that target in Attack Position. <effect=Continuous-like>When this card leaves the field, destroy that monster.</effect> <effect=Continuous-like>When that monster is destroyed, destroy this card.</effect>",
      limit: 1
   },
   "Solemn Judgment": {
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "When a monster(s) would be Summoned, OR a Spell/Trap Card is activated: Pay half your Life Points; negate the Summon or activation, and if you do, destroy that card.",
      prepopLP: { hero: "half" }
   },
   "Mirror Force": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When an opponent's monster declares an attack: Destroy all your opponent's Attack Position monsters.",
      limit: 1
   },
   "Torrential Tribute": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When a monster(s) is Summoned: Destroy all monsters on the field.",
      limit: 1
   },
   "Ring of Destruction": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster; destroy that face-up monster, and if you do, inflict damage to both players equal to that target's ATK.",
      limit: 1
   },
   "Sakuretsu Armor": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When an opponent's monster declares an attack: Target the attacking monster; destroy that target."
   },
   "Dust Tornado": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 Spell/Trap your opponent controls; destroy that target, then you can Set 1 Spell/Trap from your hand."
   },
   "Trap Dustshoot": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Activate only if your opponent has 4 or more cards in their hand. Look at your opponent's hand, select 1 Monster Card in it, and return that card to its owner's Deck."
   },
   "Royal Decree": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Negate all other Trap effects on the field.</effect>"
   }
};

export default traps;
