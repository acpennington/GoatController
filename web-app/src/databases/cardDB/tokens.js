import { TOKEN_MONSTER, LIGHT, EARTH, WATER, DARK } from "utils/constants.js";

const tokens = {
   "Sheep Token": {
      cardType: TOKEN_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: "Beast"
   },
   "Ojama Token": {
      cardType: TOKEN_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 2,
      atk: 0,
      def: 1000,
      text: "Beast",
      prepopLP: { hero: -300 }
   },
   "Poisonous Snake Token": {
      cardType: TOKEN_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 3,
      atk: 1200,
      def: 1200,
      text: "Reptile",
      prepopLP: { villain: -500 }
   },
   "Wicked Plant Token": {
      cardType: TOKEN_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 800,
      def: 800,
      text: "Plant"
   },
   "Insect Monster Token": {
      cardType: TOKEN_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 100,
      def: 100,
      text: "Insect"
   },
   "Lekunga Token": {
      cardType: TOKEN_MONSTER,
      attribute: WATER,
      levelOrSubtype: 2,
      atk: 700,
      def: 700,
      text: "Plant"
   },
   "Wicked Token": {
      cardType: TOKEN_MONSTER,
      attribute: DARK,
      levelOrSubtype: 4,
      atk: 1000,
      def: 1000,
      text: "Fiend"
   },
   "Army Ant Token": {
      cardType: TOKEN_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 4,
      atk: 500,
      def: 1200,
      text: "Insect"
   },
   "Lamb Token": {
      cardType: TOKEN_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: "Beast"
   },
   "Slime Token": {
      cardType: TOKEN_MONSTER,
      attribute: WATER,
      levelOrSubtype: 1,
      atk: 500,
      def: 500,
      text: "Aqua"
   },
};

export default tokens;
