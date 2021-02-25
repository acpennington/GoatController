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
   return name ? cards[name] : emptyCard;
}
