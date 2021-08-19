import {
   HERO,
   VILLAIN,
   EFFECT_MONSTER,
   NORMAL_MONSTER,
   RITUAL_MONSTER,
   RANDOM_DISCARD,
   SEARCH_DECK,
   GRAVEYARD,
   MILL_UNTIL,
   MONSTER,
   SPELL,
   TRAP,
   ROLL_DICE,
   DISCARD_AND_DRAW,
   FLIP_COINS,
   DARK,
   LIGHT,
   WATER,
   FIRE,
   EARTH,
   WIND
} from "utils/constants.js";

const effectMonsters = {
   "Ryu Kokki": {
      id: "57281778",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2400,
      def: 2000,
      text: "Zombie/Effect – <effect=Trigger>At the end of the Damage Step, if this card battled a Warrior or Spellcaster monster: Destroy that monster.</effect>"
   },
   "Ryu-Kishin Clown": {
      id: "42647539",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 800,
      def: 500,
      text: "Fiend/Effect – <effect=Trigger>When this card is Summoned: Target 1 face-up monster on the field; change its battle position.</effect>"
   },
   "Sasuke Samurai": {
      id: "16222645",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 2,
      atk: 500,
      def: 800,
      text: "Warrior/Effect – <effect=Trigger>At the start of the Damage Step, if this card attacks a face-down Defense Position monster: Destroy that face-down monster.</effect>"
   },
   "Sasuke Samurai #3": {
      id: "77379481",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1000,
      text: "Warrior/Effect – <effect=Trigger>When this card inflicts Battle Damage to your opponent: Your opponent draws cards until their hand has 7 cards.</effect>"
   },
   "Servant of Catabolism": {
      id: "02792265",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 700,
      def: 500,
      text: "Aqua/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   Shadowslayer: {
      id: "20939559",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 200,
      text: "Fiend/Effect – <effect=Continuous>If all monsters your opponent controls are in Defense Position, this card can attack directly.</effect>"
   },
   "Skull-Mark Ladybug": {
      id: "64306248",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 500,
      def: 1500,
      text: "Insect/Effect – <effect=Trigger>When this card is sent to the Graveyard: Gain 1000 Life Points.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Slate Warrior": {
      id: "78636495",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1900,
      def: 400,
      text: "Fiend/Flip/Effect – <effect=Trigger>FLIP: This card gains 500 ATK/DEF.</effect> <effect=Trigger>If this card is destroyed by battle: The monster that destroyed it loses 500 ATK/DEF</effect>"
   },
   "Spirit Caller": {
      id: "48659020",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1000,
      text: "Spellcaster/Flip/Effect – <effect=Trigger>FLIP: You can target 1 Level 3 or lower Normal Monster in your Graveyard; Special Summon that target.</effect>"
   },
   "Sonic Jammer": {
      id: "84550200",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 2,
      atk: 350,
      def: 650,
      text: "Machine/Flip/Effect – <effect=Trigger>FLIP: Your opponent cannot activate any Spells until the end of the next turn.</effect>"
   },
   "Spirit of the Breeze": {
      id: "53530069",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 0,
      def: 1800,
      text: "Fairy/Effect – <effect=Trigger>Once per turn, during your Standby Phase: Gain 1000 Life Points. This card must be in face-up Defense Position to activate and to resolve this effect.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Star Boy": {
      id: "08201910",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 550,
      def: 500,
      text: "Aqua/Effect – <effect=Continuous>All WATER monsters gain 500 ATK and all FIRE monsters lose 400 ATK.</effect>"
   },
   "Stealth Bird": {
      id: "03510565",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 700,
      def: 1700,
      text: "Winged Beast/Effect – <effect=Ignition>Once per turn: You can change this card to face-down Defense Position.</effect> <effect=Trigger>When this card is Flip Summoned: Inflict 1000 damage to your opponent.</effect>"
   },
   "Stone Statue of the Aztecs": {
      id: "31812496",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 300,
      def: 2000,
      text: "Rock/Effect – <effect=Continuous>Double any Battle Damage your opponent takes when they attack this monster.</effect>"
   },
   Supply: {
      id: "44072894",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1300,
      def: 800,
      text: "Warrior/Flip/Effect – <effect=Trigger>FLIP: Target 2 monsters in your Graveyard that were sent there for a Fusion Summon; return those targets to your hand.</effect>"
   },
   "Susa Soldier": {
      id: "40473581",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 2000,
      def: 1600,
      text: "Thunder/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Continuous>Battle Damage this card inflicts to your opponent is halved.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   "Swamp Battleguard": {
      id: "40453765",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1500,
      text: 'Warrior/Effect – <effect=Continuous>Gains 500 ATK for each "Lava Battleguard" you control.</effect>'
   },
   "Swift Gaia the Fierce Knight": {
      id: "16589042",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2300,
      def: 2100,
      text: "Warrior/Effect – <effect=Summon>If this is the only card in your hand, you can Normal Summon it without Tributing.</effect>"
   },
   "Tactical Espionage Expert": {
      id: "89698120",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1300,
      def: 1200,
      text: "Warrior/Effect – <effect=Continuous>When Normal Summoned, Traps cannot be activated.</effect>"
   },
   Teva: {
      id: "16469012",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1500,
      text: "Warrior/Effect – <effect=Trigger>When this card is Tribute Summoned: Your opponent cannot declare an attack during their next turn.</effect>"
   },
   "The Agent of Wisdom - Mercury": {
      id: "38730226",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 0,
      def: 1700,
      text: "Fairy/Effect – <effect=Trigger>During your Standby Phase, if you controlled this face-up card and had no cards in your hand at the end of the opponent's last End Phase: Draw 1 card.</effect>"
   },
   "The Bistro Butcher": {
      id: "71107816",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1000,
      text: "Fiend/Effect – <effect=Trigger>When this card inflicts Battle Damage to your opponent: Your opponent draws 2 cards.</effect>"
   },
   "The Fiend Megacyber": {
      id: "66362965",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2200,
      def: 1200,
      text: "Warrior/Effect – <effect=Summon>If your opponent controls at least 2 more monsters than you do, you can Special Summon this card (from your hand).</effect>"
   },
   "The Hunter with 7 Weapons": {
      id: "01525329",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1000,
      def: 600,
      text: "Warrior/Effect – <effect=Trigger>When this card is Normal Summoned: Declare 1 Type.</effect> <effect=Trigger>When this card battles a monster of that Type: This card gains 1000 ATK during Damage Calculation only.</effect>"
   },
   "The Immortal of Thunder": {
      id: "84926738",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1300,
      text: "Thunder/Flip/Effect – <effect=Trigger>Gain 3000 Life Points.</effect> <effect=Trigger>When this card is sent from the field to the Graveyard: Take 5000 damage.</effect>",
      prepopLP: { hero: 3000 }
   },
   "The Kick Man": {
      id: "90407382",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1300,
      def: 300,
      text: "Zombie/Effect – <effect=Trigger>When this card is Special Summoned: You can target 1 legal Equip Spell in your Graveyard; equip it to this card.</effect>"
   },
   "The Legendary Fisherman": {
      id: "03643300",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 1850,
      def: 1600,
      text: 'Warrior/Effect – <effect=Continuous>While "Umi" is on the field, this card is unaffected by Spell effects and cannot be targeted for attacks, but does not prevent your opponent from attacking you directly.</effect>'
   },
   "The Thing in the Crater": {
      id: "78243409",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1200,
      text: "Pyro/Effect – <effect=Trigger>When this card is destroyed and sent to the Graveyard: You can Special Summon 1 Pyro monster from your hand.</effect>"
   },
   "The Unhappy Maiden": {
      id: "51275027",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 1,
      atk: 0,
      def: 100,
      text: "Spellcaster/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: End the Battle Phase.</effect>"
   },
   "The Wicked Worm Beast": {
      id: "06285791",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1400,
      def: 700,
      text: "Beast/Effect – <effect=Trigger>Once per turn, during your End Phase: Return this face-up card you control to the hand.</effect>"
   },
   "Thousand Needles": {
      id: "33977496",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1800,
      text: "Beast/Effect – <effect=Trigger>When this Defense Position card is attacked by a monster with lower ATK than this card's DEF: Destroy that monster at the end of the Damage Step.</effect>"
   },
   "Thunder Nyan Nyan": {
      id: "70797118",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1900,
      def: 800,
      text: "Thunder/Effect – <effect=Continuous>If you control a non-LIGHT monster, destroy this card.</effect>"
   },
   "Twin-Headed Wolf": {
      id: "88132637",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1000,
      text: "Fiend/Effect – <effect=Continuous>If you control another Fiend, negate the effects of Flip monsters destroyed by battle with this card.</effect>"
   },
   "Twinheaded Beast": {
      id: "82035781",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 6,
      atk: 1700,
      def: 1900,
      text: "Beast/Effect – <effect=Continuous>This card can make a second attack during each Battle Phase.</effect>"
   },
   "Two Thousand Needles": {
      id: "83228073",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1800,
      text: "Beast/Effect – <effect=Trigger>When this Defense Position card is attacked by a monster with lower ATK than this card's DEF: Destroy that monster at the end of the Damage Step.</effect>"
   },
   "Ultimate Obedient Fiend": {
      id: "32240937",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 10,
      atk: 3500,
      def: 3000,
      text: "Fiend/Effect – <effect=Continuous>Cannot attack unless you control no other cards and you have no cards in your hand.</effect> <effect=Continuous>Negate the effects of monsters destroyed by battle with this card.</effect>"
   },
   "Vampire Baby": {
      id: "56387350",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 700,
      def: 1000,
      text: "Zombie/Effect – <effect=Trigger>At the end of the Battle Phase, if this card destroyed a monster by battle and sent it to the Graveyard this turn: You can Special Summon that monster to your side of the field.</effect>"
   },
   "White Magician Pikeru": {
      id: "81383947",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 1200,
      def: 0,
      text: "Spellcaster/Effect – <effect=Trigger>Once per turn, during your Standby Phase: Gain 400 Life Points for each monster you control.</effect>"
   },
   "Witch's Apprentice": {
      id: "80741828",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 550,
      def: 500,
      text: "Spellcaster/Effect – <effect=Continuous>All DARK monsters gain 500 ATK and all LIGHT monsters lose 400 ATK.</effect>"
   },
   "3-Hump Lacooda": {
      id: "86988864",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 500,
      def: 1500,
      text: 'Beast/Effect – <effect=Ignition>If you control 3 "3-Hump Lacooda": You can Tribute 2 of them; draw 3 cards.</effect>'
   },
   "8-Claws Scorpion": {
      id: "14261867",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 300,
      def: 200,
      text: "Insect/Effect – <effect=Ignition>Once per turn: You can change this card to face-down Defense Position.</effect> <effect=Trigger>When this card attacks an opponent's face-down Defense Position monster, during damage calculation: This card's ATK becomes 2400 during that damage calculation only.</effect>"
   },
   "Absorbing Kid from the Sky": {
      id: "49771608",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1000,
      text: "Fairy/Effect – <effect=Trigger>When this card destroys a monster by battle and sends it to the Graveyard: Gain Life Points equal to that monster's original Level x300.</effect>"
   },
   "Amazoness Fighter": {
      id: "55821894",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1300,
      text: "Warrior/Effect – <effect=Continuous>You take no battle damage from attacks involving this card.</effect>"
   },
   "Amazoness Paladin": {
      id: "47480070",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 300,
      text: 'Warrior/Effect – <effect=Continuous>This card gains 100 ATK for each "Amazoness" monster you control.</effect>'
   },
   "Amazoness Tiger": {
      id: "10979723",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1100,
      def: 1500,
      text: 'Beast/Effect – <effect=Continuous>You can only control 1 "Amazoness Tiger".</effect> <effect=Continuous> This card gains 400 ATK for each "Amazoness" monster you control.</effect> <effect=Continuous>Your opponent cannot attack any face-up "Amazoness" monsters, except this one.</effect>'
   },
   "Arcane Archer of the Forest": {
      id: "55001420",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 900,
      def: 1400,
      text: "Warrior/Effect – <effect=Continuous>If you control a Plant monster, this card cannot be attacked.</effect> <effect=Ignition>You can Tribute 1 Plant monster, then target 1 Spell/Trap on the field; destroy that target.</effect>"
   },
   "Archfiend of Gilfer": {
      id: "50287060",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2200,
      def: 2500,
      text: "Fiend/Effect – <effect=Trigger>When this card is sent to the Graveyard: You can target 1 face-up monster on the field; equip that target with this card.</effect> <effect=Continuous-like>That monster loses 500 ATK while equipped with this card.</effect>"
   },
   "Armed Samurai - Ben Kei": {
      id: "84430950",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 500,
      def: 800,
      text: "Warrior/Effect – <effect=Continuous>For each Equip Card equipped to this card, it gains 1 additional attack during each Battle Phase.</effect>"
   },
   "Aswan Apparition": {
      id: "88236094",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 500,
      def: 500,
      text: "Fiend/Effect – <effect=Trigger>If this card inflicts Battle Damage to your opponent: You can target 1 Trap in your Graveyard; place it on top of your Deck.</effect>"
   },
   "Atomic Firefly": {
      id: "87340664",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 1,
      atk: 100,
      def: 200,
      text: "Insect/Effect – <effect=Trigger>If this card is destroyed by battle, and was face-up at the start of the Damage Step: The player who destroyed it takes 1000 damage.</effect>"
   },
   "Avatar of The Pot": {
      id: "99284890",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 1300,
      text: 'Rock/Effect – <effect=Ignition>Send 1 "Pot of Greed" from your hand to the Graveyard; draw 3 cards.</effect>'
   },
   "Balloon Lizard": {
      id: "39892082",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 500,
      def: 1900,
      text: "Reptile/Effect – <effect=Trigger>Once per turn, during your Standby Phase: Place 1 counter on this card.</effect> <effect=Trigger>When this card is destroyed: Your opponent takes 400 damage for each of the counters that were on it.</effect>"
   },
   "Batteryman AA": {
      id: "63142001",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 0,
      def: 0,
      text: 'Thunder/Effect – <effect=Continuous>If all "Batteryman AA"(s) you control are in Attack Position, this card gains 1000 ATK for each.</effect> <effect=Continuous>If all "Batteryman AA"(s) you control are in Defense Position, this card gains 1000 DEF for each.</effect>'
   },
   "Berserk Dragon": {
      id: "85605684",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 3500,
      def: 0,
      text: 'Zombie/Effect – <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must be Special Summoned with "A Deal with Dark Ruler" and cannot be Special Summoned by other ways.</effect> <effect=Continuous>This card can attack all monsters your opponent controls once each.</effect> <effect=Continuous>During each of your End Phases, this card loses 500 ATK.</effect>'
   },
   "Blade Rabbit": {
      id: "58268433",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 400,
      def: 300,
      text: "Beast/Effect – <effect=Trigger>When this card is changed from Attack Position to face-up Defense Position: Target 1 monster your opponent controls; destroy that target.</effect>"
   },
   "Blindly Loyal Goblin": {
      id: "35215622",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1500,
      text: "Warrior/Effect – <effect=Continuous>Control of this face-up card cannot switch.</effect>"
   },
   "Boar Soldier": {
      id: "21340051",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 2000,
      def: 500,
      text: "Beast-Warrior/Effect – <effect=Trigger>If this card is Normal Summoned: Destroy this card.</effect> <effect=Continuous>If your opponent controls a monster(s), this card loses 1000 ATK.</effect>"
   },
   "Burning Algae": {
      id: "41859700",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 3,
      atk: 500,
      def: 1500,
      text: "Pyro/Effect – <effect=Trigger>When this card is sent to the Graveyard: Your opponent gains 1000 Life Points.</effect>"
   },
   "Cannonball Spear Shellfish": {
      id: "95614612",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 1000,
      def: 1000,
      text: 'Aqua/Effect – <effect=Continuous>If "Umi" is on the field, this card is unaffected by Spell effects.</effect>'
   },
   "Cat's Ear Tribe": {
      id: "95841282",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 200,
      def: 100,
      text: "Beast-Warrior/Effect – <effect=Continuous>During your opponent's Battle Phase, if a monster(s) your opponent controls battles this card, that monster's original ATK becomes 200 during damage calculation only.</effect>"
   },
   "Chaos Command Magician": {
      id: "72630549",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 6,
      atk: 2400,
      def: 1900,
      text: "Spellcaster/Effect – <effect=Continuous>Effects of monsters that target this 1 card are negated.</effect>"
   },
   "Chiron the Mage": {
      id: "16956455",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1000,
      text: "Beast-Warrior/Effect – <effect=Ignition>Once per turn: You can discard 1 Spell Card, then target 1 Spell/Trap Card your opponent controls; destroy that target.</effect>"
   },
   "Chopman the Desperate Outlaw": {
      id: "40884383",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1100,
      def: 500,
      text: "Zombie/Effect – <effect=Trigger>When this card is Flip Summoned: You can target 1 Equip Spell in your Graveyard; equip it to this card.</effect>"
   },
   "Crass Clown": {
      id: "93889755",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1350,
      def: 1400,
      text: "Fiend/Effect – <effect=Trigger>When this card is changed from Defense Position to Attack Position: Target 1 monster your opponent controls; return that target to the hand.</effect>"
   },
   "Creeping Doom Manta": {
      id: "52571838",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 1300,
      def: 1200,
      text: "Fish/Effect – <effect=Continuous>When Normal Summoned, Traps cannot be activated.</effect>"
   },
   "D.D. Assailant": {
      id: "70074904",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1600,
      text: "Warrior/Effect – <effect=Trigger>After damage calculation, when this card is destroyed by battle with an opponent's monster: Banish that monster, also banish this card.</effect>"
   },
   "D.D. Crazy Beast": {
      id: "48148828",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1400,
      def: 1400,
      text: "Beast/Effect – <effect=Trigger>If this card destroys an opponent's monster by battle, after damage calculation: Banish it.</effect>"
   },
   "Dancing Fairy": {
      id: "90925163",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1000,
      text: "Fairy/Effect – <effect=Trigger>Once per turn, during your Standby Phase: Gain 1000 Life Points. This card must be in face-up Defense Position to activate and to resolve this effect.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Dark Cat with White Tail": {
      id: "08634636",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 800,
      def: 500,
      text: "Beast/Flip/Effect – <effect=Trigger>FLIP: Target 2 monsters your opponent controls and 1 monster you control; return those targets to the hand.</effect>"
   },
   "Dark Elf": {
      id: "21417692",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 2000,
      def: 800,
      text: "Spellcaster/Effect – <effect=Continuous>This card cannot declare an attack unless you pay 1000 Life Points.</effect>"
   },
   "Dark Jeroid": {
      id: "90980792",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1500,
      text: "Fiend/Effect – <effect=Trigger>When this card is Summoned: Target 1 face-up monster on the field; it loses 800 ATK.</effect>"
   },
   "Dark Scorpion Burglars": {
      id: "40933924",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1000,
      text: "Warrior/Effect – <effect=Trigger>When this card inflicts Battle Damage to your opponent: Your opponent sends 1 Spell Card from their Deck to the Graveyard.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [VILLAIN],
            row: MONSTER
         },
         params: {
            cardType: {
               value: SPELL
            }
         },
         autoClose: true
      }
   },
   "Despair from the Dark": {
      id: "71200730",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 2800,
      def: 3000,
      text: "Zombie/Effect – <effect=Trigger>When this card is sent from your hand or Deck to your Graveyard by an opponent's card effect: Special Summon this card.</effect>"
   },
   "Dimension Jar": {
      id: "73414375",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 200,
      def: 200,
      text: "Machine/Flip/Effect – <effect=Trigger>FLIP: Both players can banish up to 3 cards from their opponent's Graveyard.</effect>"
   },
   "Double Coston": {
      id: "44436472",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1650,
      text: "Zombie/Effect – <effect=Continuous>This card can be treated as 2 Tributes for the Tribute Summon of a DARK monster.</effect>"
   },
   "Dragon Manipulator": {
      id: "63018132",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 700,
      def: 800,
      text: "Warrior/Flip/Effect – <effect=Trigger>FLIP: Target 1 Dragon monster your opponent controls; take control of that target until the end of this turn.</effect>"
   },
   "Dream Clown": {
      id: "13215230",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: "Warrior/Effect – <effect=Trigger>When this card is changed from Attack Position to Defense Position: Target 1 monster your opponent controls; destroy that target.</effect>"
   },
   Dreamsprite: {
      id: "08687195",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 300,
      def: 200,
      text: "Plant/Effect – <effect=Trigger>Before damage calculation, if this card is targeted for an attack: Target 1 other monster you control; switch the attack target to that target, then apply damage calculation.</effect>"
   },
   "Eagle Eye": {
      id: "53693416",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1300,
      def: 1200,
      text: "Winged Beast/Effect – <effect=Continuous>When Normal Summoned, Traps cannot be activated.</effect>"
   },
   "Electric Lizard": {
      id: "55875323",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 850,
      def: 800,
      text: "Thunder/Effect – <effect=Trigger>If this card was attacked by a non Zombie monster, after damage calculation: Next turn, that monster cannot attack.</effect>"
   },
   "Electric Snake": {
      id: "11324436",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 800,
      def: 900,
      text: "Thunder/Effect – <effect=Trigger>When this card is discarded your hand to the Graveyard by an opponent's card effect: Draw 2 cards.</effect>"
   },
   "Elephant Statue of Blessing": {
      id: "85166216",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1500,
      def: 0,
      text: "Rock/Effect – <effect=Trigger>When this card is sent from your hand to your Graveyard by an opponent's card effect: Gain 2000 Life Points.</effect>"
   },
   "Elephant Statue of Disaster": {
      id: "12160911",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1500,
      def: 0,
      text: "Rock/Effect – <effect=Trigger>When this card is sent from your hand to your Graveyard by an opponent's card effect: Inflict 2000 damage to your opponent.</effect>"
   },
   "Emes the Infinity": {
      id: "43580269",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2500,
      def: 2000,
      text: "Machine/Effect – <effect=Trigger>If this card destroys an opponent's monster by battle and sends it to the Graveyard: This card gains 700 ATK.</effect>"
   },
   "Emissary of the Oasis": {
      id: "06103294",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 600,
      def: 400,
      text: "Spellcaster/Effect – <effect=Continuous>While you control a Level 3 or lower Normal Monster, your opponent cannot target this card for an attack.</effect> <effect=Continuous>Any battle damage to the controller of this card from battles involving a Level 3 or lower Normal Monster becomes 0.</effect>"
   },
   "Fairy King Truesdale": {
      id: "45425051",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 6,
      atk: 2200,
      def: 1500,
      text: "Plant/Effect – <effect=Continuous>While this card is in Defense Position, Plant monsters you control gain 500 ATK/DEF.</effect>"
   },
   "Fear from the Dark": {
      id: "34193084",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1500,
      text: "Zombie/Effect – <effect=Trigger>When this card is sent from your hand or Deck to your Graveyard by an opponent's card effect: Special Summon this card.</effect>"
   },
   "Fire Princess": {
      id: "64752646",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1500,
      text: "Pyro/Effect – <effect=Continuous>Each time you gain Life Points, inflict 500 damage to your opponent.</effect>",
      prepopLP: { villain: -500 }
   },
   Firebird: {
      id: "87473172",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1000,
      def: 800,
      text: "Winged Beast/Effect – <effect=Trigger>If a Winged-Beast monster(s) you control is destroyed: This card gains 500 ATK.</effect>"
   },
   "Fushi No Tori": {
      id: "38538445",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1200,
      def: 0,
      text: "Winged Beast/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Trigger>When this card inflicts battle damage to your opponent: Gain Life Points equal to the battle damage inflicted.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   "Ghost Knight of Jackal": {
      id: "13386503",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1700,
      def: 1600,
      text: "Beast-Warrior/Effect – <effect=Trigger>When this card destroys an opponent's monster by battle and sends it to the Graveyard: You can target that destroyed monster in your opponent's Graveyard; Special Summon that target to your side of the field in face-up Defense Position.</effect>"
   },
   "Giant Axe Mummy": {
      id: "78266168",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1700,
      def: 2000,
      text: "Zombie/Effect – <effect=Ignition>Once per turn: You can change this card to face-down Defense Position.</effect> <effect=Trigger>If this card is attacked by an opponent's monster whose ATK is lower than this card's DEF: Destroy the attacking monster at the end of the Damage Step.</effect>"
   },
   "Goblin Attack Force": {
      id: "78658564",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 2300,
      def: 0,
      text: "Warrior/Effect – <effect=Continuous>If this card attacks, it is changed to Defense Position at the end of the Battle Phase, and its battle position cannot be changed until the end of your next turn.</effect>"
   },
   "Goblin King": {
      id: "18590133",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: "Fiend/Effect – <effect=Continuous>While you control another Fiend monster, this card cannot be attacked.</effect> <effect=Continuous>This card's ATK/DEF become equal to the number of other Fiend monsters on the field x 1000.</effect>"
   },
   "Goblin of Greed": {
      id: "0425934",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1800,
      text: "Fiend/Effect – <effect=Continuous>Neither player can activate cards or effects that would make them discard a card(s) as a cost.</effect>"
   },
   "Gora Turtle": {
      id: "80233946",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 1100,
      def: 1100,
      text: "Aqua/Effect – <effect=Continuous>Monsters with 1900 or more ATK cannot attack.</effect>"
   },
   "Gora Turtle of Illusion": {
      id: "42868711",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1400,
      text: "Aqua/Effect – <effect=Continuous>Negate any of your opponent's Spell/Trap effects that target this face-up card.</effect>"
   },
   "Gravekeeper's Guard": {
      id: "37101832",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1900,
      text: "Spellcaster/Flip/Effect – <effect=Trigger>FLIP: Target 1 monster your opponent controls; return that target to the hand.</effect>"
   },
   "Gravekeeper's Spy": {
      id: "24317029",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1200,
      def: 2000,
      text: 'Spellcaster/Flip/Effect – <effect=Trigger>FLIP: Special Summon 1 "Gravekeeper\'s" monster with 1500 or less ATK from your Deck</effect>',
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: MONSTER
         },
         params: {
            name: {
               operator: "CONTAINS",
               value: "Gravekeeper's"
            }
         },
         autoClose: true
      }
   },
   "Great Long Nose": {
      id: "02356994",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1900,
      def: 1700,
      text: "Beast-Warrior/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Trigger>If this card inflicts battle damage to your opponent: Your opponent skips their next Battle Phase.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   "Great Maju Garzett": {
      id: "47942531",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 0,
      def: 0,
      text: "Fiend/Effect – <effect=Continuous>This card's ATK becomes twice 1 monster Tributed for the Tribute Summon of this card.</effect>"
   },
   Greenkappa: {
      id: "61831093",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 650,
      def: 900,
      text: "Warrior/Flip/Effect – <effect=Trigger>FLIP: Target 2 Set Spell/Trap Cards on the field; destroy those targets.</effect>"
   },
   "Guardian Angel Joan": {
      id: "68007326",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2800,
      def: 2000,
      text: "Fairy/Effect – <effect=Trigger>When this card destroys a monster by battle and sends it to the Graveyard: Gain Life Points equal to the original ATK of that destroyed monster in the Graveyard.</effect>"
   },
   "Guardian Sphinx": {
      id: "40659562",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1700,
      def: 2400,
      text: "Rock/Effect – <effect=Ignition>Once per turn: You can change this card to face-down Defense Position.</effect> <effect=Trigger>When this card is Flip Summoned: Return all monsters your opponent controls to the hand.</effect>"
   },
   "Gyaku-Gire Panda": {
      id: "09817927",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 800,
      def: 1600,
      text: "Beast/Effect – <effect=Continuous>Gains 500 ATK for each monster your opponent controls.</effect> <effect=Continuous>If this card attacks a Defense Position monster, inflict piercing battle damage to your opponent."
   },
   "Cure Mermaid": {
      id: "85802526",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1500,
      def: 800,
      text: "Fish/Effect – <effect=Trigger>As long as this card remains face-up on your side of the field, increase your Life Points by 800 points during each of your Standby Phases.</effect>",
      prepopLP: { hero: 800 }
   },
   "Hysteric Fairy": {
      id: "21297224",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1800,
      def: 500,
      text: "Fairy/Effect – <effect=Ignition>Tribute 2 monsters on your side of the field to increase your Life Points by 1000 points.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Nuvia the Wicked": {
      id: "12953226",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 2000,
      def: 800,
      text: "Fiend/Effect – <effect=Trigger>If this monster is Normal Summoned, destroy this card.</effect> <effect=Continuous>If your opponent controls any monster, decrease the ATK of this card by 200 points for each monster on your opponent's side of the field.</effect>"
   },
   "The Forgiving Maiden": {
      id: "84080938",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 850,
      def: 2000,
      text: "Fairy/Effect – <effect=Ignition>Offer this face-up card as a Tribute to return 1 of your monsters destroyed in battle during this turn to your hand.</effect>"
   },
   "Hade-Hane": {
      id: "28357177",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 900,
      def: 1000,
      text: "Beast/Flip/Effect – <effect=Trigger>FLIP: You can target up to 3 monsters on the field; return those targets to the hand.</effect>"
   },
   "Hand of Nephthys": {
      id: "98446407",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 2,
      atk: 600,
      def: 600,
      text: 'Spellcaster/Effect – <effect=Ignition>You can Tribute this card and 1 other monster; Special Summon 1 "Sacred Phoenix of Nephthys" from your hand or Deck.</effect>'
   },
   "Harpie Lady Sisters": {
      id: "12206212",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 6,
      atk: 1950,
      def: 2100,
      text: 'Winged Beast/Effect – <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must first be Special Summoned with "Elegant Egotist".</effect>'
   },
   "Hayabusa Knight": {
      id: "21015833",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1000,
      def: 700,
      text: "Warrior/Effect – <effect=Continuous>This card can make a second attack during each Battle Phase.</effect>"
   },
   "Helping Robo for Combat": {
      id: "47025270",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 0,
      text: "Machine/Effect – <effect=Trigger>When this card destroys an opponent's monster by battle: Draw 1 card, then return 1 card from your hand to the bottom of the Deck.</effect>"
   },
   Hyena: {
      id: "22873798",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1000,
      def: 300,
      text: 'Beast/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon any number of "Hyena" from your Deck.</effect>',
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            name: {
               value: "Hyena"
            }
         }
      }
   },
   "Inaba White Rabbit": {
      id: "77084837",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 700,
      def: 500,
      text: "Beast/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Continuous>This card can attack directly.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   "Invasion of Flames": {
      id: "26082229",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 3,
      atk: 1300,
      def: 1200,
      text: "Pyro/Effect – <effect=Continuous>When Normal Summoned, Traps cannot be activated.</effect>"
   },
   "Jinzo #7": {
      id: "32809211",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 500,
      def: 400,
      text: "Machine/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Kaiser Sea Horse": {
      id: "17444133",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1650,
      text: "Sea Serpent/Effect – <effect=Continuous>This card can be treated as 2 Tributes for the Tribute Summon of a LIGHT monster.</effect>"
   },
   "Kangaroo Champ": {
      id: "95789089",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 800,
      def: 700,
      text: "Beast/Effect – <effect=Trigger>If this card battles a monster: that monster is changed to Defense Position after damage calculation.</effect>"
   },
   Keldo: {
      id: "80441106",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1600,
      text: "Fairy/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: Target 2 cards in your opponent's Graveyard; shuffle them into the Deck.</effect>"
   },
   Kiseitai: {
      id: "04266839",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 300,
      def: 800,
      text: "Fiend/Effect – <effect=Trigger>When your opponent's monster attacks this face-down Defense Position card: This card becomes an Equip Spell equipped to the attacking monster.</effect> <effect=Trigger-like>Once per turn, during your opponent's Standby Phase: Gain Life Points equal to half the equipped monster's ATK.</effect>"
   },
   "Lady Ninja Yae": {
      id: "82005435",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1100,
      def: 200,
      text: "Warrior/Effect – <effect=Ignition>You can discard 1 WIND monster to the Graveyard; return all Spells/Traps your opponent controls to the hand.</effect>"
   },
   "Lava Battleguard": {
      id: "20394040",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1550,
      def: 1800,
      text: 'Warrior/Effect – <effect=Continuous>Gains 500 ATK for each "Swamp Battleguard" you control.</effect>'
   },
   Leghul: {
      id: "12472242",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 300,
      def: 350,
      text: "Insect/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Mad Sword Beast": {
      id: "79870141",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Dinosaur/Effect – <effect=Continuous>If this card attacks a Defense Position monster, inflict piercing battle damage to your opponent.</effect>"
   },
   "Magical Plant Mandragola": {
      id: "07802006",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 500,
      def: 200,
      text: "Spellcaster/Flip/Effect – <effect=Flip>FLIP: Place 1 Spell Counter on each face-up card on the field that you can place a Spell Counter on.</effect>"
   },
   "Maha Vailo": {
      id: "93013676",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1550,
      def: 1400,
      text: "Spellcaster/Effect – <effect=Continuous>Gains 500 ATK for each Equip Card equipped to this card.</effect>"
   },
   "Maju Garzett": {
      id: "08794435",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 0,
      def: 0,
      text: "Fiend/Effect – <effect=Continuous>This Tribute Summoned card's ATK becomes the 2 Tributed monsters' combined original ATKs.</effect>"
   },
   "Masked Dragon": {
      id: "39191307",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 3,
      atk: 1400,
      def: 1100,
      text: "Dragon/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 Dragon-Type monster with 1500 or less ATK from your Deck.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            atk: {
               operator: "<",
               value: 1500
            },
            text: {
               operator: "TYPEMATCH",
               value: "Dragon"
            }
         },
         autoClose: true
      }
   },
   "Mefist the Infernal General": {
      id: "46820049",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1700,
      text: "Fiend/Effect – <effect=Continuous>If this card attacks a Defense Position monster, inflict piercing battle damage to your opponent.</effect> <effect=Trigger>When this card inflicts battle damage to your opponent: Discard 1 random card from their hand.</effect>",
      script: {
         name: RANDOM_DISCARD,
         displayCondition: {
            players: [VILLAIN],
            row: MONSTER
         }
      }
   },
   "Milus Radiant": {
      id: "07489323",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 300,
      def: 250,
      text: "Beast/Effect – <effect=Continuous>All EARTH monsters on the field gain 500 ATK, also all WIND monsters on the field lose 400 ATK.</effect>"
   },
   "Mysterious Puppeteer": {
      id: "54098121",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1500,
      text: "Warrior/Effect – <effect=Trigger>If a monster is Normal or Flip Summoned: Gain 500 Life Points.</effect>"
   },
   "Mystical Knight of Jackal": {
      id: "98745000",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2700,
      def: 1200,
      text: "Beast-Warrior/Effect – <effect=Trigger>When this card destroys a monster by battle and sends it to your opponent's Graveyard: You can return it to the top of the Deck.</effect>"
   },
   "Needle Burrower": {
      id: "98162242",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1700,
      def: 1700,
      text: "Machine/Effect – <effect=Trigger>When this card destroys a monster by battle and sends it to the Graveyard: Inflict damage to your opponent equal to the monster's original Level x 500.</effect>"
   },
   "Neko Mane King": {
      id: "11021521",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: "Beast/Effect – <effect=Trigger>During your opponent's turn, when this card in your possession is sent to your Graveyard by an opponent's card effect: It becomes the End Phase of this turn.</effect>"
   },
   "Nightmare Horse": {
      id: "59290628",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 500,
      def: 400,
      text: "Zombie/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Shining Angel": {
      id: "95956346",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
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
               value: 1500
            },
            attribute: {
               value: LIGHT
            }
         },
         autoClose: true
      }
   },
   "Mystic Tomato": {
      id: "83011277",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1100,
      text: "Plant/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 DARK monster with 1500 or less ATK from your Deck, in face-up Attack Position.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            atk: {
               operator: "<",
               value: 1500
            },
            attribute: {
               value: DARK
            }
         },
         autoClose: true
      }
   },
   "Giant Rat": {
      id: "97017120",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1450,
      text: "Beast/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 EARTH monster with 1500 or less ATK from your Deck, in face-up Attack Position.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            atk: {
               operator: "<",
               value: 1500
            },
            attribute: {
               value: EARTH
            }
         },
         autoClose: true
      }
   },
   "Mother Grizzly": {
      id: "57839750",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: "Beast-Warrior/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 WATER monster with 1500 or less ATK from your Deck, in face-up Attack Position.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            atk: {
               operator: "<",
               value: 1500
            },
            attribute: {
               value: WATER
            }
         },
         autoClose: true
      }
   },
   "UFO Turtle": {
      id: "60806437",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Machine/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 FIRE monster with 1500 or less ATK from your Deck, in face-up Attack Position.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            atk: {
               operator: "<",
               value: 1500
            },
            attribute: {
               value: FIRE
            }
         },
         autoClose: true
      }
   },
   "Flying Kamakiri #1": {
      id: "84834865",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1400,
      def: 900,
      text: "Insect/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 WIND monster with 1500 or less ATK from your Deck, in face-up Attack Position.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            atk: {
               operator: "<",
               value: 1500
            },
            attribute: {
               value: WIND
            }
         },
         autoClose: true
      }
   },
   "Black Luster Soldier - Envoy of the Beginning": {
      id: "72989439",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text: "Warrior/Effect – <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your Graveyard.</effect> <effect=Condition>Once per turn, you can activate 1 of these effects.</effect> ● <effect=Ignition>Target 1 monster on the field; banish it.</effect> <effect=Condition>This card cannot attack the turn this effect is activated.</effect> ● <effect=Trigger>If this attacking card destroys an opponent's monster by battle: It can make a second attack in a row.</effect>",
      limit: 1
   },
   "Airknight Parshath": {
      id: "18036057",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 1900,
      def: 1400,
      text: "Fairy/Effect – <effect=Continuous>If this card attacks a Defense Position monster, inflict piercing battle damage.</effect> <effect=Trigger>If this card inflicts battle damage to your opponent: Draw 1 card.</effect>"
   },
   "Magician of Faith": {
      id: "31560081",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 1,
      atk: 300,
      def: 400,
      text: "Spellcaster/Flip/Effect – <effect=Trigger>FLIP: Target 1 Spell in your Graveyard; add that target to your hand.</effect>"
   },
   "Magical Merchant": {
      id: "32362575",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
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
      id: "18318842",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1300,
      text: "Aqua/Effect – <effect=Ignition>Once per turn: You can discard 1 WATER monster to the Graveyard to target 1 card on the field; return it to the hand.</effect>",
      limit: 2
   },
   "Breaker the Magical Warrior": {
      id: "71413901",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Spellcaster/Effect – <effect=Trigger>If this card is Normal Summoned: Place 1 Spell Counter on it (max. 1).</effect> <effect=Continuous>Gains 300 ATK for each Spell Counter on it.</effect> <effect=Ignition>You can remove 1 Spell Counter from this card, then target 1 Spell/Trap on the field; destroy that target.</effect>",
      limit: 1
   },
   Tsukuyomi: {
      id: "34853266",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1100,
      def: 1400,
      text: "Spellcaster/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Trigger>If this card is Normal Summoned or flipped face-up: Target 1 face-up monster on the field; change that target to face-down Defense Position.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   Sangan: {
      id: "26202165",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
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
               value: 1500
            }
         },
         autoClose: true
      },
      limit: 1
   },
   "Sinister Serpent": {
      id: "08131171",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 1,
      atk: 300,
      def: 250,
      text: "Reptile/Effect – <effect=Trigger>During your Standby Phase, if this card is in your Graveyard: You can return it to your hand.</effect>",
      limit: 1
   },
   "Tribe-Infecting Virus": {
      id: "33184167",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Aqua/Effect – <effect=Ignition>You can discard 1 card, then declare 1 Type of monster; Destroy all face-up monsters of the declared Type on the field.</effect>",
      limit: 1
   },
   "Morphing Jar": {
      id: "33508719",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
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
      id: "02134346",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1200,
      text: "Fairy/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Trigger>During the End Phase of the turn this card is Normal Summoned or flipped face-up: Return it to the hand.</effect> <effect=Continuous>This card can attack all monsters your opponent controls once each.</effect>"
   },
   "Kycoo the Ghost Destroyer": {
      id: "88240808",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1800,
      def: 700,
      text: "Spellcaster/Effect – <effect=Trigger>When this card inflicts battle damage to your opponent: You can target up to 2 monsters in their Graveyard; banish those targets.</effect> <effect=Continuous>Your opponent cannot banish cards from either Graveyard.</effect>"
   },
   "D.D. Warrior Lady": {
      id: "07572887",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1600,
      text: "Warrior/Effect – <effect=Trigger>After damage calculation, when this card battles an opponent's monster: You can banish that monster, also banish this card.</effect>",
      limit: 1
   },
   "Chaos Sorcerer": {
      id: "09596126",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2300,
      def: 2000,
      text: "Spellcaster/Effect – <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your Graveyard.</effect> <effect=Ignition>Once per turn: You can target 1 face-up monster on the field; banish that target.</effect> <effect=Condition>This card cannot attack the turn you activate this effect.</effect>"
   },
   "Dekoichi the Battlechanted Locomotive": {
      id: "87621407",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: 'Machine/Flip/Effect – <effect=Trigger>FLIP: Draw 1 card, then draw 1 additional card for each face-up "Bokoichi the Freightening Car" you control.</effect>'
   },
   "Jowgen the Spiritualist": {
      id: "41855169",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 200,
      def: 1300,
      text: "Spellcaster/Effect – <effect=Ignition>You can discard 1 random card from your hand to the Graveyard; destroy all Special Summoned monsters on the field. Neither player can Special Summon monsters.</effect>",
      script: {
         name: RANDOM_DISCARD,
         displayCondition: {
            players: [HERO],
            row: MONSTER
         }
      }
   },
   "Mystic Swordsman LV2": {
      id: "47507260",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 900,
      def: 0,
      text: 'Warrior/Effect – <effect=Trigger>At the start of the Damage Step, if this card attacked a face-down Defense Position monster: Destroy that monster.</effect> <effect=Trigger>During the End Phase, if this card destroyed a monster by battle this turn: You can send this face-up card to the Graveyard; Special Summon 1 "Mystic Swordsman LV4" from your hand or Deck.</effect>'
   },
   "Roulette Barrel": {
      id: "46303688",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
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
      id: "51945556",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 2400,
      def: 1000,
      text: "Thunder/Effect – <effect=Trigger>If this card is Tribute Summoned: Target 1 monster on the field; destroy that target.</effect>"
   },
   "Blade Knight": {
      id: "39507162",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Warrior/Effect – <effect=Continuous>While you have 1 or less cards in your hand, this card gains 400 ATK.</effect> <effect=Continuous>If you control no other monsters, the effects of Flip monsters destroyed by battle with this card are negated.</effect>"
   },
   "Don Zaloog": {
      id: "76922029",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1500,
      text: "Warrior/Effect – <effect=Trigger>When this card inflicts Battle Damage to your opponent, you can activate 1 of these effects: ● Discard 1 random card from their hand. ● Send the top 2 cards of their Deck to the Graveyard.</effect>",
      script: {
         name: RANDOM_DISCARD,
         displayCondition: {
            players: [VILLAIN],
            row: MONSTER
         }
      }
   },
   "Exiled Force": {
      id: "74131780",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1000,
      text: "Warrior/Effect – <effect=Ignition>You can Tribute this card to target 1 monster on the field; destroy that target.</effect>",
      limit: 1
   },
   "Ninja Grandmaster Sasuke": {
      id: "04041838",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1000,
      text: "Warrior/Effect – <effect=Trigger>At the start of the Damage Step, if this card attacks a face-up Defense Position monster: Destroy that monster.</effect>"
   },
   "Nobleman-Eater Bug": {
      id: "65878864",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 900,
      def: 1200,
      text: "Insect/Flip/Effect – <effect=Trigger>FLIP: Target as many monsters on the field as possible, but no more than 2; destroy them.</effect>"
   },
   "Nubian Guard": {
      id: "51616747",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 2,
      atk: 500,
      def: 500,
      text: "Warrior/Effect – <effect=Trigger>If this card inflicts battle damage to your opponent: You can target 1 Continuous Spell in your Graveyard; return it on the top of the Deck.</effect>"
   },
   "Old Vindictive Magician": {
      id: "45141844",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 450,
      def: 600,
      text: "Spellcaster/Flip/Effect – <effect=Flip>FLIP: Target 1 monster your opponent controls; destroy that target.</effect>"
   },
   Ooguchi: {
      id: "58861941",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 1,
      atk: 300,
      def: 250,
      text: "Aqua/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Patrician of Darkness": {
      id: "19153634",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1400,
      text: "Zombie/Effect – <effect=Continuous>You choose the attack targets for your opponent's attacks.</effect>"
   },
   "Penguin Soldier": {
      id: "93920745",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 750,
      def: 500,
      text: "Aqua/Flip/Effect – <effect=Trigger>FLIP: You can target up to 2 monsters on the field; return those targets to the hand.</effect>"
   },
   "Piranha Army": {
      id: "50823978",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 800,
      def: 200,
      text: "Fish/Effect – <effect=Continuous>Damage this card inflicts by direct attacks is doubled.</effect>"
   },
   "Pitch-Black Warwolf": {
      id: "88975532",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1600,
      def: 600,
      text: "Beast-Warrior/Effect – <effect=Continuous>Your opponent cannot activate Trap Cards during the Battle Phase.</effect>"
   },
   "Pixie Knight": {
      id: "35429292",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 1300,
      def: 200,
      text: "Spellcaster/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: Your opponent targets 1 Spell in your Graveyard; place that card on top of the Deck.</effect>"
   },
   "Poison Mummy": {
      id: "43716289",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1800,
      text: "Zombie/Flip/Effect – <effect=Flip>FLIP: Inflict 500 damage to your opponent.</effect>",
      prepopLP: { villain: -500 }
   },
   "Protector of the Sanctuary": {
      id: "24221739",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1100,
      def: 1900,
      text: "Fiend/Effect – <effect=Continuous>Your opponent cannot draw cards except during Draw Phases.</effect>",
      limit: 1
   },
   "Queen's Double": {
      id: "05901497",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 350,
      def: 300,
      text: "Warrior/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Rainbow Flower": {
      id: "21347810",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 400,
      def: 500,
      text: "Plant/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Regenerating Mummy": {
      id: "70821187",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1500,
      text: "Zombie/Effect – <effect=Trigger>When this card is sent from your hand to your Graveyard by an opponent's card effect: Return this card to the hand.</effect>"
   },
   "Revival Jam": {
      id: "31709826",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1500,
      def: 500,
      text: "Aqua/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can pay 1000 Life Points; Special Summon it in face-up Defense Position during your next Standby Phase.</effect>",
      prepopLP: { hero: -1000 }
   },
   "Rocket Jumper": {
      id: "53890795",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1000,
      def: 800,
      text: "Rock/Effect – <effect=Continuous>If your opponent only controls Defense Position monsters, this card can attack directly.</effect>"
   },
   "Berserk Gorilla": {
      id: "39168895",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 2000,
      def: 1000,
      text: "Beast/Effect - <effect=Continuous>If this card is in face-up Defense Position, destroy this card.</effect> <effect=Continuous>This card must attack if able.</effect>"
   },
   "Bazoo the Soul-Eater": {
      id: "40133511",
      cardType: EFFECT_MONSTER,
      attribute: "Earth",
      levelOrSubtype: 4,
      atk: 1600,
      def: 900,
      text: "Beast/Effect - <effect=Ignition>Once per turn: You can banish up to 3 monsters from your Graveyard; this card gains 300 ATK for each, until the end of your opponent's turn.</effect>"
   },
   "Skilled Dark Magician": {
      id: "73752131",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
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
      id: "31786629",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
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
      id: "88472456",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 2100,
      def: 200,
      text: "Warrior/Effect – <effect=Continuous>Cannot attack your opponent directly.</effect> <effect=Trigger>If this card destroys a monster by battle: This card loses 200 ATK.</effect>"
   },
   "Armed Dragon LV5": {
      id: "46384672",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
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
      id: "93220472",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 2000,
      def: 100,
      text: "Dragon/Effect – Cannot be Normal Summoned while you control a monster. <effect=Continuous>This card cannot declare an attack unless you control another Dragon-Type monster.</effect>"
   },
   "Different Dimension Dragon": {
      id: "50939127",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 1200,
      def: 1500,
      text: "Dragon/Effect – <effect=Continuous>This card cannot be destroyed by Spell/Trap effects that do not target it.</effect> <effect=Continuous>This card cannot be destroyed by battle with a monster that has 1900 or less ATK.</effect>"
   },
   "Fusilier Dragon, the Dual-Mode Beast": {
      id: "51632798",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2800,
      def: 2000,
      text: "Machine/Effect – You can Normal Summon/Set this card without Tributing, but its original ATK/DEF become halved."
   },
   "Mirage Dragon": {
      id: "15960641",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 600,
      text: "Dragon/Effect – <effect=Continuous>Your opponent cannot activate Traps during the Battle Phase.</effect>"
   },
   "Rare Metal Dragon": {
      id: "25236056",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 2400,
      def: 1200,
      text: "Dragon/Effect – This card cannot be Normal Summoned or Set."
   },
   "Tyrant Dragon": {
      id: "94568601",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 8,
      atk: 2900,
      def: 2500,
      text: "Dragon/Effect – <effect=Continuous>During your Battle Phase, if your opponent controls a monster after this card's first attack, this card can make a second attack.</effect> <effect=Continuous>Negate any Trap effects that target this card on the field, and if you do, destroy that Trap.</effect> <effect=Summon>This card cannot be Special Summoned from the GY, unless you Tribute 1 Dragon monster.</effect>"
   },
   "Mataza the Zapper": {
      id: "22609617",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1300,
      def: 800,
      text: "Warrior/Effect – <effect=Continuous>This card can make a second attack during each Battle Phase.</effect> <effect=Continuous>Control of this face-up card on the field cannot switch.</effect>"
   },
   "King Tiger Wanghu": {
      id: "83986578",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1000,
      text: "Beast/Effect – <effect=Trigger>When a monster(s) with 1400 or less ATK is Normal Summoned or Special Summoned: Destroy that monster(s) with 1400 or less ATK. This card must be face-up on the field to activate and to resolve this effect.</effect>"
   },
   "Cyber-Stein": {
      id: "69015963",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 700,
      def: 500,
      text: "Machine/Effect - <effect=Ignition>You can pay 5000 Life Points; Special Summon 1 Fusion Monster from your Fusion Deck in Attack Position.</effect>",
      prepopLP: { hero: -5000 }
   },
   "Amazoness Archer": {
      id: "91869203",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: "Warrior/Effect - <effect=Ignition>You can Tribute 2 monsters; inflict 1200 damage to your opponent.</effect>",
      prepopLP: { villain: -1200 }
   },
   "Des Wombat": {
      id: "09637706",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1600,
      def: 300,
      text: "Beast/Effect - <effect=Continuous>Any damage to you from a card effect becomes 0.</effect>"
   },
   "Possessed Dark Soul": {
      id: "52860176",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1200,
      def: 800,
      text: "Fiend/Effect - <effect=Ignition>You can Tribute this face-up card; take control of all face-up Level 3 or lower monsters your opponent controls.</effect>"
   },
   "Cipher Soldier": {
      id: "79853073",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1350,
      def: 1800,
      text: "Machine/Effect - <effect=Trigger>If this card battles a Warrior monster, during damage calculation: This card gains 2000 ATK and DEF during that damage calculation only.</effect>"
   },
   "Nimble Momonga": {
      id: "22567609",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 1000,
      def: 100,
      text: 'Beast/Effect - <effect=Trigger>If this card is destroyed by battle and sent to the Graveyard: Gain 1000 Life Points, then you can Special Summon any number of "Nimble Momonga" from your Deck in face-down Defense Position.</effect>',
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            name: {
               value: "Nimble Momonga"
            }
         }
      },
      prepopLP: { hero: 1000 }
   },
   "Injection Fairy Lily": {
      id: "79575620",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 400,
      def: 1500,
      text: "Spellcaster/Effect - <effect=Quick>If this card attacks or is attacked, during damage calculation (in either player's turn): You can pay 2000 Life Points once per battle; this card gains 3000 ATK during that damage calculation only.</effect>",
      prepopLP: { hero: -2000 },
      limit: 1
   },
   "Des Koala": {
      id: "69579761",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1100,
      def: 1800,
      text: "Beast/Flip/Effect - <effect=Flip>FLIP: Inflict 400 damage to your opponent for each card in their hand.</effect>"
   },
   "Pyramid Turtle": {
      id: "77044671",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1400,
      text: "Zombie/Effect - <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 Zombie monster with 2000 or less DEF from your Deck.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            text: {
               operator: "TYPEMATCH",
               value: "Zombie"
            },
            def: {
               operator: "<",
               value: 2000
            },
         },
         autoClose: true
      }
   },
   "Mobius the Frost Monarch": {
      id: "04929256",
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 6,
      atk: 2400,
      def: 1000,
      text: "Aqua/Effect - <effect=Trigger>When this card is Tribute Summoned: You can target up to 2 Spell/Trap Cards on the field; destroy those targets.</effect>"
   },
   Kuriboh: {
      id: "40640057",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 300,
      def: 200,
      text: "Fiend/Effect - During damage calculation, if your opponent's monster attacks: <effect=Quick>You can discard this card; you take no battle damage from that battle.</effect>"
   },
   "Winged Kuriboh": {
      id: "57116033",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 1,
      atk: 300,
      def: 200,
      text: "Fairy/Effect - <effect=Trigger>If this card on the field is destroyed and sent to the Graveyard: For the rest of this turn, you take no battle damage.</effect>"
   },
   "Rescue Cat": {
      id: "14878871",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 300,
      def: 100,
      text: "Beast/Effect - <effect=Ignition>You can send this card you control to the Graveyard; Special Summon 2 Level 3 or lower Beast monsters from your Deck, but destroy them during the End Phase.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            levelOrSubtype: {
               operator: "<",
               value: 3
            },
            text: {
               operator: "TYPEMATCH",
               value: "Beast"
            }
         }
      }
   },
   "Lava Golem": {
      id: "0102380",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text: "Fiend/Effect - <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must first be Special Summoned (from your hand) to your opponent's field by Tributing 2 monsters they control.</effect> You cannot Normal Summon/Set the turn you Special Summon this card. <effect=Trigger>Once per turn, during your Standby Phase: Take 1000 damage.</effect>",
      prepopLP: { hero: -1000 }
   },
   "Cannon Soldier": {
      id: "11384280",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1300,
      text: "Machine/Effect - <effect=Ignition>You can Tribute 1 monster; inflict 500 damage to your opponent.</effect>",
      prepopLP: { villain: -500 }
   },
   "Toon Cannon Soldier": {
      id: "79875176",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1300,
      text: 'Machine/Toon/Effect - <effect=Continuous>Cannot attack the turn it is Summoned.</effect> <effect=Continuous>If "Toon World" on the field is destroyed, destroy this card.</effect> <effect=Continuous>While you control "Toon World" and your opponent controls no Toon monsters, this card can attack directly.</effect> <effect=Ignition>You can Tribute 1 monster; inflict 500 damage to your opponent.</effect>',
      prepopLP: { villain: -500 }
   },
   "Dark Magician of Chaos": {
      id: "40737112",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 2800,
      def: 2600,
      text: "Spellcaster/Effect - <effect=Trigger>When this card is Normal or Special Summoned: You can target 1 Spell in your Graveyard; add that target to your hand.</effect> <effect=Trigger>Banish any monster destroyed by battle with this card.</effect> If this face-up card would leave the field, banish it instead.",
      limit: 1
   },
   Jinzo: {
      id: "77585513",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2400,
      def: 1500,
      text: "Machine/Effect - <effect=Continuous>Trap Cards, and their effects on the field, cannot be activated. Negate all Trap effects on the field.</effect>",
      limit: 1
   },
   "Exodia the Forbidden One": {
      id: "33396948",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1000,
      text: 'Spellcaster/Effect - If you have "Right Leg of the Forbidden One", "Left Leg of the Forbidden One", "Right Arm of the Forbidden One" and "Left Arm of the Forbidden One" in addition to this card in your hand, you win the Duel.',
      limit: 1
   },
   "Sacred Phoenix of Nephthys": {
      id: "61441708",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 8,
      atk: 2400,
      def: 1600,
      text: "Winged Beast/Effect - <effect=Trigger>Once per turn, during your next Standby Phase after this card was destroyed by a card effect and sent to the Graveyard: Special Summon this card from the Graveyard.</effect> <effect=Trigger>If you do: Destroy all Spells and Traps on the field.</effect>",
      limit: 1
   },
   "Twin-Headed Behemoth": {
       id: "43586926",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1500,
      def: 1200,
      text: 'Dragon/Effect - <effect=Trigger>During the End Phase, if this card is in the Graveyard because it was destroyed on the field and sent there this turn: You can Special Summon this card, but its ATK/DEF become 1000.</effect> You can only use this effect of "Twin-Headed Behemoth" once per Duel.',
      limit: 1
   },
   "Marauding Captain": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 400,
      text: "Warrior/Effect - <effect=Continuous>Your opponent cannot target Warrior monsters for attacks, except this one.</effect> <effect=Trigger>When this card is Normal Summoned: You can Special Summon 1 Level 4 or lower monster from your hand.</effect>",
      limit: 2
   },
   "Night Assailant": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 200,
      def: 500,
      text: "Fiend/Flip/Effect - <effect=Flip>FLIP: Target 1 monster your opponent controls; destroy that target.</effect> <effect=Trigger>When this card is sent from the hand to the Graveyard: Target 1 Flip monster in your Graveyard, except this card; return that target to the hand.</effect>",
      limit: 2
   },
   "Manticore of Darkness": {
      id: "77121851",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 6,
      atk: 2300,
      def: 1000,
      text: "Beast-Warrior/Effect - <effect=Trigger>During the End Phase of the turn this card was sent to the Graveyard: You can send to the Graveyard 1 Beast, Beast-Warrior, or Winged Beast-Type monster from your hand or your side of the field; Special Summon this card from your Graveyard.</effect>",
      limit: 2
   },
   "Dark Scorpion - Chick the Yellow": {
      id: "61587183",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1000,
      text: "Warrior/Effect - When this card inflicts battle damage to your opponent, you can activate 1 of these effects:<effect=Trigger>● Target 1 card on the field; return that target to the hand.</effect> <effect=Trigger>● Look at the top card of their Deck, then return it to the top or bottom of the Deck<./effect>",
      limit: 2
   },
   "Spirit Reaper": {
      id: "23205979",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 300,
      def: 200,
      text: "Zombie/Effect - <effect=Continuous>Cannot be destroyed by battle.</effect> <effect=Continuous>After resolving a card effect that targets this face-up card, destroy this card.</effect> <effect=Trigger>When this card inflicts battle damage to your opponent by a direct attack: Discard 1 random card from their hand.</effect>"
   },
   "Enraged Battle Ox": {
      id: "76909279",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1000,
      text: "Beast-Warrior/Effect - <effect=Continuous>If a Beast, Beast-Warrior, or Winged Beast-Type monster you control attacks a Defense Position monster, inflict piercing battle damage to your opponent.</effect>"
   },
   "Big Shield Gardna": {
      id: "65240384",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 100,
      def: 2600,
      text: "Warrior/Effect - When a Spell is activated that targets this face-down card (and no other cards): <effect=Quick>Change this card to face-up Defense Position, and if you do, negate the activation.</effect> <effect=Continuous>If this card is attacked, change it to Attack Position at the end of the Damage Step.</effect>"
   },
   "Mask of Darkness": {
      id: "28933734",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 900,
      def: 400,
      text: "Fiend/Flip/Effect - <effect=Flip>FLIP: Target 1 Trap in your Graveyard; add that target to your hand.</effect>"
   },
   "Barrel Dragon": {
      id: "81480460",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2600,
      def: 2200,
      text: "Machine/Effect - <effect=Ignition>Once per turn: You can target 1 monster your opponent controls; toss a coin 3 times and destroy it if at least 2 of the results are heads.</effect>",
      script: {
         name: FLIP_COINS,
         displayCondition: {
            players: [HERO],
            row: MONSTER
         },
         params: 3
      }
   },
   "Blowback Dragon": {
      id: "25551951",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2300,
      def: 1200,
      text: "Machine/Effect - <effect=Ignition>Once per turn: You can target 1 card your opponent controls; toss a coin 3 times and destroy that target if at least 2 of the results are heads.</effect>",
      script: {
         name: FLIP_COINS,
         displayCondition: {
            players: [HERO],
            row: MONSTER
         },
         params: 3
      }
   },
   "Buster Blader": {
      id: "78193831",
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 7,
      atk: 2600,
      def: 2300,
      text: "Warrior/Effect - <effect=Continuous>Gains 500 ATK for each Dragon monster your opponent controls or is in their Graveyard.</effect>"
   },
   "Dark Magician Girl": {
      id: "38033121",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2000,
      def: 1700,
      text: 'Spellcaster/Effect - <effect=Continuous>Gains 300 ATK for every "Dark Magician" or "Magician of Black Chaos" in the Graveyard.</effect>'
   },
   "Lesser Fiend": {
      id: "16475472",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 2100,
      def: 1000,
      text: 'Fiend/Effect - (This card is always treated as an "Archfiend" card.) <effect=Continuous>Banish any monster destroyed by battle with this card.</effect>'
   },
   Otohime: {
      id: "39751093",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 0,
      def: 100,
      text: "Spellcaster/Spirit/Effect - <effect=Summon>Cannot be Special Summoned.</effect> <effect=Trigger>During the End Phase of the turn this card is Normal Summoned or flipped face-up: Return it to the hand.</effect> <effect=Trigger>When this card is Normal Summoned or flipped face-up: You can target 1 face-up monster your opponent controls; change that target's battle position.</effect>"
   },
   "Red-Eyes Black Metal Dragon": {
      id: "64335804",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 2800,
      def: 2400,
      text: 'Machine/Effect - <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must first be Special Summoned (from your Deck) by Tributing "Red-Eyes Black Dragon" equipped with "Metalmorph".</effect>'
   },
   "Emissary of the Afterlife": {
      id: "75043725",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1600,
      def: 600,
      text: "Fiend/Effect - <effect=Trigger>When this card is sent from the field to the Graveyard: Each player adds 1 Level 3 or lower Normal Monster from their Deck to their hand.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO, VILLAIN],
            row: GRAVEYARD
         },
         params: {
            levelOrSubtype: {
               operator: "<",
               value: 3
            },
            cardType: {
               value: NORMAL_MONSTER
            }
         },
         autoClose: true
      }
    },
    "Senju of the Thousand Hands": {
      id: "23401839",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: "Fairy/Effect - <effect=Trigger>When this card is Normal or Flip Summoned: You can add 1 Ritual Monster from your Deck to your hand.</effect>",
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: MONSTER
         },
         params: {
            cardType: {
               value: RITUAL_MONSTER
            }
         },
         autoClose: true
      }
    },
    "Dark Ruler Ha Des": {
      id: "53982768",
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2450,
      def: 1600,
      text: "Fiend/Effect - Cannot be Special Summoned from the Graveyard.<effect=Continuous>Negate the effects of monsters destroyed by battle with Fiend monsters you control.</effect>"
    },
    "Sacred Crane": {
      id: "30914564",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 400,
      text: "Winged Beast/Effect - <effect=Trigger>When this card is Special Summoned: The controller of this card draws 1 card.</effect>"
    },
    "Thestalos the Firestorm Monarch": {
      id: "26205777",
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 6,
      atk: 2400,
      def: 1000,
      text: "Pyro/Effect - <effect=Trigger>If this card is Tribute Summoned: Discard 1 random card from your opponent's hand, then, if it was a Monster Card, inflict damage to your opponent equal to its original Level x 100.</effect>",
      script: {
         name: RANDOM_DISCARD,
         displayCondition: {
            players: [VILLAIN],
            row: MONSTER
         }
      }
    },
    "Royal Magical Library": {
      id: "70791313",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 0,
      def: 2000,
      text: "Spellcaster/Effect - <effect=Continuous>Each time a Spell Card is activated, place 1 Spell Counter on this card when that Spell resolves (max. 3).</effect><effect=Ignition>You can remove 3 Spell Counters from this card; draw 1 card.</effect>"
    },
    "Spell Canceller": {
      id: "84636823",
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1600,
      text: 'Machine/Effect - <effect=Continuous>Spell Cards, and their effects on the field, cannot be activated. Negate all Spell effects on the field.</effect>'
    },
    "The Creator": {
      id: "61505339",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 8,
      atk: 2300,
      def: 3000,
      text: "Thunder/Effect - <effect=Summon>Cannot be Special Summoned from the Graveyard.</effect> <effect=Ignition>Once per turn: You can target 1 monster in your Graveyard; send 1 card from your hand to the Graveyard, and if you do, Special Summon that target.</effect>"
    },
    "The Creator Incarnate": {
      id: "97093037",
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1500,
      text: 'Warrior/Effect - <effect=Ignition>You can Tribute this card; Special Summon 1 "The Creator" from your hand.</effect>'
    }
};

export default effectMonsters;
