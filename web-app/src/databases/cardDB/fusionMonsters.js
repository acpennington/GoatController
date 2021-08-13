import { HERO, MONSTER, FLIP_COINS, FUSION_MONSTER, DARK, LIGHT, WATER, FIRE, EARTH, WIND } from "utils/constants.js";

const fusions = {
   Bickuribox: {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2300,
      def: 2000,
      text: 'Fiend/Fusion – "Crass Clown" + "Dream Clown"'
   },
   "Black Skull Dragon": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 9,
      atk: 3200,
      def: 2500,
      text: 'Dragon/Fusion – "Summoned Skull" + "Red-Eyes Black Dragon". (This card is always treated as an "Archfiend" card.)'
   },
   "Charubin the Fire Knight": {
      cardType: FUSION_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 3,
      atk: 1100,
      def: 800,
      text: 'Pyro/Fusion – "Monster Egg" + "Hinotama Soul"'
   },
   "Cyber Saurus": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1400,
      text: 'Machine/Fusion – "Blast Juggler" + "Two-Headed King Rex"'
   },
   "Dark Flare Knight": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2200,
      def: 800,
      text: 'Warrior/Fusion/Effect – "Dark Magician" + "Flame Swordsman". <effect=Continuous>You take no Battle Damage from battles involving this card.</effect> <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: Special Summon 1 "Mirage Knight" from your hand or Deck.</effect>'
   },
   "Dark Paladin": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 2900,
      def: 2400,
      text: 'Spellcaster/Fusion/Effect – "Dark Magician" + "Buster Blader". <effect=Summon>Must be Fusion Summoned.</effect> <effect=Quick>When a Spell Card is activated (Quick Effect): You can discard 1 card; negate the activation, and if you do, destroy it. This card must be face-up on the field to activate and to resolve this effect.</effect> <effect=Continuous>Gains 500 ATK for each Dragon monster on the field and in the Graveyard.</effect>',
      noMeta: true
   },
   "Deepsea Shark": {
      cardType: FUSION_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 1900,
      def: 1600,
      text: 'Fish/Fusion – "Bottom Dweller" + "Tongyo"'
   },
   "Elemental HERO Flame Wingman": {
      cardType: FUSION_MONSTER,
      attribute: WIND,
      levelOrSubtype: 6,
      atk: 2100,
      def: 1200,
      text: 'Warrior/Fusion/Effect – "Elemental HERO Avian" + "Elemental HERO Burstinatrix". <effect=Summon>Must be Fusion Summoned.</effect> <effect=Trigger>When this card destroys a monster by battle and sends it to the Graveyard: Inflict damage to your opponent equal to the ATK of the destroyed monster in the Graveyard.</effect>',
      noMeta: true
   },
   "Elemental HERO Thunder Giant": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 6,
      atk: 2400,
      def: 1500,
      text: 'Warrior/Fusion/Effect – "Elemental HERO Sparkman" + "Elemental HERO Clayman". <effect=Summon>Must be Fusion Summoned.</effect> <effect=Ignition>Once per turn: You can discard 1 card to target 1 face-up monster on the field with original ATK less than the ATK of this card; destroy that target.</effect>',
      noMeta: true
   },
   "Empress Judge": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 2100,
      def: 1700,
      text: 'Warrior/Fusion – "Queen\'s Double" + "Hibikime"'
   },
   "Flame Ghost": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1000,
      def: 800,
      text: 'Zombie/Fusion – "Skull Servant" + "Dissolverock"'
   },
   "Flame Swordsman": {
      cardType: FUSION_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1600,
      text: 'Warrior/Fusion – "Flame Manipulator" + "Masaki the Legendary Swordsman"'
   },
   "Flower Wolf": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1400,
      text: 'Beast/Fusion – "Silver Fang" + "Darkworld Thorns"'
   },
   Fusionist: {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 900,
      def: 700,
      text: 'Beast/Fusion – "Petit Angel" + "Mystical Sheep #2"'
   },
   "Gaia the Dragon Champion": {
      cardType: FUSION_MONSTER,
      attribute: WIND,
      levelOrSubtype: 7,
      atk: 2600,
      def: 2100,
      text: 'Dragon/Fusion – "Gaia The Fierce Knight" + "Curse of Dragon"'
   },
   "Giltia the D. Knight": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 1850,
      def: 1500,
      text: 'Warrior/Fusion – "Guardian of the Labyrinth" + "Protector of the Throne"'
   },
   "Humanoid Worm Drake": {
      cardType: FUSION_MONSTER,
      attribute: WATER,
      levelOrSubtype: 7,
      atk: 2200,
      def: 2000,
      text: 'Aqua/Fusion – "Worm Drake" + "Humanoid Slime"'
   },
   "Kaminari Attack": {
      cardType: FUSION_MONSTER,
      attribute: WIND,
      levelOrSubtype: 5,
      atk: 1900,
      def: 1400,
      text: 'Thunder/Fusion – "Ocubeam" + "Mega Thunderball"'
   },
   "Karbonala Warrior": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: 'Warrior/Fusion – "M-Warrior #1" + "M-Warrior #2"'
   },
   "Kwagar Hercules": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 1900,
      def: 1700,
      text: 'Insect/Fusion – "Kuwagata α" + "Hercules Beetle"'
   },
   "Labyrinth Tank": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2400,
      def: 2400,
      text: 'Machine/Fusion – "Giga-Tech Wolf" + "Cannon Soldier"'
   },
   "Master of Oz": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 9,
      atk: 4200,
      def: 3700,
      text: 'Beast/Fusion – "Big Koala" + "Des Kangaroo"'
   },
   "Metal Dragon": {
      cardType: FUSION_MONSTER,
      attribute: WIND,
      levelOrSubtype: 6,
      atk: 1850,
      def: 1700,
      text: 'Machine/Fusion – "Steel Ogre Grotto #1" + "Lesser Dragon"'
   },
   "Mokey Mokey King": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 6,
      atk: 300,
      def: 100,
      text: 'Fairy/Fusion/Effect – "Mokey Mokey" + "Mokey Mokey" + "Mokey Mokey". <effect=Trigger>When this card leaves the field, you can Special Summon as many "Mokey Mokey" as possible from your Graveyard.</effect>'
   },
   "Musician King": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 1750,
      def: 1500,
      text: 'Spellcaster/Fusion – "Witch of the Black Forest" + "Lady of Faith"'
   },
   "Punished Eagle": {
      cardType: FUSION_MONSTER,
      attribute: WIND,
      levelOrSubtype: 6,
      atk: 2100,
      def: 1800,
      text: 'Winged Beast/Fusion – "Blue-Winged Crown" + "Niwatori"'
   },
   "Rabid Horseman": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 2000,
      def: 1700,
      text: 'Beast-Warrior/Fusion – "Battle Ox" + "Mystic Horseman"'
   },
   "Roaring Ocean Snake": {
      cardType: FUSION_MONSTER,
      attribute: WATER,
      levelOrSubtype: 6,
      atk: 2100,
      def: 1800,
      text: 'Aqua/Fusion – "Mystic Lamp" + "Hyosube"'
   },
   Sanwitch: {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2100,
      def: 1800,
      text: 'Spellcaster/Fusion – "Sangan" + "Witch of the Black Forest"'
   },
   "Skull Knight": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2650,
      def: 2250,
      text: 'Spellcaster/Fusion – "Tainted Wisdom" + "Ancient Brain"'
   },
   "St. Joan": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2800,
      def: 2000,
      text: 'Fairy/Fusion – "The Forgiving Maiden" + "Darklord Marie"'
   },
   "Super Robolady": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 1200,
      def: 500,
      text: 'Machine/Fusion/Effect – "Robolady" + "Roboyarou". <effect=Ignition>You can Special Summon "Super Roboyarou" by returning this card from the field to the Extra Deck. You cannot use this effect during the same turn this monster is Special Summoned.</effect> <effect=Trigger>In addition, increase the ATK of this monster by 1000 points during the Damage Step when this monster inflicts Direct Damage to your opponent\'s Life Points.</effect>'
   },
   "Super Roboyarou": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 1200,
      def: 500,
      text: 'Machine/Fusion/Effect – "Roboyarou" + "Robolady". <effect=Ignition>You can Special Summon "Super Robolady" by returning this card from the field to the Extra Deck. You cannot use this effect during the same turn this monster is Special Summoned.</effect> <effect=Trigger>In addition, increase the ATK of this monster by 1000 points during the Damage Step when this monster battles with a monster.</effect>'
   },
   "Thousand Dragon": {
      cardType: FUSION_MONSTER,
      attribute: WIND,
      levelOrSubtype: 7,
      atk: 2400,
      def: 2000,
      text: 'Dragon/Fusion – "Time Wizard" + "Baby Dragon"'
   },
   "Twin-Headed Thunder Dragon": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2800,
      def: 2100,
      text: 'Thunder/Fusion – "Thunder Dragon" + "Thunder Dragon"'
   },
   "Warrior of Tradition": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 1900,
      def: 1700,
      text: 'Warrior/Fusion – "Sonic Maid" + "Beautiful Headhuntress"'
   },
   "XY-Dragon Cannon": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 6,
      atk: 2200,
      def: 1900,
      text: 'Machine/Fusion/Effect – "X-Head Cannon" + "Y-Dragon Head". <effect=Summon>Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".)</effect> <effect=Summon>Cannot be Special Summoned from the Graveyard.</effect> <effect=Ignition>You can discard 1 card, then target 1 face-up Spell/Trap your opponent controls; destroy that target.</effect>',
      noMeta: true
   },
   "XYZ-Dragon Cannon": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 8,
      atk: 2800,
      def: 2600,
      text: 'Machine/Fusion/Effect – "X-Head Cannon" + "Y-Dragon Head" + "Z-Metal Tank". <effect=Summon>Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".)</effect> <effect=Summon>Cannot be Special Summoned from the Graveyard.</effect> <effect=Ignition>You can discard 1 card, then target 1 card your opponent controls; destroy that target.</effect>',
      noMeta: true
   },
   "XZ-Tank Cannon": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 6,
      atk: 2400,
      def: 2100,
      text: 'Machine/Fusion/Effect – "X-Head Cannon" + "Z-Metal Tank". <effect=Summon>Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".)</effect> <effect=Summon>Cannot be Special Summoned from the Graveyard.</effect> <effect=Ignition>You can discard 1 card, then target 1 face-down Spell/Trap your opponent controls; destroy that target.</effect>',
      noMeta: true
   },
   "YZ-Tank Dragon": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 6,
      atk: 2100,
      def: 2200,
      text: 'Machine/Fusion/Effect – "Y-Dragon Head" + "Z-Metal Tank". <effect=Summon>Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".)</effect> <effect=Summon>Cannot be Special Summoned from the Graveyard.</effect> <effect=Ignition>You can discard 1 card, then target 1 face-down monster your opponent controls; destroy that target.</effect>',
      noMeta: true
   },
   "Dragoness the Wicked Knight": {
      cardType: FUSION_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: 'Warrior/Fusion – "Armaill" + "One-Eyed Shield Dragon"'
   },
   "King Dragun": {
      cardType: FUSION_MONSTER,
      attribute: "",
      levelOrSubtype: 7,
      atk: 2400,
      def: 1100,
      text: 'Dragon/Fusion/Effect – "Lord of D." + "Divine Dragon Ragnarok". <effect=Continuous>Your opponent cannot target Dragon monsters with card effects.</effect> <effect=Ignition>Once per turn: You can Special Summon 1 Dragon monster from your hand.</effect>'
   },
   "Darkfire Dragon": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1250,
      text: 'Dragon/Effect – "Firegrass" + "Petit Dragon"'
   },
   "Ojama King": {
      cardType: FUSION_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 6,
      atk: 0,
      def: 3000,
      text: 'Beast/Fusion/Effect – "Ojama Green" + "Ojama Yellow" + "Ojama Black". <effect=Continuous>Select up to 3 of your opponent\'s Monster Card Zones. The selected zones cannot be used.</effect>'
   },
   "Reaper on the Nightmare": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 800,
      def: 600,
      text: 'Zombie/Fusion/Effect – "Spirit Reaper" + "Nightmare Horse". <effect=Continuous>This card is not destroyed as a result of battle.</effect> <effect=Continuous>After resolving a card effect that targets this face-up card, destroy this card.</effect> <effect=Continuous>This card can attack directly.</effect> <effect=Trigger>When this card inflicts battle damage to your opponent by a direct attack: Discard 1 random card from their hand.</effect>'
   },
   "Fiend Skull Dragon": {
      cardType: FUSION_MONSTER,
      attribute: WIND,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1200,
      text: 'Dragon/Fusion/Effect – "Cave Dragon" + "Lesser Fiend". <effect=Condition>(This card is always treated as an "Archfiend" card.)</effect> <effect=Summon>A Fusion Summon of this card can only be done with the above Fusion Material Monsters.</effect> <effect=Continuous>Negate the effects of Flip Effect Monsters.</effect> <effect=Continuous>Negate any Trap effects that target this card on the field, and if you do, destroy that Trap Card.</effect>'
   },
   "Dark Blade the Dragon Knight": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2200,
      def: 1500,
      text: 'Warrior/Fusion/Effect – "Dark Blade" + "Pitch-Dark Dragon". <effect=Trigger>When this card inflicts battle damage to your opponent: You can target up to 3 monsters in their Graveyard; banish those targets.</effect>'
   },
   "The Last Warrior from Another Planet": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 7,
      atk: 2350,
      def: 2300,
      text: 'Warrior/Fusion/Effect – "Zombyra the Dark" + "Maryokutai". <effect=Trigger>If this card is Special Summoned: Destroy all other monsters you control.</effect> <effect=Continuous>Neither player can Summon monsters.</effect>'
   },
   "Gatling Dragon": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 2600,
      def: 1200,
      text: 'Machine/Fusion/Effect – "Barrel Dragon" + "Blowback Dragon". <effect=Ignition>Once per turn: You can toss a coin 3 times and destroy as many monsters on the field as possible, but not more than the number of heads.</effect>',
      script: {
         name: FLIP_COINS,
         displayCondition: {
            players: [HERO],
            row: MONSTER
         },
         params: 3
      }
   },
   "Ryu Senshi": {
      cardType: FUSION_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 2000,
      def: 1200,
      text: 'Warrior/Fusion/Effect – "Warrior Dai Grepher" + "Spirit Ryu". <effect=Summon>A Fusion Summon of this card can only be done with the above Fusion Materials.</effect> <effect=Quick>When a Normal Trap Card is activated (Quick Effect): You can pay 1000 Life Points; negate that effect. This card must be face-up on the field to activate and to resolve this effect.</effect> <effect=Continuous>Negate the effects of any Spell Card that targets this card and destroy it.</effect>'
   },
   "Dark Balter the Terrible": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1200,
      text: 'Fiend/Fusion/Effect – "Possessed Dark Soul" + "Frontier Wiseman". <effect=Summon>A Fusion Summon of this card can only be done with the above Fusion Materials.</effect> <effect=Quick>When a Normal Spell Card is activated (Quick Effect): You can pay 1000 Life Points; negate that effect. This card must be face-up on the field to activate and to resolve this effect.</effect> <effect=Continuous>Negate the effects of monsters destroyed by battle with this card.</effect>'
   },
   "Thousand-Eyes Restrict": {
      cardType: FUSION_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: 'Spellcaster/Fusion/Effect – "Relinquished" + "Thousand-Eyes Idol". <effect=Continuous>Other monsters on the field cannot change their battle positions or attack.</effect> <effect=Ignition>Once per turn: You can target 1 monster your opponent controls; equip that target to this card (max. 1). This card must be face-up on the field to activate and to resolve this effect.</effect> <effect=Continuous>This card\'s ATK/DEF become equal to that equipped monster\'s. If this card would be destroyed by battle, destroy that equipped monster instead.</effect>'
   }
};

export default fusions;
