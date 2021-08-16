import { SPELL } from "utils/constants.js";

const fieldSpells = {
   "Chorus of Sanctuary": {
      id: "81380218",
      cardType: SPELL,
      levelOrSubtype: "Field",
      text: "<effect=Continuous-like>Defense Position monsters gain 500 DEF.</effect>"
   },
   Pandemonium: {
      id: "94585852",
      cardType: SPELL,
      levelOrSubtype: "Field",
      text: '<effect=Continuous-like>Neither player has to pay Life Points during the Standby Phase for "Archfiend" monsters.</effect> <effect=Trigger-like>If an "Archfiend" monster(s) is destroyed and sent to the Graveyard (except by battle): that player can add 1 "Archfiend" monster from their Deck to the hand with a lower Level than the destroyed monster\'s.</effect>'
   },
   Necrovalley: {
      id: "47355498",
      cardType: SPELL,
      levelOrSubtype: "Field",
      text: '<effect=Continuous-like>All "Gravekeeper\'s" monsters gain 500 ATK and DEF.</effect> <effect=Continuous-like>Cards in the Graveyard cannot be banished.</effect> <effect=Continuous-like>Negate any card effect that would move a card in the Graveyard, other than itself, to a different place.</effect> <effect=Continuous-like>Negate any card effect that changes Types or Attributes in the Graveyard.</effect>'
   }
};

export default fieldSpells;
