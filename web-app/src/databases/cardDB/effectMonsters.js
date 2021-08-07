import { HERO, VILLAIN, EFFECT_MONSTER, SEARCH_DECK, GRAVEYARD, MILL_UNTIL, MONSTER, SPELL, TRAP, ROLL_DICE, DISCARD_AND_DRAW } from "utils/constants";

const effectMonsters = {
   "Cure Mermaid": {
      cardType: EFFECT_MONSTER,
      attribute: "Water",
      levelOrSubtype: 4,
      atk: 1500,
      def: 800,
      text: "Fish/Effect - <effect=Trigger>As long as this card remains face-up on your side of the field, increase your Life Points by 800 points during each of your Standby Phases.</effect>",
      prepopLP: { hero: 800 }
   },
   "Hysteric Fairy": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1800,
      def: 500,
      text: "Fairy/Effect - <effect=Ignition>Tribute 2 monsters on your side of the field to increase your Life Points by 1000 points.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Nuvia the Wicked": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 2000,
      def: 800,
      text: "Fiend/Effect - <effect=Trigger>If this monster is Normal Summoned, destroy this card.</effect> <effect=Continuous>If your opponent controls any monster, decrease the ATK of this card by 200 points for each monster on your opponent's side of the field.</effect>"
   },
   "The Forgiving Maiden": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 850,
      def: 2000,
      text: "Fairy/Effect - <effect=Ignition>Offer this face-up card as a Tribute to return 1 of your monsters destroyed in battle during this turn to your hand.</effect>"
   },
   "Shining Angel": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1400,
      def: 800,
      text: "Fairy/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 LIGHT monster with 1500 or less ATK from your Deck, in face-up Attack Position.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            atk: {
               operator: "<",
               value: "1500"
            },
            attribute: {
               value: "Light"
            }
         },
         autoClose: true
      }
   },
   "Black Luster Soldier - Envoy of the Beginning": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text: "Warrior/Effect – Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your Graveyard. Once per turn, you can activate 1 of these effects. ● <effect=Ignition>Target 1 monster on the field; banish it. This card cannot attack the turn this effect is activated.</effect> ● <effect=Trigger>If this attacking card destroys an opponent's monster by battle: It can make a second attack in a row.</effect>",
      limit: 1
   },
   "Airknight Parshath": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 5,
      atk: 1900,
      def: 1400,
      text: "Fairy/Effect – <effect=Continuous>If this card attacks a Defense Position monster, inflict piercing battle damage.</effect> <effect=Trigger>If this card inflicts battle damage to your opponent: Draw 1 card.</effect>"
   },
   "Magician of Faith": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 1,
      atk: 300,
      def: 400,
      text: "Spellcaster/Flip/Effect – <effect=Trigger>FLIP: Target 1 Spell in your Graveyard; add that target to your hand.</effect>"
   },
   "Magical Merchant": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 1,
      atk: 200,
      def: 700,
      text: "Insect/Flip/Effect – <effect=Trigger>FLIP: Excavate cards from the top of your Deck until you excavate a Spell/Trap, then add that card to your hand, also send the remaining cards to the Graveyard.</effect>",
      script: {
         name: MILL_UNTIL,
         message: "Spell or Trap",
         displayCondition: {
            players: [HERO],
            row: MONSTER
         },
         params: {
            cardType: {
               operator: "OR",
               value: [SPELL, TRAP]
            }
         }
      }
   },
   "Abyss Soldier": {
      cardType: EFFECT_MONSTER,
      attribute: "Water",
      levelOrSubtype: 4,
      atk: 1800,
      def: 1300,
      text: "Aqua/Effect – <effect=Ignition>Once per turn: You can discard 1 WATER monster to the Graveyard to target 1 card on the field; return it to the hand.</effect>",
      limit: 2
   },
   "Breaker the Magical Warrior": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Spellcaster/Effect – <effect=Trigger>If this card is Normal Summoned: Place 1 Spell Counter on it (max. 1).</effect> <effect=Continuous>Gains 300 ATK for each Spell Counter on it.</effect> <effect=Ignition>You can remove 1 Spell Counter from this card, then target 1 Spell/Trap on the field; destroy that target.</effect>",
      limit: 1
   },
   Tsukuyomi: {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1100,
      def: 1400,
      text: "Spellcaster/Effect – Cannot be Special Summoned. <effect=Trigger>If this card is Normal Summoned or flipped face-up: Target 1 face-up monster on the field; change that target to face-down Defense Position.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   Sangan: {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 3,
      atk: 1000,
      def: 600,
      text: "Fiend/Effect – <effect=Trigger>If this card is sent from the field to the Graveyard: Add 1 monster with 1500 or less ATK from your Deck to your hand.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            atk: {
               operator: "<",
               value: "1500"
            }
         },
         autoClose: true
      },
      limit: 1
   },
   "Sinister Serpent": {
      cardType: EFFECT_MONSTER,
      attribute: "Water",
      levelOrSubtype: 1,
      atk: 300,
      def: 250,
      text: "Reptile/Effect – <effect=Trigger>During your Standby Phase, if this card is in your Graveyard: You can return it to your hand.</effect>",
      limit: 1
   },
   "Tribe-Infecting Virus": {
      cardType: EFFECT_MONSTER,
      attribute: "Water",
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Aqua/Effect – <effect=Ignition>Discard 1 card, then declare 1 Type of monster; Destroy all face-up monsters of the declared Type on the field.</effect>",
      limit: 1
   },
   "Morphing Jar": {
      cardType: EFFECT_MONSTER,
      attribute: "Earth",
      levelOrSubtype: 2,
      atk: 700,
      def: 600,
      text: "Rock/Flip/Effect – <effect=Trigger>FLIP: Both players discard their entire hands, then draw 5 cards.</effect>",
      script: {
         name: DISCARD_AND_DRAW,
         displayCondition: {
            players: [HERO, VILLAIN],
            row: MONSTER
         },
         params: 5
      },
      limit: 1
   },
   "Asura Priest": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1700,
      def: 1200,
      text: "Fairy/Spirit/Effect – Cannot be Special Summoned. <effect=Trigger>During the End Phase of the turn this card is Normal Summoned or flipped face-up: Return it to the hand.</effect> <effect=Continuous>This card can attack all monsters your opponent controls once each.</effect>"
   },
   "Kycoo the Ghost Destroyer": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1800,
      def: 700,
      text: "Spellcaster/Effect – <effect=Trigger>When this card inflicts battle damage to your opponent: You can target up to 2 monsters in their Graveyard; banish those targets.</effect> <effect=Continuous>Your opponent cannot banish cards from either Graveyard.</effect>"
   },
   "D.D. Warrior Lady": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1500,
      def: 1600,
      text: "Warrior/Effect – <effect=Trigger>After damage calculation, when this card battles an opponent's monster: You can banish that monster, also banish this card.</effect>",
      limit: 1
   },
   "Chaos Sorcerer": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 6,
      atk: 2300,
      def: 2000,
      text: "Spellcaster/Effect – Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your Graveyard. <effect=Ignition>Once per turn: You can target 1 face-up monster on the field; banish that target. This card cannot attack the turn you activate this effect.</effect>"
   },
   "Dekoichi the Battlechanted Locomotive": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: 'Machine/Flip/Effect – <effect=Trigger>FLIP: Draw 1 card, then draw 1 additional card for each face-up "Bokoichi the Freightening Car" you control.</effect>'
   },
   "Jowgen the Spiritualist": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 3,
      atk: 200,
      def: 1300,
      text: "Spellcaster/Effect – <effect=Ignition>You can discard 1 random card from your hand to the Graveyard; destroy all Special Summoned monsters on the field. Neither player can Special Summon monsters.</effect>"
   },
   "Mystic Swordsman LV2": {
      cardType: EFFECT_MONSTER,
      attribute: "Earth",
      levelOrSubtype: 2,
      atk: 900,
      def: 0,
      text: 'Warrior/Effect – <effect=Trigger>At the start of the Damage Step, if this card attacked a face-down Defense Position monster: Destroy that monster.</effect> <effect=Trigger>During the End Phase, if this card destroyed a monster by battle this turn: You can send this face-up card to the Graveyard; Special Summon 1 "Mystic Swordsman LV4" from your hand or Deck.</effect>'
   },
   "Roulette Barrel": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1000,
      def: 2000,
      text: "Machine/Effect – <effect=Ignition>Once per turn: You can roll a six-sided die twice, choose 1 result, and destroy 1 monster on the field whose Level is equal to that result.</effect>",
      script: {
         name: ROLL_DICE,
         displayCondition: {
            players: [HERO],
            row: MONSTER
         },
         params: 2
      }
   },
   "Zaborg the Thunder Monarch": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 5,
      atk: 2400,
      def: 1000,
      text: "Thunder/Effect – <effect=Trigger>If this card is Tribute Summoned: Target 1 monster on the field; destroy that target.</effect>"
   },
   "Blade Knight": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Warrior/Effect – <effect=Continuous>While you have 1 or less cards in your hand, this card gains 400 ATK.</effect> <effect=Continuous>If you control no other monsters, the effects of Flip monsters destroyed by battle with this card are negated.</effect>"
   },
   "Don Zaloog": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1400,
      def: 1500,
      text: "Warrior/Effect – <effect=Trigger>When this card inflicts Battle Damage to your opponent, you can activate 1 of these effects: ● Discard 1 random card from their hand. ● Send the top 2 cards of their Deck to the Graveyard.</effect>"
   },
   "Exiled Force": {
      cardType: EFFECT_MONSTER,
      attribute: "Earth",
      levelOrSubtype: 4,
      atk: 1000,
      def: 1000,
      text: "Warrior/Effect – <effect=Ignition>You can Tribute this card to target 1 monster on the field; destroy that target.</effect>",
      limit: 1
   },
   "Ninja Grandmaster Sasuke": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1800,
      def: 1000,
      text: "Warrior/Effect – <effect=Trigger>At the start of the Damage Step, if this card attacks a face-up Defense Position monster: Destroy that monster.</effect>"
   },
   "Skilled Dark Magician": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1900,
      def: 1700,
      text: 'Spellcaster/Effect – <effect=Continuous>Each time a Spell Card is activated, place 1 Spell Counter on this card when that Spell resolves (max. 3).</effect> <effect=Ignition>You can Tribute this card with 3 Spell Counters on it; Special Summon 1 "Dark Magician" from your hand, Deck, or GY.</effect>',
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            name: {
               value: "Dark Magician"
            }
         },
         autoClose: true
      }
   },
   "Thunder Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 5,
      atk: 1600,
      def: 1500,
      text: 'Thunder/Effect – You can discard this card; add up to 2 "Thunder Dragon" from your Deck to your hand.',
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            name: {
               value: "Thunder Dragon"
            }
         }
      }
   },
   "Zombyra the Dark": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 2100,
      def: 200,
      text: "Warrior/Effect – <effect=Continuous>Cannot attack your opponent directly.</effect> <effect=Trigger>If this card destroys a monster by battle: This card loses 200 ATK.</effect>"
   },
   "Armed Dragon LV5": {
      cardType: EFFECT_MONSTER,
      attribute: "Wind",
      levelOrSubtype: 5,
      atk: 2400,
      def: 1700,
      text: 'Dragon/Effect – <effect=Ignition>You can send 1 monster from your hand to the GY, then target 1 monster your opponent controls with ATK less than or equal to the sent monster\'s ATK; destroy that target.</effect> <effect=Trigger>During the End Phase, if this card destroyed a monster by battle this turn: You can send this card to the GY; Special Summon 1 "Armed Dragon LV7" from your hand or Deck.</effect>',
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            name: {
               value: "Armed Dragon LV7"
            }
         },
         autoClose: true
      }
   },
   "Cave Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: "Wind",
      levelOrSubtype: 4,
      atk: 2000,
      def: 100,
      text: "Dragon/Effect – Cannot be Normal Summoned while you control a monster. <effect=Continuous>This card cannot declare an attack unless you control another Dragon-Type monster.</effect>"
   },
   "Different Dimension Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 5,
      atk: 1200,
      def: 1500,
      text: "Dragon/Effect – <effect=Continuous>This card cannot be destroyed by Spell/Trap effects that do not target it.</effect> <effect=Continuous>This card cannot be destroyed by battle with a monster that has 1900 or less ATK.</effect>"
   },
   "Fusilier Dragon, the Dual-Mode Beast": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 7,
      atk: 2800,
      def: 2000,
      text: "Machine/Effect – You can Normal Summon/Set this card without Tributing, but its original ATK and DEF become halved."
   },
   "Mirage Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1600,
      def: 600,
      text: "Dragon/Effect – <effect=Continuous>Your opponent cannot activate Trap Cards during the Battle Phase.</effect>"
   },
   "Rare Metal Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 2400,
      def: 1200,
      text: "Dragon/Effect – This card cannot be Normal Summoned or Set."
   },
   "Tyrant Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 2900,
      def: 2500,
      text: "Dragon/Effect – <effect=Trigger>During your Battle Phase, if your opponent controls a monster after this card's first attack, this card can make a second attack.</effect> <effect=Trigger>Negate any Trap effects that target this card, and if you do, destroy that Trap Card.</effect> This card cannot be Special Summoned from the Graveyard, unless you Tribute 1 Dragon-Type monster."
   }
};

export default effectMonsters;
