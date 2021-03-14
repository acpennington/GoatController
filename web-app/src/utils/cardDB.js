const fusions = {
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

const cards = {
   "Shining Angel": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 4,
      atk: 1400,
      def: 800,
      text:
         "Fairy/Effect – When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1 LIGHT monster with 1500 or less ATK from your Deck, in face-up Attack Position."
   },
   "Call of the Haunted": {
      cardType: "Trap",
      levelOrSubtype: "Continuous",
      text:
         "Activate this card by targeting 1 monster in your GY; Special Summon that target in Attack Position. When this card leaves the field, destroy that monster. When that monster is destroyed, destroy this card."
   },
   "Black Luster Soldier - Envoy of the Beginning": {
      cardType: "effectMonster",
      attribute: "Light",
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text:
         "Warrior/Effect – Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 LIGHT and 1 DARK monster from your GY. Once per turn, you can activate 1 of these effects. ● Target 1 monster on the field; banish it. This card cannot attack the turn this effect is activated. ● If this attacking card destroys an opponent's monster by battle: It can make a second attack in a row."
   },
   Necrovalley: {
      cardType: "Spell",
      levelOrSubtype: "Field",
      text:
         'All "Gravekeeper\'s" monsters gain 500 ATK and DEF. Cards in the Graveyard cannot be banished. Negate any card effect that would move a card in the Graveyard to a different place. Negate any card effect that changes Types or Attributes in the Graveyard.'
   },
   ...fusions
};

export { cards, fusions };
