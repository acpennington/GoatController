import { TRAP } from "utils/constants.js";

const counterTraps = {
   "Solemn Judgment": {
      id: "41420027",
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "When a monster(s) would be Summoned, OR a Spell/Trap Card is activated: Pay half your Life Points; negate the Summon or activation, and if you do, destroy that card.",
      prepopLP: { hero: "half" }
   },
   "Magic Jammer": {
      id: "77414722",
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "When a Spell Card is activated: Discard 1 card; negate the activation, and if you do, destroy it."
   },
   "Seven Tools of the Bandit": {
      id: "03819470",
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "When a Trap Card is activated: Pay 1000 Life Points; negate the activation, and if you do, destroy it.",
      prepopLP: { hero: -1000 }
   }
};

export default counterTraps;
