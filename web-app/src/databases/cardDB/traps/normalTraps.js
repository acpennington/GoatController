import { TRAP, HERO, VILLAIN, SEARCH_DECK, SPELL_TRAP, FLIP_COINS, TOKENS, GRAVEYARD } from "utils/constants.js";


const normalTraps = {
   "Reckless Greed": {
      id: "37576645",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Draw 2 cards and skip your next 2 Draw Phases.",
      script: {
         name: SKIP_DRAWS,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: 2
      },
      limit: 1
   },
   "Time Seal": {
      id: "35316708",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Skip the Draw Phase of your opponent's next turn.",
      script: {
         name: SKIP_DRAWS,
         displayCondition: {
            players: [VILLAIN],
            row: SPELL_TRAP
         },
         params: 1
      }
   },
   "Penalty Game!": {
      id: "0967928",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When your opponent has 4 cards in their hand: Activate 1 of these effects.● Your opponent cannot draw during their next Draw Phase.● Your opponent cannot activate Spell/Trap Cards this turn.",
      script: {
         name: SKIP_DRAWS,
         displayCondition: {
            players: [VILLAIN],
            row: SPELL_TRAP
         },
         params: 1
      }
   },
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
   },
   Waboku: {
      id: "12607053",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "You take no battle damage this turn. Your monsters cannot be destroyed by battle this turn"
   },
   "Needle Ceiling": {
      id: "38411870",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When there are 4 or more monsters on the field: Destroy all face-up monsters."
   },
   "Magic Cylinder": {
      id: "62279055",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When an opponent's monster declares an attack: Target the attacking monster; negate the attack, and if you do, inflict damage to your opponent equal to its ATK.",
      limit: 1
   },
   Ceasefire: {
      id: "36468556",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "If a face-down Defense Position monster or an Effect Monster is on the field: Change all face-down Defense Position monsters on the field to face-up Defense Position (Flip monsters' effects are not activated at this time), also inflict 500 damage to your opponent for each Effect Monster on the field.",
      limit: 1
   },
   "Just Desserts": {
      id: "24068492",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Inflict 500 damage to your opponent for each monster they control."
   },
   "Secret Barrel": {
      id: "27053506",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Inflict 200 damage to your opponent for each card in their hand and each card they control."
   },
   "Bottomless Trap Hole": {
      id: "29401950",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When your opponent Summons a monster(s) with 1500 or more ATK: Destroy that monster(s) with 1500 or more ATK, and if you do, banish it."
   },
   "Ojama Trio": {
      id: "29843091",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: `Special Summon 3 "Ojama Tokens" (Beast-Type/LIGHT/Level 2/ATK 0/DEF 1000) to your opponent's field in Defense Position.<effect=Lingering>They cannot be Tributed for a Tribute Summon, and each time 1 is destroyed, its controller takes 300 damage.</effect>`,
      script: {
         name: TOKENS,
         displayCondition: {
            players: [VILLAIN],
            row: SPELL_TRAP
         },
         params: {
            name: "Ojama Token",
            pos: "def",
            count: 3
         }
      }
   },
   "Fake Trap": {
      id: "03027001",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When your opponent activates a card or effect that would destroy a Trap(s) you control: Destroy this card instead of that Trap(s). (Reveal all of your face-down Traps that would have been destroyed)."
   },
   "Rock Bombardment": {
      id: "20781762",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Send 1 Rock monster from your Deck to the Graveyard; inflict 500 damage to your opponent.",
      prepopLP: { villain: -500 }
   },
   "Backup Soldier": {
      id: "36280194",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "While there are 5 or more monsters in your Graveyard: Target up to 3 non-Effect Monsters with 1500 or less ATK in your Graveyard; add them to your hand."
   },
   "Fiend Comedian": {
      id: "81172176",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Toss a coin and call it. If you call it right, banish all cards from your opponent's Graveyard If you call it wrong, send cards from the top of your Deck to the Graveyard equal to the number of cards in your opponent's Graveyard",
      script: {
         name: FLIP_COINS,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: 1
      }
   },
   Metalmorph: {
      id: "68540058",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster on the field; equip this card to that target.<effect=Continuous-like>It gains 300 ATK/DEF.</effect> <effect=Continuous-like>If it attacks, it gains ATK equal to half the ATK of the attack target, during damage calculation only.</effect>"
   },
   "Spellbinding Circle": {
      id: "18807108",
      cardType: TRAP,
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Activate this card by targeting 1 monster your opponent controls; it cannot attack or change its battle position.</effect> <effect=Continuous-like>When that monster is destroyed, destroy this card.</effect>"
   },
   Taunt: {
      id: "90740329",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Activate only during your opponent's Main Phase 1; select 1 monster on your side of the field. While the selected card remains on the field, if your opponent attacks with a monster(s) this turn, they must select the selected monster as the attack target."
   },
   Tragedy: {
      id: "35686187",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "When a face-up Attack Position monster(s) your opponent controls is changed to face-up Defense Position: Destroy all Defense Position monsters your opponent controls."
   },
   "Statue of the Wicked": {
      id: "65810489",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: '<effect=Trigger-like>When this face-down card is destroyed and sent to the Graveyard, Special Summon 1 "Wicked Token" (Fiend/DARK/Level 4 /ATK 1000/DEF 1000) on your side of the field.</effect>',
      script: {
         name: TOKENS,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            name: "Wicked Token",
            pos: "atk",
            count: 1
         }
      }
   },
   "Rite of Spirit": {
      id: "30450531",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: `Target 1 "Gravekeeper's' monster in your Graveyard; Special Summon that target. This card's activation and effect are unaffected by "Necrovalley".`
   },
   "Phoenix Wing Wind Blast": {
      id: "63356631",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: "Discard 1 card, then target 1 card your opponent controls; place that target on the top of the Deck."
   },
   "Physical Double": {
      id: "63442604",
      cardType: TRAP,
      levelOrSubtype: "Normal",
      text: `During your opponent's turn: Target 1 face-up monster your opponent controls; Special Summon 1 "Mirage Token" with the same Level, Type, Attribute, ATK, and DEF as that target. Destroy this Token during the End Phase.`,
      script: {
         name: TOKENS,
         displayCondition: {
            players: [HERO],
            row: SPELL_TRAP
         },
         params: {
            name: "Mirage Token",
            pos: "atk",
            count: 1
         }
      }
   }
};

export default normalTraps;
