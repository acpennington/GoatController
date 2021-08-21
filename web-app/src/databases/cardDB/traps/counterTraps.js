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
      text: "When a Spell Card is activated: Discard 1 card; negate the activation, and if you do, destroy it.",
      art: 2
   },
   "Seven Tools of the Bandit": {
      id: "03819470",
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "When a Trap Card is activated: Pay 1000 Life Points; negate the activation, and if you do, destroy it.",
      prepopLP: { hero: -1000 }
   },
   "Divine Wrath": {
      id: "49010598",
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "When a monster effect is activated: Discard 1 card; negate the activation, and if you do, destroy that monster."
   },
   "Spell Shield Type-8": {
      id: "38275183",
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "Activate 1 of these effects;● When a Spell is activated that targets exactly 1 monster on the field: Negate the activation, and if you do, destroy it.● When a Spell is activated: Send 1 Spell from your hand to the Graveyard; negate the activation, and if you do, destroy it."
   },
   "Barrel Behind the Door": {
      id: "78783370",
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "When a card or effect is activated that would inflict damage to your Life Points: Your opponent takes the damage instead.",
      art: 2
   },
   "Cursed Seal of the Forbidden Spell": {
      id: "58851034",
      cardType: TRAP,
      levelOrSubtype: "Counter",
      text: "When a Spell is activated: Discard 1 Spell; negate the activation, and if you do, destroy it, and if you do that, your opponent cannot activate Spells with that name for the rest of this Duel."
   }
};

export default counterTraps;
