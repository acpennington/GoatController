// game settings
const GAME_RATIO = 1.82;
const VILLAIN_HAND_SIZE = 0.5;
const MODAL_CARD_SIZE = 0.75;
const CARD_RATIO = 1.45;

// players
const HERO = "hero";
const VILLAIN = "villain";
const SYSTEM = "Server";

// special card names
const FACEDOWN_CARD = "Facedown Card";

// cardTypes
const EFFECT_MONSTER = "effectMonster";
const FUSION_MONSTER = "fusionMonster";
const SPELL = "Spell";
const TRAP = "Trap";

// rows & zones
const MONSTER = "monster";
const ST = "s/t";
const FIELD_SPELL = "Field";
const HAND = "hand";
const DECK = "deck";
const EXTRA_DECK = "Extra Deck";
const deckZones = [DECK, EXTRA_DECK];
const GRAVEYARD = "graveyard";
const BANISHED = "banished";
const discardZones = [GRAVEYARD, BANISHED];
const dndZones = [DECK, ...discardZones];
const dynamicZones = [HAND, ...discardZones];
const toExtraZones = [HAND, ...deckZones];

// actions
const ADD_MESSAGE = "ADD_MESSAGE";
const SYSTEM_MESSAGE = "SYSTEM_MESSAGE";
const RESET_CHAT = "RESET_CHAT";
const MOVE_CARD = "MOVE_CARD";
const SWITCH_POSITION = "SWITCH_POSITION";
const ADJUST_LP = "ADJUST_LP";
const REVEAL_HAND = "REVEAL_HAND";
const RESET_GAME = "RESET_GAME";
const NEW_HOVER = "NEW_HOVER";
const CLEAR_HOVER = "CLEAR_HOVER";
const NEW_SELECTION = "NEW_SELECTION";
const CLEAR_SELECTION = "CLEAR_SELECTION";
const SWITCH_DISCARD = "SWITCH_DISCARD";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const SET_TURN = "SET_PHASE";
const NEXT_PHASE = "NEXT_PHASE";
const PREV_PHASE = "PREV_PHASE";
const RESET_TURN = "RESET_TURN";

// ItemTypes
const OFF_FIELD = "offField";
const allTypes = [MONSTER, ST, FIELD_SPELL, OFF_FIELD + MONSTER, OFF_FIELD + ST, EXTRA_DECK];

// colors
const OVER_COLOR = "#00FF00";
const HERO_SELECTION_COLOR = "#003CFF";
const VILLAIN_SELECTION_COLOR = "red";
const BORDER_COLOR = "#292c42";
const REVEAL_COLOR = "white";

// scrolling
const BUFFER = 10;

// phases
const DRAW = "Draw";
const STANDBY = "Standby";
const MAIN1 = "Main 1";
const BATTLE = "Battle";
const MAIN2 = "Main 2";
const END = "End";
const NEXT_TURN = "Next Turn";
const phases = [DRAW, STANDBY, MAIN1, BATTLE, MAIN2, END, NEXT_TURN];

export {
   // game settings
   GAME_RATIO,
   VILLAIN_HAND_SIZE,
   MODAL_CARD_SIZE,
   CARD_RATIO,
   // players
   HERO,
   VILLAIN,
   SYSTEM,
   // special card names
   FACEDOWN_CARD,
   // cardTypes
   EFFECT_MONSTER,
   FUSION_MONSTER,
   SPELL,
   TRAP,
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
   toExtraZones,
   // actions
   ADD_MESSAGE,
   SYSTEM_MESSAGE,
   RESET_CHAT,
   MOVE_CARD,
   SWITCH_POSITION,
   REVEAL_HAND,
   ADJUST_LP,
   RESET_GAME,
   NEW_HOVER,
   CLEAR_HOVER,
   NEW_SELECTION,
   CLEAR_SELECTION,
   SWITCH_DISCARD,
   OPEN_MODAL,
   CLOSE_MODAL,
   SET_TURN,
   NEXT_PHASE,
   PREV_PHASE,
   RESET_TURN,
   // ItemTypes
   OFF_FIELD,
   allTypes,
   // colors
   OVER_COLOR,
   HERO_SELECTION_COLOR,
   VILLAIN_SELECTION_COLOR,
   BORDER_COLOR,
   REVEAL_COLOR,
   // scrolling
   BUFFER,
   // phases
   DRAW,
   STANDBY,
   MAIN1,
   BATTLE,
   MAIN2,
   END,
   NEXT_TURN,
   phases
};
