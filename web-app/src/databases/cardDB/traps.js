import { TRAP } from "utils/constants";

const traps = {
   "A Feint Plan": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Face-down monsters cannot be attacked this turn."
    },
    "Acid Trap Hole": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 face-down Defense Position monster on the field; flip it face-up, then destroy it if its DEF is 2000 or less, or return it face-down if its DEF is more than 2000."
    },
    "Assault on GHQ": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 monster you control; destroy that monster, then send 2 cards from the top of your opponent's Deck to the GY."
    },
    "Beast Soul Swap": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 Beast monster you control; return it to the hand, and if you do, Special Summon 1 Beast-Type monster from your hand with the same Level as the monster that was returned to the hand."
    },
   "Call of the Haunted": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "Activate this card by targeting 1 monster in your Graveyard; Special Summon that target in Attack Position. <effect=Continuous-like>When this card leaves the field, destroy that monster.</effect> <effect=Continuous-like>When that monster is destroyed, destroy this card.</effect>",
      limit: 1
   },
   "Castle Walls": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster on the field; it gains 500 DEF until the end of this turn."
    },
    "Compulsory Evacuation Device": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 monster on the field; return that target to the hand."
    },
    "D.D. Dynamite": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Inflict 300 damage to your opponent for each of their banished cards."
    },
    "Desert Sunlight": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "If you control a face-down Defense Position monster(s) or face-up Attack Position monster(s): Change all monsters you control to face-up Defense Position."
    },
    Disappear: {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 card in your opponent's Graveyard; banish that target."
    },
    Disarmament: {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Destroy all Equip Cards on the field."
    },
    Earthshaker: {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Declare 2 monster Attributes; your opponent chooses 1 of them and destroys all monsters on the field with that Attribute."
    },
    "Energy Drain": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control; until the end of this turn, it gains 200 ATK/DEF for each card in your opponent's hand."
    },
    "Exhausting Spell": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Remove all Spell Counters on the field."
    },
    "Fiend's Hand Mirror": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "When your opponent activates a Spell that targets exactly 1 Spell/Trap (and no other cards) on the field: Target another card that would be an appropriate target; that Spell now targets the new target."
    },
    "Gift of The Mystical Elf": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Gain 300 Life Points for each monster on the field."
    },
    Graverobber: {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 Spell in your opponent's GY; add it to your hand. If you use it, take 2000 damage immediately after. During the end phase, if you did not use it, send it to the Graveyard."
    },
    "Interdimensional Matter Transporter": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control; banish that target until the End Phase."
    },
    Meteorain: {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "This turn, monsters you control inflict piercing battle damage to your opponent."
    },
    "Mind Crush": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Declare 1 card name; look at your opponent's hand, then discard all copies of it, otherwise you discard 1 random card."
    },
    "Pikeru's Circle of Enchantment": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "You take no damage from card effects this turn."
    },
    "Really Eternal Rest": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Destroy all equipped monsters."
    },
    "Solar Ray": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Inflict 600 damage to your opponent for each face-up LIGHT monster you control."
    },
    "The Spell Absorbing Life": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "If a face-down Defense Position monster or an Effect Monster is on the field: Change all face-down Defense Position monsters on the field to face-up Defense Position (Flip monsters' effects are not activated at this time), also gain 400 Life Points for each Effect Monster on the field."
    },
    "Threatening Roar": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Your opponent cannot declare an attack this turn."
    },
    "Two-Pronged Attack": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 2 monsters you control and 1 monster your opponent controls; destroy those targets."
    },
    "Windstorm of Etaqua": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Change the battle positions of all face-up monsters your opponent controls."
    },
    "Zero Gravity": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Change the battle positions of all face-up monsters on the field."
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
   },
   "Jar of Greed": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Draw 1 card."
   },
   "Raigeki Break": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Discard 1 card, then target 1 card on the field; destroy it."
   }
};

export default traps;
