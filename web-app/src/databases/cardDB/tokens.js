import { TOKEN_MONSTER, LIGHT, EARTH } from "utils/constants.js";

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
   }
};

export default tokens;
