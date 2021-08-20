import { SPELL, RANDOM_DISCARD, HERO, VILLAIN, SPELL_TRAP, SEARCH_DECK, DISCARD_AND_DRAW, TOKENS, MILL_UNTIL, NORMAL_MONSTER, EFFECT_MONSTER } from "utils/constants.js";

const normalSpells = {
   "Jade Insect Whistle": {
      id: "95214051",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Your opponent places 1 Insect monster from their Deck on top of their Deck.",
      script: {
         name: SEARCH_DECK,
         tooltip: "Search your deck for an Insect monster, then put it in your Graveyard, and move it to the top of your Deck.",
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
      id: "81820689",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Look at 1 random card in your opponent's hand.",
      script: {
         name: RANDOM_DISCARD,
         tooltip: "Discard a random card, then add it it back to your hand to reveal it to your opponent.",
         displayCondition: {
            players: [VILLAIN],
            row: SPELL_TRAP
         }
      }
   },
   "Final Countdown": {
      id: "95308449",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Pay 2000 Life Points. <effect=Lingering>After 20 turns have passed (counting the turn you activate this card as the 1st turn), you win the Duel.</effect>",
      prepopLP: { hero: -2000 }
   },
   "Blue Medicine": {
      id: "20871001",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Gain 400 Life Points.",
      prepopLP: { hero: 400 }
   },
   "Dian Keto the Cure Master": {
      id: "84257639",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Gain 1000 Life Points.",
      prepopLP: { hero: 1000 }
   },
   "Goblin Thief": {
      id: "45311864",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 500 damage to your opponent and gain 500 LP.",
      prepopLP: { hero: 500, villain: -500 }
   },
   Hinotama: {
      id: "46130346",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 500 damage to your opponent.",
      prepopLP: { villain: -500 }
   },
   Ookazi: {
      id: "19523799",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 800 damage to your opponent.",
      prepopLP: { villain: -800 }
   },
   Raimei: {
      id: "56260110",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 300 damage to your opponent.",
      prepopLP: { villain: -300 }
   },
   "Red Medicine": {
      id: "38199696",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Gain 500 Life Points.",
      prepopLP: { hero: 500 }
   },
   "Tremendous Fire": {
      id: "46918794",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Take 500 damage and inflict 1000 damage to your opponent.",
      prepopLP: { hero: -500, villain: -1000 }
   },
   "A Wingbeat of Giant Dragon": {
      id: "28596933",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Return 1 Level 5 or higher Dragon-Type monster you control to the hand, and if you do, destroy all Spell and Trap Cards on the field."
   },
   "Acid Rain": {
      id: "21323861",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all face-up Machine monsters on the field."
   },
   "Amazoness Spellcaster": {
      id: "81325903",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: 'Target 1 "Amazoness" monster you control and 1 face-up monster your opponent controls; switch the original ATK of those targets until the end of this turn.'
   },
   "Block Attack": {
      id: "25880422",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up Attack Position monster your opponent controls; change that target to face-up Defense Position."
   },
   "Book of Taiyou": {
      id: "38699854",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-down monster on the field; change that target to face-up Attack Position."
   },
   "Dark-Piercing Light": {
      id: "45895206",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "If your opponent controls a face-down Defense Position monster(s): Change all face-down Defense Position monsters your opponent controls to face-up Defense Position."
   },
   "Double Snare": {
      id: "03682106",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up card on the field whose effect includes negating Traps' effects; destroy that target."
   },
   "Eternal Rest": {
      id: "95051344",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all equipped monsters."
   },
   "Fengsheng Mirror": {
      id: "37406863",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Look at your opponent's hand and discard 1 Spirit monster from their hand (if any)."
   },
   "Giant Trunade": {
      id: "42703248",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Return all Spell and Trap Cards on the field to the hand."
   },
   "Gravedigger Ghoul": {
      id: "82542267",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target up to 2 monsters in your opponent's Graveyard; banish them."
   },
   "Gryphon's Feather Duster": {
      id: "34370473",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all other Spells and Traps you control, and if you do, gain 500 Life Points for each card destroyed."
   },
   "Mind Control": {
      id: "37520316",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 monster your opponent controls; until the End Phase, take control of that target, but it cannot declare an attack or be Tributed."
   },
   "Restructer Revolution": {
      id: "99518961",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 200 damage to your opponent for each card in their hand."
   },
   "Secret Pass to the Treasures": {
      id: "77876207",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster you control with 1000 or less ATK; That face-up monster can attack directly this turn"
   },
   "Spirit Elimination": {
      id: "69832741",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Until the End Phase, if a monster(s) in the Graveyard would be banished: Banish an equal number of monsters on your side of the field instead."
   },
   "Thousand Energy": {
      id: "05703682",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Face-up Level 2 Normal Monsters (except Tokens) you control gain 1000 ATK/DEF until the End Phase. Destroy all face-up Level 2 Normal Monsters you control during the End Phase."
   },
   Timidity: {
      id: "40350910",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Neither player can destroy Set Spells/Traps until your opponent's next End Phase."
   },
   "Token Thanksgiving": {
      id: "57182235",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all tokens on the field, and if you do, gain 800 Life Points for each token destroyed."
   },
   "Triangle Power": {
      id: "32298781",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Face-up Level 1 Normal Monsters (except Tokens) you control gain 2000 ATK/DEF until the End Phase. Destroy all face-up Level 2 Normal Monsters you control during the End Phase."
   },
   "Hieroglyph Lithograph": {
      id: "10248192",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "<effect=Lingering>Pay 1000 Life Points; during this Duel, your hand size limit becomes 7.</effect>",
      prepopLP: { hero: -1000 }
   },
   "Upstart Goblin": {
      id: "70368879",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Draw 1 card, then your opponent gains 1000 Life Points.",
      prepopLP: { villain: 1000 },
      limit: 2
   },
   "Pot of Greed": {
      id: "55144522",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Draw 2 cards.",
      limit: 1
   },
   "Graceful Charity": {
      id: "79571449",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Draw 3 cards, then discard 2 cards.",
      limit: 1
   },
   "Delinquent Duo": {
      id: "44763025",
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
      id: "19613556",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all Spell and Trap Cards on the field.",
      limit: 1
   },
   Metamorphosis: {
      id: "46411259",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Tribute 1 monster; Special Summon 1 Fusion Monster from your Extra Deck with the same Level as the Tributed monster."
   },
   "Nobleman of Crossout": {
      id: "71044499",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-down monster on the field; destroy that target, and if you do, banish it, then, if it was a Flip monster, each player banishes all cards from their Deck with that monster's name.",
      limit: 2
   },
   "Nobleman of Extermination": {
      id: "17449108",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 face-down Spell/Trap on the field; destroy that target, and if you do, banish it, then, if it was a Trap, each player banishes all cards from their Deck with that card's name"
   },
   "Creature Swap": {
      id: "31036355",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Each player chooses 1 monster they control and switches control of those monsters with each other. Those monsters cannot change their battle positions for the rest of this turn.",
      limit: 2
   },
   "Smashing Ground": {
      id: "97169186",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy the 1 face-up monster your opponent controls that has the highest DEF (your choice, if tied)."
   },
   "Reinforcement of the Army": {
      id: "32807846",
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
            },
            levelOrSubtype: {
               operator: "<",
               value: 4
            }
         },
         autoClose: true
      },
      limit: 2
   },
   "Stamping Destruction": {
      id: "81385346",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "If you control a Dragon monster: Target 1 Spell/Trap on the field; destroy that target, and if you do, inflict 500 damage to its controller."
   },
   "Card Destruction": {
      id: "72892473",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Both players discard as many cards as possible from their hands, then each player draws the same number of cards they discarded.",
      script: {
         name: DISCARD_AND_DRAW,
         displayCondition: {
            players: [HERO, VILLAIN],
            row: SPELL_TRAP
         },
         params: "same"
      },
      limit: 1
   },
   "Shield & Sword": {
      id: "52097679",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Switch the original ATK and DEF of all face-up monsters currently on the field until the End Phase."
   },
   "Last Will": {
      id: "85602018",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "If a monster you control is sent to your Graveyard, but only the first time after this card's activation: <effect=Lingering>You can Special Summon 1 monster with 1500 or less ATK from your Deck.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            atk: {
               operator: "<",
               value: 1500
            }
         },
         autoClose: true
      },
   },
   "The Big March of Animals": {
      id: "01689516",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Until the end of this turn, all face-up Beast-Type monsters on your side of the field gain 200 ATK for each Beast-Type monster on your side of the field."
   },
   "Lightning Vortex": {
      id: "69162969",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Discard 1 card; destroy all face-up monsters your opponent controls.",
      limit: 1
   },
   "Book of Life": {
      id: "02204140",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 Zombie monster in your Graveyard and 1 monster in your opponent's Graveyard; Special Summon the first target, also banish the second target.",
   },
   "Meteor of Destruction": {
      id: "33767325",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "If your opponent's Life Points are higher than 3000: Inflict 1000 damage to your opponent.",
      prepopLP: { villain: -1000 }
   },
   "The Shallow Grave": {
      id: "43434803",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Each player targets 1 monster in their own Graveyard; each player Special Summons the target from their Graveyard in face-down Defense Position."
   },
   "A Feather of the Phoenix": {
      id: "49140998",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Discard 1 card, then target 1 card in your Graveyard; return that target to the top of your Deck."
   },
   "Spell Reproduction": {
      id: "29228529",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Send 2 Spells from your hand to the Graveyard, then target 1 Spell in your Graveyard; add it to your hand."
   },
   Exchange: {
      id: "05556668",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Both players reveal their hands and add 1 card from each other's hand to their hand."
   },
   "Exile of the Wicked": {
      id: "26725158",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Destroy all Fiend monsters on the field."
   },
   "Final Flame": {
      id: "73134081",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Inflict 600 damage to your opponent.",
      prepopLP: { villain: -600 }
   },
   Polymerization: {
      id: "24094653",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Fusion Summon 1 Fusion Monster from your Fusion Deck, using monsters from your hand or field as Fusion Material."
   },
   "Soul Release": {
      id: "05758500",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target up to 5 cards in any Graveyard(s); banish them."
   },
   "Soul of the Pure": {
      id: "47852924",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Increase your Life Points by 800 points.",
      prepopLP: { hero: 800 }
   },
   "Dimension Fusion": {
      id: "23557835",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Pay 2000 Life Points; both players Special Summon as many of their banished monsters as possible.",
      prepopLP: { hero: -2000 }
   },
   "Toon Table of Contents": {
      id: "89997728",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: 'Add 1 "Toon" card from your Deck to your hand.',
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            name: {
               operator: "CONTAINS",
               value: "Toon"
            }
         },
         autoClose: true
      }
   },
   Reasoning: {
      id: "58577036",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Your opponent declares a monster Level from 1 to 12. Excavate cards from the top of your Deck until you excavate a monster that can be Normal Summoned/Set, then, if that monster is the same Level as the one declared by your opponent, send all excavated cards to the Graveyard. If not, Special Summon the excavated monster, also send the remaining cards to the Graveyard",
      script: {
         name: MILL_UNTIL,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            cardType: {
               operator: "OR",
               value: [NORMAL_MONSTER, EFFECT_MONSTER]
            },
            text: {
               operator: "DOES_NOT_CONTAIN",
               value: "Cannot be Normal Summoned/Set."
            }
         }
      }
   },
   "Monster Gate": {
      id: "43040603",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Tribute 1 monster; excavate cards from the top of your Deck until you excavate a monster that can be Normal Summoned/Set. Special Summon it, also send the other excavated cards to the Graveyard.",
      script: {
         name: MILL_UNTIL,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            cardType: {
               operator: "OR",
               value: [NORMAL_MONSTER, EFFECT_MONSTER]
            },
            text: {
               operator: "DOES_NOT_CONTAIN",
               value: "Cannot be Normal Summoned/Set."
            }
         }
      }
   },
   "Brain Control": {
      id: "87910978",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Pay 800 Life Points, then target 1 face-up monster your opponent controls; take control of that target until the End Phase.",
      prepopLP: { hero: -800 }
   },
   "Monster Reincarnation": {
      id: "74848038",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Discard 1 card, then target 1 monster in your Graveyard; add it to your hand."
   },
   "Reversal Quiz": {
      id: "05990062",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Send all cards from your hand and your side of the field to the Graveyard, then call Spell, Trap, or Monster; reveal the top card of your Deck. If you called it right, both players exchange Life Points."
   },
   "Multiplication of Ants": {
      id: "22493811",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: 'Tribute 1 Insect-Type Monster on your side of the field. Special Summon 2 "Army Ant Tokens" (Insect/EARTH/Level 4/ATK 500/DEF 1200) on your side of the field. The tokens cannot be used as a Tribute for a Tribute Summon.',
      script: {
         name: TOKENS,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            name: "Army Ant Token",
            pos: "atk",
            count: 2
         }
      }
   },
   "Stray Lambs": {
      id: "60764581",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: 'Special Summon 2 "Lamb Tokens" (Beast/EARTH/Level 1/ATK 0/DEF 0) in Defense Position. You cannot Summon other monsters the turn you activate this card (but you can Set).',
      script: {
         name: TOKENS,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            name: "Lamb Token",
            pos: "def",
            count: 2
         }
      }
   },
   "Soul Exchange": {
      id: "68005187",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Target 1 monster your opponent controls; this turn, if you Tribute a monster, you must Tribute that target, as if you controlled it. You cannot conduct your Battle Phase the turn you activate this card."
   },
   "Cold Wave": {
      id: "60682203",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "At the start of your Main Phase 1: <effect=LingeringUntil your next Draw Phase, neither player can Set or activate the effects of Spells and Traps.</effect>"
   },
   "Back to Square One": {
      id: "47453433",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Discard 1 card, then target 1 monster on the field; place that target on the top of the Deck."
   },
   "Tribute to The Doomed": {
      id: "79759861",
      cardType: SPELL,
      levelOrSubtype: "Normal",
      text: "Discard 1 card, then target 1 monster on the field; destroy it."
   }
};

export default normalSpells;
