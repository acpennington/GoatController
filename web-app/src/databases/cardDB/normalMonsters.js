import { NORMAL_MONSTER, DARK, LIGHT, WATER, FIRE, EARTH, WIND  } from "utils/constants.js";

const normalMonsters = {
   "7 Colored Fish": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1800,
      def: 800,
      text: "Fish – A rare rainbow fish that has never been caught by mortal man"
   },
   "Acrobat Monkey": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1800,
      text: "Machine – An autonomous monkey type robot which was developed with cutting-edge technology. It moves very acrobatically."
   },
   Aitsu: {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 5,
      atk: 100,
      def: 100,
      text: "Fairy – He seems to be very unreliable, but he might have incredible potential."
   },
   "Alpha The Magnet Warrior": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1700,
      text: "Rock – Alpha, Beta, and Gamma meld as one to form a powerful monster."
   },
   "Amphibian Beast": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 6,
      atk: 2400,
      def: 2000,
      text: "Fish – On land or in the sea, the speed of this monster is unmatchable."
   },
   "Ancient Brain": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1000,
      def: 700,
      text: "Fiend – A fallen fairy that is powerful in the dark."
   },
   "Ancient Elf": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1450,
      def: 1200,
      text: "Spellcaster – This elf is rumored to have lived for thousands of years. He leads an army of spirits against his enemies."
   },
   "Ancient Lizard Warrior": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1100,
      text: "Reptile – Before the dawn of time, this lizard warrior reigned supreme."
   },
   "Ancient One of the Deep Forest": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 1800,
      def: 1900,
      text: "Beast – This creature adopts the form of a white goat living in the forest, but is actually a Forest Elder."
   },
   Ansatsu: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1700,
      def: 1200,
      text: "Warrior – A silent and deadly warrior specializing in assassinations."
   },
   "Aqua Madoor": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1200,
      def: 2000,
      text: "Spellcaster – A wizard of the waters that conjures a liquid wall to crush any enemies that oppose him."
   },
   "Archfiend Marmot of Nefariousness": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 400,
      def: 600,
      text: "Beast – An air marmot that has a nefarious horna dnwings. It attacks by throwing acorns."
   },
   "Archfiend Soldier": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1900,
      def: 1500,
      text: "Fiend – An expert at battle who belongs to a crack diabolical unit. He's famous because he always gets the job done."
   },
   Armaill: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 700,
      def: 1300,
      text: "Warrior – A strange warrior who manipulates three deadly blades with both hands and his tail."
   },
   "Armored Lizard": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: "Reptile – A lizard with a very tough hide and a vicious bite."
   },
   "Armored Starfish": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 850,
      def: 1400,
      text: "Aqua – A bluish starfish with a solid hide capable of fending off attacks."
   },
   "Armored Zombie": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1500,
      def: 0,
      text: "Zombie – This warrior blindly swings a deadly blade with devastating force."
   },
   "Axe Raider": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1150,
      text: "Warrior – An axe-wielding monster of tremendous strength and agility."
   },
   "Baby Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1200,
      def: 700,
      text: "Dragon – Much more than just a child, this dragon is gifted with untapped power."
   },
   "Baron of the Fiend Sword": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1550,
      def: 800,
      text: "Fiend – An aristocrat who wields a sword possessed by a malicious spirit that preys on the weak."
   },
   "Basic Insect": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 500,
      def: 700,
      text: "Insect – Usually found traveling in swarms, this creature's ideal environment is the forest."
   },
   "Battle Footballer": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1000,
      def: 2100,
      text: "Machine – A cyborg with high defense power. Originally it was invented for a football machine."
   },
   "Battle Ox": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1000,
      text: "Beast-Warrior – A monster with tremendous power, it destroys enemies with a swing of its axe."
   },
   "Battle Steer": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1300,
      text: "Beast-Warrior – A bull monster often found in the woods, it charges enemy monsters with a pair of deadly horns."
   },
   "Bean Soldier": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1300,
      text: "Plant – A plant-warrior that attacks with seeds and sword."
   },
   "Beast of Talwar": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2400,
      def: 2150,
      text: "Fiend – Only the master of the sword among Fiend-Type monsters is permitted to hold the Talwar."
   },
   "Beautiful Headhuntress": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1600,
      def: 800,
      text: "Warrior – A vicious creature that has decapitated numerous enemy monsters."
   },
   "Beaver Warrior": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1500,
      text: "Beast-Warrior – What this creature lacks in size it makes up for in defense when battling in the prairie."
   },
   "Beta The Magnet Warrior": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1600,
      text: "Rock – Alpha, Beta, and Gamma meld as one to form a powerful monster."
   },
   "Big Koala": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 7,
      atk: 2700,
      def: 2000,
      text: "Beast – A species of huge Des Koala. He's meek, but people are afraid of him because he's very powerful."
   },
   "Bio-Mage": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 1150,
      def: 1000,
      text: "Fairy – A mysterious priest created as a result of the latest advances in biotechnology."
   },
   "Blackland Fire Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1500,
      def: 800,
      text: "Dragon – A dragon that dwells in the depths of darkness, its vulnerability lies in its poor eyesight."
   },
   "Blazing Inpachi": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1850,
      def: 0,
      text: "Pyro – A wicked wooden spirit now burning in flames. Its fire attack is powerful, but it will soon be nothing but ashes."
   },
   "Blue-Eyes White Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text: "Dragon – This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale."
   },
   "Blue-Winged Crown": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1200,
      text: "Winged Beast – With hair shaped like a crown and a body incased in bluish white flames, this bird is a formidable sight."
   },
   "Bokoichi the Freightening Car": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 500,
      def: 500,
      text: "Machine – A freight car that is exclusively for Dekoichi. It can transport anything, but most cargo arrives broken."
   },
   Boneheimer: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 850,
      def: 400,
      text: "Aqua – This monster wanders the seas, sucking dry any creatures it may encounter."
   },
   "Bottom Dweller": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 1650,
      def: 1700,
      text: "Fish – This is one sea creature whose wrath is something monsters fear to face."
   },
   Burglar: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 850,
      def: 800,
      text: "Beast – A sly rat. He will come at you with his huge left claw."
   },
   "Celtic Guardian": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Warrior – An elf who learned to wield a sword, he baffles enemies with lightning-swift attacks."
   },
   "Charcoal Inpachi": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 1,
      atk: 100,
      def: 2100,
      text: "Pyro – A wicked wooden spirit that has burned out. The barbecue grilled with this charcoal is so awesome that everybody thinks it's priceless."
   },
   "Chu-Ske the Mouse Fighter": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 0,
      text: "Beast – A fiery mouse, traveling the world to become the strongest fighter in the world of mice. Be careful not to touch him, or you will get burned."
   },
   "Claw Reacher": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1000,
      def: 800,
      text: "Fiend – Stretching arms and razor-sharp claws make this monster a formidable opponent."
   },
   "Clown Zombie": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 1350,
      def: 0,
      text: "Zombie – A clown revived by the powers of darkenss. Its deadly dance has sent many monster to their graves."
   },
   "Corroding Shark": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1100,
      def: 700,
      text: "Zombie – A zombie shark that can deliver its lethal curse with a spell."
   },
   "Cosmo Queen": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 2900,
      def: 2450,
      text: "Spellcaster – Queen of the galaxies and mistress of the stars."
   },
   "Crawling Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1600,
      def: 1400,
      text: "Dragon – This weakened dragon can no longer fly, but it is still a deadly force to be reckoned with."
   },
   "Crawling Dragon #2": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1200,
      text: "Dinosaur – A powerful dragon with teeth that can grind almost anything to dust."
   },
   "Curse of Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1500,
      text: "Dragon – A wicked dragon that taps into dark forces to execute a powerful attack."
   },
   "Cyber Falcon": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Machine – A jet-powered hawk that travels at the speed of sound."
   },
   "Cyber Soldier of Darkworld": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Machine – A mechanical soldier that won't stop attacking until all of its life readings have been extinguished from its sensors."
   },
   "D. Human": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1100,
      text: "Warrior – Gifted with the power of dragons, this warrior wields a sword created from a dragon's fang."
   },
   "D.D. Trainer": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 100,
      def: 2000,
      text: "Fiend – A poor goblin that was sucked into a different dimension. However, he's doing his best with his new destiny."
   },
   "Dancing Elf": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 1,
      atk: 300,
      def: 200,
      text: "Fairy – An elf that dances across the sky with wings of razor-sharp blades."
   },
   "Dark Assailant": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1200,
      text: "Zombie – Armed with the Psycho Sword, this sinister assassin rules the bad land."
   },
   "Dark Bat": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1000,
      text: "Winged Beast – Bats from the netherworld that use their hyper senses to detect their enemies."
   },
   "Dark Blade": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1500,
      text: "Warrior – They say he is a dragon-manipulating warrior from the dark world. His attack is tremendous, using his great swords with vicious power."
   },
   "Dark Gray": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 800,
      def: 900,
      text: "Beast – Entirely gray, this beast has rarely been seen by mortal eyes."
   },
   "Dark King of the Abyss": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1200,
      def: 800,
      text: "Fiend – It's said that this King of the Netherworld once had the power to rule over the dark."
   },
   "Dark Magician": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2500,
      def: 2100,
      text: "Spellcaster – The ultimate wizard in terms of attack and defense."
   },
   "Dark Titan of Terror": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1100,
      text: "Fiend – A fiend said to dwell in the world of dreams, it attacks enemies in their sleep."
   },
   "Dark Witch": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1700,
      text: "Fairy – A popular creature in mythology that delivers fatal attacks with a sharp spear."
   },
   "Darkfire Soldier #1": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1150,
      text: "Pyro – An explosive expert from a special elite force."
   },
   "Darkfire Soldier #2": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1100,
      text: "Pyro – A warrior who gained immeasurable power from the heart of a volcano."
   },
   "Darkworld Thorns": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: "Plant – A thorny plant found in the darklands that wraps its body around any unwary travelers."
   },
   "Destroyer Golem": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1000,
      text: "Rock – A golem with a massive right hand for crushing its victims."
   },
   "Dharma Cannon": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 900,
      def: 500,
      text: "Machine – A monstrous creature whose body is lined with cannons that never miss their targets."
   },
   "Disk Magician": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1350,
      def: 1000,
      text: "Machine – This monster hides in a saucer and only appears when executing an attack."
   },
   Dissolverock: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 900,
      def: 1000,
      text: "Rock – A monster born in the lava pits, it generates intense heat that can melt away its enemies."
   },
   "Divine Dragon Ragnarok": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1000,
      text: "Dragon – A legendary dragon sent by the gods as their instrument. Legends say that if provoked, the whole world will sink beneath the sea."
   },
   Dokuroyaiba: {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 3,
      atk: 1000,
      def: 400,
      text: "Fiend – A boomerang with brains that will pursue a target to the ends of the earth."
   },
   "Doma The Angel of Silence": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1600,
      def: 1400,
      text: "Fairy – This fairy rules over the end of existence."
   },
   "Dragon Zombie": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1600,
      def: 0,
      text: "Zombie – A dragon revived by sorcery. Its breath is highly corrosive."
   },
   "Drooling Lizard": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 900,
      def: 800,
      text: "Reptile – A blood-sucking snake in human form that attacks any living being that passes nearby."
   },
   "Earthbound Spirit": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 500,
      def: 2000,
      text: "Fiend – A vengeful creature formed by the spirits of fallen warriors, it drags any who dare approach it into the deepest bowels of the earth."
   },
   "Elemental HERO Avian": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1000,
      text: "Warrior – A winged Elemental HERO who wheels through the sky and manipulates the wind. His signature move, Featherbreak, gives villainy a blow from sky-high."
   },
   "Elemental HERO Burstinatrix": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 3,
      atk: 1200,
      def: 800,
      text: "Warrior – A flame manipulator who was the first Elemental HERO woman. Her Burstfire burns away villainy."
   },
   "Elemental HERO Clayman": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 800,
      def: 2000,
      text: "Warrior – An Elemental HERO with a clay body built-to-last. He'll preserve his Elemental HERO colleagues at any cost."
   },
   "Elemental HERO Sparkman": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1400,
      text: "Warrior – An Elemental HERO and a warrior of light who proficiently wields many kinds of armaments. His Static Shockwave cuts off the path of villainy."
   },
   "Empress Mantis": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 6,
      atk: 2200,
      def: 1400,
      text: "Insect – Queen of an army of giant mantises whose command moves legions."
   },
   "Enchanting Mermaid": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: "Fish – A beautiful mermaid that lures voyagers to a watery death."
   },
   "Fairy's Gift": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: "Spellcaster – This flying monster is known for delivering happiness to all."
   },
   "Faith Bird": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1100,
      text: "Winged Beast – This long-tailed bird blinds its enemies with mystical light."
   },
   "Feral Imp": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1400,
      text: "Fiend – A playful little fiend that lurks in the dark, waiting to attack an unwary enemy."
   },
   "Fiend Reflection #2": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1100,
      def: 1400,
      text: "Winged Beast – A bird-beast that summons reinforcements with a hand mirror."
   },
   "Fiend Scorpion": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 900,
      def: 200,
      text: "Insect – A huge scorpion inhabited by the soul of a fiend. Usually it holds back, but has untapped potential."
   },
   "Fire Kraken": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1500,
      text: "Aqua – A squid that thrives on fire and heat."
   },
   Firegrass: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 700,
      def: 600,
      text: "Plant – A fire-breathing plant found growing near volcanoes."
   },
   Fireyarou: {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1000,
      text: "Pyro – A malevolent creature wrapped in flames that attacks enemies with intense fire."
   },
   "Flame Cerebrus": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 6,
      atk: 2100,
      def: 1800,
      text: 'Pyro – Known to many as the "Burning Executioner", this monster is capable of burning enemies to cinders.'
   },
   "Flame Champion": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 5,
      atk: 1900,
      def: 1300,
      text: "Pyro – A warrior protected by a flaming shield that nullifies any attack."
   },
   "Flame Dancer": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 2,
      atk: 550,
      def: 450,
      text: "Pyro – This monster moves while swinging its burning rope."
   },
   "Flame Manipulator": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 3,
      atk: 900,
      def: 1000,
      text: 'Spellcaster – This Spellcaster attacks enemies with fire-related spells such as "Sea of Flames" and "Wall of Fire".'
   },
   "Flying Fish": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 800,
      def: 500,
      text: "Fish – Three wishes are granted to those fortunate enough to see this monster in flight."
   },
   "Flying Kamakiri #2": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1500,
      def: 800,
      text: "Insect – A flying mantis that feeds primarily on insects."
   },
   "Flying Penguin": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1000,
      text: "Aqua – A very rare penguin that takes to the air with ears shaped like wings."
   },
   "Frenzied Panda": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1000,
      text: "Beast – A savage beast that carries a big bamboo stick for beating down its enemies."
   },
   "Gadget Soldier": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 6,
      atk: 1800,
      def: 2000,
      text: "Machine – A rust-free machine warrior born to battle."
   },
   Gagagigo: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1850,
      def: 1000,
      text: "Reptile – This young evildoer used to have an evil heart, but by meeting a special person, he discovered justice."
   },
   "Gaia The Fierce Knight": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 7,
      atk: 2300,
      def: 2100,
      text: "Warrior – A knight whose horse travels faster than the wind. His battle-charge is a force to be reckoned with."
   },
   "Gamma The Magnet Warrior": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1800,
      text: "Rock – Alpha, Beta, and Gamma meld as one to form a powerful monster."
   },
   "Garnecia Elefantis": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 7,
      atk: 2400,
      def: 2000,
      text: "Beast-Warrior – A monster so heavy that each step rocks the earth."
   },
   Garoozis: {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1500,
      text: "Beast-Warrior – An axe-swinging beast-warrior with the head of a dragon."
   },
   "Gazelle the King of Mythical Beasts": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: "Beast – This monster moves so fast that it looks like an illusion to mortal eyes."
   },
   "Gemini Elf": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1900,
      def: 900,
      text: "Spellcaster – Elf twins that alternate their attacks."
   },
   "Giant Flea": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: "Insect – A massive flea that feeds on the blood of its enemies."
   },
   "Giant Red Seasnake": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1800,
      def: 800,
      text: "Aqua – A sea-dwelling snake that attacks passing enemies with its sharp teeth."
   },
   "Giant Soldier of Stone": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1300,
      def: 2000,
      text: "Rock – A giant warrior made of stone. A punch from this creature has earth-shaking results."
   },
   "Giant Turtle Who Feeds on Flames": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 1400,
      def: 1800,
      text: "Aqua – A crimson-shelled tortoise that feeds on flames."
   },
   "Giga Gagagigo": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 2450,
      def: 1500,
      text: "Reptile – In order to fight tremendous evil, he gained formidable power through body reconstruction, but lost his heart and his redemption."
   },
   "Giga-Tech Wolf": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1400,
      text: "Machine – An iron wolf with razor-sharp fangs that can penetrate any armor."
   },
   Gigobyte: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 1,
      atk: 350,
      def: 300,
      text: "Reptile – He has a tranquil soul, but carries a destiny that one day his heart shall be tainted by evil...."
   },
   "Girochin Kuwagata": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1000,
      text: "Insect – Despite its small size, this monster has powerful jaws that can rip metal to shreds."
   },
   "Goblin Calligrapher": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 400,
      def: 400,
      text: 'Fiend – A Goblin who devotes himself to mastering perfect calligraphy of the word "False". He gives his all to each stroke.'
   },
   "Gogiga Gagagigo": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 8,
      atk: 2950,
      def: 2800,
      text: "Reptile – His soul long since collapsed, his body recklessly continues onward, driven by a lust for more power. He no longer resembles his former self...."
   },
   Gradius: {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1200,
      def: 800,
      text: "Machine – A high-performance jet fighter with power capsules for variable attack capabilities."
   },
   "Grand Tiki Elder": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1500,
      def: 800,
      text: "Fiend – A masked monster that wields the most deadly of curses."
   },
   "Great Angus": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1800,
      def: 600,
      text: "Beast – A very violent beast, it is always berserk. People say that they have never seen it silent."
   },
   "Great White": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1600,
      def: 800,
      text: "Fish – A giant white shark with razor-sharp teeth."
   },
   "Green Phantom King": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 500,
      def: 1600,
      text: "Plant – This youthful king of the forest lives in a green world, abundant with trees and wildlife."
   },
   "Ground Attacker Bugroth": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1000,
      text: "Machine – A surface battle robot that was once used for sea warfare."
   },
   "Guardian of the Labyrinth": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1200,
      text: "Warrior – A monster that guards the entrance to the Netherworld."
   },
   "Guardian of the Throne Room": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1650,
      def: 1600,
      text: "Machine – A robot guard built to guard throne rooms, it is armed with homing missiles."
   },
   "Gyakutenno Megami": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 6,
      atk: 1800,
      def: 2000,
      text: "Fairy – This fairy uses her mystical power to protect the weak and provide spiritual support."
   },
   "Hard Armor": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 300,
      def: 1200,
      text: "Warrior – A living suit of armor that attacks enemies with a bone-jarring tackle."
   },
   "Harpie Girl": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 2,
      atk: 500,
      def: 500,
      text: "Winged Beast – A Harpie chick who aspires to flit about beautifully and gorgeously, but attack sharply."
   },
   "Harpie Lady": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1400,
      text: "Winged Beast – This human-shaped animal with wings is beautiful to watch but deadly in battle."
   },
   "Headless Knight": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1450,
      def: 1700,
      text: "Fiend – A haunted spirit of a falsely accused knight who wanders in search of truth and justice."
   },
   "Hercules Beetle": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1500,
      def: 2000,
      text: "Insect – A massive beetle with a tough carapace and a dangerous horn."
   },
   Hibikime: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1450,
      def: 1000,
      text: "Warrior – Confuses enemies with a noise that is harsh to the ears."
   },
   "High Tide Gyojin": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1650,
      def: 1300,
      text: "Aqua – A very agile half-fish warrior known for its relentless attacks."
   },
   "Hinotama Soul": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 2,
      atk: 600,
      def: 500,
      text: "Pyro – An intensely hot flame creature that rams anything standing in its way."
   },
   "Hitotsu-Me Giant": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1000,
      text: "Beast-Warrior – A one-eyed behemoth with thick, powerful arms made for delivering punishing blows."
   },
   "Humanoid Slime": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 800,
      def: 2000,
      text: "Aqua – This slime apparently has some human genes in its genetic makeup."
   },
   "Hunter Spider": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1600,
      def: 1400,
      text: "Insect – This monster feeds on whatever it catches in its web."
   },
   Hyosube: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1500,
      def: 900,
      text: "Aqua – This amphibian is strong on the attack, but leaves much to be desired when defending."
   },
   Hyozanryu: {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2100,
      def: 2800,
      text: "Dragon – A dragon created from a massive diamond that sparkles with blinding light."
   },
   "Illusionist Faceless Mage": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1200,
      def: 2200,
      text: "Spellcaster – Manipulates enemy attacks with the power of illusion."
   },
   Inpachi: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1900,
      text: "Machine – A log that attacks lost travelers in the forest. Originally a big tree, it was cut down and possessed by a wicked spirit."
   },
   "Insect Knight": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1900,
      def: 1500,
      text: "Insect – Of all Insect fighters, he is the paragon of the Indestructible Insect Invaders, which only the elite of the elite can join. We can no longer ignore their unmatched battle prowess."
   },
   "Island Turtle": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1100,
      def: 2000,
      text: "Aqua – A huge turtle that is often mistaken for an island."
   },
   Jellyfish: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1500,
      text: "Aqua – An almost invisible, semi-transparent jellyfish that drifts in the sea."
   },
   "Judge Man": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 2200,
      def: 1500,
      text: "Warrior – This club-wielding warrior battles to the end and will never surrender."
   },
   Kabazauls: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1500,
      text: "Dinosaur – A huge monster in the shape of a hippopotamus. The sneezing from his gigantic body is so fierce that people mistake it for a hurricane."
   },
   "Kagemusha of the Blue Flame": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 800,
      def: 400,
      text: "Warrior – Serving as a double for the Ruler of the Blue Flame, he's a master swordsman that wields a fine blade."
   },
   "Killer Needle": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1000,
      text: "Insect – A huge bee with exceptional strength that's particularly dangerous in a swarm."
   },
   "King Fog": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1000,
      def: 900,
      text: "Fiend – A fiend that dwells in a blinding curtain of smoke."
   },
   "King of Yamimakai": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1530,
      text: "Fiend – Wields the power of darkness to destroy its enemies."
   },
   Kojikocy: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: "Warrior – A man-hunter with powerful arms that can crush boulders"
   },
   "Koumori Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: "Dragon – A vicious, fire-breathing dragon whose wicked flame corrupts the souls of its victims."
   },
   Kozaky: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 400,
      def: 400,
      text: "Fiend – A workaholic fiend who devotes everything to his research into the languages of Dark World. His mind has collapsed because of working too hard."
   },
   Kumootoko: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 700,
      def: 1400,
      text: "Insect – A massive, intelligent spider that traps enemies with webbing."
   },
   Kurama: {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 800,
      def: 800,
      text: "Winged Beast – A vicious bird that attacks from the skies with its whip-like tail."
   },
   "Kuwagata α": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1250,
      def: 1000,
      text: "Insect – A very vicious stag beetle that goes for the head."
   },
   "La Jinn the Mystical Genie of the Lamp": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1000,
      text: "Fiend – A genie of the lamp that is at the beck and call of its master."
   },
   "Labyrinth Wall": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 0,
      def: 3000,
      text: "Rock – These walls form a labyrinth with no exit for enemies."
   },
   "Lady of Faith": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 1100,
      def: 800,
      text: "Spellcaster – Soothes the souls of others by chanting a mysterious spell."
   },
   Larvas: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 800,
      def: 1000,
      text: "Beast – A fast-moving, bird-like creature that strangles opposing monsters with its long, thin arms."
   },
   "Launcher Spider": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 7,
      atk: 2200,
      def: 2500,
      text: "Machine – A mechanical spider with rocket launchers capable of random fire."
   },
   "Left Arm of the Forbidden One": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 200,
      def: 300,
      text: "Spellcaster – A forbidden left arm sealed by magic. Whosoever breaks this seal will know infinite power."
   },
   "Left Leg of the Forbidden One": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 200,
      def: 300,
      text: "Spellcaster – A forbidden left leg sealed by magic. Whosoever breaks this seal will know infinite power."
   },
   Leogun: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1750,
      def: 1550,
      text: "Beast – Huge monster with a lion's mane similar to the King of Beasts."
   },
   "Lesser Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1000,
      text: "Dragon – A minor dragon incapable of breathing fire."
   },
   "Lightning Conger": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 350,
      def: 750,
      text: "Thunder – This massive eel generates huge charges of electricity and unleashes them as thunderbolts."
   },
   "Liquid Beast": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 950,
      def: 800,
      text: "Aqua – A liquid life form that thrives on water."
   },
   "Lizard Soldier": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1100,
      def: 800,
      text: "Dragon – A beast soldier derived from dragons, it is small for a Dragon-Type. Moving very quickly, this monster is an excellent strategist."
   },
   "Lord of the Lamp": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Fiend – This spirit emerges from the mystic lamp and obeys the wishes of its summoner."
   },
   "Luster Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1900,
      def: 1600,
      text: "Dragon – A very beautiful dragon covered with sapphire. It does not like fights, but has incredibly high attack power."
   },
   "Luster Dragon #2": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 6,
      atk: 2400,
      def: 1400,
      text: "Dragon – This dragon feeds on emerald. Enchanted by this monster even when attacked, few people live to tell of its beauty."
   },
   "M-Warrior #1": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1000,
      def: 500,
      text: "Warrior – Specializing in combination attacks, this warrior uses magnetism to block an enemy's escape."
   },
   "M-Warrior #2": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 500,
      def: 1000,
      text: "Warrior – Specializing in combination attacks, this warrior is equipped with a tough, magnetically coated armor."
   },
   "Mad Dog of Darkness": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1900,
      def: 1400,
      text: "Beast – He used to be a normal dog who played around in a park, but was corrupted by the powers of darkness."
   },
   "Magical Ghost": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1400,
      text: "Zombie – This creature casts a spell of terror and confusion just before attacking its enemies."
   },
   "Maiden of the Moonlight": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1300,
      text: "Spellcaster – A sorcerer blessed by lunar light with powers far beyond mortal comprehension."
   },
   "Mammoth Graveyard": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 800,
      text: "Dinosaur – A mammoth that protects the graves of its pack and is absolutely merciless when facing grave-robbers."
   },
   "Man Eater": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 800,
      def: 600,
      text: "Plant – Man-eating plant with poison feelers for attacking enemies."
   },
   "Man-Eating Treasure Chest": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Fiend – A monster disguised as a treasure chest that is known to attack the unwary adventurer."
   },
   "Masaki the Legendary Swordsman": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1100,
      def: 1100,
      text: "Warrior – Legendary swordmaster Masaki is a veteran of over 100 battles."
   },
   "Master & Expert": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1000,
      text: "Beast – A deadly duo consisting of a beast master and its loyal servant."
   },
   "Master Kyonshee": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1750,
      def: 1000,
      text: "Zombie – A wandering Kyonshee searching for a strong rival to defeat. They say he was known as the master of all martial arts."
   },
   "Mechanical Snail": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 800,
      def: 1000,
      text: "Machine – A cyborg snail that still travels at a slow place."
   },
   Mechanicalchaser: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1850,
      def: 800,
      text: "Machine – A hunter that relentlessly pursues its target by order of the Machine King."
   },
   "Meda Bat": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 800,
      def: 400,
      text: 'Fiend – An eyeball fiend created by a servant of the wicked, it uses "Dark Bombs" to blow away its enemies.'
   },
   "Mega Thunderball": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 2,
      atk: 750,
      def: 600,
      text: "Thunder – Rolls along the ground releasing bolts of electricity to attack its enemies."
   },
   "Megasonic Eye": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1500,
      def: 1800,
      text: "Machine – Made of mysterious metal, this monster is a doomsday machine from the edge of the universe."
   },
   "Melchid the Four-Face Beast": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: "Fiend – This monster has four different masks for four different attacks."
   },
   "Metal Armored Bug": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 8,
      atk: 2800,
      def: 1500,
      text: "Insect – A gigantic insect-like creature covered by thick armor. Everything in his path is destroyed."
   },
   "Metal Fish": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 1600,
      def: 1900,
      text: "Machine – A metal fish with a razor-sharp caudal fin."
   },
   "Mighty Guard": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 500,
      def: 1200,
      text: "Machine – A machine soldier that was developed as a guard. It is made of rust-proof metal."
   },
   Mikazukinoyaiba: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2200,
      def: 2350,
      text: "Dragon – A dragon warrior of the moon armed with a crescent sword."
   },
   "Millennium Shield": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 0,
      def: 3000,
      text: "Warrior – A Millennium item, it's rumored to block any strong attack."
   },
   Misairuzame: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 1400,
      def: 1600,
      text: "Fish – A missile-launching fish protected by deadly spikes."
   },
   "Mokey Mokey": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 1,
      atk: 300,
      def: 100,
      text: "Fairy – An outcast angel. Nobody knows what he is thinking at all. Sometimes he gets mad and that is dreadful."
   },
   "Molten Behemoth": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 5,
      atk: 1000,
      def: 2200,
      text: "Pyro – A giant born from magma, it attacks with a magma punch."
   },
   "Monster Egg": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 600,
      def: 900,
      text: "Warrior – A warrior hidden within an egg that attacks enemies by flinging eggshells."
   },
   Morinphen: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1550,
      def: 1300,
      text: "Fiend – A strange fiend with long arms and razor sharp talons."
   },
   "Mr. Volcano": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 5,
      atk: 2100,
      def: 1300,
      text: "Pyro – This seemingly mild-mannered creature has an extremely volatile temper."
   },
   "Mystic Clown": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1000,
      text: "Fiend – Nothing can stop the mad attack of this powerful creature."
   },
   "Mystic Horseman": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1550,
      text: "Beast – Half man and half horse, this monster is known for its extreme speed."
   },
   "Mystical Elf": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 800,
      def: 2000,
      text: "Spellcaster – A delicate elf that lacks offense, but has a terrific defense backed by mystical power."
   },
   "Mystical Sheep #2": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 800,
      def: 1000,
      text: "Beast – A monstrous sheep with a long tail for hypnotizing enemies."
   },
   "Mystical Shine Ball": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 500,
      def: 500,
      text: "Fairy – A soul of light covered by mystical shine. When you see its beautiful shape, your dream will come true."
   },
   "Nekogal #1": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1100,
      def: 900,
      text: "Beast – A pussy-fairy. Contrary to her lovely beauty, she claws on her enemies."
   },
   Nemuriko: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 800,
      def: 700,
      text: "Spellcaster – A child-like creature that controls a sleep fiend to beckon enemies into eternal slumber."
   },
   "Neo Aqua Madoor": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 6,
      atk: 1200,
      def: 3000,
      text: "Spellcaster – The true nature of this wizard, who rules all water. It defends itself with a vast, impenetrable wall of ice."
   },
   "Neo Bug": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1700,
      text: "Insect – A huge bug-like monster said to come from another planet. It gathers in swarms."
   },
   "Neo the Magic Swordsman": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1000,
      text: "Spellcaster – A dimensional drifter who not only practices sorcery, but is also a sword and martial arts master."
   },
   "Nin-Ken Dog": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1000,
      text: "Beast-Warrior – A Ninja dog who has mastered extreme Ninjutsu. Through hard training, it learned the technique to metamorphose into a human being."
   },
   Niwatori: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 900,
      def: 800,
      text: "Winged Beast – Swallows enemies whole and uses their essence as energy."
   },
   Octoberser: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 1600,
      def: 1400,
      text: "Aqua – With the head of a fish and the legs of an octopus, this strange creature attacks enemies by flinging spears."
   },
   Ocubeam: {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 5,
      atk: 1550,
      def: 1650,
      text: "Fairy – Frightening in appearance, this creature uses its large eyes and ears to keep track of any movement."
   },
   "Ogre of the Black Shadow": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1400,
      text: "Beast-Warrior – An ogre possessed by the powers of the dark. Few can withstand its rapid charge."
   },
   "Ojama Black": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 0,
      def: 1000,
      text: "Beast – He's one of the Ojama Trio. It's said that he butts in by any means necessary. It's also said that when the three are together, something happens."
   },
   "Ojama Green": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 0,
      def: 1000,
      text: "Beast – He's one of the Ojama Trio. It's said that he butts in by any means necessary. It's also said that when the three are together, something happens."
   },
   "Ojama Yellow": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 0,
      def: 1000,
      text: "Beast – He's one of the Ojama Trio. It's said that he butts in by any means necessary. It's also said that when the three are together, something happens."
   },
   "One-Eyed Shield Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 700,
      def: 1300,
      text: "Dragon – This dragon wears a shield not only for its own protection, but also for ramming its enemies."
   },
   "Oni Tank T-34": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1700,
      text: "Machine – An armored tank possessed by a fiend that will pursue enemies until they're crushed."
   },
   "Oppressed People": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 1,
      atk: 400,
      def: 2000,
      text: "Aqua – They are oppressed, but believe they will have their freedom someday."
   },
   Opticlops: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1700,
      text: 'Fiend – A one-eyed giant that serves the "Dark Ruler Ha Des", it skewers its enemies with its sharp horn, shattering them to pieces.'
   },
   "Oscillo Hero": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1250,
      def: 700,
      text: "Warrior – A strange warrior from another dimension."
   },
   Overdrive: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1500,
      text: "Machine – An all-terrain armored vehicle armed with a heavy-duty machine gun."
   },
   "Pale Beast": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: "Beast – With skin tinged bluish-white, this strange creature is a fearsome sight to behold."
   },
   "Parrot Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 5,
      atk: 2000,
      def: 1300,
      text: "Dragon – A dragon from the cartoons that's more dangerous than it appears to be."
   },
   Peacock: {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 5,
      atk: 1700,
      def: 1500,
      text: "Winged Beast – A large peacock that launches its feathers in a lethal attack."
   },
   "People Running About": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 2,
      atk: 600,
      def: 600,
      text: "Pyro – Although they always suffer in silence, they swear an oath to inevitably revolt."
   },
   "Petit Angel": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 600,
      def: 900,
      text: "Fairy – A quick-moving and tiny fairy that's very difficult to hit."
   },
   "Petit Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 2,
      atk: 600,
      def: 700,
      text: "Dragon – A very small dragon known for its vicious attacks."
   },
   "Petit Moth": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 300,
      def: 200,
      text: "Insect – This small but deadly creature is better off avoided."
   },
   "Pharaoh's Servant": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 900,
      def: 0,
      text: "Zombie – An apparition of those said to formerly serve the Pharaoh. It has tremendous loyalty that does not waiver."
   },
   "Pharaonic Protector": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 2,
      atk: 900,
      def: 0,
      text: "Zombie – The mummy of a soldier that has been guarding the royal family for thousands of years. Even now, its spirit does not allow anybody to trespass."
   },
   "Prevent Rat": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 500,
      def: 2000,
      text: "Beast – This creature is shielded with a tough hide of hair and is excellent at defending itself."
   },
   "Protector of the Throne": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 800,
      def: 1500,
      text: "Warrior – While the king is away, this queen protects his throne with a mighty defense."
   },
   "Psychic Kappa": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 400,
      def: 1000,
      text: "Aqua – An amphibian with a myriad of powers to shield it from enemy attacks."
   },
   "Queen Bird": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 5,
      atk: 1200,
      def: 2000,
      text: "Winged Beast – This monster attacks using its huge beak."
   },
   "Queen of Autumn Leaves": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1500,
      text: "Plant – Queen of the Emerald Forest and wife of the Spirit King, she lives surrounded by vivid red leaves."
   },
   "Ray & Temperature": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 1000,
      def: 1000,
      text: "Fairy – The Sun and the North Wind join hands to deliver a devastating combination of heat and gale-force winds."
   },
   "Red Archery Girl": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1500,
      text: "Aqua – A mermaid archer that hides in a protective shell, waiting for the right moment to strike."
   },
   "Red-Eyes Black Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2400,
      def: 2000,
      text: "Dragon – A ferocious dragon with a deadly attack."
   },
   "Right Arm of the Forbidden One": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 200,
      def: 300,
      text: "Spellcaster – A forbidden right arm sealed by magic. Whosoever breaks this seal will know infinite power."
   },
   "Right Leg of the Forbidden One": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 200,
      def: 300,
      text: "Spellcaster – A forbidden right leg sealed by magic. Whosoever breaks this seal will know infinite power."
   },
   Robolady: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 450,
      def: 900,
      text: 'Machine – A warrior fully covered with metal. It upgrades by fusing with "Roboyarou".'
   },
   "Robotic Knight": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1800,
      text: "Machine – The Commander of Machine-Types, he serves the Machine King. He is famous for the way he controls his troops."
   },
   Roboyarou: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 900,
      def: 450,
      text: 'Machine – A warrior fully covered with metal. It upgrades by fusing with "Robolady".'
   },
   "Rock Ogre Grotto #1": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 800,
      def: 1200,
      text: "Rock – Protected by a solid body of rock, this monster throws a bone-shattering punch."
   },
   "Rogue Doll": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1000,
      text: "Spellcaster – A deadly doll gifted with mystical power, it is particularly powerful when attacking against dark forces."
   },
   "Root Water": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 900,
      def: 800,
      text: "Fish – An amphibian capable of calling up a massive tidal wave from the dark seas to wipe out enemy monsters."
   },
   "Rude Kaiser": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1600,
      text: "Beast-Warrior – With an axe in each hand, this monster delivers heavy damage."
   },
   "Ryu-Kishin": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1000,
      def: 500,
      text: "Fiend – A very elusive creature that looks like a harmless statue until it attacks."
   },
   "Ryu-Kishin Powered": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1200,
      text: "Fiend – A gargoyle enhanced by the powers of darkness. Very sharp talons make it a worthy opponent."
   },
   "Ryu-Ran": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 7,
      atk: 2200,
      def: 2600,
      text: "Dragon – A vicious little dragon sheltered in an egg that looks deceptively harmless."
   },
   "Saggi the Dark Clown": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 600,
      def: 1500,
      text: "Spellcaster – This clown appears from nowhere and executes very strange moves to avoid enemy attacks."
   },
   "Sand Stone": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1300,
      def: 1600,
      text: "Rock – Appears from underground and attacks with long, snake-like tentacles."
   },
   "Science Soldier": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 800,
      def: 800,
      text: "Warrior – Soldiers equipped with state-of-the-art weaponry to face unknown creatures."
   },
   "Sea Serpent Warrior of Darkness": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1500,
      text: "Sea Serpent – A warrior who defends the world of the Sea of Darkness. He prides himself on his fighting prowess both on the ground and, of course, in the water."
   },
   "Sealmaster Meisei": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1100,
      def: 900,
      text: "Spellcaster – One of the few people who has a good command of Talismans. His history is a mystery."
   },
   Seiyaryu: {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2500,
      def: 2300,
      text: "Dragon – A mystical dragon that burns away the unworthy with its mystic flames."
   },
   "Serpent Night Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2350,
      def: 2400,
      text: "Dragon – A dragon created from the soul of a wicked knight."
   },
   Shapesnatch: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1200,
      def: 1700,
      text: "Machine – A bow tie with horrible power, it attacks an opponent by controlling others."
   },
   "Shining Abyss": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1800,
      text: "Fairy – This monster employs the powers of both Light and Darkness."
   },
   "Shining Friendship": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1100,
      text: "Fairy – The peacemaker among monsters."
   },
   "Silver Fang": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 800,
      text: "Beast – A snow wolf that's beautiful to the eye, but absolutely vicious in battle."
   },
   "Skull Dog Marron": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1350,
      def: 2000,
      text: "Beast – A lost dog that wandered off 1000 years ago. He's still waiting for his master to come for him."
   },
   "Skull Mariner": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1600,
      def: 900,
      text: "Warrior – A pirate ship that appears out of the mist and sinks any seagoing vessels."
   },
   "Skull Red Bird": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1550,
      def: 1200,
      text: "Winged Beast – This monster swoops down and attacks with a rain of knives stored in its wings."
   },
   "Skull Servant": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 300,
      def: 200,
      text: "Zombie – A skeletal ghost that isn't strong, but can mean trouble in large numbers."
   },
   "Sky Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 6,
      atk: 1900,
      def: 1800,
      text: "Dragon – A flying dragon with four wings housing some very dangerous blades."
   },
   "Sky Scout": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1800,
      def: 600,
      text: "Winged Beast – With eyes like a hawk and a flying speed exceeding Mach 5, this monster is a master of the sky."
   },
   "Sleeping Lion": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 700,
      def: 1700,
      text: "Beast – A ferocious animal that sleeps all day. Sometimes it's better to let Sleeping Lions lie."
   },
   "Slime Toad": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 700,
      def: 500,
      text: "Aqua – A slime with the head of a frog, it attacks by croaking terribly."
   },
   "Slot Machine": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2000,
      def: 2300,
      text: "Machine – The machine's ability is said to vary according to its slot results."
   },
   "Sonic Duck": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1700,
      def: 700,
      text: "Winged Beast – A duck which can walk at a sonic speed. Sometimes, he cannot deal with his incredible pace and loses control."
   },
   "Sonic Maid": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: "Warrior – A maiden that uses sound to her advantage, she wields a scythe that's shaped like a musical note."
   },
   "Sorcerer of the Doomed": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1450,
      def: 1200,
      text: "Spellcaster – A slave of the dark arts, this sorcerer is a master of death-dealing spells."
   },
   "Soul Tiger": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 0,
      def: 2100,
      text: "Beast – The soul of a tiger that is said to devour human souls. He is a famous soul that you wouldn't want to run into in a dark alley."
   },
   Souleater: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 0,
      text: "Fish – A living wonder of mystery."
   },
   "Souls of the Forgotten": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 2,
      atk: 900,
      def: 200,
      text: "Fiend – A wicked spirit created by the hateful souls of those who fell in battle. It grows by assimilating the souls of its enemies."
   },
   "Space Mambo": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1000,
      text: "Fish – A Space Mambo floating in the vast universe. This living relic was found in the ruins of a super civilization on Alphard 4."
   },
   "Spherous Lady": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 400,
      def: 1400,
      text: "Rock – Many have been deceived by the beauty of this vampire."
   },
   "Spike Seadra": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 1600,
      def: 1300,
      text: "Sea Serpent – Using the spikes sprouting from its body, this creature stabs its opponents and floods them with electricity."
   },
   Spikebot: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1800,
      def: 1700,
      text: "Machine – A mechanical soldier created by a wicked sorcerer, it attacks with the two steel balls attached to its arms."
   },
   "Spirit of the Books": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Winged Beast – This wise spirit dwells in books, using its accumulated knowledge to defeat enemies."
   },
   "Spirit of the Harp": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 800,
      def: 2000,
      text: "Fairy – A spirit that soothes the soul with the music of its heavenly harp."
   },
   "Steel Ogre Grotto #1": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1400,
      def: 1800,
      text: "Machine – A steel idol worshiped in the Land of Machines."
   },
   "Steel Ogre Grotto #2": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 1900,
      def: 2200,
      text: "Machine – A mechanized iron doll with tremedous strength."
   },
   "Stone Ogre Grotto": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1600,
      def: 1500,
      text: "Rock – A behemoth shaped by giant boulders."
   },
   "Stuffed Animal": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: "Warrior – It may look like a harmless stuffed animal, but its zipper mouth deals a deadly bite."
   },
   "Succubus Knight": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 1650,
      def: 1300,
      text: "Warrior – A warrior wizard adept in casting bone-chilling spells."
   },
   "Summoned Skull": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2500,
      def: 1200,
      text: "Fiend – A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force."
   },
   "Swordsman of Landstar": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 500,
      def: 1200,
      text: "Warrior – An amateur with a sword, this fairy warrior relies on its mysterious powers."
   },
   Swordstalker: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2000,
      def: 1600,
      text: "Warrior – A monster formed by the vengeful souls of those who passed away in battle."
   },
   Takriminos: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1200,
      text: "Sea Serpent – A member of a race of sea serpents that freely travels through the sea."
   },
   Takuhee: {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1450,
      def: 1000,
      text: "Winged Beast – This bird is known far and wide as a harbinger of doom."
   },
   "Terra the Terrible": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1300,
      text: "Fiend – Known as a swamp dweller, this creature is a minion of the dark forces."
   },
   "Terrorking Salmon": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 5,
      atk: 2400,
      def: 1000,
      text: "Fish – A feared salmon, master of the Sea of Darkness. Its roe is the best delicacy in the World of Darkness."
   },
   "The 13th Grave": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1200,
      def: 900,
      text: "Zombie – A zombie that suddenly appeared from plot #13 – an empty grave."
   },
   "The All-Seeing White Tiger": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1300,
      def: 500,
      text: "Beast – A proud ruler of the jungle that some fear and others respect."
   },
   "The Dragon Dwelling in the Cave": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1300,
      def: 2000,
      text: "Dragon – A huge dragon dwelling in a cave. It is horrible when it gets angry, although it is usually quiet. It is said to preserve certain treasures."
   },
   "The Earl of Demise": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 5,
      atk: 2000,
      def: 700,
      text: "Fiend – This gentlemanly creature is extremely wicked, feared by man and fiend alike."
   },
   "The Furious Sea King": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 800,
      def: 700,
      text: "Aqua – Grand King of the Seven Seas, he's able to summon massive tidal waves to drown the enemy."
   },
   "The Gross Ghost of Fled Dreams": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1800,
      text: "Fiend – This monster feeds on the dreams of an unwary sleeper, dragging the victim into eternal slumber."
   },
   "The Illusory Gentleman": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1500,
      def: 1600,
      text: "Spellcaster – Wearing odd fashions, this gentleman is very fickle. He sometimes saves people and at other times commits crimes."
   },
   "The Judgement Hand": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1400,
      def: 700,
      text: "Warrior – An all-powerful hand that delivers ruthless attacks."
   },
   "The Portrait's Secret": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1500,
      text: "Fiend – A portrait cursed by the artist, it is said to bring ill fortune to anyone who owns it."
   },
   "The Statue of Easter Island": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1100,
      def: 1400,
      text: "Rock – A stone monument from Easter Island that launches laser blasts from its rock-hewn lips."
   },
   "Thousand-Eyes Idol": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: "Spellcaster – A wicked entity that controls the hearts of men, its thousand eyes are able to see and expand the negative influences in an individual's soul."
   },
   "Three-Headed Geedo": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1400,
      text: "Fiend – A three-headed nocturnal monster that is absolutely ruthless when fighting."
   },
   "Three-Legged Zombies": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1100,
      def: 800,
      text: "Zombie – A pair of friendly skeletons, lean and fat, that travel with extreme difficulty."
   },
   "Tiger Axe": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1100,
      text: "Beast-Warrior – A fast and powerful axe-wielding beast-warrior."
   },
   Tongyo: {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1350,
      def: 800,
      text: "Fish – This monster captures other fish with its long tongue and sucks the energy out of them."
   },
   "Toon Alligator": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 800,
      def: 1600,
      text: "Reptile – An alligator monster straight from the cartoons."
   },
   Trent: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 5,
      atk: 1500,
      def: 1800,
      text: "Plant – A guardian of the woods, this massive tree is believed to be immortal."
   },
   "Tri-Horned Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 2850,
      def: 2350,
      text: "Dragon – An unworthy dragon with three sharp horns sprouting from its head."
   },
   "Trial of Nightmare": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1300,
      def: 900,
      text: "Fiend – This fiend passes judgment on enemies that are locked in coffins."
   },
   "Tripwire Beast": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1300,
      text: "Thunder – This creature attacks with electromagnetic waves."
   },
   "Turtle Bird": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 6,
      atk: 1900,
      def: 1700,
      text: "Aqua – An unusual turtle that not only swims at tremendous speeds, but can also sail across the skies."
   },
   "Turtle Tiger": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1500,
      text: "Aqua – A tiger encased in a protective shell that attacks with razor-sharp fangs."
   },
   "Turu-Purun": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 450,
      def: 500,
      text: "Aqua – A strange, one-eyed monster that can fell an enemy with a single stab of its spear."
   },
   "Twin Long Rods #2": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 3,
      atk: 850,
      def: 700,
      text: "Aqua – An amphibious creature with two whip-like tails."
   },
   "Twin-Headed Fire Dragon": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 6,
      atk: 2200,
      def: 1700,
      text: "Pyro – Two dragons fused as one from the effects of the Big Bang."
   },
   "Two-Headed King Rex": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1200,
      text: "Dinosaur – A powerful monster whose two heads attack as one."
   },
   "Two-Mouth Darkruler": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 900,
      def: 700,
      text: "Dragon – A dinosaur with two deadly jaws, it stores electricity in its horn and releases high voltage bolts from the mouth on its back."
   },
   Tyhone: {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1400,
      text: "Winged Beast – Capable of firing cannonballs from its mouth for long-range attacks, this creature is particularly effective in mountain battles."
   },
   "Tyhone #2": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 6,
      atk: 1700,
      def: 1900,
      text: "Dragon – A crimson dragon that spits fireballs to create a blazing sea of fire."
   },
   "United Resistance": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 3,
      atk: 1000,
      def: 400,
      text: "Thunder – The people that gather to swear to fight their oppressors. A revolution is coming."
   },
   "Unknown Warrior of Fiend": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 3,
      atk: 1000,
      def: 500,
      text: "Warrior – A deadly duo consisting of a beast master and its loyal servant."
   },
   Uraby: {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1500,
      def: 800,
      text: "Dinosaur – Fast on its feet, this dinosaur rips enemies to shreds with its sharp claws."
   },
   "Ushi Oni": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2150,
      def: 1950,
      text: "Fiend – A bull fiend restored by the dark arts, this monster appears out of a jar."
   },
   "Warrior Dai Grepher": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1700,
      def: 1600,
      text: "Warrior – The warrior who can manipulate dragons. Nobody knows his mysterious past."
   },
   "Warrior of Zera": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1600,
      def: 1600,
      text: "Warrior – A wandering warrior who seeks the sanctuary where he can gain the power of the Archlords. To escape the temptation of evil fiends, he fights solo day by day."
   },
   "Water Magician": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: "Aqua – This monster swamps an opponent with an almost endless supply of water."
   },
   "Water Omotics": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Aqua – Transforms the water overflowing from a jar into attacking dragons."
   },
   Wattkid: {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 1000,
      def: 500,
      text: "Thunder – A creature that electrocutes opponents with bolts of lightning."
   },
   "Whiptail Crow": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1650,
      def: 1600,
      text: "Fiend – Attacks from the sky with a whip-like tail."
   },
   "Winged Dragon, Guardian of the Fortress #1": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1200,
      text: "Dragon – A dragon commonly found guarding mountain fortresses. Its signature attack is a sweeping dive from out of the blue."
   },
   "Winged Dragon, Guardian of the Fortress #2": {
      cardType: NORMAL_MONSTER,
      attribute: WIND,
      levelOrSubtype: 4,
      atk: 1200,
      def: 1000,
      text: "Winged Beast – This creature's wings are capable of generating tornadoes."
   },
   Wingweaver: {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2750,
      def: 2400,
      text: "Fairy – A six-winged fairy who prays for peace and hope."
   },
   "Witty Phantom": {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1300,
      text: "Fiend – Dressed in a night-black tuxedo, this creature presides over death."
   },
   "Wolf Axwielder": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1650,
      def: 1000,
      text: "Beast-Warrior – Once it has started battle, this monster attacks fiercely and cannot stop."
   },
   "Woodborg Inpachi": {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 5,
      atk: 500,
      def: 2500,
      text: "Machine – The new form of the enigmatic Inpachi, remodeled by cutting-edge Dark World technology. Maneuverability has been sacrificed for strong armor, which was considered more important."
   },
   "Worm Drake": {
      cardType: NORMAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 1400,
      def: 1500,
      text: "Reptile – Once this monster wraps itself around a victim, there is no escape."
   },
   "Wow Warrior": {
      cardType: NORMAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 4,
      atk: 1250,
      def: 900,
      text: "Fish – A fish with arms?"
   },
   "X-Head Cannon": {
      cardType: NORMAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1800,
      def: 1500,
      text: "Machine – A monster with a mighty cannon barrel, it is able to integrate its attacks. It attacks in many ways by combining and separating with other monsters."
   },
   Yamadron: {
      cardType: NORMAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 5,
      atk: 1600,
      def: 1800,
      text: "Dragon – This monster has three fire-breathing heads and can form a sea of blazing flames."
   },
   Yaranzo: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1300,
      def: 1500,
      text: "Zombie – A treasure box containing a monster that attacks any unwary bandit."
   },
   Zoa: {
      cardType: NORMAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 7,
      atk: 2600,
      def: 1900,
      text: 'Fiend – A monster whose full potential can be achieved when outfitted with "Metalmorph"'
   }
};

export default normalMonsters;
