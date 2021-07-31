const spells = {
   Necrovalley: {
      cardType: "Spell",
      levelOrSubtype: "Field",
      text: '<effect=Continuous-like>All "Gravekeeper\'s" monsters gain 500 ATK and DEF.</effect> <effect=Continuous-like>Cards in the Graveyard cannot be banished.</effect> <effect=Continuous-like>Negate any card effect that would move a card in the Graveyard, other than itself, to a different place.</effect> <effect=Continuous-like>Negate any card effect that changes Types or Attributes in the Graveyard.</effect>'
   },
   "Premature Burial": {
      cardType: "Spell",
      levelOrSubtype: "Equip",
      text: "Activate this card by paying 800 Life Points, then target 1 monster in your Graveyard; Special Summon that target in Attack Position and equip it with this card. <effect=Continuous-like>When this card is destroyed, destroy the equipped monster.</effect>",
      prepopLP: { hero: -800 },
      limit: 1
   },
   "Upstart Goblin": {
      cardType: "Spell",
      levelOrSubtype: "Normal",
      text: "Draw 1 card, then your opponent gains 1000 Life Points.",
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
      text: "Pay 1000 Life Points; your opponent discards 1 random card, and if they have any other cards in their hand, discard 1 more card of their choice.",
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

export default spells;
