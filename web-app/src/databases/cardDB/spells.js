import { SPELL, RANDOM_DISCARD, HERO, VILLAIN, SPELL_TRAP, TOKENS, SEARCH_DECK } from "utils/constants.js";

const spells = {
   "Jade Insect Whistle": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Your opponent places 1 Insect monster from their Deck on top of their Deck.",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [VILLAIN],
            row: SPELL_TRAP
         },
         params: {
            text: {
               operator: "TYPEMATCH",
               value: "Insect"
            }
         },
         autoClose: true
      }
   },
   "The Inexperienced Spy": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Look at 1 random card in your opponent's hand.",
      script: {
         name: RANDOM_DISCARD,
         displayCondition: {
            players: [VILLAIN],
            row: SPELL_TRAP
         }
      }
   },
   Demotion: {
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>The equipped monster has its Level reduced by 2.</effect>"
   },
   "Dragon Treasure": {
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Dragon monster. It gains 300 ATK/DEF.</effect>"
   },
   "Final Countdown": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Pay 2000 Life Points. <effect=Lingering>After 20 turns have passed (counting the turn you activate this card as the 1st turn), you win the Duel.</effect>",
      prepopLP: { hero: 2000 }
   },
   "Follow Wind": {
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Winged-Beast monster. It gains 300 ATK/DEF.</effect>"
   },
   "Germ Infection": {
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a non-Machine monster. During its controller's Standby Phase, it loses 300 ATK.</effect>"
   },
   "Blue Medicine": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Gain 400 Life Points.",
      prepopLP: { hero: 400 }
   },
   "Dian Keto the Cure Master": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Gain 1000 Life Points.",
      prepopLP: { hero: 1000 }
   },
   "Goblin Thief": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 500 damage to your opponent and gain 500 LP.",
      prepopLP: { hero: 500, villain: -500 }
   },
   Hinotama: {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 500 damage to your opponent.",
      prepopLP: { villain: -500 }
   },
   Ookazi: {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 800 damage to your opponent.",
      prepopLP: { villain: -800 }
   },
   Raimei: {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 300 damage to your opponent.",
      prepopLP: { villain: -300 }
   },
   "Red Medicine": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Gain 500 Life Points.",
      prepopLP: { hero: 500 }
   },
   "Tremendous Fire": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Take 500 damage and inflict 1000 damage to your opponent.",
      prepopLP: { hero: -500, villain: -1000 }
   },
   "A Wingbeat of Giant Dragon": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Return 1 Level 5 or higher Dragon-Type monster you control to the hand, and if you do, destroy all Spell and Trap Cards on the field."
   },
   "Acid Rain": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all face-up Machine monsters on the field."
   },
   "Amazoness Spellcaster": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: 'Target 1 "Amazoness" monster you control and 1 face-up monster your opponent controls; switch the original ATK of those targets until the end of this turn.'
   },
   "Block Attack": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up Attack Position monster your opponent controls; change that target to face-up Defense Position."
   },
   "Book of Taiyou": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-down monster on the field; change that target to face-up Attack Position."
   },
   "Dark-Piercing Light": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "If your opponent controls a face-down Defense Position monster(s): Change all face-down Defense Position monsters your opponent controls to face-up Defense Position."
   },
   "Double Snare": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up card on the field whose effect includes negating Traps' effects; destroy that target."
   },
   "Eternal Rest": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all equipped monsters."
   },
   "Fengsheng Mirror": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Look at your opponent's hand and discard 1 Spirit monster from their hand (if any)."
   },
   "Giant Trunade": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Return all Spell and Trap Cards on the field to the hand."
   },
   "Gravedigger Ghoul": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target up to 2 monsters in your opponent's Graveyard; banish them."
   },
   "Gryphon's Feather Duster": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all other Spells and Traps you control, and if you do, gain 500 Life Points for each card destroyed."
   },
   "Mind Control": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 monster your opponent controls; until the End Phase, take control of that target, but it cannot declare an attack or be Tributed."
   },
   "Restructer Revolution": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 200 damage to your opponent for each card in their hand."
   },
   "Secret Pass to the Treasures": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control with 1000 or less ATK; That face-up monster can attack directly this turn"
   },
   "Soul Reversal": {
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 Flip monster in your Graveyard; add that target to the top of the Deck."
   },
   "Spirit Elimination": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Until the End Phase, if a monster(s) in the Graveyard would be banished: Banish an equal number of monsters on your side of the field instead."
   },
   "The Reliable Guardian": {
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 face-up monster on the field; it gains 700 DEF until the end of this turn."
   },
   "Thousand EnerGraveyard": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Face-up Level 2 Normal Monsters (except Tokens) you control gain 1000 ATK/DEF until the End Phase. Destroy all face-up Level 2 Normal Monsters you control during the End Phase."
   },
   Timidity: {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Neither player can destroy Set Spells/Traps until your opponent's next End Phase."
   },
   "Token Thanksgiving": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all tokens on the field, and if you do, gain 800 Life Points for each token destroyed."
   },
   "Triangle Power": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Face-up Level 1 Normal Monsters (except Tokens) you control gain 2000 ATK/DEF until the End Phase. Destroy all face-up Level 2 Normal Monsters you control during the End Phase."
   },
   "Ballista of Rampart Smashing": {
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>If the equipped monster attacks a face-down Defense Position monster, it gains 1500 ATK during damage calculation only.</effect>"
   },
   "Beast Fangs": {
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Beast monster. It gains 300 ATK/DEF.</effect>"
   },
   "Blessings of the Nile": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Trigger-like>Each time a card(s) is discarded from your hand to the Graveyard by an opponent's card effect: Gain 1000 Life Points.</effect>"
   },
   "Book of Secret Arts": {
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Spellcaster monster. It gains 300 ATK/DEF.</effect>"
   },
   "Chain EnerGraveyard": {
      cardType: SPELL,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Each player must pay 500 Life Points per card to Normal Summon, Special Summon, Set or activate cards from his/her respective hand.</effect>",
      prepopLP: { hero: -500, villain: -500 }
   },
   "Chorus of Sanctuary": {
      cardType: SPELL,
      levelOrSubtype: "Field",
      text: "<effect=Continuous-like>Defense Position monsters gain 500 DEF.</effect>"
   },
   Necrovalley: {
      cardType: SPELL,
      levelOrSubtype: "Field",
      text: '<effect=Continuous-like>All "Gravekeeper\'s" monsters gain 500 ATK and DEF.</effect> <effect=Continuous-like>Cards in the Graveyard cannot be banished.</effect> <effect=Continuous-like>Negate any card effect that would move a card in the Graveyard, other than itself, to a different place.</effect> <effect=Continuous-like>Negate any card effect that changes Types or Attributes in the Graveyard.</effect>'
   },
   "Premature Burial": {
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "Activate this card by paying 800 Life Points, then target 1 monster in your Graveyard; Special Summon that target in Attack Position and equip it with this card. <effect=Continuous-like>When this card is destroyed, destroy the equipped monster.</effect>",
      prepopLP: { hero: -800 },
      limit: 1
   },
   "Upstart Goblin": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Draw 1 card, then your opponent gains 1000 Life Points.",
      prepopLP: { villain: 1000 },
      limit: 2
   },
   "Pot of Greed": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Draw 2 cards.",
      limit: 1
   },
   "Graceful Charity": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Draw 3 cards, then discard 2 cards.",
      limit: 1
   },
   "Delinquent Duo": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Pay 1000 Life Points; your opponent discards 1 random card, and if they have any other cards in their hand, discard 1 more card of their choice.",
      prepopLP: { hero: -1000 },
      script: {
         name: RANDOM_DISCARD,
         displayCondition: {
            players: [VILLAIN],
            row: SPELL_TRAP
         }
      },
      limit: 1
   },
   "Heavy Storm": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all Spell and Trap Cards on the field.",
      limit: 1
   },
   "Mystical Space Typhoon": {
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 Spell/Trap on the field; destroy that target.",
      limit: 1
   },
   "Snatch Steal": {
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "Equip only to a monster your opponent controls. <effect=Continuous-like>Take control of the equipped monster.</effect> <effect=Trigger-like>During each of your opponent's Standby Phases: They gain 1000 Life Points.</effect>",
      prepopLP: { villain: 1000 },
      limit: 1
   },
   Metamorphosis: {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Tribute 1 monster; Special Summon 1 Fusion Monster from your Extra Deck with the same Level as the Tributed monster."
   },
   Scapegoat: {
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
      cardType: SPELL,
      levelOrSubtype: "Quick-Play",
      text: "Target 1 face-up monster on the field; change that target to face-down Defense Position."
   },
   "Nobleman of Crossout": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-down monster on the field; destroy that target, and if you do, banish it, then, if it was a Flip monster, each player banishes all cards from their Deck with that monster's name.",
      limit: 2
   },
   "Creature Swap": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Each player chooses 1 monster they control and switches control of those monsters with each other. Those monsters cannot change their battle positions for the rest of this turn.",
      limit: 2
   },
   "Smashing Ground": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy the 1 face-up monster your opponent controls that has the highest DEF (your choice, if tied)."
   },
   "Reinforcement of the Army": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Add 1 Level 4 or lower Warrior monster from your Deck to your hand.",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            text: {
               operator: "TYPEMATCH",
               value: "Warrior"
            }
         },
         autoClose: true
      },
      limit: 2
   },
   "Stamping Destruction": {
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "If you control a Dragon monster: Target 1 Spell/Trap on the field; destroy that target, and if you do, inflict 500 damage to its controller."
   }
};

export default spells;
