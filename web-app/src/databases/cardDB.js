const fusions = {
   Bickuribox: {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 7,
      atk: 2300,
      def: 2000,
      text: 'Fiend/Fusion – "Crass Clown" + "Dream Clown"'
   },
   "Black Skull Dragon": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 9,
      atk: 3200,
      def: 2500,
      text: 'Dragon/Fusion – "Summoned Skull" + "Red-Eyes Black Dragon". (This card is always treated as an "Archfiend" card.)'
   },
   "Charubin the Fire Knight": {
      cardType: "fusionMonster",
      attribute: "Fire",
      levelOrSubtype: 3,
      atk: 1100,
      def: 800,
      text: 'Pyro/Fusion – "Monster Egg" + "Hinotama Soul"'
   },
   "Cyber Saurus": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 5,
      atk: 1800,
      def: 1400,
      text: 'Machine/Fusion – "Blast Juggler" + "Two-Headed King Rex"'
   },
   "Dark Flare Knight": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 6,
      atk: 2200,
      def: 800,
      text: 'Warrior/Fusion/Effect – "Dark Magician" + "Flame Swordsman". <effect=Continuous>You take no Battle Damage from battles involving this card.</effect> <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: Special Summon 1 "Mirage Knight" from your hand or Deck.</effect>'
   },
   "Dark Paladin": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 8,
      atk: 2900,
      def: 2400,
      text: 'Spellcaster/Fusion/Effect – "Dark Magician" + "Buster Blader". Must be Fusion Summoned. <effect=Quick>When a Spell Card is activated (Quick Effect): You can discard 1 card; negate the activation, and if you do, destroy it. This card must be face-up on the field to activate and to resolve this effect.</effect> <effect=Continuous>Gains 500 ATK for each Dragon monster on the field and in the GY.</effect>',
      noMeta: true
   },
   "Deepsea Shark": {
      cardType: "fusionMonster",
      attribute: "Water",
      levelOrSubtype: 5,
      atk: 1900,
      def: 1600,
      text: 'Fish/Fusion – "Bottom Dweller" + "Tongyo"'
   },
   "Elemental HERO Flame Wingman": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 6,
      atk: 2100,
      def: 1200,
      text: 'Warrior/Fusion/Effect – "Elemental HERO Avian" + "Elemental HERO Burstinatrix". Must be Fusion Summoned and cannot be Special Summoned by other ways. <effect=Trigger>When this card destroys a monster by battle and sends it to the Graveyard: Inflict damage to your opponent equal to the ATK of the destroyed monster in the Graveyard.</effect>',
      noMeta: true
   },
   "Elemental HERO Thunder Giant": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 2400,
      def: 1500,
      text: 'Warrior/Fusion/Effect – "Elemental HERO Sparkman" + "Elemental HERO Clayman". Must be Fusion Summoned and cannot be Special Summoned by other ways. <effect=Ignition>Once per turn: You can discard 1 card to target 1 face-up monster on the field with original ATK less than the ATK of this card; destroy that target.</effect>',
      noMeta: true
   },
   "Empress Judge": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 6,
      atk: 2100,
      def: 1700,
      text: 'Warrior/Fusion – "Queen\'s Double" + "Hibikime"'
   },
   "Flame Ghost": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 3,
      atk: 1000,
      def: 800,
      text: 'Zombie/Fusion – "Skull Servant" + "Dissolverock"'
   },
   "Flame Swordsman": {
      cardType: "fusionMonster",
      attribute: "Fire",
      levelOrSubtype: 5,
      atk: 1800,
      def: 1600,
      text: 'Warrior/Fusion – "Flame Manipulator" + "Masaki the Legendary Swordsman"'
   },
   "Flower Wolf": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 5,
      atk: 1800,
      def: 1400,
      text: 'Beast/Fusion – "Silver Fang" + "Darkworld Thorns"'
   },
   Fusionist: {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 3,
      atk: 900,
      def: 700,
      text: 'Beast/Fusion – "Petit Angel" + "Mystical Sheep #2"'
   },
   "Gaia the Dragon Champion": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 7,
      atk: 2600,
      def: 2100,
      text: 'Dragon/Fusion – "Gaia The Fierce Knight" + "Curse of Dragon"'
   },
   "Giltia the D. Knight": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 5,
      atk: 1850,
      def: 1500,
      text: 'Warrior/Fusion – "Guardian of the Labyrinth" + "Protector of the Throne"'
   },
   "Humanoid Worm Drake": {
      cardType: "fusionMonster",
      attribute: "Water",
      levelOrSubtype: 7,
      atk: 2200,
      def: 2000,
      text: 'Aqua/Fusion – "Worm Drake" + "Humanoid Slime"'
   },
   "Kaminari Attack": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 5,
      atk: 1900,
      def: 1400,
      text: 'Thunder/Fusion – "Ocubeam" + "Mega Thunderball"'
   },
   "Karbonala Warrior": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: 'Warrior/Fusion – "M-Warrior #1" + "M-Warrior #2"'
   },
   "Kwagar Hercules": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 6,
      atk: 1900,
      def: 1700,
      text: 'Insect/Fusion – "Kuwagata α" + "Hercules Beetle"'
   },
   "Labyrinth Tank": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 7,
      atk: 2400,
      def: 2400,
      text: 'Machine/Fusion – "Giga-Tech Wolf" + "Cannon Soldier"'
   },
   "Master of Oz": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 9,
      atk: 4200,
      def: 3700,
      text: 'Beast/Fusion – "Big Koala" + "Des Kangaroo"'
   },
   "Metal Dragon": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 6,
      atk: 1850,
      def: 1700,
      text: 'Machine/Fusion – "Steel Ogre Grotto #1" + "Lesser Dragon"'
   },
   "Mokey Mokey King": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 300,
      def: 100,
      text: 'Fairy/Fusion/Effect – "Mokey Mokey" + "Mokey Mokey" + "Mokey Mokey". <effect=Trigger>When this card is removed from the field, you can Special Summon as many "Mokey Mokey" as possible from your Graveyard.</effect>'
   },
   "Musician King": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 5,
      atk: 1750,
      def: 1500,
      text: 'Spellcaster/Fusion – "Witch of the Black Forest" + "Lady of Faith"'
   },
   "Punished Eagle": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 6,
      atk: 2100,
      def: 1800,
      text: 'Winged Beast/Fusion – "Blue-Winged Crown" + "Niwatori"'
   },
   "Rabid Horseman": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 6,
      atk: 2000,
      def: 1700,
      text: 'Beast-Warrior/Fusion – "Battle Ox" + "Mystic Horseman"'
   },
   "Roaring Ocean Snake": {
      cardType: "fusionMonster",
      attribute: "Water",
      levelOrSubtype: 6,
      atk: 2100,
      def: 1800,
      text: 'Aqua/Fusion – "Mystic Lamp" + "Hyosube"'
   },
   Sanwitch: {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 6,
      atk: 2100,
      def: 1800,
      text: 'Spellcaster/Fusion – "Sangan" + "Witch of the Black Forest"'
   },
   "Skull Knight": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 7,
      atk: 2650,
      def: 2250,
      text: 'Spellcaster/Fusion – "Tainted Wisdom" + "Ancient Brain"'
   },
   "St. Joan": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 7,
      atk: 2800,
      def: 2000,
      text: 'Fairy/Fusion – "The Forgiving Maiden" + "Darklord Marie"'
   },
   "Super Robolady": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 6,
      atk: 1200,
      def: 500,
      text: 'Machine/Fusion/Effect – "Robolady" + "Roboyarou". <effect=Ignition>You can Special Summon "Super Roboyarou" by returning this card from the field to the Extra Deck. You cannot use this effect during the same turn this monster is Special Summoned.</effect> <effect=Trigger>In addition, increase the ATK of this monster by 1000 points during the Damage Step when this monster inflicts Direct Damage to your opponent\'s Life Points.</effect>'
   },
   "Super Roboyarou": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 6,
      atk: 1200,
      def: 500,
      text: 'Machine/Fusion/Effect – "Roboyarou" + "Robolady". <effect=Ignition>You can Special Summon "Super Robolady" by returning this card from the field to the Extra Deck. You cannot use this effect during the same turn this monster is Special Summoned.</effect> <effect=Trigger>In addition, increase the ATK of this monster by 1000 points during the Damage Step when this monster battles with a monster.</effect>'
   },
   "Thousand Dragon": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 7,
      atk: 2400,
      def: 2000,
      text: 'Dragon/Fusion – "Time Wizard" + "Baby Dragon"'
   },
   "Twin-Headed Thunder Dragon": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 7,
      atk: 2800,
      def: 2100,
      text: 'Thunder/Fusion – "Thunder Dragon" + "Thunder Dragon"'
   },
   "Warrior of Tradition": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 6,
      atk: 1900,
      def: 1700,
      text: 'Warrior/Fusion – "Sonic Maid" + "Beautiful Headhuntress"'
   },
   "XY-Dragon Cannon": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 2200,
      def: 1900,
      text: 'Machine/Fusion/Effect – "X-Head Cannon" + "Y-Dragon Head". Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".) Cannot be Special Summoned from the GY. <effect=Ignition>You can discard 1 card, then target 1 face-up Spell/Trap your opponent controls; destroy that target.</effect>',
      noMeta: true
   },
   "XYZ-Dragon Cannon": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 8,
      atk: 2800,
      def: 2600,
      text: 'Machine/Fusion/Effect – "X-Head Cannon" + "Y-Dragon Head" + "Z-Metal Tank". Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".) Cannot be Special Summoned from the GY. <effect=Ignition>You can discard 1 card, then target 1 card your opponent controls; destroy that target.</effect>',
      noMeta: true
   },
   "XZ-Tank Cannon": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 2400,
      def: 2100,
      text: 'Machine/Fusion/Effect – "X-Head Cannon" + "Z-Metal Tank". Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".) Cannot be Special Summoned from the GY. <effect=Ignition>You can discard 1 card, then target 1 face-down Spell/Trap your opponent controls; destroy that target.</effect>',
      noMeta: true
   },
   "YZ-Tank Dragon": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 2100,
      def: 2200,
      text: 'Machine/Fusion/Effect – "Y-Dragon Head" + "Z-Metal Tank". Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".) Cannot be Special Summoned from the GY. <effect=Ignition>You can discard 1 card, then target 1 face-down monster your opponent controls; destroy that target.</effect>',
      noMeta: true
   },
   "Dragoness the Wicked Knight": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: 'Warrior/Fusion – "Armaill" + "One-Eyed Shield Dragon"'
   },
   "King Dragun": {
      cardType: "fusionMonster",
      attribute: "",
      levelOrSubtype: 7,
      atk: 2400,
      def: 1100,
      text: 'Dragon/Fusion/Effect – "Lord of D." + "Divine Dragon Ragnarok". <effect=Continuous>Your opponent cannot target Dragon monsters with card effects.</effect> <effect=Ignition>Once per turn: You can Special Summon 1 Dragon monster from your hand.</effect>'
   },
   "Darkfire Dragon": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1500,
      def: 1250,
      text: 'Dragon/Effect – "Firegrass" + "Petit Dragon"'
   },
   "Ojama King": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 0,
      def: 3000,
      text: 'Beast/Fusion/Effect – "Ojama Green" + "Ojama Yellow" + "Ojama Black". <effect=Continuous>Select up to 3 of your opponent\'s Monster Card Zones. The selected zones cannot be used.</effect>'
   },
   "Reaper on the Nightmare": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 5,
      atk: 800,
      def: 600,
      text: 'Zombie/Fusion/Effect – "Spirit Reaper" + "Nightmare Horse". <effect=Continuous>This card is not destroyed as a result of battle.</effect> <effect=Continuous>After resolving a card effect that targets this face-up card, destroy this card.</effect> <effect=Continuous>This card can attack your opponent directly.</effect> <effect=Trigger>When this card inflicts battle damage to your opponent by a direct attack: Discard 1 random card from their hand.</effect>'
   },
   "Fiend Skull Dragon": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 5,
      atk: 2000,
      def: 1200,
      text: 'Dragon/Fusion/Effect – "Cave Dragon" + "Lesser Fiend". (This card is always treated as an "Archfiend" card.) A Fusion Summon of this card can only be done with the above Fusion Material Monsters. <effect=Continuous>Negate the effects of Flip Effect Monsters.</effect> <effect=Continuous>Negate any Trap effects that target this card on the field, and if you do, destroy that Trap Card.</effect>'
   },
   "Dark Blade the Dragon Knight": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 6,
      atk: 2200,
      def: 1500,
      text: 'Warrior/Fusion/Effect – "Dark Blade" + "Pitch-Dark Dragon". <effect=Trigger>When this card inflicts battle damage to your opponent: You can target up to 3 monsters in their GY; banish those targets.</effect>'
   },
   "The Last Warrior from Another Planet": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 7,
      atk: 2350,
      def: 2300,
      text: 'Warrior/Fusion/Effect – "Zombyra the Dark" + "Maryokutai". <effect=Trigger>If this card is Special Summoned: Destroy all other monsters you control.</effect> <effect=Continuous>Neither player can Summon monsters.</effect>'
   },
   "Gatling Dragon": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 8,
      atk: 2600,
      def: 1200,
      text: 'Machine/Fusion/Effect – "Barrel Dragon" + "Blowback Dragon". <effect=Ignition>Once per turn: You can toss a coin 3 times and destroy as many monsters on the field as possible, but not more than the number of heads.</effect>',
      script: "Flip_Coins:3"
   },
   "Ryu Senshi": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 6,
      atk: 2000,
      def: 1200,
      text: 'Warrior/Fusion/Effect – "Warrior Dai Grepher" + "Spirit Ryu". A Fusion Summon of this card can only be done with the above Fusion Materials. <effect=Quick>When a Normal Trap Card is activated (Quick Effect): You can pay 1000 LP; negate that effect. This card must be face-up on the field to activate and to resolve this effect.</effect> <effect=Continuous>Negate the effects of any Spell Card that targets this card and destroy it.</effect>'
   },
   "Dark Balter the Terrible": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 5,
      atk: 2000,
      def: 1200,
      text: 'Fiend/Fusion/Effect – "Possessed Dark Soul" + "Frontier Wiseman". A Fusion Summon of this monster can only be conducted with the above Fusion Material Monsters. <effect=Quick>When a Normal Spell Card is activated (Quick Effect): You can pay 1000 LP; negate that effect. This card must be face-up on the field to activate and to resolve this effect.</effect> <effect=Continuous>The effect of an Effect Monster that this monster destroys as a result of battle is negated.</effect>'
   },
   "Thousand-Eyes Restrict": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: 'Spellcaster/Fusion/Effect – "Relinquished" + "Thousand-Eyes Idol". <effect=Continuous>Other monsters on the field cannot change their battle positions or attack.</effect> <effect=Ignition>Once per turn: You can target 1 monster your opponent controls; equip that target to this card (max. 1). This card must be face-up on the field to activate and to resolve this effect.</effect> <effect=Continuous>This card\'s ATK/DEF become equal to that equipped monster\'s. If this card would be destroyed by battle, destroy that equipped monster instead.</effect>'
   }
};

const vanillas =  {
   "7 Colored Fish": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1800,
   def: 800,
   text: "Fish - A rare rainbow fish that has never been caught by mortal man"
 },
 "Acrobat Monkey": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1000,
   def: 1800,
   text: "Machine - An autonomous monkey type robot which was developed with cutting-edge technology. It moves very acrobatically."
 },
 Aitsu: {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 5,
   atk: 100,
   def: 100,
   text: "Fairy - He seems to be very unreliable, but he might have incredible potential."
 },
 "Alpha The Magnet Warrior": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1700,
   text: "Rock - Alpha, Beta, and Gamma meld as one to form a powerful monster."
 },
 "Amphibian Beast": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 6,
   atk: 2400,
   def: 2000,
   text: "Fish - On land or in the sea, the speed of this monster is unmatchable."
 },
 "Ancient Brain": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1000,
   def: 700,
   text: "Fiend - A fallen fairy that is powerful in the dark."
 },
 "Ancient Elf": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1450,
   def: 1200,
   text: "Spellcaster - This elf is rumored to have lived for thousands of years. He leads an army of spirits against his enemies."
 },
 "Ancient Lizard Warrior": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1100,
   text: "Reptile - Before the dawn of time, this lizard warrior reigned supreme."
 },
 "Ancient One of the Deep Forest": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 6,
   atk: 1800,
   def: 1900,
   text: "Beast - This creature adopts the form of a white goat living in the forest, but is actually a Forest Elder."
 },
 Ansatsu: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1700,
   def: 1200,
   text: "Warrior - A silent and deadly warrior specializing in assassinations."
 },
 "Aqua Madoor": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1200,
   def: 2000,
   text: "Spellcaster - A wizard of the waters that conjures a liquid wall to crush any enemies that oppose him."
 },
 "Archfiend Marmot of Nefariousness": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 2,
   atk: 400,
   def: 600,
   text: "Beast - An air marmot that has a nefarious horna dnwings. It attacks by throwing acorns."
 },
 "Archfiend Soldier": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1900,
   def: 1500,
   text: "Fiend - An expert at battle who belongs to a crack diabolical unit. He's famous because he always gets the job done."
 },
 Armaill: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 700,
   def: 1300,
   text: "Warrior - A strange warrior who manipulates three deadly blades with both hands and his tail."
 },
 "Armored Lizard": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1200,
   text: "Reptile - A lizard with a very tough hide and a vicious bite."
 },
 "Armored Starfish": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 850,
   def: 1400,
   text: "Aqua - A bluish starfish with a solid hide capable of fending off attacks."
 },
 "Armored Zombie": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1500,
   def: 0,
   text: "Zombie - This warrior blindly swings a deadly blade with devastating force."
 },
 "Axe Raider": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1150,
   text: "Warrior - An axe-wielding monster of tremendous strength and agility."
 },
 "Baby Dragon": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 3,
   atk: 1200,
   def: 700,
   text: "Dragon - Much more than just a child, this dragon is gifted with untapped power."
 },
 "Baron of the Fiend Sword": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1550,
   def: 800,
   text: "Fiend - An aristocrat who wields a sword possessed by a malicious spirit that preys on the weak."
 },
 "Basic Insect": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 2,
   atk: 500,
   def: 700,
   text: "Insect - Usually found traveling in swarms, this creature's ideal environment is the forest."
 },
 "Battle Footballer": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 4,
   atk: 1000,
   def: 2100,
   text: "Machine - A cyborg with high defense power. Originally it was invented for a football machine."
 },
 "Battle Ox": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1000,
   text: "Beast-Warrior - A monster with tremendous power, it destroys enemies with a swing of its axe."
 },
 "Battle Steer": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1800,
   def: 1300,
   text: "Beast-Warrior - A bull monster often found in the woods, it charges enemy monsters with a pair of deadly horns."
 },
 "Bean Soldier": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1300,
   text: "Plant - A plant-warrior that attacks with seeds and sword."
 },
 "Beast of Talwar": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 6,
   atk: 2400,
   def: 2150,
   text: "Fiend - Only the master of the sword among Fiend-Type monsters is permitted to hold the Talwar."
 },
 "Beautiful Headhuntress": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1600,
   def: 800,
   text: "Warrior - A vicious creature that has decapitated numerous enemy monsters."
 },
 "Beaver Warrior": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1500,
   text: "Beast-Warrior - What this creature lacks in size it makes up for in defense when battling in the prairie."
 },
 "Beta The Magnet Warrior": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1600,
   text: "Rock - Alpha, Beta, and Gamma meld as one to form a powerful monster."
 },
 "Big Koala": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 7,
   atk: 2700,
   def: 2000,
   text: "Beast - A species of huge Des Koala. He's meek, but people are afraid of him because he's very powerful."
 },
 "Bio-Mage": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 3,
   atk: 1150,
   def: 1000,
   text: "Fairy - A mysterious priest created as a result of the latest advances in biotechnology."
 },
 "Blackland Fire Dragon": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1500,
   def: 800,
   text: "Dragon - A dragon that dwells in the depths of darkness, its vulnerability lies in its poor eyesight."
 },
 "Blazing Inpachi": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 4,
   atk: 1850,
   def: 0,
   text: "Pyro - A wicked wooden spirit now burning in flames. Its fire attack is powerful, but it will soon be nothing but ashes."
 },
 "Blue-Eyes White Dragon": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 8,
   atk: 3000,
   def: 2500,
   text: "Dragon - This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale."
 },
 "Blue-Winged Crown": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1200,
   text: "Winged Beast - With hair shaped like a crown and a body incased in bluish white flames, this bird is a formidable sight."
 },
 "Bokoichi the Freightening Car": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 2,
   atk: 500,
   def: 500,
   text: "Machine - A freight car that is exclusively for Dekoichi. It can transport anything, but most cargo arrives broken."
 },
 Boneheimer: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 3,
   atk: 850,
   def: 400,
   text: "Aqua - This monster wanders the seas, sucking dry any creatures it may encounter."
 },
 "Bottom Dweller": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 5,
   atk: 1650,
   def: 1700,
   text: "Fish - This is one sea creature whose wrath is something monsters fear to face."
 },
 Burglar: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 850,
   def: 800,
   text: "Beast - A sly rat. He will come at you with his huge left claw."
 },
 "Celtic Guardian": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1200,
   text: "Warrior - An elf who learned to wield a sword, he baffles enemies with lightning-swift attacks."
 },
 "Charcoal Inpachi": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 1,
   atk: 100,
   def: 2100,
   text: "Pyro - A wicked wooden spirit that has burned out. The barbecue grilled with this charcoal is so awesome that everybody thinks it's priceless."
 },
 "Chu-Ske the Mouse Fighter": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1200,
   def: 0,
   text: "Beast - A fiery mouse, traveling the world to become the strongest fighter in the world of mice. Be careful not to touch him, or you will get burned."
 },
 "Claw Reacher": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1000,
   def: 800,
   text: "Fiend - Stretching arms and razor-sharp claws make this monster a formidable opponent."
 },
 "Clown Zombie": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 2,
   atk: 1350,
   def: 0,
   text: "Zombie - A clown revived by the powers of darkenss. Its deadly dance has sent many monster to their graves."
 },
 "Corroding Shark": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1100,
   def: 700,
   text: "Zombie - A zombie shark that can deliver its lethal curse with a spell."
 },
 "Cosmo Queen": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 8,
   atk: 2900,
   def: 2450,
   text: "Spellcaster - Queen of the galaxies and mistress of the stars."
 },
 "Crawling Dragon": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1600,
   def: 1400,
   text: "Dragon - This weakened dragon can no longer fly, but it is still a deadly force to be reckoned with."
 },
 "Crawling Dragon #2": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1200,
   text: "Dinosaur - A powerful dragon with teeth that can grind almost anything to dust."
 },
 "Cure Mermaid": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1500,
   def: 800,
   text: "Fish - As long as this card remains face-up on your side of the field, increase your Life Points by 800 points during each of your Standby Phases."
 },
 "Curse of Dragon": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 2000,
   def: 1500,
   text: "Dragon - A wicked dragon that taps into dark forces to execute a powerful attack."
 },
 "Cyber Falcon": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1200,
   text: "Machine - A jet-powered hawk that travels at the speed of sound."
 },
 "Cyber Soldier of Darkworld": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1200,
   text: "Machine - A mechanical soldier that won't stop attacking until all of its life readings have been extinguished from its sensors."
 },
 "D. Human": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1100,
   text: "Warrior - Gifted with the power of dragons, this warrior wields a sword created from a dragon's fang."
 },
 "D.D. Trainer": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 1,
   atk: 100,
   def: 2000,
   text: "Fiend - A poor goblin that was sucked into a different dimension. However, he's doing his best with his new destiny."
 },
 "Dancing Elf": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 1,
   atk: 300,
   def: 200,
   text: "Fairy - An elf that dances across the sky with wings of razor-sharp blades."
 },
 "Dark Assailant": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1200,
   text: "Zombie - Armed with the Psycho Sword, this sinister assassin rules the bad land."
 },
 "Dark Bat": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 3,
   atk: 1000,
   def: 1000,
   text: "Winged Beast - Bats from the netherworld that use their hyper senses to detect their enemies."
 },
 "Dark Blade": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1800,
   def: 1500,
   text: "Warrior - They say he is a dragon-manipulating warrior from the dark world. His attack is tremendous, using his great swords with vicious power."
 },
 "Dark Gray": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 800,
   def: 900,
   text: "Beast - Entirely gray, this beast has rarely been seen by mortal eyes."
 },
 "Dark King of the Abyss": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1200,
   def: 800,
   text: "Fiend - It's said that this King of the Netherworld once had the power to rule over the dark."
 },
 "Dark Magician": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 7,
   atk: 2500,
   def: 2100,
   text: "Spellcaster - The ultimate wizard in terms of attack and defense."
 },
 "Dark Titan of Terror": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1100,
   text: "Fiend - A fiend said to dwell in the world of dreams, it attacks enemies in their sleep."
 },
 "Dark Witch": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 5,
   atk: 1800,
   def: 1700,
   text: "Fairy - A popular creature in mythology that delivers fatal attacks with a sharp spear."
 },
 "Darkfire Soldier #1": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1150,
   text: "Pyro - An explosive expert from a special elite force."
 },
 "Darkfire Soldier #2": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1100,
   text: "Pyro - A warrior who gained immeasurable power from the heart of a volcano."
 },
 "Darkworld Thorns": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1200,
   def: 900,
   text: "Plant - A thorny plant found in the darklands that wraps its body around any unwary travelers."
 },
 "Destroyer Golem": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1000,
   text: "Rock - A golem with a massive right hand for crushing its victims."
 },
 "Dharma Cannon": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 2,
   atk: 900,
   def: 500,
   text: "Machine - A monstrous creature whose body is lined with cannons that never miss their targets."
 },
 "Disk Magician": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1350,
   def: 1000,
   text: "Machine - This monster hides in a saucer and only appears when executing an attack."
 },
 Dissolverock: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 900,
   def: 1000,
   text: "Rock - A monster born in the lava pits, it generates intense heat that can melt away its enemies."
 },
 "Divine Dragon Ragnarok": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1000,
   text: "Dragon - A legendary dragon sent by the gods as their instrument. Legends say that if provoked, the whole world will sink beneath the sea."
 },
 Dokuroyaiba: {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 3,
   atk: 1000,
   def: 400,
   text: "Fiend - A boomerang with brains that will pursue a target to the ends of the earth."
 },
 "Doma The Angel of Silence": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 1600,
   def: 1400,
   text: "Fairy - This fairy rules over the end of existence."
 },
 "Dragon Zombie": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1600,
   def: 0,
   text: "Zombie - A dragon revived by sorcery. Its breath is highly corrosive."
 },
 "Drooling Lizard": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 900,
   def: 800,
   text: "Reptile - A blood-sucking snake in human form that attacks any living being that passes nearby."
 },
 "Earthbound Spirit": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 500,
   def: 2000,
   text: "Fiend - A vengeful creature formed by the spirits of fallen warriors, it drags any who dare approach it into the deepest bowels of the earth."
 },
 "Elemental HERO Avian": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 3,
   atk: 1000,
   def: 1000,
   text: "Warrior - A winged Elemental HERO who wheels through the sky and manipulates the wind. His signature move, Featherbreak, gives villainy a blow from sky-high."
 },
 "Elemental HERO Burstinatrix": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 3,
   atk: 1200,
   def: 800,
   text: "Warrior - A flame manipulator who was the first Elemental HERO woman. Her Burstfire burns away villainy."
 },
 "Elemental HERO Clayman": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 800,
   def: 2000,
   text: "Warrior - An Elemental HERO with a clay body built-to-last. He'll preserve his Elemental HERO colleagues at any cost."
 },
 "Elemental HERO Sparkman": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1400,
   text: "Warrior - An Elemental HERO and a warrior of light who proficiently wields many kinds of armaments. His Static Shockwave cuts off the path of villainy."
 },
 "Empress Mantis": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 6,
   atk: 2200,
   def: 1400,
   text: "Insect - Queen of an army of giant mantises whose command moves legions."
 },
 "Enchanting Mermaid": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 3,
   atk: 1200,
   def: 900,
   text: "Fish - A beautiful mermaid that lures voyagers to a watery death."
 },
 "Fairy's Gift": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1000,
   text: "Spellcaster - This flying monster is known for delivering happiness to all."
 },
 "Faith Bird": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1100,
   text: "Winged Beast - This long-tailed bird blinds its enemies with mystical light."
 },
 "Feral Imp": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1400,
   text: "Fiend - A playful little fiend that lurks in the dark, waiting to attack an unwary enemy."
 },
 "Fiend Reflection #2": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1100,
   def: 1400,
   text: "Winged Beast - A bird-beast that summons reinforcements with a hand mirror."
 },
 "Fiend Scorpion": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 2,
   atk: 900,
   def: 200,
   text: "Insect - A huge scorpion inhabited by the soul of a fiend. Usually it holds back, but has untapped potential."
 },
 "Fire Kraken": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1500,
   text: "Aqua - A squid that thrives on fire and heat."
 },
 Firegrass: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 2,
   atk: 700,
   def: 600,
   text: "Plant - A fire-breathing plant found growing near volcanoes."
 },
 Fireyarou: {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1000,
   text: "Pyro - A malevolent creature wrapped in flames that attacks enemies with intense fire."
 },
 "Flame Cerebrus": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 6,
   atk: 2100,
   def: 1800,
   text: "Pyro - Known to many as the \"Burning Executioner\", this monster is capable of burning enemies to cinders."
 },
 "Flame Champion": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 5,
   atk: 1900,
   def: 1300,
   text: "Pyro - A warrior protected by a flaming shield that nullifies any attack."
 },
 "Flame Dancer": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 2,
   atk: 550,
   def: 450,
   text: "Pyro - This monster moves while swinging its burning rope."
 },
 "Flame Manipulator": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 3,
   atk: 900,
   def: 1000,
   text: "Spellcaster - This Spellcaster attacks enemies with fire-related spells such as \"Sea of Flames\" and \"Wall of Fire\"."
 },
 "Flying Fish": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 800,
   def: 500,
   text: "Fish - Three wishes are granted to those fortunate enough to see this monster in flight."
 },
 "Flying Kamakiri #2": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1500,
   def: 800,
   text: "Insect - A flying mantis that feeds primarily on insects."
 },
 "Flying Penguin": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1000,
   text: "Aqua - A very rare penguin that takes to the air with ears shaped like wings."
 },
 "Frenzied Panda": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1000,
   text: "Beast - A savage beast that carries a big bamboo stick for beating down its enemies."
 },
 "Gadget Soldier": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 6,
   atk: 1800,
   def: 2000,
   text: "Machine - A rust-free machine warrior born to battle."
 },
 Gagagigo: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1850,
   def: 1000,
   text: "Reptile - This young evildoer used to have an evil heart, but by meeting a special person, he discovered justice."
 },
 "Gaia The Fierce Knight": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 7,
   atk: 2300,
   def: 2100,
   text: "Warrior - A knight whose horse travels faster than the wind. His battle-charge is a force to be reckoned with."
 },
 "Gamma The Magnet Warrior": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1800,
   text: "Rock - Alpha, Beta, and Gamma meld as one to form a powerful monster."
 },
 "Garnecia Elefantis": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 7,
   atk: 2400,
   def: 2000,
   text: "Beast-Warrior - A monster so heavy that each step rocks the earth."
 },
 Garoozis: {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 5,
   atk: 1800,
   def: 1500,
   text: "Beast-Warrior - An axe-swinging beast-warrior with the head of a dragon."
 },
 "Gazelle the King of Mythical Beasts": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1200,
   text: "Beast - This monster moves so fast that it looks like an illusion to mortal eyes."
 },
 "Gemini Elf": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1900,
   def: 900,
   text: "Spellcaster - Elf twins that alternate their attacks."
 },
 "Giant Flea": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1200,
   text: "Insect - A massive flea that feeds on the blood of its enemies."
 },
 "Giant Red Seasnake": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1800,
   def: 800,
   text: "Aqua - A sea-dwelling snake that attacks passing enemies with its sharp teeth."
 },
 "Giant Soldier of Stone": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1300,
   def: 2000,
   text: "Rock - A giant warrior made of stone. A punch from this creature has earth-shaking results."
 },
 "Giant Turtle Who Feeds on Flames": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 5,
   atk: 1400,
   def: 1800,
   text: "Aqua - A crimson-shelled tortoise that feeds on flames."
 },
 "Giga Gagagigo": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 5,
   atk: 2450,
   def: 1500,
   text: "Reptile - In order to fight tremendous evil, he gained formidable power through body reconstruction, but lost his heart and his redemption."
 },
 "Giga-Tech Wolf": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1400,
   text: "Machine - An iron wolf with razor-sharp fangs that can penetrate any armor."
 },
 Gigobyte: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 1,
   atk: 350,
   def: 300,
   text: "Reptile - He has a tranquil soul, but carries a destiny that one day his heart shall be tainted by evil...."
 },
 "Girochin Kuwagata": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1000,
   text: "Insect - Despite its small size, this monster has powerful jaws that can rip metal to shreds."
 },
 "Goblin Calligrapher": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 1,
   atk: 400,
   def: 400,
   text: "Fiend - A Goblin who devotes himself to mastering perfect calligraphy of the word \"False\". He gives his all to each stroke."
 },
 "Gogiga Gagagigo": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 8,
   atk: 2950,
   def: 2800,
   text: "Reptile - His soul long since collapsed, his body recklessly continues onward, driven by a lust for more power. He no longer resembles his former self...."
 },
 Gradius: {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1200,
   def: 800,
   text: "Machine - A high-performance jet fighter with power capsules for variable attack capabilities."
 },
 "Grand Tiki Elder": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1500,
   def: 800,
   text: "Fiend - A masked monster that wields the most deadly of curses."
 },
 "Great Angus": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 4,
   atk: 1800,
   def: 600,
   text: "Beast - A very violent beast, it is always berserk. People say that they have never seen it silent."
 },
 "Great White": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1600,
   def: 800,
   text: "Fish - A giant white shark with razor-sharp teeth."
 },
 "Green Phantom King": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 500,
   def: 1600,
   text: "Plant - This youthful king of the forest lives in a green world, abundant with trees and wildlife."
 },
 "Ground Attacker Bugroth": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1000,
   text: "Machine - A surface battle robot that was once used for sea warfare."
 },
 "Guardian of the Labyrinth": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1000,
   def: 1200,
   text: "Warrior - A monster that guards the entrance to the Netherworld."
 },
 "Guardian of the Throne Room": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1650,
   def: 1600,
   text: "Machine - A robot guard built to guard throne rooms, it is armed with homing missiles."
 },
 "Gyakutenno Megami": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 6,
   atk: 1800,
   def: 2000,
   text: "Fairy - This fairy uses her mystical power to protect the weak and provide spiritual support."
 },
 "Hard Armor": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 300,
   def: 1200,
   text: "Warrior - A living suit of armor that attacks enemies with a bone-jarring tackle."
 },
 "Harpie Girl": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 2,
   atk: 500,
   def: 500,
   text: "Winged Beast - A Harpie chick who aspires to flit about beautifully and gorgeously, but attack sharply."
 },
 "Harpie Lady": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1400,
   text: "Winged Beast - This human-shaped animal with wings is beautiful to watch but deadly in battle."
 },
 "Headless Knight": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1450,
   def: 1700,
   text: "Fiend - A haunted spirit of a falsely accused knight who wanders in search of truth and justice."
 },
 "Hercules Beetle": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1500,
   def: 2000,
   text: "Insect - A massive beetle with a tough carapace and a dangerous horn."
 },
 Hibikime: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1450,
   def: 1000,
   text: "Warrior - Confuses enemies with a noise that is harsh to the ears."
 },
 "High Tide Gyojin": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1650,
   def: 1300,
   text: "Aqua - A very agile half-fish warrior known for its relentless attacks."
 },
 "Hinotama Soul": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 2,
   atk: 600,
   def: 500,
   text: "Pyro - An intensely hot flame creature that rams anything standing in its way."
 },
 "Hitotsu-Me Giant": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1000,
   text: "Beast-Warrior - A one-eyed behemoth with thick, powerful arms made for delivering punishing blows."
 },
 "Humanoid Slime": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 800,
   def: 2000,
   text: "Aqua - This slime apparently has some human genes in its genetic makeup."
 },
 "Hunter Spider": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1600,
   def: 1400,
   text: "Insect - This monster feeds on whatever it catches in its web."
 },
 Hyosube: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1500,
   def: 900,
   text: "Aqua - This amphibian is strong on the attack, but leaves much to be desired when defending."
 },
 Hyozanryu: {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 7,
   atk: 2100,
   def: 2800,
   text: "Dragon - A dragon created from a massive diamond that sparkles with blinding light."
 },
 "Hysteric Fairy": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1800,
   def: 500,
   text: "Fairy - Tribute 2 monsters on your side of the field to increase your Life Points by 1000 points."
 },
 "Illusionist Faceless Mage": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 1200,
   def: 2200,
   text: "Spellcaster - Manipulates enemy attacks with the power of illusion."
 },
 Inpachi: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1900,
   text: "Machine - A log that attacks lost travelers in the forest. Originally a big tree, it was cut down and possessed by a wicked spirit."
 },
 "Insect Knight": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1900,
   def: 1500,
   text: "Insect - Of all Insect fighters, he is the paragon of the Indestructible Insect Invaders, which only the elite of the elite can join. We can no longer ignore their unmatched battle prowess."
 },
 "Island Turtle": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1100,
   def: 2000,
   text: "Aqua - A huge turtle that is often mistaken for an island."
 },
 Jellyfish: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1500,
   text: "Aqua - An almost invisible, semi-transparent jellyfish that drifts in the sea."
 },
 "Judge Man": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 6,
   atk: 2200,
   def: 1500,
   text: "Warrior - This club-wielding warrior battles to the end and will never surrender."
 },
 Kabazauls: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1500,
   text: "Dinosaur - A huge monster in the shape of a hippopotamus. The sneezing from his gigantic body is so fierce that people mistake it for a hurricane."
 },
 "Kagemusha of the Blue Flame": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 2,
   atk: 800,
   def: 400,
   text: "Warrior - Serving as a double for the Ruler of the Blue Flame, he's a master swordsman that wields a fine blade."
 },
 "Killer Needle": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1000,
   text: "Insect - A huge bee with exceptional strength that's particularly dangerous in a swarm."
 },
 "King Fog": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1000,
   def: 900,
   text: "Fiend - A fiend that dwells in a blinding curtain of smoke."
 },
 "King of Yamimakai": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 2000,
   def: 1530,
   text: "Fiend - Wields the power of darkness to destroy its enemies."
 },
 Kojikocy: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1200,
   text: "Warrior - A man-hunter with powerful arms that can crush boulders"
 },
 "Koumori Dragon": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1200,
   text: "Dragon - A vicious, fire-breathing dragon whose wicked flame corrupts the souls of its victims."
 },
 Kozaky: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 1,
   atk: 400,
   def: 400,
   text: "Fiend - A workaholic fiend who devotes everything to his research into the languages of Dark World. His mind has collapsed because of working too hard."
 },
 Kumootoko: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 700,
   def: 1400,
   text: "Insect - A massive, intelligent spider that traps enemies with webbing."
 },
 Kurama: {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 3,
   atk: 800,
   def: 800,
   text: "Winged Beast - A vicious bird that attacks from the skies with its whip-like tail."
 },
 "Kuwagata α": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1250,
   def: 1000,
   text: "Insect - A very vicious stag beetle that goes for the head."
 },
 "La Jinn the Mystical Genie of the Lamp": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1800,
   def: 1000,
   text: "Fiend - A genie of the lamp that is at the beck and call of its master."
 },
 "Labyrinth Wall": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 0,
   def: 3000,
   text: "Rock - These walls form a labyrinth with no exit for enemies."
 },
 "Lady of Faith": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 3,
   atk: 1100,
   def: 800,
   text: "Spellcaster - Soothes the souls of others by chanting a mysterious spell."
 },
 Larvas: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 800,
   def: 1000,
   text: "Beast - A fast-moving, bird-like creature that strangles opposing monsters with its long, thin arms."
 },
 "Launcher Spider": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 7,
   atk: 2200,
   def: 2500,
   text: "Machine - A mechanical spider with rocket launchers capable of random fire."
 },
 "Left Arm of the Forbidden One": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 1,
   atk: 200,
   def: 300,
   text: "Spellcaster - A forbidden left arm sealed by magic. Whosoever breaks this seal will know infinite power."
 },
 "Left Leg of the Forbidden One": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 1,
   atk: 200,
   def: 300,
   text: "Spellcaster - A forbidden left leg sealed by magic. Whosoever breaks this seal will know infinite power."
 },
 Leogun: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1750,
   def: 1550,
   text: "Beast - Huge monster with a lion's mane similar to the King of Beasts."
 },
 "Lesser Dragon": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1000,
   text: "Dragon - A minor dragon incapable of breathing fire."
 },
 "Lightning Conger": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 3,
   atk: 350,
   def: 750,
   text: "Thunder - This massive eel generates huge charges of electricity and unleashes them as thunderbolts."
 },
 "Liquid Beast": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 3,
   atk: 950,
   def: 800,
   text: "Aqua - A liquid life form that thrives on water."
 },
 "Lizard Soldier": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 3,
   atk: 1100,
   def: 800,
   text: "Dragon - A beast soldier derived from dragons, it is small for a Dragon-Type. Moving very quickly, this monster is an excellent strategist."
 },
 "Lord of the Lamp": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1200,
   text: "Fiend - This spirit emerges from the mystic lamp and obeys the wishes of its summoner."
 },
 "Luster Dragon": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1900,
   def: 1600,
   text: "Dragon - A very beautiful dragon covered with sapphire. It does not like fights, but has incredibly high attack power."
 },
 "Luster Dragon #2": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 6,
   atk: 2400,
   def: 1400,
   text: "Dragon - This dragon feeds on emerald. Enchanted by this monster even when attacked, few people live to tell of its beauty."
 },
 "M-Warrior #1": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1000,
   def: 500,
   text: "Warrior - Specializing in combination attacks, this warrior uses magnetism to block an enemy's escape."
 },
 "M-Warrior #2": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 500,
   def: 1000,
   text: "Warrior - Specializing in combination attacks, this warrior is equipped with a tough, magnetically coated armor."
 },
 "Mad Dog of Darkness": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1900,
   def: 1400,
   text: "Beast - He used to be a normal dog who played around in a park, but was corrupted by the powers of darkness."
 },
 "Magical Ghost": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1400,
   text: "Zombie - This creature casts a spell of terror and confusion just before attacking its enemies."
 },
 "Maiden of the Moonlight": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1300,
   text: "Spellcaster - A sorcerer blessed by lunar light with powers far beyond mortal comprehension."
 },
 "Mammoth Graveyard": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1200,
   def: 800,
   text: "Dinosaur - A mammoth that protects the graves of its pack and is absolutely merciless when facing grave-robbers."
 },
 "Man Eater": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 2,
   atk: 800,
   def: 600,
   text: "Plant - Man-eating plant with poison feelers for attacking enemies."
 },
 "Man-Eating Treasure Chest": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1000,
   text: "Fiend - A monster disguised as a treasure chest that is known to attack the unwary adventurer."
 },
 "Masaki the Legendary Swordsman": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1100,
   def: 1100,
   text: "Warrior - Legendary swordmaster Masaki is a veteran of over 100 battles."
 },
 "Master & Expert": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1000,
   text: "Beast - A deadly duo consisting of a beast master and its loyal servant."
 },
 "Master Kyonshee": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1750,
   def: 1000,
   text: "Zombie - A wandering Kyonshee searching for a strong rival to defeat. They say he was known as the master of all martial arts."
 },
 "Mechanical Snail": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 800,
   def: 1000,
   text: "Machine - A cyborg snail that still travels at a slow place."
 },
 Mechanicalchaser: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1850,
   def: 800,
   text: "Machine - A hunter that relentlessly pursues its target by order of the Machine King."
 },
 "Meda Bat": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 2,
   atk: 800,
   def: 400,
   text: "Fiend - An eyeball fiend created by a servant of the wicked, it uses \"Dark Bombs\" to blow away its enemies."
 },
 "Mega Thunderball": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 2,
   atk: 750,
   def: 600,
   text: "Thunder - Rolls along the ground releasing bolts of electricity to attack its enemies."
 },
 "Megasonic Eye": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 1500,
   def: 1800,
   text: "Machine - Made of mysterious metal, this monster is a doomsday machine from the edge of the universe."
 },
 "Melchid the Four-Face Beast": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1200,
   text: "Fiend - This monster has four different masks for four different attacks."
 },
 "Metal Armored Bug": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 8,
   atk: 2800,
   def: 1500,
   text: "Insect - A gigantic insect-like creature covered by thick armor. Everything in his path is destroyed."
 },
 "Metal Fish": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 5,
   atk: 1600,
   def: 1900,
   text: "Machine - A metal fish with a razor-sharp caudal fin."
 },
 "Mighty Guard": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 500,
   def: 1200,
   text: "Machine - A machine soldier that was developed as a guard. It is made of rust-proof metal."
 },
 Mikazukinoyaiba: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 7,
   atk: 2200,
   def: 2350,
   text: "Dragon - A dragon warrior of the moon armed with a crescent sword."
 },
 "Millennium Shield": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 0,
   def: 3000,
   text: "Warrior - A Millennium item, it's rumored to block any strong attack."
 },
 Misairuzame: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 5,
   atk: 1400,
   def: 1600,
   text: "Fish - A missile-launching fish protected by deadly spikes."
 },
 "Mokey Mokey": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 1,
   atk: 300,
   def: 100,
   text: "Fairy - An outcast angel. Nobody knows what he is thinking at all. Sometimes he gets mad and that is dreadful."
 },
 "Molten Behemoth": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 5,
   atk: 1000,
   def: 2200,
   text: "Pyro - A giant born from magma, it attacks with a magma punch."
 },
 "Monster Egg": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 600,
   def: 900,
   text: "Warrior - A warrior hidden within an egg that attacks enemies by flinging eggshells."
 },
 Morinphen: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 1550,
   def: 1300,
   text: "Fiend - A strange fiend with long arms and razor sharp talons."
 },
 "Mr. Volcano": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 5,
   atk: 2100,
   def: 1300,
   text: "Pyro - This seemingly mild-mannered creature has an extremely volatile temper."
 },
 "Mystic Clown": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1000,
   text: "Fiend - Nothing can stop the mad attack of this powerful creature."
 },
 "Mystic Horseman": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1550,
   text: "Beast - Half man and half horse, this monster is known for its extreme speed."
 },
 "Mystical Elf": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 800,
   def: 2000,
   text: "Spellcaster - A delicate elf that lacks offense, but has a terrific defense backed by mystical power."
 },
 "Mystical Sheep #2": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 800,
   def: 1000,
   text: "Beast - A monstrous sheep with a long tail for hypnotizing enemies."
 },
 "Mystical Shine Ball": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 2,
   atk: 500,
   def: 500,
   text: "Fairy - A soul of light covered by mystical shine. When you see its beautiful shape, your dream will come true."
 },
 "Nekogal #1": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1100,
   def: 900,
   text: "Beast - A pussy-fairy. Contrary to her lovely beauty, she claws on her enemies."
 },
 Nemuriko: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 800,
   def: 700,
   text: "Spellcaster - A child-like creature that controls a sleep fiend to beckon enemies into eternal slumber."
 },
 "Neo Aqua Madoor": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 6,
   atk: 1200,
   def: 3000,
   text: "Spellcaster - The true nature of this wizard, who rules all water. It defends itself with a vast, impenetrable wall of ice."
 },
 "Neo Bug": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1800,
   def: 1700,
   text: "Insect - A huge bug-like monster said to come from another planet. It gathers in swarms."
 },
 "Neo the Magic Swordsman": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1000,
   text: "Spellcaster - A dimensional drifter who not only practices sorcery, but is also a sword and martial arts master."
 },
 "Nin-Ken Dog": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1800,
   def: 1000,
   text: "Beast-Warrior - A Ninja dog who has mastered extreme Ninjutsu. Through hard training, it learned the technique to metamorphose into a human being."
 },
 Niwatori: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 900,
   def: 800,
   text: "Winged Beast - Swallows enemies whole and uses their essence as energy."
 },
 "Nuvia the Wicked": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 2000,
   def: 800,
   text: "Fiend - If this monster is Normal Summoned, destroy this card. If your opponent controls any monster, decrease the ATK of this card by 200 points for each monster on your opponent's side of the field."
 },
 Octoberser: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 5,
   atk: 1600,
   def: 1400,
   text: "Aqua - With the head of a fish and the legs of an octopus, this strange creature attacks enemies by flinging spears."
 },
 Ocubeam: {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 5,
   atk: 1550,
   def: 1650,
   text: "Fairy - Frightening in appearance, this creature uses its large eyes and ears to keep track of any movement."
 },
 "Ogre of the Black Shadow": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1400,
   text: "Beast-Warrior - An ogre possessed by the powers of the dark. Few can withstand its rapid charge."
 },
 "Ojama Black": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 2,
   atk: 0,
   def: 1000,
   text: "Beast - He's one of the Ojama Trio. It's said that he butts in by any means necessary. It's also said that when the three are together, something happens."
 },
 "Ojama Green": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 2,
   atk: 0,
   def: 1000,
   text: "Beast - He's one of the Ojama Trio. It's said that he butts in by any means necessary. It's also said that when the three are together, something happens."
 },
 "Ojama Yellow": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 2,
   atk: 0,
   def: 1000,
   text: "Beast - He's one of the Ojama Trio. It's said that he butts in by any means necessary. It's also said that when the three are together, something happens."
 },
 "One-Eyed Shield Dragon": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 3,
   atk: 700,
   def: 1300,
   text: "Dragon - This dragon wears a shield not only for its own protection, but also for ramming its enemies."
 },
 "Oni Tank T-34": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1700,
   text: "Machine - An armored tank possessed by a fiend that will pursue enemies until they're crushed."
 },
 "Oppressed People": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 1,
   atk: 400,
   def: 2000,
   text: "Aqua - They are oppressed, but believe they will have their freedom someday."
 },
 Opticlops: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1800,
   def: 1700,
   text: "Fiend - A one-eyed giant that serves the \"Dark Ruler Ha Des\", it skewers its enemies with its sharp horn, shattering them to pieces."
 },
 "Oscillo Hero": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1250,
   def: 700,
   text: "Warrior - A strange warrior from another dimension."
 },
 Overdrive: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1500,
   text: "Machine - An all-terrain armored vehicle armed with a heavy-duty machine gun."
 },
 "Pale Beast": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1200,
   text: "Beast - With skin tinged bluish-white, this strange creature is a fearsome sight to behold."
 },
 "Parrot Dragon": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 5,
   atk: 2000,
   def: 1300,
   text: "Dragon - A dragon from the cartoons that's more dangerous than it appears to be."
 },
 Peacock: {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 5,
   atk: 1700,
   def: 1500,
   text: "Winged Beast - A large peacock that launches its feathers in a lethal attack."
 },
 "People Running About": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 2,
   atk: 600,
   def: 600,
   text: "Pyro - Although they always suffer in silence, they swear an oath to inevitably revolt."
 },
 "Petit Angel": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 3,
   atk: 600,
   def: 900,
   text: "Fairy - A quick-moving and tiny fairy that's very difficult to hit."
 },
 "Petit Dragon": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 2,
   atk: 600,
   def: 700,
   text: "Dragon - A very small dragon known for its vicious attacks."
 },
 "Petit Moth": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 1,
   atk: 300,
   def: 200,
   text: "Insect - This small but deadly creature is better off avoided."
 },
 "Pharaoh's Servant": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 2,
   atk: 900,
   def: 0,
   text: "Zombie - An apparition of those said to formerly serve the Pharaoh. It has tremendous loyalty that does not waiver."
 },
 "Pharaonic Protector": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 2,
   atk: 900,
   def: 0,
   text: "Zombie - The mummy of a soldier that has been guarding the royal family for thousands of years. Even now, its spirit does not allow anybody to trespass."
 },
 "Prevent Rat": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 500,
   def: 2000,
   text: "Beast - This creature is shielded with a tough hide of hair and is excellent at defending itself."
 },
 "Protector of the Throne": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 800,
   def: 1500,
   text: "Warrior - While the king is away, this queen protects his throne with a mighty defense."
 },
 "Psychic Kappa": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 2,
   atk: 400,
   def: 1000,
   text: "Aqua - An amphibian with a myriad of powers to shield it from enemy attacks."
 },
 "Queen Bird": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 5,
   atk: 1200,
   def: 2000,
   text: "Winged Beast - This monster attacks using its huge beak."
 },
 "Queen of Autumn Leaves": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1800,
   def: 1500,
   text: "Plant - Queen of the Emerald Forest and wife of the Spirit King, she lives surrounded by vivid red leaves."
 },
 "Ray & Temperature": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 3,
   atk: 1000,
   def: 1000,
   text: "Fairy - The Sun and the North Wind join hands to deliver a devastating combination of heat and gale-force winds."
 },
 "Red Archery Girl": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1500,
   text: "Aqua - A mermaid archer that hides in a protective shell, waiting for the right moment to strike."
 },
 "Red-Eyes Black Dragon": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 7,
   atk: 2400,
   def: 2000,
   text: "Dragon - A ferocious dragon with a deadly attack."
 },
 "Right Arm of the Forbidden One": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 1,
   atk: 200,
   def: 300,
   text: "Spellcaster - A forbidden right arm sealed by magic. Whosoever breaks this seal will know infinite power."
 },
 "Right Leg of the Forbidden One": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 1,
   atk: 200,
   def: 300,
   text: "Spellcaster - A forbidden right leg sealed by magic. Whosoever breaks this seal will know infinite power."
 },
 Robolady: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 450,
   def: 900,
   text: "Machine - A warrior fully covered with metal. It upgrades by fusing with \"Roboyarou\"."
 },
 "Robotic Knight": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1800,
   text: "Machine - The Commander of Machine-Types, he serves the Machine King. He is famous for the way he controls his troops."
 },
 Roboyarou: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 900,
   def: 450,
   text: "Machine - A warrior fully covered with metal. It upgrades by fusing with \"Robolady\"."
 },
 "Rock Ogre Grotto #1": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 800,
   def: 1200,
   text: "Rock - Protected by a solid body of rock, this monster throws a bone-shattering punch."
 },
 "Rogue Doll": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1000,
   text: "Spellcaster - A deadly doll gifted with mystical power, it is particularly powerful when attacking against dark forces."
 },
 "Root Water": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 3,
   atk: 900,
   def: 800,
   text: "Fish - An amphibian capable of calling up a massive tidal wave from the dark seas to wipe out enemy monsters."
 },
 "Rude Kaiser": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1800,
   def: 1600,
   text: "Beast-Warrior - With an axe in each hand, this monster delivers heavy damage."
 },
 "Ryu-Kishin": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1000,
   def: 500,
   text: "Fiend - A very elusive creature that looks like a harmless statue until it attacks."
 },
 "Ryu-Kishin Powered": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1200,
   text: "Fiend - A gargoyle enhanced by the powers of darkness. Very sharp talons make it a worthy opponent."
 },
 "Ryu-Ran": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 7,
   atk: 2200,
   def: 2600,
   text: "Dragon - A vicious little dragon sheltered in an egg that looks deceptively harmless."
 },
 "Saggi the Dark Clown": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 600,
   def: 1500,
   text: "Spellcaster - This clown appears from nowhere and executes very strange moves to avoid enemy attacks."
 },
 "Sand Stone": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1300,
   def: 1600,
   text: "Rock - Appears from underground and attacks with long, snake-like tentacles."
 },
 "Science Soldier": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 800,
   def: 800,
   text: "Warrior - Soldiers equipped with state-of-the-art weaponry to face unknown creatures."
 },
 "Sea Serpent Warrior of Darkness": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1800,
   def: 1500,
   text: "Sea Serpent - A warrior who defends the world of the Sea of Darkness. He prides himself on his fighting prowess both on the ground and, of course, in the water."
 },
 "Sealmaster Meisei": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1100,
   def: 900,
   text: "Spellcaster - One of the few people who has a good command of Talismans. His history is a mystery."
 },
 Seiyaryu: {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 7,
   atk: 2500,
   def: 2300,
   text: "Dragon - A mystical dragon that burns away the unworthy with its mystic flames."
 },
 "Serpent Night Dragon": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 7,
   atk: 2350,
   def: 2400,
   text: "Dragon - A dragon created from the soul of a wicked knight."
 },
 Shapesnatch: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 1200,
   def: 1700,
   text: "Machine - A bow tie with horrible power, it attacks an opponent by controlling others."
 },
 "Shining Abyss": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1800,
   text: "Fairy - This monster employs the powers of both Light and Darkness."
 },
 "Shining Friendship": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1100,
   text: "Fairy - The peacemaker among monsters."
 },
 "Silver Fang": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1200,
   def: 800,
   text: "Beast - A snow wolf that's beautiful to the eye, but absolutely vicious in battle."
 },
 "Skull Dog Marron": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1350,
   def: 2000,
   text: "Beast - A lost dog that wandered off 1000 years ago. He's still waiting for his master to come for him."
 },
 "Skull Mariner": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1600,
   def: 900,
   text: "Warrior - A pirate ship that appears out of the mist and sinks any seagoing vessels."
 },
 "Skull Red Bird": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1550,
   def: 1200,
   text: "Winged Beast - This monster swoops down and attacks with a rain of knives stored in its wings."
 },
 "Skull Servant": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 1,
   atk: 300,
   def: 200,
   text: "Zombie - A skeletal ghost that isn't strong, but can mean trouble in large numbers."
 },
 "Sky Dragon": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 6,
   atk: 1900,
   def: 1800,
   text: "Dragon - A flying dragon with four wings housing some very dangerous blades."
 },
 "Sky Scout": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1800,
   def: 600,
   text: "Winged Beast - With eyes like a hawk and a flying speed exceeding Mach 5, this monster is a master of the sky."
 },
 "Sleeping Lion": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 700,
   def: 1700,
   text: "Beast - A ferocious animal that sleeps all day. Sometimes it's better to let Sleeping Lions lie."
 },
 "Slime Toad": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 2,
   atk: 700,
   def: 500,
   text: "Aqua - A slime with the head of a frog, it attacks by croaking terribly."
 },
 "Slot Machine": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 7,
   atk: 2000,
   def: 2300,
   text: "Machine - The machine's ability is said to vary according to its slot results."
 },
 "Sonic Duck": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 3,
   atk: 1700,
   def: 700,
   text: "Winged Beast - A duck which can walk at a sonic speed. Sometimes, he cannot deal with his incredible pace and loses control."
 },
 "Sonic Maid": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1200,
   def: 900,
   text: "Warrior - A maiden that uses sound to her advantage, she wields a scythe that's shaped like a musical note."
 },
 "Sorcerer of the Doomed": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1450,
   def: 1200,
   text: "Spellcaster - A slave of the dark arts, this sorcerer is a master of death-dealing spells."
 },
 "Soul Tiger": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 0,
   def: 2100,
   text: "Beast - The soul of a tiger that is said to devour human souls. He is a famous soul that you wouldn't want to run into in a dark alley."
 },
 Souleater: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1200,
   def: 0,
   text: "Fish - A living wonder of mystery."
 },
 "Souls of the Forgotten": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 2,
   atk: 900,
   def: 200,
   text: "Fiend - A wicked spirit created by the hateful souls of those who fell in battle. It grows by assimilating the souls of its enemies."
 },
 "Space Mambo": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1000,
   text: "Fish - A Space Mambo floating in the vast universe. This living relic was found in the ruins of a super civilization on Alphard 4."
 },
 "Spherous Lady": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 400,
   def: 1400,
   text: "Rock - Many have been deceived by the beauty of this vampire."
 },
 "Spike Seadra": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 5,
   atk: 1600,
   def: 1300,
   text: "Sea Serpent - Using the spikes sprouting from its body, this creature stabs its opponents and floods them with electricity."
 },
 Spikebot: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 1800,
   def: 1700,
   text: "Machine - A mechanical soldier created by a wicked sorcerer, it attacks with the two steel balls attached to its arms."
 },
 "Spirit of the Books": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1200,
   text: "Winged Beast - This wise spirit dwells in books, using its accumulated knowledge to defeat enemies."
 },
 "Spirit of the Harp": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 800,
   def: 2000,
   text: "Fairy - A spirit that soothes the soul with the music of its heavenly harp."
 },
 "Steel Ogre Grotto #1": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1400,
   def: 1800,
   text: "Machine - A steel idol worshiped in the Land of Machines."
 },
 "Steel Ogre Grotto #2": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 6,
   atk: 1900,
   def: 2200,
   text: "Machine - A mechanized iron doll with tremedous strength."
 },
 "Stone Ogre Grotto": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1600,
   def: 1500,
   text: "Rock - A behemoth shaped by giant boulders."
 },
 "Stuffed Animal": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1200,
   def: 900,
   text: "Warrior - It may look like a harmless stuffed animal, but its zipper mouth deals a deadly bite."
 },
 "Succubus Knight": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 1650,
   def: 1300,
   text: "Warrior - A warrior wizard adept in casting bone-chilling spells."
 },
 "Summoned Skull": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 6,
   atk: 2500,
   def: 1200,
   text: "Fiend - A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force."
 },
 "Swordsman of Landstar": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 500,
   def: 1200,
   text: "Warrior - An amateur with a sword, this fairy warrior relies on its mysterious powers."
 },
 Swordstalker: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 6,
   atk: 2000,
   def: 1600,
   text: "Warrior - A monster formed by the vengeful souls of those who passed away in battle."
 },
 Takriminos: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1200,
   text: "Sea Serpent - A member of a race of sea serpents that freely travels through the sea."
 },
 Takuhee: {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1450,
   def: 1000,
   text: "Winged Beast - This bird is known far and wide as a harbinger of doom."
 },
 "Terra the Terrible": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1300,
   text: "Fiend - Known as a swamp dweller, this creature is a minion of the dark forces."
 },
 "Terrorking Salmon": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 5,
   atk: 2400,
   def: 1000,
   text: "Fish - A feared salmon, master of the Sea of Darkness. Its roe is the best delicacy in the World of Darkness."
 },
 "The 13th Grave": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1200,
   def: 900,
   text: "Zombie - A zombie that suddenly appeared from plot #13 - an empty grave."
 },
 "The All-Seeing White Tiger": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 3,
   atk: 1300,
   def: 500,
   text: "Beast - A proud ruler of the jungle that some fear and others respect."
 },
 "The Dragon Dwelling in the Cave": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1300,
   def: 2000,
   text: "Dragon - A huge dragon dwelling in a cave. It is horrible when it gets angry, although it is usually quiet. It is said to preserve certain treasures."
 },
 "The Earl of Demise": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 5,
   atk: 2000,
   def: 700,
   text: "Fiend - This gentlemanly creature is extremely wicked, feared by man and fiend alike."
 },
 "The Forgiving Maiden": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 850,
   def: 2000,
   text: "Fairy - Offer this face-up card as a Tribute to return 1 of your monsters destroyed in battle during this turn to your hand."
 },
 "The Furious Sea King": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 3,
   atk: 800,
   def: 700,
   text: "Aqua - Grand King of the Seven Seas, he's able to summon massive tidal waves to drown the enemy."
 },
 "The Gross Ghost of Fled Dreams": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1800,
   text: "Fiend - This monster feeds on the dreams of an unwary sleeper, dragging the victim into eternal slumber."
 },
 "The Illusory Gentleman": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1500,
   def: 1600,
   text: "Spellcaster - Wearing odd fashions, this gentleman is very fickle. He sometimes saves people and at other times commits crimes."
 },
 "The Judgement Hand": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 1400,
   def: 700,
   text: "Warrior - An all-powerful hand that delivers ruthless attacks."
 },
 "The Portrait's Secret": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1500,
   text: "Fiend - A portrait cursed by the artist, it is said to bring ill fortune to anyone who owns it."
 },
 "The Statue of Easter Island": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1100,
   def: 1400,
   text: "Rock - A stone monument from Easter Island that launches laser blasts from its rock-hewn lips."
 },
 "Thousand-Eyes Idol": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 1,
   atk: 0,
   def: 0,
   text: "Spellcaster - A wicked entity that controls the hearts of men, its thousand eyes are able to see and expand the negative influences in an individual's soul."
 },
 "Three-Headed Geedo": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1400,
   text: "Fiend - A three-headed nocturnal monster that is absolutely ruthless when fighting."
 },
 "Three-Legged Zombies": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1100,
   def: 800,
   text: "Zombie - A pair of friendly skeletons, lean and fat, that travel with extreme difficulty."
 },
 "Tiger Axe": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1100,
   text: "Beast-Warrior - A fast and powerful axe-wielding beast-warrior."
 },
 Tongyo: {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1350,
   def: 800,
   text: "Fish - This monster captures other fish with its long tongue and sucks the energy out of them."
 },
 "Toon Alligator": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 800,
   def: 1600,
   text: "Reptile - An alligator monster straight from the cartoons."
 },
 Trent: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 5,
   atk: 1500,
   def: 1800,
   text: "Plant - A guardian of the woods, this massive tree is believed to be immortal."
 },
 "Tri-Horned Dragon": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 8,
   atk: 2850,
   def: 2350,
   text: "Dragon - An unworthy dragon with three sharp horns sprouting from its head."
 },
 "Trial of Nightmare": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1300,
   def: 900,
   text: "Fiend - This fiend passes judgment on enemies that are locked in coffins."
 },
 "Tripwire Beast": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1300,
   text: "Thunder - This creature attacks with electromagnetic waves."
 },
 "Turtle Bird": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 6,
   atk: 1900,
   def: 1700,
   text: "Aqua - An unusual turtle that not only swims at tremendous speeds, but can also sail across the skies."
 },
 "Turtle Tiger": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1000,
   def: 1500,
   text: "Aqua - A tiger encased in a protective shell that attacks with razor-sharp fangs."
 },
 "Turu-Purun": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 2,
   atk: 450,
   def: 500,
   text: "Aqua - A strange, one-eyed monster that can fell an enemy with a single stab of its spear."
 },
 "Twin Long Rods #2": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 3,
   atk: 850,
   def: 700,
   text: "Aqua - An amphibious creature with two whip-like tails."
 },
 "Twin-Headed Fire Dragon": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 6,
   atk: 2200,
   def: 1700,
   text: "Pyro - Two dragons fused as one from the effects of the Big Bang."
 },
 "Two-Headed King Rex": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1200,
   text: "Dinosaur - A powerful monster whose two heads attack as one."
 },
 "Two-Mouth Darkruler": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 3,
   atk: 900,
   def: 700,
   text: "Dragon - A dinosaur with two deadly jaws, it stores electricity in its horn and releases high voltage bolts from the mouth on its back."
 },
 Tyhone: {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1400,
   text: "Winged Beast - Capable of firing cannonballs from its mouth for long-range attacks, this creature is particularly effective in mountain battles."
 },
 "Tyhone #2": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 6,
   atk: 1700,
   def: 1900,
   text: "Dragon - A crimson dragon that spits fireballs to create a blazing sea of fire."
 },
 "United Resistance": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 3,
   atk: 1000,
   def: 400,
   text: "Thunder - The people that gather to swear to fight their oppressors. A revolution is coming."
 },
 "Unknown Warrior of Fiend": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 3,
   atk: 1000,
   def: 500,
   text: "Warrior - A deadly duo consisting of a beast master and its loyal servant."
 },
 Uraby: {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1500,
   def: 800,
   text: "Dinosaur - Fast on its feet, this dinosaur rips enemies to shreds with its sharp claws."
 },
 "Ushi Oni": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 6,
   atk: 2150,
   def: 1950,
   text: "Fiend - A bull fiend restored by the dark arts, this monster appears out of a jar."
 },
 "Warrior Dai Grepher": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1700,
   def: 1600,
   text: "Warrior - The warrior who can manipulate dragons. Nobody knows his mysterious past."
 },
 "Warrior of Zera": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1600,
   def: 1600,
   text: "Warrior - A wandering warrior who seeks the sanctuary where he can gain the power of the Archlords. To escape the temptation of evil fiends, he fights solo day by day."
 },
 "Water Magician": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1000,
   text: "Aqua - This monster swamps an opponent with an almost endless supply of water."
 },
 "Water Omotics": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1200,
   text: "Aqua - Transforms the water overflowing from a jar into attacking dragons."
 },
 Wattkid: {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 3,
   atk: 1000,
   def: 500,
   text: "Thunder - A creature that electrocutes opponents with bolts of lightning."
 },
 "Whiptail Crow": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1650,
   def: 1600,
   text: "Fiend - Attacks from the sky with a whip-like tail."
 },
 "Winged Dragon, Guardian of the Fortress #1": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1200,
   text: "Dragon - A dragon commonly found guarding mountain fortresses. Its signature attack is a sweeping dive from out of the blue."
 },
 "Winged Dragon, Guardian of the Fortress #2": {
   cardType: "normalMonster",
   attribute: "Wind",
   levelOrSubtype: 4,
   atk: 1200,
   def: 1000,
   text: "Winged Beast - This creature's wings are capable of generating tornadoes."
 },
 Wingweaver: {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 7,
   atk: 2750,
   def: 2400,
   text: "Fairy - A six-winged fairy who prays for peace and hope."
 },
 "Witty Phantom": {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1300,
   text: "Fiend - Dressed in a night-black tuxedo, this creature presides over death."
 },
 "Wolf Axwielder": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1650,
   def: 1000,
   text: "Beast-Warrior - Once it has started battle, this monster attacks fiercely and cannot stop."
 },
 "Woodborg Inpachi": {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 5,
   atk: 500,
   def: 2500,
   text: "Machine - The new form of the enigmatic Inpachi, remodeled by cutting-edge Dark World technology. Maneuverability has been sacrificed for strong armor, which was considered more important."
 },
 "Worm Drake": {
   cardType: "normalMonster",
   attribute: "Earth",
   levelOrSubtype: 4,
   atk: 1400,
   def: 1500,
   text: "Reptile - Once this monster wraps itself around a victim, there is no escape."
 },
 "Wow Warrior": {
   cardType: "normalMonster",
   attribute: "Water",
   levelOrSubtype: 4,
   atk: 1250,
   def: 900,
   text: "Fish - A fish with arms?"
 },
 "X-Head Cannon": {
   cardType: "normalMonster",
   attribute: "Light",
   levelOrSubtype: 4,
   atk: 1800,
   def: 1500,
   text: "Machine - A monster with a mighty cannon barrel, it is able to integrate its attacks. It attacks in many ways by combining and separating with other monsters."
 },
 Yamadron: {
   cardType: "normalMonster",
   attribute: "Fire",
   levelOrSubtype: 5,
   atk: 1600,
   def: 1800,
   text: "Dragon - This monster has three fire-breathing heads and can form a sea of blazing flames."
 },
 Yaranzo: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 4,
   atk: 1300,
   def: 1500,
   text: "Zombie - A treasure box containing a monster that attacks any unwary bandit."
 },
 Zoa: {
   cardType: "normalMonster",
   attribute: "Dark",
   levelOrSubtype: 7,
   atk: 2600,
   def: 1900,
   text: "Fiend - A monster whose full potential can be achieved when outfitted with \"Metalmorph\""
 }
};

const monsters = {
   ...vanillas,
   "Shining Angel": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1400,
      def: 800,
      text: "Fairy/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 LIGHT monster with 1500 or less ATK from your Deck, in face-up Attack Position.</effect>"
   },
   "Black Luster Soldier - Envoy of the Beginning": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text: "Warrior/Effect – Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your GY. Once per turn, you can activate 1 of these effects. ● <effect=Ignition>Target 1 monster on the field; banish it. This card cannot attack the turn this effect is activated.</effect> ● <effect=Trigger>If this attacking card destroys an opponent's monster by battle: It can make a second attack in a row.</effect>",
      limit: 1
   },
   "Airknight Parshath": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 5,
      atk: 1900,
      def: 1400,
      text: "Fairy/Effect – <effect=Continuous>If this card attacks a Defense Position monster, inflict piercing battle damage.</effect> <effect=Trigger>If this card inflicts battle damage to your opponent: Draw 1 card.</effect>"
   },
   "Magician of Faith": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 1,
      atk: 300,
      def: 400,
      text: "Spellcaster/Flip/Effect – <effect=Trigger>FLIP: Target 1 Spell in your GY; add that target to your hand.</effect>"
   },
   "Magical Merchant": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 1,
      atk: 200,
      def: 700,
      text: "Insect/Flip/Effect – <effect=Trigger>FLIP: Excavate cards from the top of your Deck until you excavate a Spell/Trap, then add that card to your hand, also send the remaining cards to the GY.</effect>",
      script: "Mill_Until:s/t"
   },
   "Abyss Soldier": {
      cardType: "effectMonster",
      attribute: "Water",
      levelOrSubtype: 4,
      atk: 1800,
      def: 1300,
      text: "Aqua/Effect – <effect=Ignition>Once per turn: You can discard 1 WATER monster to the Graveyard to target 1 card on the field; return it to the hand.</effect>",
      limit: 2
   },
   "Breaker the Magical Warrior": {
      cardType: "effectMonster",
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Spellcaster/Effect – <effect=Trigger>If this card is Normal Summoned: Place 1 Spell Counter on it (max. 1).</effect> <effect=Continuous>Gains 300 ATK for each Spell Counter on it.</effect> <effect=Ignition>You can remove 1 Spell Counter from this card, then target 1 Spell/Trap on the field; destroy that target.</effect>",
      limit: 1
   },
   Tsukuyomi: {
      cardType: "effectMonster",
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1100,
      def: 1400,
      text: "Spellcaster/Effect – Cannot be Special Summoned. <effect=Trigger>If this card is Normal Summoned or flipped face-up: Target 1 face-up monster on the field; change that target to face-down Defense Position.</effect> <effect=Trigger>Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand.</effect>"
   },
   Sangan: {
      cardType: "effectMonster",
      attribute: "Dark",
      levelOrSubtype: 3,
      atk: 1000,
      def: 600,
      text: "Fiend/Effect – <effect=Trigger>If this card is sent from the field to the GY: Add 1 monster with 1500 or less ATK from your Deck to your hand.</effect>",
      script: "Search_Deck:atk<1500;autoClose",
      limit: 1
   },
   "Sinister Serpent": {
      cardType: "effectMonster",
      attribute: "Water",
      levelOrSubtype: 1,
      atk: 300,
      def: 250,
      text: "Reptile/Effect – <effect=Trigger>During your Standby Phase, if this card is in your Graveyard: You can return it to your hand.</effect>",
      limit: 1
   },
   "Tribe-Infecting Virus": {
      cardType: "effectMonster",
      attribute: "Water",
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Aqua/Effect – <effect=Ignition>Discard 1 card, then declare 1 Type of monster; Destroy all face-up monsters of the declared Type on the field.</effect>",
      limit: 1
   },
   "Morphing Jar": {
      cardType: "effectMonster",
      attribute: "Earth",
      levelOrSubtype: 2,
      atk: 700,
      def: 600,
      text: "Rock/Flip/Effect – <effect=Trigger>FLIP: Both players discard their entire hands, then draw 5 cards.</effect>",
      limit: 1
   },
   "Asura Priest": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1700,
      def: 1200,
      text: "Fairy/Spirit/Effect – Cannot be Special Summoned. <effect=Trigger>During the End Phase of the turn this card is Normal Summoned or flipped face-up: Return it to the hand.</effect> <effect=Continuous>This card can attack all monsters your opponent controls once each.</effect>"
   },
   "Kycoo the Ghost Destroyer": {
      cardType: "effectMonster",
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1800,
      def: 700,
      text: "Spellcaster/Effect – <effect=Trigger>When this card inflicts battle damage to your opponent: You can target up to 2 monsters in their GY; banish those targets.</effect> <effect=Continuous>Your opponent cannot banish cards from either GY.</effect>"
   },
   "D.D. Warrior Lady": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1500,
      def: 1600,
      text: "Warrior/Effect – <effect=Trigger>After damage calculation, when this card battles an opponent's monster: You can banish that monster, also banish this card.</effect>",
      limit: 1
   },
   "Chaos Sorcerer": {
      cardType: "effectMonster",
      attribute: "Dark",
      levelOrSubtype: 6,
      atk: 2300,
      def: 2000,
      text: "Spellcaster/Effect – Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your GY. <effect=Ignition>Once per turn: You can target 1 face-up monster on the field; banish that target. This card cannot attack the turn you activate this effect.</effect>"
   },
   "Dekoichi the Battlechanted Locomotive": {
      cardType: "effectMonster",
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: 'Machine/Effect – <effect=Trigger>FLIP: Draw 1 card, then draw 1 additional card for each face-up "Bokoichi the Freightening Car" you control.</effect>'
   },
   "Jowgen the Spiritualist": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 3,
      atk: 200,
      def: 1300,
      text: "Spellcaster/Effect – <effect=Ignition>You can discard 1 random card from your hand to the Graveyard; destroy all Special Summoned monsters on the field. Neither player can Special Summon monsters.</effect>"
   },
   "Mystic Swordsman LV2": {
      cardType: "effectMonster",
      attribute: "Earth",
      levelOrSubtype: 2,
      atk: 900,
      def: 0,
      text: 'Warrior/Effect – <effect=Trigger>At the start of the Damage Step, if this card attacked a face-down Defense Position monster: Destroy that monster.</effect> <effect=Trigger>During the End Phase, if this card destroyed a monster by battle this turn: You can send this face-up card to the Graveyard; Special Summon 1 "Mystic Swordsman LV4" from your hand or Deck.</effect>'
   },
   "Roulette Barrel": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1000,
      def: 2000,
      text: "Machine/Effect – <effect=Ignition>Once per turn: You can roll a six-sided die twice, choose 1 result, and destroy 1 monster on the field whose Level is equal to that result.</effect>"
   },
   "Zaborg the Thunder Monarch": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 5,
      atk: 2400,
      def: 1000,
      text: "Thunder/Effect – <effect=Trigger>If this card is Tribute Summoned: Target 1 monster on the field; destroy that target.</effect>"
   }
};

const spells = {
   Necrovalley: {
      cardType: "Spell",
      levelOrSubtype: "Field",
      text: '<effect=Continuous-like>All "Gravekeeper\'s" monsters gain 500 ATK and DEF.</effect> <effect=Continuous-like>Cards in the Graveyard cannot be banished.</effect> <effect=Continuous-like>Negate any card effect that would move a card in the Graveyard, other than itself, to a different place.</effect> <effect=Continuous-like>Negate any card effect that changes Types or Attributes in the Graveyard.</effect>'
   },
   "Premature Burial": {
      cardType: "Spell",
      levelOrSubtype: "Equip",
      text: "Activate this card by paying 800 LP, then target 1 monster in your Graveyard; Special Summon that target in Attack Position and equip it with this card. <effect=Continuous-like>When this card is destroyed, destroy the equipped monster.</effect>",
      prepopLP: { hero: -800 },
      limit: 1
   },
   "Upstart Goblin": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Draw 1 card, then your opponent gains 1000 LP.",
      prepopLP: { villain: 1000 },
      limit: 2
   },
   "Pot of Greed": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Draw 2 cards.",
      limit: 1
   },
   "Graceful Charity": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Draw 3 cards, then discard 2 cards.",
      limit: 1
   },
   "Delinquent Duo": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Pay 1000 LP; your opponent discards 1 random card, and if they have any other cards in their hand, discard 1 more card of their choice.",
      prepopLP: { hero: -1000 },
      script: "Random_Discard",
      limit: 1
   },
   "Heavy Storm": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Destroy all Spell and Trap Cards on the field.",
      limit: 1
   },
   "Mystical Space Typhoon": {
      cardType: "Spell",
      levelOrSubtype: "Quick-Play",
      text: "Target 1 Spell/Trap on the field; destroy that target.",
      limit: 1
   },
   "Snatch Steal": {
      cardType: "Spell",
      levelOrSubtype: "Equip",
      text: "Equip only to a monster your opponent controls. <effect=Continuous-like>Take control of the equipped monster.</effect> <effect=Trigger-like>During each of your opponent's Standby Phases: They gain 1000 Life Points.</effect>",
      prepopLP: { villain: 1000 },
      limit: 1
   },
   Metamorphosis: {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Tribute 1 monster; Special Summon 1 Fusion Monster from your Extra Deck with the same Level as the Tributed monster."
   },
   Scapegoat: {
      cardType: "Spell",
      levelOrSubtype: "Quick-Play",
      text: 'Special Summon 4 "Sheep Tokens" (Beast/EARTH/Level 1/ATK 0/DEF 0) in Defense Position. They cannot be Tributed for a Tribute Summon. You cannot Summon other monsters the turn you activate this card (but you can Normal Set).',
      script: "Make_Tokens:count=4,name=Sheep Token,pos=def"
   },
   "Book of Moon": {
      cardType: "Spell",
      levelOrSubtype: "Quick-Play",
      text: "Target 1 face-up monster on the field; change that target to face-down Defense Position."
   },
   "Nobleman of Crossout": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Target 1 face-down monster on the field; destroy that target, and if you do, banish it, then, if it was a Flip monster, each player banishes all cards from their Deck with that monster's name.",
      limit: 2
   },
   "Creature Swap": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Each player chooses 1 monster they control and switches control of those monsters with each other. Those monsters cannot change their battle positions for the rest of this turn.",
      limit: 2
   },
   "Smashing Ground": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Destroy the 1 face-up monster your opponent controls that has the highest DEF (your choice, if tied)."
   }
};

const traps = {
   "Call of the Haunted": {
      cardType: "Trap",
      levelOrSubtype: "Continuous",
      text: "Activate this card by targeting 1 monster in your GY; Special Summon that target in Attack Position. <effect=Continuous-like>When this card leaves the field, destroy that monster.</effect> <effect=Continuous-like>When that monster is destroyed, destroy this card.</effect>",
      limit: 1
   },
   "Solemn Judgment": {
      cardType: "Trap",
      levelOrSubtype: "Counter",
      text: "When a monster(s) would be Summoned, OR a Spell/Trap Card is activated: Pay half your LP; negate the Summon or activation, and if you do, destroy that card.",
      prepopLP: { hero: "half" }
   },
   "Mirror Force": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "When an opponent's monster declares an attack: Destroy all your opponent's Attack Position monsters.",
      limit: 1
   },
   "Torrential Tribute": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "When a monster(s) is Summoned: Destroy all monsters on the field.",
      limit: 1
   },
   "Ring of Destruction": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 face-up monster; destroy that face-up monster, and if you do, inflict damage to both players equal to that target's ATK.",
      limit: 1
   },
   "Sakuretsu Armor": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "When an opponent's monster declares an attack: Target the attacking monster; destroy that target."
   },
   "Dust Tornado": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Target 1 Spell/Trap your opponent controls; destroy that target, then you can Set 1 Spell/Trap from your hand."
   },
   "Trap Dustshoot": {
      cardType: "Trap",
      levelOrSubtype: "Normal",
      text: "Activate only if your opponent has 4 or more cards in their hand. Look at your opponent's hand, select 1 Monster Card in it, and return that card to its owner's Deck."
   },
   "Royal Decree": {
      cardType: "Trap",
      levelOrSubtype: "Continuous",
      text: "<effect=Continuous-like>Negate all other Trap effects on the field.</effect>"
   }
};

const tokens = {
   "Sheep Token": {
      cardType: "tokenMonster",
      attribute: "Earth",
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: "Beast"
   }
};

const nonfusions = {
   ...monsters,
   ...spells,
   ...traps
};

const cards = { ...fusions, ...nonfusions };

export { cards, fusions, nonfusions, monsters, spells, traps, tokens };
