// game settings
const GAME_ASPECT_RATIO = 1.8;
const VILLAIN_HAND_HEIGHT_FRACTION = 0.5;
const MODAL_CARD_SIZE = 0.85;
const CARD_RATIO = 1.45;
const DIVIDER_HEIGHT = 40;
const LEFT_PANEL_SIZE = 23;
const RIGHT_PANEL_SIZE = 14;
const backgrounds = ["Default.png", "Sorcerer_In_Space.png", "Thousand_Eyes_Goats.png"];

// player
const HERO = "HERO";
const VILLAIN = "VILLAIN";

// special card names
const FACEDOWN_CARD = "Facedown Card";

// cardTypes
const NORMAL_MONSTER = "normalMonster";
const EFFECT_MONSTER = "effectMonster";
const RITUAL_MONSTER = "ritualMonster";
const FUSION_MONSTER = "fusionMonster";
const TOKEN_MONSTER = "tokenMonster";
const SPELL = "Spell";
const TRAP = "Trap";
const orderedCardTypes = [NORMAL_MONSTER, EFFECT_MONSTER, RITUAL_MONSTER, SPELL, TRAP];

// monster attributes
const DARK = "Dark";
const EARTH = "Earth";
const FIRE = "Fire";
const LIGHT = "Light";
const WATER = "Water";
const WIND = "Wind";
const allAttributes = [DARK, EARTH, FIRE, LIGHT, WATER, WIND];

// monster types
const AQUA = "Aqua";
const BEAST = "Beast";
const BEAST_WARRIOR = "Beast-Warrior";
const DINOSAUR = "Dinosaur";
const DRAGON = "Dragon";
const FAIRY = "Fairy";
const FIEND = "Fiend";
const FISH = "Fish";
const INSECT = "Insect";
const MACHINE = "Machine";
const PLANT = "Plant";
const PYRO = "Pyro";
const REPTILE = "Reptile";
const ROCK = "Rock";
const SEA_SERPENT = "Sea Serpent";
const SPELLCASTER = "Spellcaster";
const THUNDER = "Thunder";
const WARRIOR = "Warrior";
const WINGED_BEAST = "Winged Beast";
const ZOMBIE = "Zombie";
const allMonsterTypes = [
   AQUA,
   BEAST,
   BEAST_WARRIOR,
   DINOSAUR,
   DRAGON,
   FAIRY,
   FIEND,
   FISH,
   INSECT,
   MACHINE,
   PLANT,
   PYRO,
   REPTILE,
   ROCK,
   SEA_SERPENT,
   SPELLCASTER,
   THUNDER,
   WARRIOR,
   WINGED_BEAST,
   ZOMBIE
];

// cardSubtypes
const NORMAL = "Normal";
const CONTINUOUS = "Continuous";
const COUNTER = "Counter";
const EQUIP = "Equip";
const FIELD = "Field";
const QUICKPLAY = "Quick-Play";
const RITUAL = "Ritual";
const allSubtypes = [NORMAL, CONTINUOUS, COUNTER, EQUIP, FIELD, QUICKPLAY, RITUAL];
const spellSubtypes = [NORMAL, CONTINUOUS, EQUIP, FIELD, QUICKPLAY, RITUAL];
const trapSubtypes = [NORMAL, CONTINUOUS, COUNTER];

// card locations
const MAINDECK = "maindeck";
const SIDEDECK = "sidedeck";
const SEARCH_RESULTS = "SEARCH_RESULTS";
const allLocations = [MAINDECK, SIDEDECK, SEARCH_RESULTS];

// rows & zones
const MONSTER = "monster";
const SPELL_TRAP = "spellTrap";
const FIELD_SPELL = "fieldSpell";
const HAND = "hand";
const DECK = "deck";
const EXTRA_DECK = "extraDeck";
const deckZones = [DECK, EXTRA_DECK];
const GRAVEYARD = "graveyard";
const BANISHED = "banished";
const discardZones = [GRAVEYARD, BANISHED];
const dndZones = [DECK, ...discardZones];
const dynamicZones = [HAND, DECK, ...discardZones];
const toExtraZones = [HAND, ...deckZones];
const onField = [MONSTER, SPELL_TRAP, FIELD_SPELL];
const allCardTypes = [MONSTER, NORMAL_MONSTER, EFFECT_MONSTER, RITUAL_MONSTER, SPELL_TRAP, SPELL, TRAP];

// battle
const ATTACKING = "Attacking";
const DEFENDING = "Defending";

// game actions
const ADD_MESSAGE = "ADD_MESSAGE";
const SET_CHAT_TO = "SET_CHAT_TO";
const RESET_CHAT = "RESET_CHAT";
const SET_GAMESTATE_TO = "SET_GAMESTATE_TO";
const MOVE_CARD = "MOVE_CARD";
const DRAW_PHASE_DRAW = "DRAW_PHASE_DRAW";
const CREATE_TOKEN = "CREATE_TOKEN";
const SWITCH_POSITION = "SWITCH_POSITION";
const ADJUST_COUNTERS = "ADJUST_COUNTERS";
const CLEAR_BATTLE = "CLEAR_BATTLE";
const ATTACK = "ATTACK";
const ADJUST_LP = "ADJUST_LP";
const REVEAL_HAND = "REVEAL_HAND";
const NEW_SOLO_GAME = "NEW_SOLO_GAME";
const DRAW_CARD = "DRAW_CARD";
const NEW_HOVER = "NEW_HOVER";
const CLEAR_HOVER = "CLEAR_HOVER";
const NEW_SELECTION = "NEW_SELECTION";
const CLEAR_SELECTION = "CLEAR_SELECTION";
const SWITCH_NAMES = "SWITCH_NAMES";
const CHAT_SHORTCUTS = "CHAT_SHORTCUTS";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const PREPOP_LP = "PREPOP_LP";
const CONCEDE_GAME = "CONCEDE_GAME";
const SET_TURN = "SET_TURN";
const SHUFFLE_DECK = "SHUFFLE_DECK";
const SET_DECK = "SET_DECK";

// deck constructor actions
const SET_DECKLIST = "SET_DECKLIST";
const SET_PUBLIC = "SET_PUBLIC";
const TRANSFER_CARD = "TRANSFER_CARD";
const SET_STACK = "SET_STACK";
const LOAD_DECK = "LOAD_DECK";
const SET_UNSAVED = "SET_UNSAVED";
const SET_CARDSIZE = "SET_CARDSIZE";
const NEW_RESULTS = "NEW_RESULTS";
const RERENDER_SEARCH = "RERENDER_SEARCH";

// league socket actions
const ENTER_QUEUE = "EnterQueue";
const NEW_GAME = "NewGame";

// game socket actions
const CONNECTED = "CONNECTED";
const MULTIPLE_ACTIONS = "MULTIPLE_ACTIONS";
const REDIRECT = "REDIRECT";
const JOIN_MATCH = "JoinMatch";
const NEW_CHAT_MESSAGE = "NewChatMessage";
const NEW_PHASE = "NewPhase";
const SEND_LP_CHANGE = "SendLpChange";
const SEND_TOKENS = "SendTokens";
const SEND_REVEAL = "SendReveal";
const SEND_CARD_MOVE = "SendCardMove";
const SEND_DRAW_PHASE = "SendDrawPhase";
const SEND_POS_CHANGE = "SendPosChange";
const SEND_ATTACK = "SendAttack";
const SEND_CLEAR = "SendClear";
const REORDER_DECK = "ReorderDeck";
const MILL = "Mill";
const PLAYER_CONCEDED = "PlayerConceded";
const CLEANUP_GAME = "CleanupGame";
const SEND_ENTIRE_GAMESTATE = "SendEntireGamestate";
const SEND_SELECTION = "SendSelection";
const REMOVE_SELECTION = "RemoveSelection";
const SEND_COUNTERS = "SendCounters";
const SEND_DND = "SendDnd";
const SEND_SHUFFLE_AND_DRAW = "SendShuffleAndDraw";

// ItemTypes
const OFF_FIELD = "offField";
const allTypes = [MONSTER, SPELL_TRAP, FIELD_SPELL, OFF_FIELD + MONSTER, OFF_FIELD + SPELL_TRAP, EXTRA_DECK, DECK];

// colors
const OVER_COLOR = "#00FF00";
const HERO_SELECTION_COLOR = "#003CFF";
const VILLAIN_SELECTION_COLOR = "red";
const REVEAL_COLOR = "white";
const cardTypeColors = {
   effectMonster: "rgb(155,86,31)",
   st: "rgb(21,115,78) rgb(126,38,98) rgb(126,38,98) rgb(21,115,78)",
   Spell: "rgb(21,115,78)"
};

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

// axios
const API_URL = "https://s97v6wjzec.execute-api.us-east-2.amazonaws.com/";
const LEAGUE_SOCKET_URL = "wss://6wxdc56ju2.execute-api.us-east-2.amazonaws.com/";
const GAME_SOCKET_URL = "wss://piii9xe4hj.execute-api.us-east-2.amazonaws.com/";
const headers = { "Content-Type": "application/json" };

// script names
const SEARCH_DECK = "SEARCH_DECK";
const BANISH_ALL = "BANISH_ALL";
const MILL_UNTIL = "MILL_UNTIL";
const TOKENS = "MAKE_TOKENS";
const RANDOM_DISCARD = "RANDOM_DISCARD";
const FLIP_COINS = "FLIP_COINS";
const ROLL_DICE = "ROLL_DICE";
const DISCARD_AND_DRAW = "DISCARD_AND_DRAW";
const SHUFFLE_AND_DRAW = "SHUFFLE_AND_DRAW";
const SKIP_DRAWS = "SKIP_DRAWS";
const DRAW_N = "DRAW_N";

// complex prepopLP helpers
const PREPOP_LP_HELPER = {
   COUNTER: "COUNTER",
   EXPONENTIAL_COUNTER: "EXPONENTIAL_COUNTER",
   FIELD_MONSTER: "FIELD_MONSTER",
   HERO_GRAVEYARD: "HERO_GRAVEYARD",
   HERO_MONSTER: "HERO_MONSTER",
   VILLAIN_BANISHED: "VILLAIN_BANISHED",
   VILLAIN_FIELD: "VILLAIN_FIELD",
   VILLAIN_GRAVEYARD: "VILLAIN_GRAVEYARD",
   VILLAIN_HAND_AND_FIELD: "VILLAIN_HAND_AND_FIELD",
   VILLAIN_HAND: "VILLAIN_HAND",
   VILLAIN_MONSTER: "VILLAIN_MONSTER"
};

// leagues
const OFFICIAL_UNRANKED = {
   id: "GoatsDuels_FunTesting",
   name: "GoatsDuels Fun/Testing",
   description: "Set up some fun testing games with your friends here"
};

// misc
const SENTINEL = '|';
const LP_INPUT_ID = "lpinput";

module.exports = {
  ADD_MESSAGE,
  ADJUST_COUNTERS,
  ADJUST_LP,
  allAttributes,
  allCardTypes,
  allLocations,
  allMonsterTypes,
  allSubtypes,
  allTypes,
  API_URL,
  AQUA,
  ATTACK,
  ATTACKING,
  backgrounds,
  BANISH_ALL,
  BANISHED,
  BATTLE,
  BEAST_WARRIOR,
  BEAST,
  BUFFER,
  CARD_RATIO,
  cardTypeColors,
  CHAT_SHORTCUTS,
  CLEANUP_GAME,
  CLEAR_BATTLE,
  CLEAR_HOVER,
  CLEAR_SELECTION,
  CLOSE_MODAL,
  CONCEDE_GAME,
  CONNECTED,
  CONTINUOUS,
  COUNTER,
  CREATE_TOKEN,
  DARK,
  DECK,
  deckZones,
  DEFENDING,
  DINOSAUR,
  DISCARD_AND_DRAW,
  discardZones,
  DIVIDER_HEIGHT,
  dndZones,
  DRAGON,
  DRAW_CARD,
  DRAW_PHASE_DRAW,
  DRAW,
  DRAW_N,
  dynamicZones,
  EARTH,
  EFFECT_MONSTER,
  END,
  ENTER_QUEUE,
  EQUIP,
  EXTRA_DECK,
  FACEDOWN_CARD,
  FAIRY,
  FIELD_SPELL,
  FIELD,
  FIEND,
  FIRE,
  FISH,
  FLIP_COINS,
  FUSION_MONSTER,
  GAME_ASPECT_RATIO,
  GAME_SOCKET_URL,
  GRAVEYARD,
  HAND,
  headers,
  HERO_SELECTION_COLOR,
  HERO,
  INSECT,
  JOIN_MATCH,
  LEAGUE_SOCKET_URL,
  LEFT_PANEL_SIZE,
  LIGHT,
  LOAD_DECK,
  LP_INPUT_ID,
  MACHINE,
  MAIN1,
  MAIN2,
  MAINDECK,
  MILL_UNTIL,
  MILL,
  MODAL_CARD_SIZE,
  MONSTER,
  MOVE_CARD,
  MULTIPLE_ACTIONS,
  NEW_CHAT_MESSAGE,
  NEW_GAME,
  NEW_HOVER,
  NEW_PHASE,
  NEW_RESULTS,
  NEW_SELECTION,
  NEW_SOLO_GAME,
  NEXT_TURN,
  NORMAL_MONSTER,
  NORMAL,
  OFF_FIELD,
  OFFICIAL_UNRANKED,
  onField,
  OPEN_MODAL,
  orderedCardTypes,
  OVER_COLOR,
  phases,
  PLANT,
  PLAYER_CONCEDED,
  PREPOP_LP,
  PREPOP_LP_HELPER,
  PYRO,
  QUICKPLAY,
  RANDOM_DISCARD,
  REDIRECT,
  REMOVE_SELECTION,
  REORDER_DECK,
  REPTILE,
  RERENDER_SEARCH,
  RESET_CHAT,
  REVEAL_COLOR,
  REVEAL_HAND,
  RIGHT_PANEL_SIZE,
  RITUAL,
  RITUAL_MONSTER,
  ROCK,
  ROLL_DICE,
  SEA_SERPENT,
  SEARCH_DECK,
  SEARCH_RESULTS,
  SEND_ATTACK,
  SEND_CARD_MOVE,
  SEND_CLEAR,
  SEND_COUNTERS,
  SEND_DND,
  SEND_DRAW_PHASE,
  SEND_ENTIRE_GAMESTATE,
  SEND_LP_CHANGE,
  SEND_POS_CHANGE,
  SEND_REVEAL,
  SEND_SELECTION,
  SEND_SHUFFLE_AND_DRAW,
  SEND_TOKENS,
  SENTINEL,
  SET_CARDSIZE,
  SET_CHAT_TO,
  SET_DECK,
  SET_DECKLIST,
  SET_GAMESTATE_TO,
  SET_PUBLIC,
  SET_STACK,
  SET_TURN,
  SET_UNSAVED,
  SHUFFLE_AND_DRAW,
  SHUFFLE_DECK,
  SIDEDECK,
  SKIP_DRAWS,
  SPELL_TRAP,
  SPELL,
  SPELLCASTER,
  spellSubtypes,
  STANDBY,
  SWITCH_NAMES,
  SWITCH_POSITION,
  THUNDER,
  toExtraZones,
  TOKEN_MONSTER,
  TOKENS,
  TRANSFER_CARD,
  TRAP,
  trapSubtypes,
  VILLAIN_HAND_HEIGHT_FRACTION,
  VILLAIN_SELECTION_COLOR,
  VILLAIN,
  WARRIOR,
  WATER,
  WIND,
  WINGED_BEAST,
  ZOMBIE,
};