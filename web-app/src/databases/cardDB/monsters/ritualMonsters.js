import { HERO, RITUAL_MONSTER, SEARCH_DECK, GRAVEYARD, MONSTER, ROLL_DICE, DARK, LIGHT, WATER, FIRE, EARTH } from "utils/constants";

const ritualMonsters = {
   "Black Luster Soldier": {
      cardType: RITUAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 8,
      atk: 3000,
      def: 2500,
      text: 'Warrior/Ritual - You can Ritual Summon this card with "Black Luster Ritual".'
   },
   "Crab Turtle": {
      cardType: RITUAL_MONSTER,
      attribute: WATER,
      levelOrSubtype: 8,
      atk: 2550,
      def: 2500,
      text: 'Aqua/Ritual - You can Ritual Summon this card with "Turtle Oath".'
   },
   "Dark Master - Zorc": {
      cardType: RITUAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 2700,
      def: 1500,
      text: 'Fiend/Effect/Ritual - <effect=Summon>You can Ritual Summon this card with "Contract with the Dark Master".</effect> <effect=Ignition>Once per turn: You can roll a six-sided die, then destroy all monsters your opponent controls if you roll 1 or 2, destroy 1 monster your opponent controls if you roll 3, 4 or 5, or destroy all monsters you control if you roll 6</effect>.',
      script: {
         name: ROLL_DICE,
         displayCondition: {
            players: [HERO],
            row: MONSTER
         },
         params: 2
      }
   },
   Dokurorider: {
      cardType: RITUAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 1900,
      def: 1850,
      text: 'Zombie/Ritual - You can Ritual Summon this card with "Revival of Dokurorider".'
   },
   "Elemental Mistress Doriado": {
      cardType: RITUAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 3,
      atk: 1200,
      def: 1400,
      text: 'Spellcaster/Effect/Ritual - <effect=Summon>Must be Ritual Summoned with "Doriado\'s Blessing" and cannot be Ritual Summoned by other ways.</effect> <effect=Continuous>The Attribute of this card is also treated as WIND, WATER, FIRE, and EARTH while it is face-up on the field</effect>'
   },
   "Hungry Burger": {
      cardType: RITUAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 6,
      atk: 2000,
      def: 1850,
      text: 'Warrior/Ritual - You can Ritual Summon this card with "Hamburger Recipe".'
   },
   "Legendary Flame Lord": {
      cardType: RITUAL_MONSTER,
      attribute: FIRE,
      levelOrSubtype: 7,
      atk: 2400,
      def: 2000,
      text: 'Spellcaster/Effect/Ritual - <effect=Summon>You can Ritual Summon this card with "Incandescent Ordeal".</effect> <effect=Continuous>Each time a Spell is activated, place 1 Spell Counter on this card immediately after it resolves.</effect> <effect=Ignition>You can remove 3 Spell Counters from this card; destroy all monsters on the field, except this card.</effect>'
   },
   "Paladin of White Dragon": {
      cardType: RITUAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 4,
      atk: 1900,
      def: 1200,
      text: 'Dragon/Effect/Ritual - <effect=Summon>You can Ritual Summon this card with "White Dragon Ritual".</effect> <effect=Trigger>At the start of the Damage Step, if this card attacks a face-down Defense Position monster: Destroy that face-down monster.</effect> <effect=Ignition>You can Tribute this card; Special Summon 1 "Blue-Eyes White Dragon" from your hand or Deck, but "Blue-Eyes White Dragon" cannot attack for the rest of this turn.</effect>',
      script: {
         name: SEARCH_DECK,
         displayCondition: {
            players: [HERO],
            row: GRAVEYARD
         },
         params: {
            name: {
               value: "Blue-Eyes White Dragon"
            }
         },
         autoClose: true
      }
   },
   "Performance of Sword": {
      cardType: RITUAL_MONSTER,
      attribute: EARTH,
      levelOrSubtype: 6,
      atk: 1950,
      def: 1850,
      text: 'Warrior/Ritual - You can Ritual Summon this card with "Commencement Dance".'
   },
   Relinquished: {
      cardType: RITUAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 1,
      atk: 0,
      def: 0,
      text: "Spellcaster/Effect/Ritual - <effect=Summon>You can Ritual Summon this card with \"Black Illusion Ritual\".</effect> <effect=Ignition>Once per turn: You can target 1 monster your opponent controls; equip that target to this card (max 1). This card must be face-up on the field to activate and to resolve this effect.</effect> <effect=Continuous>This card's ATK/DEF become equal to that equipped monster's.</effect> <effect=Continuous>If this card would be destroyed by battle, destroy that equipped monster instead.</effect> <effect=Trigger>When an equipped monster is destroyed by this effect: Inflict damage to your opponent equal to the battle damage that you took.</effect>"
   },
   "Reshef the Dark Being": {
      cardType: RITUAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 8,
      atk: 2500,
      def: 1500,
      text: 'Fiend/Effect/Ritual - <effect=Summon>Must be Ritual Summoned with "Final Ritual of the Ancients" and cannot be Ritual Summoned by other ways.</effect> <effect=Ignition>Once per turn: You can discard 1 Spell from your hand, then target 1 monster your opponent controls; take control of that target until the end of this turn.</effect>'
   },
   "Shinato, King of a Higher Plane": {
      cardType: RITUAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 8,
      atk: 3300,
      def: 3000,
      text: 'Fairy/Effect/Ritual - <effect=Summon>Must be Ritual Summoned with "Shinato\'s Ark" and cannot be Ritual Summoned by other ways.</effect> <effect=Trigger>When this card destroys a Defense Position monster by battle and sends it to the Graveyard: Inflict damage to your opponent equal to its original ATK.</effect>'
   },
   "Skull Guardian": {
      cardType: RITUAL_MONSTER,
      attribute: LIGHT,
      levelOrSubtype: 7,
      atk: 2050,
      def: 2500,
      text: 'Warrior/Ritual - You can Ritual Summon this card with "Novox\'s Prayer".'
   },
   "The Masked Beast": {
      cardType: RITUAL_MONSTER,
      attribute: DARK,
      levelOrSubtype: 8,
      atk: 3200,
      def: 1800,
      text: 'Fiend/Ritual - You can Ritual Summon this card with "Curse of the Masked Beast".'
   }
};

export default ritualMonsters;
