const effectMonsters = {
   "Cure Mermaid": {
      cardType: "effectMonster",
      attribute: "Water",
      levelOrSubtype: 4,
      atk: 1500,
      def: 800,
      text: "Fish/Effect - <effect=Trigger>As long as this card remains face-up on your side of the field, increase your Life Points by 800 points during each of your Standby Phases.</effect>",
      prepopLP: { hero: 800 }
   },
   "Hysteric Fairy": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1800,
      def: 500,
      text: "Fairy/Effect - <effect=Ignition>Tribute 2 monsters on your side of the field to increase your Life Points by 1000 points.</effect>",
      prepopLP: { hero: 1000 }
   },
   "Nuvia the Wicked": {
      cardType: "effectMonster",
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 2000,
      def: 800,
      text: "Fiend/Effect - <effect=Trigger>If this monster is Normal Summoned, destroy this card.</effect> <effect=Continuous>If your opponent controls any monster, decrease the ATK of this card by 200 points for each monster on your opponent's side of the field.</effect>"
   },
   "The Forgiving Maiden": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 850,
      def: 2000,
      text: "Fairy/Effect - <effect=Ignition>Offer this face-up card as a Tribute to return 1 of your monsters destroyed in battle during this turn to your hand.</effect>"
   },
   "Shining Angel": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1400,
      def: 800,
      text: "Fairy/Effect – <effect=Trigger>When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 LIGHT monster with 1500 or less ATK from your Deck, in face-up Attack Position.</effect>",
      script: "Search_Deck:atk<1500,attribute=Light;autoClose"
   },
   "Black Luster Soldier - Envoy of the Beginning": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text: "Warrior/Effect – Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your Graveyard. Once per turn, you can activate 1 of these effects. ● <effect=Ignition>Target 1 monster on the field; banish it. This card cannot attack the turn this effect is activated.</effect> ● <effect=Trigger>If this attacking card destroys an opponent's monster by battle: It can make a second attack in a row.</effect>",
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
      text: "Spellcaster/Flip/Effect – <effect=Trigger>FLIP: Target 1 Spell in your Graveyard; add that target to your hand.</effect>"
   },
   "Magical Merchant": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 1,
      atk: 200,
      def: 700,
      text: "Insect/Flip/Effect – <effect=Trigger>FLIP: Excavate cards from the top of your Deck until you excavate a Spell/Trap, then add that card to your hand, also send the remaining cards to the Graveyard.</effect>",
      script: "Mill_Until:spellTrap"
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
      text: "Fiend/Effect – <effect=Trigger>If this card is sent from the field to the Graveyard: Add 1 monster with 1500 or less ATK from your Deck to your hand.</effect>",
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
      text: "Spellcaster/Effect – <effect=Trigger>When this card inflicts battle damage to your opponent: You can target up to 2 monsters in their Graveyard; banish those targets.</effect> <effect=Continuous>Your opponent cannot banish cards from either Graveyard.</effect>"
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
      text: "Spellcaster/Effect – Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your Graveyard. <effect=Ignition>Once per turn: You can target 1 face-up monster on the field; banish that target. This card cannot attack the turn you activate this effect.</effect>"
   },
   "Dekoichi the Battlechanted Locomotive": {
      cardType: "effectMonster",
      attribute: "Dark",
      levelOrSubtype: 4,
      atk: 1400,
      def: 1000,
      text: 'Machine/Flip/Effect – <effect=Trigger>FLIP: Draw 1 card, then draw 1 additional card for each face-up "Bokoichi the Freightening Car" you control.</effect>'
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

export default effectMonsters;
