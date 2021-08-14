import {
   HERO,
   VILLAIN,
   EFFECT_MONSTER,
   RANDOM_DISCARD,
   SEARCH_DECK,
   GRAVEYARD,
   MILL_UNTIL,
   MONSTER,
   SPELL_TRAP,
   SPELL,
   TRAP,
   ROLL_DICE,
   DISCARD_AND_DRAW,
   DARK,
   LIGHT,
   WATER,
   FIRE,
   EARTH,
   WIND
} from "utils/constants";

const effectMonsters = {
   "Ryu Kokki": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2400,
      def: 2000,
      text: "Zombie/Effect – <effect=Trigger>At the end of the Damage Step, if this card battled a Warrior or Spellcaster monster: Destroy that monster.</effect>"
   },
   "Ryu-Kishin Clown": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 800,
      def: 500,
      text: "Fiend/Effect – <effect=Trigger>When this card is Summoned: Target 1 face-up monster on the field; change its battle position.</effect>"
   },
   "Sasuke Samurai": {
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 2,
      atk: 500,
      def: 800,
      text: "Warrior/Effect – <effect=Trigger>At the start of the Damage Step, if this card attacks a face-down Defense Position monster: Destroy that face-down monster.</effect>"
   },
   "Sasuke Samurai #3": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1000,
      text: "Warrior/Effect – <effect=Trigger>When this card inflicts Battle Damage to your opponent: Your opponent draws cards until their hand has 7 cards.</effect>"
   },
   "Servant of Catabolism": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 700,
      def: 500,
      text: "Aqua/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   Shadowslayer: {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 200,
      text: "Fiend/Effect – <effect=Continuous>If all monsters your opponent controls are in Defense Position, this card can attack directly.</effect>"
   },
   "Skull-Mark Ladybug": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 500,
      def: 1500,
      text: "Insect/Effect – <effect=Trigger>When this card is sent to the Graveyard: Gain 1000 Life Points.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Slate Warrior": {
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1900,
      def: 400,
      text: "Fiend/Flip/Effect – <effect=Trigger>FLIP: This card gains 500 ATK/DEF.</effect> <effect=Trigger>If this card is destroyed by battle: The monster that destroyed it loses 500 ATK/DEF</effect>"
   },
   "Spirit Caller": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1000,
      text: "Spellcaster/Flip/Effect – <effect=Trigger>FLIP: You can target 1 Level 3 or lower Normal Monster in your Graveyard; Special Summon that target.</effect>"
   },
   "Sonic Jammer": {
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 2,
      atk: 350,
      def: 650,
      text: "Machine/Flip/Effect – <effect=Trigger>FLIP: Your opponent cannot activate any Spells until the end of the next turn.</effect>"
   },
   "Spirit of the Breeze": {
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 0,
      def: 1800,
      text: "Fairy/Effect – <effect=Trigger>Once per turn, during your Standby Phase: Gain 1000 Life Points. This card must be in face-up Defense Position to activate and to resolve this effect.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Star Boy": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 550,
      def: 500,
      text: "Aqua/Effect – <effect=Continuous>All WATER monsters gain 500 ATK and all FIRE monsters lose 400 ATK.</effect>"
   },
   "Stealth Bird": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 700,
      def: 1700,
      text: "Winged Beast/Effect – <effect=Ignition>Once per turn: You can change this card to face-down Defense Position.</effect> <effect=Trigger>When this card is Flip Summoned: Inflict 1000 damage to your opponent.</effect>"
   },
   "Stone Statue of the Aztecs": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 300,
      def: 2000,
      text: "Rock/Effect – <effect=Continuous>Double any Battle Damage your opponent takes when they attack this monster.</effect>"
   },
   Supply: {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1300,
      def: 800,
      text: "Warrior/Flip/Effect – <effect=Trigger>FLIP: Target 2 monsters in your Graveyard that were sent there for a Fusion Summon; return those targets to your hand.</effect>"
   },
   "Susa Soldier": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 2000,
      def: 1600,
      text: "Thunder/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Continuous>Battle Damage this card inflicts to your opponent is halved.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   "Swamp Battleguard": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1500,
      text: 'Warrior/Effect – <effect=Continuous>Gains 500 ATK for each "Lava Battleguard" you control.</effect>'
   },
   "Swift Gaia the Fierce Knight": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2300,
      def: 2100,
      text: "Warrior/Effect – <effect=Summon>If this is the only card in your hand, you can Normal Summon it without Tributing.</effect>"
   },
   "Tactical Espionage Expert": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1300,
      def: 1200,
      text: "Warrior/Effect – <effect=Continuous>When Normal Summoned, Traps cannot be activated.</effect>"
   },
   Teva: {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1500,
      text: "Warrior/Effect – <effect=Trigger>When this card is Tribute Summoned: Your opponent cannot declare an attack during their next turn.</effect>"
   },
   "The Agent of Wisdom - Mercury": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 0,
      def: 1700,
      text: "Fairy/Effect – <effect=Trigger>During your Standby Phase, if you controlled this face-up card and had no cards in your hand at the end of the opponent's last End Phase: Draw 1 card.</effect>"
   },
   "The Bistro Butcher": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1000,
      text: "Fiend/Effect – <effect=Trigger>When this card inflicts Battle Damage to your opponent: Your opponent draws 2 cards.</effect>"
   },
   "The Fiend Megacyber": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2200,
      def: 1200,
      text: "Warrior/Effect – <effect=Summon>If your opponent controls at least 2 more monsters than you do, you can Special Summon this card (from your hand).</effect>"
   },
   "The Hunter with 7 Weapons": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1000,
      def: 600,
      text: "Warrior/Effect – <effect=Trigger>When this card is Normal Summoned: Declare 1 Type.</effect> <effect=Trigger>When this card battles a monster of that Type: This card gains 1000 ATK during Damage Calculation only.</effect>"
   },
   "The Immortal of Thunder": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1300,
      text: "Thunder/Flip/Effect – <effect=Trigger>Gain 3000 Life Points.</effect> <effect=Trigger>When this card is sent from the field to the Graveyard: Take 5000 damage.</effect>",
      prepopLP: { hero: 3000 }
   },
   "The Kick Man": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1300,
      def: 300,
      text: "Zombie/Effect – <effect=Trigger>When this card is Special Summoned: You can target 1 legal Equip Spell in your Graveyard; equip it to this card.</effect>"
   },
   "The Legendary Fisherman": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 1850,
      def: 1600,
      text: 'Warrior/Effect – <effect=Continuous>While "Umi" is on the field, this card is unaffected by Spell effects and cannot be targeted for attacks, but does not prevent your opponent from attacking you directly.</effect>'
   },
   "The Thing in the Crater": {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1200,
      text: "Pyro/Effect – <effect=Trigger>When this card is destroyed and sent to the Graveyard: You can Special Summon 1 Pyro monster from your hand.</effect>"
   },
   "The Unhappy Maiden": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 1,
      atk: 0,
      def: 100,
      text: "Spellcaster/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: End the Battle Phase.</effect>"
   },
   "The Wicked Worm Beast": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1400,
      def: 700,
      text: "Beast/Effect – <effect=Trigger>Once per turn, during your End Phase: Return this face-up card you control to the hand.</effect>"
   },
   "Thousand Needles": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1800,
      text: "Beast/Effect – <effect=Trigger>When this Defense Position card is attacked by a monster with lower ATK than this card's DEF: Destroy that monster at the end of the Damage Step.</effect>"
   },
   "Thunder Nyan Nyan": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1900,
      def: 800,
      text: "Thunder/Effect – <effect=Continuous>If you control a non-LIGHT monster, destroy this card.</effect>"
   },
   "Twin-Headed Wolf": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1000,
      text: "Fiend/Effect – <effect=Continuous>If you control another Fiend, negate the effects of Flip monsters destroyed by battle with this card.</effect>"
   },
   "Twinheaded Beast": {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 6,
      atk: 1700,
      def: 1900,
      text: "Beast/Effect – <effect=Continuous>This card can make a second attack during each Battle Phase.</effect>"
   },
   "Two Thousand Needles": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1800,
      text: "Beast/Effect – <effect=Trigger>When this Defense Position card is attacked by a monster with lower ATK than this card's DEF: Destroy that monster at the end of the Damage Step.</effect>"
   },
   "Ultimate Obedient Fiend": {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 10,
      atk: 3500,
      def: 3000,
      text: "Fiend/Effect – <effect=Continuous>Cannot attack unless you control no other cards and you have no cards in your hand.</effect> <effect=Continuous>Negate the effects of monsters destroyed by battle with this card.</effect>"
   },
   "Vampire Baby": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 700,
      def: 1000,
      text: "Zombie/Effect – <effect=Trigger>At the end of the Battle Phase, if this card destroyed a monster by battle and sent it to the Graveyard this turn: You can Special Summon that monster to your side of the field.</effect>"
   },
   "White Magician Pikeru": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 1200,
      def: 0,
      text: "Spellcaster/Effect – <effect=Trigger>Once per turn, during your Standby Phase: Gain 400 Life Points for each monster you control.</effect>"
   },
   "Witch's Apprentice": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 550,
      def: 500,
      text: "Spellcaster/Effect – <effect=Continuous>All DARK monsters gain 500 ATK and all LIGHT monsters lose 400 ATK.</effect>"
   },
   "3-Hump Lacooda": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 500,
      def: 1500,
      text: 'Beast/Effect – <effect=Ignition>If you control 3 "3-Hump Lacooda": You can Tribute 2 of them; draw 3 cards.</effect>'
   },
   "8-Claws Scorpion": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 300,
      def: 200,
      text: "Insect/Effect – <effect=Ignition>Once per turn: You can change this card to face-down Defense Position.</effect> <effect=Trigger>When this card attacks an opponent's face-down Defense Position monster, during damage calculation: This card's ATK becomes 2400 during that damage calculation only.</effect>"
   },
   "Absorbing Kid from the Sky": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1000,
      text: "Fairy/Effect – <effect=Trigger>When this card destroys a monster by battle and sends it to the Graveyard: Gain Life Points equal to that monster's original Level x300.</effect>"
   },
   "Amazoness Fighter": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1300,
      text: "Warrior/Effect – <effect=Continuous>You take no battle damage from attacks involving this card.</effect>"
   },
   "Amazoness Paladin": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 300,
      text: 'Warrior/Effect – <effect=Continuous>This card gains 100 ATK for each "Amazoness" monster you control.</effect>'
   },
   "Amazoness Tiger": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1100,
      def: 1500,
      text: 'Beast/Effect – <effect=Continuous>You can only control 1 "Amazoness Tiger".</effect> <effect=Continuous> This card gains 400 ATK for each "Amazoness" monster you control.</effect> <effect=Continuous>Your opponent cannot attack any face-up "Amazoness" monsters, except this one.</effect>'
   },
   "Arcane Archer of the Forest": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 900,
      def: 1400,
      text: "Warrior/Effect – <effect=Continuous>If you control a Plant monster, this card cannot be attacked.</effect> <effect=Ignition>You can Tribute 1 Plant monster, then target 1 Spell/Trap on the field; destroy that target.</effect>"
   },
   "Archfiend of Gilfer": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2200,
      def: 2500,
      text: "Fiend/Effect – <effect=Trigger>When this card is sent to the Graveyard: You can target 1 face-up monster on the field; equip that target with this card.</effect> <effect=Continuous-like>That monster loses 500 ATK while equipped with this card.</effect>"
   },
   "Armed Samurai - Ben Kei": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 500,
      def: 800,
      text: "Warrior/Effect – <effect=Continuous>For each Equip Card equipped to this card, it gains 1 additional attack during each Battle Phase.</effect>"
   },
   "Aswan Apparition": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 500,
      def: 500,
      text: "Fiend/Effect – <effect=Trigger>If this card inflicts Battle Damage to your opponent: You can target 1 Trap in your Graveyard; place it on top of your Deck.</effect>"
   },
   "Atomic Firefly": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 1,
      atk: 100,
      def: 200,
      text: "Insect/Effect – <effect=Trigger>If this card is destroyed by battle, and was face-up at the start of the Damage Step: The player who destroyed it takes 1000 damage.</effect>"
   },
   "Avatar of The Pot": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 1300,
      text: 'Rock/Effect – <effect=Ignition>Send 1 "Pot of Greed" from your hand to the Graveyard; draw 3 cards.</effect>'
   },
   "Balloon Lizard": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 500,
      def: 1900,
      text: "Reptile/Effect – <effect=Trigger>Once per turn, during your Standby Phase: Place 1 counter on this card.</effect> <effect=Trigger>When this card is destroyed: Your opponent takes 400 damage for each of the counters that were on it.</effect>"
   },
   "Batteryman AA": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 0,
      def: 0,
      text: 'Thunder/Effect – <effect=Continuous>If all "Batteryman AA"(s) you control are in Attack Position, this card gains 1000 ATK for each.</effect> <effect=Continuous>If all "Batteryman AA"(s) you control are in Defense Position, this card gains 1000 DEF for each.</effect>'
   },
   "Berserk Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 3500,
      def: 0,
      text: 'Zombie/Effect – <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must be Special Summoned with "A Deal with Dark Ruler" and cannot be Special Summoned by other ways.</effect> <effect=Continuous>This card can attack all monsters your opponent controls once each.</effect> <effect=Continuous>During each of your End Phases, this card loses 500 ATK.</effect>'
   },
   "Blade Rabbit": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 400,
      def: 300,
      text: "Beast/Effect – <effect=Trigger>When this card is changed from Attack Position to face-up Defense Position: Target 1 monster your opponent controls; destroy that target.</effect>"
   },
   "Blindly Loyal Goblin": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1500,
      text: "Warrior/Effect – <effect=Continuous>Control of this face-up card cannot switch.</effect>"
   },
   "Boar Soldier": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 2000,
      def: 500,
      text: "Beast-Warrior/Effect – <effect=Trigger>If this card is Normal Summoned: Destroy this card.</effect> <effect=Continuous>If your opponent controls a monster(s), this card loses 1000 ATK.</effect>"
   },
   "Burning Algae": {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 3,
      atk: 500,
      def: 1500,
      text: "Pyro/Effect – <effect=Trigger>When this card is sent to the Graveyard: Your opponent gains 1000 Life Points.</effect>"
   },
   "Cannonball Spear Shellfish": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 1000,
      def: 1000,
      text: 'Aqua/Effect – <effect=Continuous>If "Umi" is on the field, this card is unaffected by Spell effects.</effect>'
   },
   "Cat's Ear Tribe": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 200,
      def: 100,
      text: "Beast-Warrior/Effect – <effect=Continuous>During your opponent's Battle Phase, if a monster(s) your opponent controls battles this card, that monster's original ATK becomes 200 during damage calculation only.</effect>"
   },
   "Chaos Command Magician": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 6,
      atk: 2400,
      def: 1900,
      text: "Spellcaster/Effect – <effect=Continuous>Effects of monsters that target this 1 card are negated.</effect>"
   },
   "Chiron the Mage": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1000,
      text: "Beast-Warrior/Effect – <effect=Ignition>Once per turn: You can discard 1 Spell Card, then target 1 Spell/Trap Card your opponent controls; destroy that target.</effect>"
   },
   "Chopman the Desperate Outlaw": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1100,
      def: 500,
      text: "Zombie/Effect – <effect=Trigger>When this card is Flip Summoned: You can target 1 Equip Spell in your Graveyard; equip it to this card.</effect>"
   },
   "Crass Clown": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1350,
      def: 1400,
      text: "Fiend/Effect – <effect=Trigger>When this card is changed from Defense Position to Attack Position: Target 1 monster your opponent controls; return that target to the hand.</effect>"
   },
   "Creeping Doom Manta": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 1300,
      def: 1200,
      text: "Fish/Effect – <effect=Continuous>When Normal Summoned, Traps cannot be activated.</effect>"
   },
   "D.D. Assailant": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1600,
      text: "Warrior/Effect – <effect=Trigger>After damage calculation, when this card is destroyed by battle with an opponent's monster: Banish that monster, also banish this card.</effect>"
   },
   "D.D. Crazy Beast": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1400,
      def: 1400,
      text: "Beast/Effect – <effect=Trigger>If this card destroys an opponent's monster by battle, after damage calculation: Banish it.</effect>"
   },
   "Dancing Fairy": {
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1000,
      text: "Fairy/Effect – <effect=Trigger>Once per turn, during your Standby Phase: Gain 1000 Life Points. This card must be in face-up Defense Position to activate and to resolve this effect.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Dark Cat with White Tail": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 800,
      def: 500,
      text: "Beast/Flip/Effect – <effect=Trigger>FLIP: Target 2 monsters your opponent controls and 1 monster you control; return those targets to the hand.</effect>"
   },
   "Dark Elf": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 2000,
      def: 800,
      text: "Spellcaster/Effect – <effect=Continuous>This card cannot declare an attack unless you pay 1000 Life Points.</effect>"
   },
   "Dark Jeroid": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1500,
      text: "Fiend/Effect – <effect=Trigger>When this card is Summoned: Target 1 face-up monster on the field; it loses 800 ATK.</effect>"
   },
   "Dark Scorpion Burglars": {
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
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 2800,
      def: 3000,
      text: "Zombie/Effect – <effect=Trigger>When this card is sent from your hand or Deck to your Graveyard by an opponent's card effect: Special Summon this card.</effect>"
   },
   "Dimension Jar": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 200,
      def: 200,
      text: "Machine/Flip/Effect – <effect=Trigger>FLIP: Both players can banish up to 3 cards from their opponent's Graveyard.</effect>"
   },
   "Double Coston": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1650,
      text: "Zombie/Effect – <effect=Continuous>This card can be treated as 2 Tributes for the Tribute Summon of a DARK monster.</effect>"
   },
   "Dragon Manipulator": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 700,
      def: 800,
      text: "Warrior/Flip/Effect – <effect=Trigger>FLIP: Target 1 Dragon monster your opponent controls; take control of that target until the end of this turn.</effect>"
   },
   "Dream Clown": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: "Warrior/Effect – <effect=Trigger>When this card is changed from Attack Position to Defense Position: Target 1 monster your opponent controls; destroy that target.</effect>"
   },
   Dreamsprite: {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 300,
      def: 200,
      text: "Plant/Effect – <effect=Trigger>Before damage calculation, if this card is targeted for an attack: Target 1 other monster you control; switch the attack target to that target, then apply damage calculation.</effect>"
   },
   "Eagle Eye": {
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1300,
      def: 1200,
      text: "Winged Beast/Effect – <effect=Continuous>When Normal Summoned, Traps cannot be activated.</effect>"
   },
   "Electric Lizard": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 850,
      def: 800,
      text: "Thunder/Effect – <effect=Trigger>If this card was attacked by a non Zombie monster, after damage calculation: Next turn, that monster cannot attack.</effect>"
   },
   "Electric Snake": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 800,
      def: 900,
      text: "Thunder/Effect – <effect=Trigger>When this card is discarded your hand to the Graveyard by an opponent's card effect: Draw 2 cards.</effect>"
   },
   "Elephant Statue of Blessing": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1500,
      def: 0,
      text: "Rock/Effect – <effect=Trigger>When this card is sent from your hand to your Graveyard by an opponent's card effect: Gain 2000 Life Points.</effect>"
   },
   "Elephant Statue of Disaster": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1500,
      def: 0,
      text: "Rock/Effect – <effect=Trigger>When this card is sent from your hand to your Graveyard by an opponent's card effect: Inflict 2000 damage to your opponent.</effect>"
   },
   "Emes the Infinity": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2500,
      def: 2000,
      text: "Machine/Effect – <effect=Trigger>If this card destroys an opponent's monster by battle and sends it to the Graveyard: This card gains 700 ATK.</effect>"
   },
   "Emissary of the Oasis": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 600,
      def: 400,
      text: "Spellcaster/Effect – <effect=Continuous>While you control a Level 3 or lower Normal Monster, your opponent cannot target this card for an attack.</effect> <effect=Continuous>Any battle damage to the controller of this card from battles involving a Level 3 or lower Normal Monster becomes 0.</effect>"
   },
   "Fairy King Truesdale": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 6,
      atk: 2200,
      def: 1500,
      text: "Plant/Effect – <effect=Continuous>While this card is in Defense Position, Plant monsters you control gain 500 ATK/DEF.</effect>"
   },
   "Fear from the Dark": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1500,
      text: "Zombie/Effect – <effect=Trigger>When this card is sent from your hand or Deck to your Graveyard by an opponent's card effect: Special Summon this card.</effect>"
   },
   "Fire Princess": {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1500,
      text: "Pyro/Effect – <effect=Continuous>Each time you gain Life Points, inflict 500 damage to your opponent.</effect>",
      prepopLP: { villain: -500 }
   },
   Firebird: {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1000,
      def: 800,
      text: "Winged Beast/Effect – <effect=Trigger>If a Winged-Beast monster(s) you control is destroyed: This card gains 500 ATK.</effect>"
   },
   "Fushi No Tori": {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1200,
      def: 0,
      text: "Winged Beast/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Trigger>When this card inflicts battle damage to your opponent: Gain Life Points equal to the battle damage inflicted.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   "Ghost Knight of Jackal": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1700,
      def: 1600,
      text: "Beast-Warrior/Effect – <effect=Trigger>When this card destroys an opponent's monster by battle and sends it to the Graveyard: You can target that destroyed monster in your opponent's Graveyard; Special Summon that target to your side of the field in face-up Defense Position.</effect>"
   },
   "Giant Axe Mummy": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1700,
      def: 2000,
      text: "Zombie/Effect – <effect=Ignition>Once per turn: You can change this card to face-down Defense Position.</effect> <effect=Trigger>If this card is attacked by an opponent's monster whose ATK is lower than this card's DEF: Destroy the attacking monster at the end of the Damage Step.</effect>"
   },
   "Goblin Attack Force": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 2300,
      def: 0,
      text: "Warrior/Effect – <effect=Continuous>If this card attacks, it is changed to Defense Position at the end of the Battle Phase, and its battle position cannot be changed until the end of your next turn.</effect>"
   },
   "Goblin King": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: "Fiend/Effect – <effect=Continuous>While you control another Fiend monster, this card cannot be attacked.</effect> <effect=Continuous>This card's ATK/DEF become equal to the number of other Fiend monsters on the field x 1000.</effect>"
   },
   "Goblin of Greed": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1800,
      text: "Fiend/Effect – <effect=Continuous>Neither player can activate cards or effects that would make them discard a card(s) as a cost.</effect>"
   },
   "Gora Turtle": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 1100,
      def: 1100,
      text: "Aqua/Effect – <effect=Continuous>Monsters with 1900 or more ATK cannot attack.</effect>"
   },
   "Gora Turtle of Illusion": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1400,
      text: "Aqua/Effect – <effect=Continuous>Negate any of your opponent's Spell/Trap effects that target this face-up card.</effect>"
   },
   "Gravekeeper's Guard": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1900,
      text: "Spellcaster/Flip/Effect – <effect=Trigger>FLIP: Target 1 monster your opponent controls; return that target to the hand.</effect>"
   },
   "Gravekeeper's Spy": {
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
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1900,
      def: 1700,
      text: "Beast-Warrior/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Trigger>If this card inflicts battle damage to your opponent: Your opponent skips their next Battle Phase.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   "Great Maju Garzett": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 0,
      def: 0,
      text: "Fiend/Effect – <effect=Continuous>This card's ATK becomes twice 1 monster Tributed for the Tribute Summon of this card.</effect>"
   },
   Greenkappa: {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 650,
      def: 900,
      text: "Warrior/Flip/Effect – <effect=Trigger>FLIP: Target 2 Set Spell/Trap Cards on the field; destroy those targets.</effect>"
   },
   "Guardian Angel Joan": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2800,
      def: 2000,
      text: "Fairy/Effect – <effect=Trigger>When this card destroys a monster by battle and sends it to the Graveyard: Gain Life Points equal to the original ATK of that destroyed monster in the Graveyard.</effect>"
   },
   "Guardian Sphinx": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1700,
      def: 2400,
      text: "Rock/Effect – <effect=Ignition>Once per turn: You can change this card to face-down Defense Position.</effect> <effect=Trigger>When this card is Flip Summoned: Return all monsters your opponent controls to the hand.</effect>"
   },
   "Gyaku-Gire Panda": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 800,
      def: 1600,
      text: "Beast/Effect – <effect=Continuous>Gains 500 ATK for each monster your opponent controls.</effect> <effect=Continuous>If this card attacks a Defense Position monster, inflict piercing battle damage to your opponent."
   },
   "Cure Mermaid": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1500,
      def: 800,
      text: "Fish/Effect – <effect=Trigger>As long as this card remains face-up on your side of the field, increase your Life Points by 800 points during each of your Standby Phases.</effect>",
      prepopLP: { hero: 800 }
   },
   "Hysteric Fairy": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1800,
      def: 500,
      text: "Fairy/Effect – <effect=Ignition>Tribute 2 monsters on your side of the field to increase your Life Points by 1000 points.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Nuvia the Wicked": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 2000,
      def: 800,
      text: "Fiend/Effect – <effect=Trigger>If this monster is Normal Summoned, destroy this card.</effect> <effect=Continuous>If your opponent controls any monster, decrease the ATK of this card by 200 points for each monster on your opponent's side of the field.</effect>"
   },
   "The Forgiving Maiden": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 850,
      def: 2000,
      text: "Fairy/Effect – <effect=Ignition>Offer this face-up card as a Tribute to return 1 of your monsters destroyed in battle during this turn to your hand.</effect>"
   },
   "Hade-Hane": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 900,
      def: 1000,
      text: "Beast/Flip/Effect – <effect=Trigger>FLIP: You can target up to 3 monsters on the field; return those targets to the hand.</effect>"
   },
   "Hand of Nephthys": {
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 2,
      atk: 600,
      def: 600,
      text: 'Spellcaster/Effect – <effect=Ignition>You can Tribute this card and 1 other monster; Special Summon 1 "Sacred Phoenix of Nephthys" from your hand or Deck.</effect>'
   },
   "Harpie Lady Sisters": {
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 6,
      atk: 1950,
      def: 2100,
      text: 'Winged Beast/Effect – <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must first be Special Summoned with "Elegant Egotist".</effect>'
   },
   "Hayabusa Knight": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1000,
      def: 700,
      text: "Warrior/Effect – <effect=Continuous>This card can make a second attack during each Battle Phase.</effect>"
   },
   "Helping Robo for Combat": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 0,
      text: "Machine/Effect – <effect=Trigger>When this card destroys an opponent's monster by battle: Draw 1 card, then return 1 card from your hand to the bottom of the Deck.</effect>"
   },
   Hyena: {
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
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 700,
      def: 500,
      text: "Beast/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Continuous>This card can attack directly.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   "Invasion of Flames": {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 3,
      atk: 1300,
      def: 1200,
      text: "Pyro/Effect – <effect=Continuous>When Normal Summoned, Traps cannot be activated.</effect>"
   },
   "Jinzo #7": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 500,
      def: 400,
      text: "Machine/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Kaiser Sea Horse": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1650,
      text: "Sea Serpent/Effect – <effect=Continuous>This card can be treated as 2 Tributes for the Tribute Summon of a LIGHT monster.</effect>"
   },
   "Kangaroo Champ": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 800,
      def: 700,
      text: "Beast/Effect – <effect=Trigger>If this card battles a monster: that monster is changed to Defense Position after damage calculation.</effect>"
   },
   Keldo: {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1600,
      text: "Fairy/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: Target 2 cards in your opponent's Graveyard; shuffle them into the Deck.</effect>"
   },
   Kiseitai: {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 300,
      def: 800,
      text: "Fiend/Effect – <effect=Trigger>When your opponent's monster attacks this face-down Defense Position card: This card becomes an Equip Spell equipped to the attacking monster.</effect> <effect=Trigger-like>Once per turn, during your opponent's Standby Phase: Gain Life Points equal to half the equipped monster's ATK.</effect>"
   },
   "Lady Ninja Yae": {
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1100,
      def: 200,
      text: "Warrior/Effect – <effect=Ignition>You can discard 1 WIND monster to the Graveyard; return all Spells/Traps your opponent controls to the hand.</effect>"
   },
   "Lava Battleguard": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1550,
      def: 1800,
      text: 'Warrior/Effect – <effect=Continuous>Gains 500 ATK for each "Swamp Battleguard" you control.</effect>'
   },
   Leghul: {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 300,
      def: 350,
      text: "Insect/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Mad Sword Beast": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Dinosaur/Effect – <effect=Continuous>If this card attacks a Defense Position monster, inflict piercing battle damage to your opponent.</effect>"
   },
   "Magical Plant Mandragola": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 500,
      def: 200,
      text: "Spellcaster/Flip/Effect – <effect=Flip>FLIP: Place 1 Spell Counter on each face-up card on the field that you can place a Spell Counter on.</effect>"
   },
   "Maha Vailo": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1550,
      def: 1400,
      text: "Spellcaster/Effect – <effect=Continuous>Gains 500 ATK for each Equip Card equipped to this card.</effect>"
   },
   "Maju Garzett": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 0,
      def: 0,
      text: "Fiend/Effect – <effect=Continuous>This Tribute Summoned card's ATK becomes the 2 Tributed monsters' combined original ATKs.</effect>"
   },
   "Masked Dragon": {
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
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 300,
      def: 250,
      text: "Beast/Effect – <effect=Continuous>All EARTH monsters on the field gain 500 ATK, also all WIND monsters on the field lose 400 ATK.</effect>"
   },
   "Mysterious Puppeteer": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1500,
      text: "Warrior/Effect – <effect=Trigger>If a monster is Normal or Flip Summoned: Gain 500 Life Points.</effect>"
   },
   "Mystical Knight of Jackal": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2700,
      def: 1200,
      text: "Beast-Warrior/Effect – <effect=Trigger>When this card destroys a monster by battle and sends it to your opponent's Graveyard: You can return it to the top of the Deck.</effect>"
   },
   "Needle Burrower": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1700,
      def: 1700,
      text: "Machine/Effect – <effect=Trigger>When this card destroys a monster by battle and sends it to the Graveyard: Inflict damage to your opponent equal to the monster's original Level x 500.</effect>"
   },
   "Neko Mane King": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: "Beast/Effect – <effect=Trigger>During your opponent's turn, when this card in your possession is sent to your Graveyard by an opponent's card effect: It becomes the End Phase of this turn.</effect>"
   },
   "Nightmare Horse": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 500,
      def: 400,
      text: "Zombie/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Shining Angel": {
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
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text: "Warrior/Effect – <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your Graveyard.</effect> <effect=Condition>Once per turn, you can activate 1 of these effects.</effect> ● <effect=Ignition>Target 1 monster on the field; banish it.</effect> <effect=Condition>This card cannot attack the turn this effect is activated.</effect> ● <effect=Trigger>If this attacking card destroys an opponent's monster by battle: It can make a second attack in a row.</effect>",
      limit: 1
   },
   "Airknight Parshath": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 1900,
      def: 1400,
      text: "Fairy/Effect – <effect=Continuous>If this card attacks a Defense Position monster, inflict piercing battle damage.</effect> <effect=Trigger>If this card inflicts battle damage to your opponent: Draw 1 card.</effect>"
   },
   "Magician of Faith": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 1,
      atk: 300,
      def: 400,
      text: "Spellcaster/Flip/Effect – <effect=Trigger>FLIP: Target 1 Spell in your Graveyard; add that target to your hand.</effect>"
   },
   "Magical Merchant": {
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
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1300,
      text: "Aqua/Effect – <effect=Ignition>Once per turn: You can discard 1 WATER monster to the Graveyard to target 1 card on the field; return it to the hand.</effect>",
      limit: 2
   },
   "Breaker the Magical Warrior": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Spellcaster/Effect – <effect=Trigger>If this card is Normal Summoned: Place 1 Spell Counter on it (max. 1).</effect> <effect=Continuous>Gains 300 ATK for each Spell Counter on it.</effect> <effect=Ignition>You can remove 1 Spell Counter from this card, then target 1 Spell/Trap on the field; destroy that target.</effect>",
      limit: 1
   },
   Tsukuyomi: {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1100,
      def: 1400,
      text: "Spellcaster/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Trigger>If this card is Normal Summoned or flipped face-up: Target 1 face-up monster on the field; change that target to face-down Defense Position.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   Sangan: {
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
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 1,
      atk: 300,
      def: 250,
      text: "Reptile/Effect – <effect=Trigger>During your Standby Phase, if this card is in your Graveyard: You can return it to your hand.</effect>",
      limit: 1
   },
   "Tribe-Infecting Virus": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Aqua/Effect – <effect=Ignition>You can discard 1 card, then declare 1 Type of monster; Destroy all face-up monsters of the declared Type on the field.</effect>",
      limit: 1
   },
   "Morphing Jar": {
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
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1200,
      text: "Fairy/Spirit/Effect – <effect=Summon>Cannot be Special Summoned.</effect> <effect=Trigger>During the End Phase of the turn this card is Normal Summoned or flipped face-up: Return it to the hand.</effect> <effect=Continuous>This card can attack all monsters your opponent controls once each.</effect>"
   },
   "Kycoo the Ghost Destroyer": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1800,
      def: 700,
      text: "Spellcaster/Effect – <effect=Trigger>When this card inflicts battle damage to your opponent: You can target up to 2 monsters in their Graveyard; banish those targets.</effect> <effect=Continuous>Your opponent cannot banish cards from either Graveyard.</effect>"
   },
   "D.D. Warrior Lady": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1600,
      text: "Warrior/Effect – <effect=Trigger>After damage calculation, when this card battles an opponent's monster: You can banish that monster, also banish this card.</effect>",
      limit: 1
   },
   "Chaos Sorcerer": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2300,
      def: 2000,
      text: "Spellcaster/Effect – <effect=Summon>Cannot be Normal Summoned/Set.</effect> <effect=Summon>Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your Graveyard.</effect> <effect=Ignition>Once per turn: You can target 1 face-up monster on the field; banish that target.</effect> <effect=Condition>This card cannot attack the turn you activate this effect.</effect>"
   },
   "Dekoichi the Battlechanted Locomotive": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: 'Machine/Flip/Effect – <effect=Trigger>FLIP: Draw 1 card, then draw 1 additional card for each face-up "Bokoichi the Freightening Car" you control.</effect>'
   },
   "Jowgen the Spiritualist": {
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
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 900,
      def: 0,
      text: 'Warrior/Effect – <effect=Trigger>At the start of the Damage Step, if this card attacked a face-down Defense Position monster: Destroy that monster.</effect> <effect=Trigger>During the End Phase, if this card destroyed a monster by battle this turn: You can send this face-up card to the Graveyard; Special Summon 1 "Mystic Swordsman LV4" from your hand or Deck.</effect>'
   },
   "Roulette Barrel": {
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
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 2400,
      def: 1000,
      text: "Thunder/Effect – <effect=Trigger>If this card is Tribute Summoned: Target 1 monster on the field; destroy that target.</effect>"
   },
   "Blade Knight": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Warrior/Effect – <effect=Continuous>While you have 1 or less cards in your hand, this card gains 400 ATK.</effect> <effect=Continuous>If you control no other monsters, the effects of Flip monsters destroyed by battle with this card are negated.</effect>"
   },
   "Don Zaloog": {
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
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1000,
      text: "Warrior/Effect – <effect=Ignition>You can Tribute this card to target 1 monster on the field; destroy that target.</effect>",
      limit: 1
   },
   "Ninja Grandmaster Sasuke": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1000,
      text: "Warrior/Effect – <effect=Trigger>At the start of the Damage Step, if this card attacks a face-up Defense Position monster: Destroy that monster.</effect>"
   },
   "Nobleman-Eater Bug": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 900,
      def: 1200,
      text: "Insect/Flip/Effect – <effect=Trigger>FLIP: Target as many monsters on the field as possible, but no more than 2; destroy them.</effect>"
   },
   "Nubian Guard": {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 2,
      atk: 500,
      def: 500,
      text: "Warrior/Effect – <effect=Trigger>If this card inflicts battle damage to your opponent: You can target 1 Continuous Spell in your Graveyard; return it on the top of the Deck.</effect>"
   },
   "Old Vindictive Magician": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 450,
      def: 600,
      text: "Spellcaster/Flip/Effect – <effect=Flip>FLIP: Target 1 monster your opponent controls; destroy that target.</effect>"
   },
   Ooguchi: {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 1,
      atk: 300,
      def: 250,
      text: "Aqua/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Patrician of Darkness": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1400,
      text: "Zombie/Effect – <effect=Continuous>You choose the attack targets for your opponent's attacks.</effect>"
   },
   "Penguin Soldier": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 750,
      def: 500,
      text: "Aqua/Flip/Effect – <effect=Trigger>FLIP: You can target up to 2 monsters on the field; return those targets to the hand.</effect>"
   },
   "Piranha Army": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 800,
      def: 200,
      text: "Fish/Effect – <effect=Continuous>Damage this card inflicts by direct attacks is doubled.</effect>"
   },
   "Pitch-Black Warwolf": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1600,
      def: 600,
      text: "Beast-Warrior/Effect – <effect=Continuous>Your opponent cannot activate Trap Cards during the Battle Phase.</effect>"
   },
   "Pixie Knight": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 1300,
      def: 200,
      text: "Spellcaster/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: Your opponent targets 1 Spell in your Graveyard; place that card on top of the Deck.</effect>"
   },
   "Poison Mummy": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1800,
      text: "Zombie/Flip/Effect – <effect=Flip>FLIP: Inflict 500 damage to your opponent.</effect>",
      prepopLP: { villain: -500 }
   },
   "Protector of the Sanctuary": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1100,
      def: 1900,
      text: "Fiend/Effect – <effect=Continuous>Your opponent cannot draw cards except during Draw Phases.</effect>",
      limit: 1
   },
   "Queen's Double": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 350,
      def: 300,
      text: "Warrior/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Rainbow Flower": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 400,
      def: 500,
      text: "Plant/Effect – <effect=Continuous>This card can attack directly.</effect>"
   },
   "Regenerating Mummy": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1500,
      text: "Zombie/Effect – <effect=Trigger>When this card is sent from your hand to your Graveyard by an opponent's card effect: Return this card to the hand.</effect>"
   },
   "Revival Jam": {
      cardType: EFFECT_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1500,
      def: 500,
      text: "Aqua/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can pay 1000 Life Points; Special Summon it in face-up Defense Position during your next Standby Phase.</effect>",
      prepopLP: { hero: -1000 }
   },
   "Rocket Jumper": {
      cardType: EFFECT_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1000,
      def: 800,
      text: "Rock/Effect – <effect=Continuous>If your opponent only controls Defense Position monsters, this card can attack directly.</effect>"
   },
   "Skilled Dark Magician": {
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
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 2100,
      def: 200,
      text: "Warrior/Effect – <effect=Continuous>Cannot attack your opponent directly.</effect> <effect=Trigger>If this card destroys a monster by battle: This card loses 200 ATK.</effect>"
   },
   "Armed Dragon LV5": {
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
      cardType: EFFECT_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 2000,
      def: 100,
      text: "Dragon/Effect – Cannot be Normal Summoned while you control a monster. <effect=Continuous>This card cannot declare an attack unless you control another Dragon-Type monster.</effect>"
   },
   "Different Dimension Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 1200,
      def: 1500,
      text: "Dragon/Effect – <effect=Continuous>This card cannot be destroyed by Spell/Trap effects that do not target it.</effect> <effect=Continuous>This card cannot be destroyed by battle with a monster that has 1900 or less ATK.</effect>"
   },
   "Fusilier Dragon, the Dual-Mode Beast": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2800,
      def: 2000,
      text: "Machine/Effect – You can Normal Summon/Set this card without Tributing, but its original ATK/DEF become halved."
   },
   "Mirage Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 600,
      text: "Dragon/Effect – <effect=Continuous>Your opponent cannot activate Traps during the Battle Phase.</effect>"
   },
   "Rare Metal Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 2400,
      def: 1200,
      text: "Dragon/Effect – This card cannot be Normal Summoned or Set."
   },
   "Tyrant Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 8,
      atk: 2900,
      def: 2500,
      text: "Dragon/Effect – <effect=Continuous>During your Battle Phase, if your opponent controls a monster after this card's first attack, this card can make a second attack.</effect> <effect=Continuous>Negate any Trap effects that target this card on the field, and if you do, destroy that Trap.</effect> <effect=Summon>This card cannot be Special Summoned from the GY, unless you Tribute 1 Dragon monster.</effect>"
   }
};

export default effectMonsters;
