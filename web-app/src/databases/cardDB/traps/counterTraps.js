import { TRAP } from "utils/constants.js";

const counterTraps = {
   "Solemn Judgment": {
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "When a monster(s) would be Summoned, OR a Spell/Trap Card is activated: Pay half your Life Points; negate the Summon or activation, and if you do, destroy that card.",
      prepopLP: { hero: "half" }
   }
};

export default counterTraps;
