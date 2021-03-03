// game settings
const GAME_RATIO = 1.68;
const VILLAIN_HAND_SIZE = 0.7;
const CARD_RATIO = 1.45;

// players
const HERO = "hero";
const VILLAIN = "villain";

// special card names
const FACEDOWN_CARD = "Facedown Card";

// cardTypes
const EFFECT_MONSTER = "effectMonster";
const SPELL = "Spell";
const TRAP = "Trap";
const stTypes = [SPELL, TRAP];

// rows & zones
const MONSTER = "monster";
const ST = "s/t";
const FIELD_SPELL = "Field";
const HAND = "hand";
const DECK = "deck";
const EXTRA_DECK = "extra deck";
const deckZones = [DECK, EXTRA_DECK];
const GRAVEYARD = "graveyard";
const BANISHED = "banished";
const discardZones = [GRAVEYARD, BANISHED];
const dndZones = [DECK, ...discardZones];
const dynamicZones = [HAND, ...discardZones];

// actions
const ADD_MESSAGE = "ADD_MESSAGE";
const RESET_CHAT = "RESET_CHAT";
const MOVE_CARD = "MOVE_CARD";
const SWITCH_POSITION = "SWITCH_POSITION";
const SHUFFLE_HAND = "SHUFFLE_HAND";
const RESET_GAME = "RESET_GAME";
const NEW_HOVER = "NEW_HOVER";
const CLEAR_HOVER = "CLEAR_HOVER";
const NEW_SELECTION = "NEW_SELECTION";
const CLEAR_SELECTION = "CLEAR_SELECTION";
const SWITCH_DISCARD = "SWITCH_DISCARD";

// ItemTypes
const OFF_FIELD = "offField";
const allTypes = [MONSTER, ST, FIELD_SPELL, OFF_FIELD + MONSTER, OFF_FIELD + ST];

// colors
const OVER_COLOR = "#00FF00";
const INVALID_COLOR = "red";
const HERO_SELECTION_COLOR = "#003CFF";
const VILLAIN_SELECTION_COLOR = "yellow";

export {
   // game settings
   GAME_RATIO,
   VILLAIN_HAND_SIZE,
   CARD_RATIO,
   // players
   HERO,
   VILLAIN,
   // special card names
   FACEDOWN_CARD,
   // cardTypes
   EFFECT_MONSTER,
   SPELL,
   TRAP,
   stTypes,
   // rows & zones
   MONSTER,
   ST,
   FIELD_SPELL,
   HAND,
   DECK,
   EXTRA_DECK,
   deckZones,
   GRAVEYARD,
   BANISHED,
   discardZones,
   dndZones,
   dynamicZones,
   // actions
   ADD_MESSAGE,
   RESET_CHAT,
   MOVE_CARD,
   SWITCH_POSITION,
   SHUFFLE_HAND,
   RESET_GAME,
   NEW_HOVER,
   CLEAR_HOVER,
   NEW_SELECTION,
   CLEAR_SELECTION,
   SWITCH_DISCARD,
   // ItemTypes
   OFF_FIELD,
   allTypes,
   // colors
   OVER_COLOR,
   INVALID_COLOR,
   HERO_SELECTION_COLOR,
   VILLAIN_SELECTION_COLOR
};