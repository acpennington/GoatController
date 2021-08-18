import { SPELL } from "utils/constants.js";

const equipSpells = {
   Demotion: {
      id: "72575145",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>The equipped monster has its Level reduced by 2.</effect>"
   },
   "Dragon Treasure": {
      id: "01435851",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Dragon monster. It gains 300 ATK/DEF.</effect>"
   },
   "Follow Wind": {
      id: "98252586",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Winged-Beast monster. It gains 300 ATK/DEF.</effect>"
   },
   "Germ Infection": {
      id: "24668830",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a non-Machine monster. During its controller's Standby Phase, it loses 300 ATK.</effect>"
   },
   "Laser Cannon Armor": {
      id: "77007920",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to an Insect monster. It gains 300 ATK/DEF.</effect>"
   },
   "Machine Conversion Factory": {
      id: "25769732",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Machine monster. It gains 300 ATK/DEF.</effect>"
   },
   "Silver Bow and Arrow": {
      id: "01557499",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Fairy monster. It gains 300 ATK/DEF.</effect>"
   },
   "Ballista of Rampart Smashing": {
      id: "0242146",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>If the equipped monster attacks a face-down Defense Position monster, it gains 1500 ATK during damage calculation only.</effect>"
   },
   "Beast Fangs": {
      id: "46009906",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Beast monster. It gains 300 ATK/DEF.</effect>"
   },
   "Book of Secret Arts": {
      id: "91595718",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Spellcaster monster. It gains 300 ATK/DEF.</effect>"
   },
   "Metalsilver Armor": {
      id: "33114323",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>If you control the equipped monster, your opponent cannot activate cards or effects that target exactly 1 monster, except the equipped monster.</effect>"
   },
   "Paralyzing Potion": {
      id: "50152549",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a non-Machine monster. It cannot attack.</effect>"
   },
   "Raise Body Heat": {
      id: "51267887",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Dinosaur monster. It gains 300 ATK/DEF.</effect>"
   },
   "Raregold Armor": {
      id: "07625614",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Your opponent cannot attack monsters except the equipped monster.</effect>"
   },
   "Horn of Light": {
      id: "38552107",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>The equipped monster gains 800 DEF.</effect> <effect=Trigger-like>When this card is sent from the field to the Graveyard: You can pay 500 Life Points; return it to the top of the Deck.</effect>",
      prepopLP: { hero: -500 }
   },
   "Horn of the Unicorn": {
      id: "64047146",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>The equipped monster gains 700 ATK/DEF.</effect> <effect=Trigger-like>When this card is sent from the field to the Graveyard: Return it to the top of the Deck.</effect>"
   },
   "Vile Germs": {
      id: "39774685",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>Equip only to a Plant monster. It gains 300 ATK/DEF.</effect>"
   },
   "Premature Burial": {
      id: "70828912",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "Activate this card by paying 800 Life Points, then target 1 monster in your Graveyard; Special Summon that target in Attack Position and equip it with this card. <effect=Continuous-like>When this card is destroyed, destroy the equipped monster.</effect>",
      prepopLP: { hero: -800 },
      limit: 1
   },
   "Snatch Steal": {
      id: "45986603",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "Equip only to a monster your opponent controls. <effect=Continuous-like>Take control of the equipped monster.</effect> <effect=Trigger-like>During each of your opponent's Standby Phases: They gain 1000 Life Points.</effect>",
      prepopLP: { villain: 1000 },
      limit: 1
   },
   "United We Stand": {
      id: "56747793",
      cardType: SPELL,
      levelOrSubtype: "Equip",
      text: "<effect=Continuous-like>The equipped monster gains 800 ATK/DEF for each face-up monster you control.</effect>",
      limit: 1
   }
};

export default equipSpells;
