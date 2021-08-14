import { TRAP, VILLAIN, SEARCH_DECK, SPELL_TRAP, RANDOM_DISCARD } from "utils/constants";

const traps = {
   "Astral Barrier": {
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>If your opponent's monster attacks a monster you control: You can make the attack a direct attack instead.</effect>"
   },
   "Arsenal Robber": {
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
   "Destruction Ring": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control; destroy that face-up monster, and if you do, each player takes 1000 damage.",
      prepopLP: { hero: -1000, villain: -1000 }
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
      levelOrSubtype: "Normal",
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
   "A Feint Plan": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Face-down monsters cannot be attacked this turn."
   },
   "Acid Trap Hole": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-down Defense Position monster on the field; flip it face-up, then destroy it if its DEF is 2000 or less, or return it face-down if its DEF is more than 2000."
   },
   "Assault on GHQ": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 monster you control; destroy that monster, then send 2 cards from the top of your opponent's Deck to the Graveyard."
   },
   "Beast Soul Swap": {
      cardType: TRAP,
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
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster on the field; it gains 500 DEF until the end of this turn."
   },
   "Compulsory Evacuation Device": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 monster on the field; return that target to the hand."
   },
   "D.D. Dynamite": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Inflict 300 damage to your opponent for each of their banished cards."
   },
   "Desert Sunlight": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "If you control a face-down Defense Position monster(s) or face-up Attack Position monster(s): Change all monsters you control to face-up Defense Position."
   },
   Disappear: {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 card in your opponent's Graveyard; banish that target."
   },
   Disarmament: {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Destroy all Equip Cards on the field."
   },
   Earthshaker: {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Declare 2 monster Attributes; your opponent chooses 1 of them and destroys all monsters on the field with that Attribute."
   },
   "EnerGraveyard Drain": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control; until the end of this turn, it gains 200 ATK/DEF for each card in your opponent's hand."
   },
   "Exhausting Spell": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Remove all Spell Counters on the field."
   },
   "Fiend's Hand Mirror": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When your opponent activates a Spell that targets exactly 1 Spell/Trap (and no other cards) on the field: Target another card that would be an appropriate target; that Spell now targets the new target."
   },
   "Gift of The Mystical Elf": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Gain 300 Life Points for each monster on the field."
   },
   Graverobber: {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 Spell in your opponent's Graveyard; add it to your hand. If you use it, take 2000 damage immediately after. During the end phase, if you did not use it, send it to the Graveyard.",
      prepopLP: { hero: -2000 }
   },
   "Interdimensional Matter Transporter": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control; banish that target until the End Phase."
   },
   Meteorain: {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "This turn, monsters you control inflict piercing battle damage to your opponent."
   },
   "Mind Crush": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Declare 1 card name; look at your opponent's hand, then discard all copies of it, otherwise you discard 1 random card."
   },
   "Pikeru's Circle of Enchantment": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "You take no damage from card effects this turn."
   },
   "Really Eternal Rest": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Destroy all equipped monsters."
   },
   "Solar Ray": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Inflict 600 damage to your opponent for each face-up LIGHT monster you control."
   },
   "The Spell Absorbing Life": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "If a face-down Defense Position monster or an Effect Monster is on the field: Change all face-down Defense Position monsters on the field to face-up Defense Position (Flip monsters' effects are not activated at this time), also gain 400 Life Points for each Effect Monster on the field."
   },
   "Threatening Roar": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Your opponent cannot declare an attack this turn."
   },
   "Two-Pronged Attack": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 2 monsters you control and 1 monster your opponent controls; destroy those targets."
   },
   "Windstorm of Etaqua": {
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Change the battle positions of all face-up monsters your opponent controls."
   },
   "Zero Gravity": {
      cardType: TRAP,
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
