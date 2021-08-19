import { TRAP, VILLAIN, SEARCH_DECK, SPELL_TRAP } from "utils/constants.js";

const normalTraps = {
   "Arsenal Robber": {
      id: "55348096",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Your opponent selects 1 Equip Spell Card from his/her Deck and sends it to the Graveyard.",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [VILLAIN],
            row: SPELL_TRAP
         },
         params: {
            levelOrSubtype: {
               value: "Equip"
            }
         },
         autoClose: true
      }
   },
   "Return from the Different Dimension": {
      id: "27174286",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Pay half your Life Points; Special Summon as many of your banished monsters as possible. During the End Phase, banish all monsters that were Special Summoned by this effect.",
      prepopLP: { hero: "half" }
   },
   "Destruction Ring": {
      id: "21219755",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control; destroy that face-up monster, and if you do, each player takes 1000 damage.",
      prepopLP: { hero: -1000, villain: -1000 }
   },
   "A Feint Plan": {
      id: "68170903",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Face-down monsters cannot be attacked this turn."
   },
   "Acid Trap Hole": {
      id: "41356845",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-down Defense Position monster on the field; flip it face-up, then destroy it if its DEF is 2000 or less, or return it face-down if its DEF is more than 2000."
   },
   "Assault on GHQ": {
      id: "62633180",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 monster you control; destroy that monster, then send 2 cards from the top of your opponent's Deck to the Graveyard."
   },
   "Beast Soul Swap": {
      id: "35149085",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 Beast monster you control; return it to the hand, and if you do, Special Summon 1 Beast-Type monster from your hand with the same Level as the monster that was returned to the hand."
   },
   "Castle Walls": {
      id: "44209392",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster on the field; it gains 500 DEF until the end of this turn."
   },
   "Compulsory Evacuation Device": {
      id: "94192409",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 monster on the field; return that target to the hand."
   },
   "D.D. Dynamite": {
      id: "08628798",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Inflict 300 damage to your opponent for each of their banished cards."
   },
   "Desert Sunlight": {
      id: "93747864",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "If you control a face-down Defense Position monster(s) or face-up Attack Position monster(s): Change all monsters you control to face-up Defense Position."
   },
   Disappear: {
      id: "24623598",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 card in your opponent's Graveyard; banish that target."
   },
   Disarmament: {
      id: "20727787",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Destroy all Equip Cards on the field."
   },
   Earthshaker: {
      id: "60866277",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Declare 2 monster Attributes; your opponent chooses 1 of them and destroys all monsters on the field with that Attribute."
   },
   "Energy Drain": {
      id: "56916805",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control; until the end of this turn, it gains 200 ATK/DEF for each card in your opponent's hand."
   },
   "Exhausting Spell": {
      id: "95451366",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Remove all Spell Counters on the field."
   },
   "Fiend's Hand Mirror": {
      id: "58607704",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When your opponent activates a Spell that targets exactly 1 Spell/Trap (and no other cards) on the field: Target another card that would be an appropriate target; that Spell now targets the new target."
   },
   "Gift of The Mystical Elf": {
      id: "98299011",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Gain 300 Life Points for each monster on the field."
   },
   Graverobber: {
      id: "61705417",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 Spell in your opponent's Graveyard; add it to your hand. If you use it, take 2000 damage immediately after. During the end phase, if you did not use it, send it to the Graveyard.",
      prepopLP: { hero: -2000 }
   },
   "Interdimensional Matter Transporter": {
      id: "36261276",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control; banish that target until the End Phase."
   },
   Meteorain: {
      id: "64274292",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "This turn, monsters you control inflict piercing battle damage to your opponent."
   },
   "Mind Crush": {
      id: "15800838",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Declare 1 card name; look at your opponent's hand, then discard all copies of it, otherwise you discard 1 random card."
   },
   "Pikeru's Circle of Enchantment": {
      id: "74270067",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "You take no damage from card effects this turn."
   },
   "Really Eternal Rest": {
      id: "28121403",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Destroy all equipped monsters."
   },
   "Solar Ray": {
      id: "44472639",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Inflict 600 damage to your opponent for each face-up LIGHT monster you control."
   },
   "The Spell Absorbing Life": {
      id: "99517131",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "If a face-down Defense Position monster or an Effect Monster is on the field: Change all face-down Defense Position monsters on the field to face-up Defense Position (Flip monsters' effects are not activated at this time), also gain 400 Life Points for each Effect Monster on the field."
   },
   "Threatening Roar": {
      id: "36361633",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Your opponent cannot declare an attack this turn."
   },
   "Two-Pronged Attack": {
      id: "83887306",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 2 monsters you control and 1 monster your opponent controls; destroy those targets."
   },
   "Windstorm of Etaqua": {
      id: "59744639",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Change the battle positions of all face-up monsters your opponent controls."
   },
   "Zero Gravity": {
      id: "83133491",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Change the battle positions of all face-up monsters on the field."
   },
   "Mirror Force": {
      id: "44095762",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When an opponent's monster declares an attack: Destroy all your opponent's Attack Position monsters.",
      limit: 1
   },
   "Torrential Tribute": {
      id: "53582587",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When a monster(s) is Summoned: Destroy all monsters on the field.",
      limit: 1
   },
   "Ring of Destruction": {
      id: "83555666",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster; destroy that face-up monster, and if you do, inflict damage to both players equal to that target's ATK.",
      limit: 1
   },
   "Sakuretsu Armor": {
      id: "56120475",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When an opponent's monster declares an attack: Target the attacking monster; destroy that target."
   },
   "Dust Tornado": {
      id: "60082869",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 Spell/Trap your opponent controls; destroy that target, then you can Set 1 Spell/Trap from your hand."
   },
   "Trap Dustshoot": {
      id: "64697231",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Activate only if your opponent has 4 or more cards in their hand. Look at your opponent's hand, select 1 Monster Card in it, and return that card to its owner's Deck."
   },
   "Jar of Greed": {
      id: "83968380",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Draw 1 card."
   },
   "Raigeki Break": {
      id: "04178474",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Discard 1 card, then target 1 card on the field; destroy it."
   },
   "Widespread Ruin": {
      id: "77754944",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When an opponent's monster declares an attack: Destroy the Attack Position monster your opponent controls with the highest ATK (your choice, if tied)."
   }
};

export default normalTraps;
