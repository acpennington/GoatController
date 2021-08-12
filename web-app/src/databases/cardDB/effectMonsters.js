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
      text: "Fairy/Effect – <effect=Trigger>Once per turn, during your Standby Phase: Gain 1000 Life Points. This card must be in face-up Defense Position to activate and to resolve this effect.</effect>"
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
      prepopLP: { villain: 500 }
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
               value: "1500"
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
               value: "1500"
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
               value: "1500"
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
               value: "1500"
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
               value: "1500"
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
               value: "1500"
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
               value: "1500"
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
      text: "Aqua/Effect – <effect=Ignition>Discard 1 card, then declare 1 Type of monster; Destroy all face-up monsters of the declared Type on the field.</effect>",
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
      text: "Warrior/Effect – <effect=Trigger>When this card inflicts Battle Damage to your opponent, you can activate 1 of these effects: ● Discard 1 random card from their hand. ● Send the top 2 cards of their Deck to the Graveyard.</effect>"
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
      text: "Machine/Effect – You can Normal Summon/Set this card without Tributing, but its original ATK and DEF become halved."
   },
   "Mirage Dragon": {
      cardType: EFFECT_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 600,
      text: "Dragon/Effect – <effect=Continuous>Your opponent cannot activate Trap Cards during the Battle Phase.</effect>"
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
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 2900,
      def: 2500,
      text: "Dragon/Effect – <effect=Trigger>During your Battle Phase, if your opponent controls a monster after this card's first attack, this card can make a second attack.</effect> <effect=Trigger>Negate any Trap effects that target this card, and if you do, destroy that Trap Card.</effect> This card cannot be Special Summoned from the Graveyard, unless you Tribute 1 Dragon-Type monster."
   }
};

export default effectMonsters;
