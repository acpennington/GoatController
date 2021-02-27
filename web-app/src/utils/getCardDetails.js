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
   }
};

const emptyCard = {
   cardType: null,
   attribute: null,
   levelOrSubtype: null,
   atk: null,
   def: null,
   text: null
};

export default function getCardDetails(name) {
   return name && cards[name] ? cards[name] : emptyCard;
}
