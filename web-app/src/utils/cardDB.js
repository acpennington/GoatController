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
      text:
         'Dragon/Fusion – "Summoned Skull" + "Red-Eyes Black Dragon". (This card is always treated as an "Archfiend" card.)'
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
   "Dark Balter the Terrible": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 5,
      atk: 2000,
      def: 1200,
      text:
         'Fiend/Fusion/Effect – "Possessed Dark Soul" + "Frontier Wiseman". A Fusion Summon of this monster can only be conducted with the above Fusion Material Monsters. When a Normal Spell Card is activated, negate the effect by paying 1000 Life Points. The effect of an Effect Monster that this monster destroys as a result of battle is negated.'
   },
   "Dark Blade the Dragon Knight": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 6,
      atk: 2200,
      def: 1500,
      text:
         'Warrior/Fusion/Effect – "Dark Blade" + "Pitch-Dark Dragon". Each time this card inflicts Battle Damage to your opponent, you can select up to 3 Monster Cards from your opponent\'s Graveyard and remove them from play.'
   },
   "Dark Flare Knight": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 6,
      atk: 2200,
      def: 800,
      text:
         'Warrior/Fusion/Effect – "Dark Magician" + "Flame Swordsman". You take no Battle Damage from battles involving this card. When this card is destroyed by battle and sent to the Graveyard: Special Summon 1 "Mirage Knight" from your hand or Deck.'
   },
   "Dark Paladin": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 8,
      atk: 2900,
      def: 2400,
      text:
         'Spellcaster/Fusion/Effect – "Dark Magician" + "Buster Blader". Must be Fusion Summoned. When a Spell Card is activated (Quick Effect): You can discard 1 card; negate the activation, and if you do, destroy it. This card must be face-up on the field to activate and to resolve this effect. Gains 500 ATK for each Dragon monster on the field and in the GY.',
      noMeta: true
   },
   "Darkfire Dragon": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1500,
      def: 1250,
      text: 'Dragon/Effect – "Firegrass" + "Petit Dragon"'
   },
   "Deepsea Shark": {
      cardType: "fusionMonster",
      attribute: "Water",
      levelOrSubtype: 5,
      atk: 1900,
      def: 1600,
      text: 'Fish/Fusion – "Bottom Dweller" + "Tongyo"'
   },
   "Dragoness the Wicked Knight": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: 'Warrior/Fusion – "Armaill" + "One-Eyed Shield Dragon"'
   },
   "Elemental HERO Flame Wingman": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 6,
      atk: 2100,
      def: 1200,
      text:
         'Warrior/Fusion/Effect – "Elemental HERO Avian" + "Elemental HERO Burstinatrix". Must be Fusion Summoned and cannot be Special Summoned by other ways. When this card destroys a monster by battle and sends it to the Graveyard: Inflict damage to your opponent equal to the ATK of the destroyed monster in the Graveyard.',
      noMeta: true
   },
   "Elemental HERO Thunder Giant": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 2400,
      def: 1500,
      text:
         'Warrior/Fusion/Effect – "Elemental HERO Sparkman" + "Elemental HERO Clayman". Must be Fusion Summoned and cannot be Special Summoned by other ways. Once per turn: You can discard 1 card to target 1 face-up monster on the field with original ATK less than the ATK of this card; destroy that target.',
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
   "Fiend Skull Dragon": {
      cardType: "fusionMonster",
      attribute: "Wind",
      levelOrSubtype: 5,
      atk: 2000,
      def: 1200,
      text:
         'Dragon/Fusion/Effect – "Cave Dragon" + "Lesser Fiend". (This card is always treated as an "Archfiend" card.) A Fusion Summon of this card can only be done with the above Fusion Material Monsters. Negate the effects of Flip Effect Monsters. Negate any Trap effects that target this card on the field, and if you do, destroy that Trap Card.'
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
   "King Dragun": {
      cardType: "fusionMonster",
      attribute: "",
      levelOrSubtype: 7,
      atk: 2400,
      def: 1100,
      text:
         'Dragon/Fusion/Effect – "Lord of D." + "Divine Dragon Ragnarok". Your opponent cannot target Dragon monsters with card effects. Once per turn: You can Special Summon 1 Dragon monster from your hand.'
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
      text:
         'Fairy/Fusion/Effect – "Mokey Mokey" + "Mokey Mokey" + "Mokey Mokey". When this card is removed from the field, you can Special Summon as many "Mokey Mokey" as possible from your Graveyard.'
   },
   "Musician King": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 5,
      atk: 1750,
      def: 1500,
      text: 'Spellcaster/Fusion – "Witch of the Black Forest" + "Lady of Faith"'
   },
   "Ojama King": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 0,
      def: 3000,
      text:
         'Beast/Fusion/Effect – "Ojama Green" + "Ojama Yellow" + "Ojama Black". Select up to 3 of your opponent\'s Monster Card Zones. The selected zones cannot be used.'
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
   "Reaper on the Nightmare": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 5,
      atk: 800,
      def: 600,
      text:
         'Zombie/Fusion/Effect – "Spirit Reaper" + "Nightmare Horse". This card is not destroyed as a result of battle. Destroy this card when it is targeted by the effect of a Spell, Trap, or Effect Monster. This card can attack your opponent\'s Life Points directly even if there is a monster on your opponent\'s side of the field. If this card successfully attacks your opponent\'s Life Points directly, your opponent discards 1 card randomly from his/her hand.'
   },
   "Roaring Ocean Snake": {
      cardType: "fusionMonster",
      attribute: "Water",
      levelOrSubtype: 6,
      atk: 2100,
      def: 1800,
      text: 'Aqua/Fusion – "Mystic Lamp" + "Hyosube"'
   },
   "Ryu Senshi": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 6,
      atk: 2000,
      def: 1200,
      text:
         'Warrior/Fusion/Effect – "Warrior Dai Grepher" + "Spirit Ryu". A Fusion Summon of this card can only be done with the above Fusion Materials. When a Normal Trap Card is activated (Quick Effect): You can pay 1000 LP; negate that effect. This card must be face-up on the field to activate and to resolve this effect. Negate the effects of any Spell Card that targets this card and destroy it.'
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
      levelOrSubtype: 5,
      atk: 1200,
      def: 500,
      text:
         'Machine/Fusion/Effect – "Robolady" + "Roboyarou". You can Special Summon "Super Roboyarou" by returning this card from the field to the Extra Deck. You cannot use this effect during the same turn this monster is Special Summoned. In addition, increase the ATK of this monster by 1000 points during the Damage Step when this monster inflicts Direct Damage to your opponent\'s Life Points.'
   },
   "Super Roboyarou": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 5,
      atk: 1200,
      def: 500,
      text:
         'Machine/Fusion/Effect – "Roboyarou" + "Robolady". You can Special Summon "Super Robolady" by returning this card from the field to the Extra Deck. You cannot use this effect during the same turn this monster is Special Summoned. In addition, increase the ATK of this monster by 1000 points during the Damage Step when this monster battles with a monster.'
   },
   "The Last Warrior from Another Planet": {
      cardType: "fusionMonster",
      attribute: "Earth",
      levelOrSubtype: 7,
      atk: 2350,
      def: 2300,
      text:
         'Warrior/Fusion/Effect – "Zombyra the Dark" + "Maryokutai". If this card is Special Summoned: Destroy all other monsters you control. Neither player can Summon monsters.'
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
      text:
         'Machine/Fusion/Effect – "X-Head Cannon" + "Y-Dragon Head". Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".) Cannot be Special Summoned from the GY. You can discard 1 card, then target 1 face-up Spell/Trap your opponent controls; destroy that target.',
      noMeta: true
   },
   "XYZ-Dragon Cannon": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 8,
      atk: 2800,
      def: 2600,
      text:
         'Machine/Fusion/Effect – "X-Head Cannon" + "Y-Dragon Head" + "Z-Metal Tank". Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".) Cannot be Special Summoned from the GY. You can discard 1 card, then target 1 card your opponent controls; destroy that target.',
      noMeta: true
   },
   "XZ-Tank Cannon": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 2400,
      def: 2100,
      text:
         'Machine/Fusion/Effect – "X-Head Cannon" + "Z-Metal Tank". Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".) Cannot be Special Summoned from the GY. You can discard 1 card, then target 1 face-down Spell/Trap your opponent controls; destroy that target.',
      noMeta: true
   },
   "YZ-Tank Dragon": {
      cardType: "fusionMonster",
      attribute: "Light",
      levelOrSubtype: 6,
      atk: 2100,
      def: 2200,
      text:
         'Machine/Fusion/Effect – "Y-Dragon Head" + "Z-Metal Tank". Must first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".) Cannot be Special Summoned from the GY. You can discard 1 card, then target 1 face-down monster your opponent controls; destroy that target.',
      noMeta: true
   },
   "Thousand-Eyes Restrict": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text:
         'Spellcaster/Fusion/Effect – Relinquished" + "Thousand-Eyes Idol". Other monsters on the field cannot change their battle positions or attack. Once per turn: You can target 1 monster your opponent controls; equip that target to this card (max. 1). This card\'s ATK/DEF become equal to that equipped monster\'s. If this card would be destroyed by battle, destroy that equipped monster instead.'
   },
   "Gatling Dragon": {
      cardType: "fusionMonster",
      attribute: "Dark",
      levelOrSubtype: 8,
      atk: 2600,
      def: 1200,
      text:
         'Machine/Fusion/Effect – "Barrel Dragon" + "Blowback Dragon". Once per turn: You can toss a coin 3 times and destroy as many monsters on the field as possible, but not more than the number of heads.'
   }
};

const monsters = {
   "Shining Angel": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1400,
      def: 800,
      text:
         "Fairy/Effect – When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 LIGHT monster with 1500 or less ATK from your Deck, in face-up Attack Position."
   },
   "Black Luster Soldier - Envoy of the Beginning": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text:
         "Warrior/Effect – Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your GY. Once per turn, you can activate 1 of these effects. ● Target 1 monster on the field; banish it. This card cannot attack the turn this effect is activated. ● If this attacking card destroys an opponent's monster by battle: It can make a second attack in a row."
   }
};

const spells = {
   Necrovalley: {
      cardType: "Spell",
      levelOrSubtype: "Field",
      text:
         'All "Gravekeeper\'s" monsters gain 500 ATK and DEF. Cards in the Graveyard cannot be banished. Negate any card effect that would move a card in the Graveyard to a different place. Negate any card effect that changes Types or Attributes in the Graveyard.'
   },
   "Nobleman of Crossout": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text:
         "Target 1 face-down monster on the field; destroy that target, and if you do, banish it, then, if it was a Flip monster, each player reveals their Main Deck, then banishes all cards from it with that monster's name."
   }
};

const traps = {
   "Call of the Haunted": {
      cardType: "Trap",
      levelOrSubtype: "Continuous",
      text:
         "Activate this card by targeting 1 monster in your GY; Special Summon that target in Attack Position. When this card leaves the field, destroy that monster. When that monster is destroyed, destroy this card."
   }
};

const nonfusions = {
   ...monsters,
   ...spells,
   ...traps
};

const cards = { ...fusions, ...nonfusions };

export { cards, fusions, nonfusions, monsters, spells, traps };
