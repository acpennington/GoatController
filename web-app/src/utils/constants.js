// game settings
export const GAME_ASPECT_RATIO = 1.8;
export const VILLAIN_HAND_HEIGHT_FRACTION = 0.5;
export const MODAL_CARD_SIZE = 0.82;
export const CARD_RATIO = 1.45;

// special card names
export const FACEDOWN_CARD = "Facedown Card";

// cardTypes
export const EFFECT_MONSTER = "effectMonster";
export const FUSION_MONSTER = "fusionMonster";
export const SPELL = "Spell";
export const TRAP = "Trap";

// card locations
export const MAINDECK = "maindeck";
export const SIDEDECK = "sidedeck";
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const allLocations = [MAINDECK, SIDEDECK, SEARCH_RESULTS];

// rows & zones
export const MONSTER = "monster";
export const SPELL_TRAP = "spellTrap";
export const FIELD_SPELL = "fieldSpell";
export const HAND = "hand";
export const DECK = "deck";
export const EXTRA_DECK = "extraDeck";
export const deckZones = [DECK, EXTRA_DECK];
export const GRAVEYARD = "graveyard";
export const BANISHED = "banished";
export const discardZones = [GRAVEYARD, BANISHED];
export const dndZones = [DECK, ...discardZones];
export const dynamicZones = [HAND, DECK, ...discardZones];
export const toExtraZones = [HAND, ...deckZones];
export const onField = [MONSTER, SPELL_TRAP, FIELD_SPELL];

// battle
export const ATTACKING = "Attacking";
export const DEFENDING = "Defending";

// game actions
export const ADD_MESSAGE = "ADD_MESSAGE";
export const SET_CHAT_TO = "SET_CHAT_TO";
export const RESET_CHAT = "RESET_CHAT";
export const SET_GAMESTATE_TO = "SET_GAMESTATE_TO";
export const MOVE_CARD = "MOVE_CARD";
export const DRAW_PHASE_DRAW = "DRAW_PHASE_DRAW";
export const CREATE_TOKEN = "CREATE_TOKEN";
export const SWITCH_POSITION = "SWITCH_POSITION";
export const ADJUST_COUNTERS = "ADJUST_COUNTERS";
export const CLEAR_BATTLE = "CLEAR_BATTLE";
export const ATTACK = "ATTACK";
export const ADJUST_LP = "ADJUST_LP";
export const REVEAL_HAND = "REVEAL_HAND";
export const NEW_SOLO_GAME = "NEW_SOLO_GAME";
export const DRAW_CARD = "DRAW_CARD";
export const NEW_HOVER = "NEW_HOVER";
export const CLEAR_HOVER = "CLEAR_HOVER";
export const NEW_SELECTION = "NEW_SELECTION";
export const CLEAR_SELECTION = "CLEAR_SELECTION";
export const SWITCH_NAMES = "SWITCH_NAMES";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const PREPOP_LP = "PREPOP_LP";
export const CONCEDE_GAME = "CONCEDE_GAME";
export const SET_TURN = "SET_TURN";
export const SHUFFLE_DECK = "SHUFFLE_DECK";
export const SET_DECK = "SET_DECK";

// deck constructor actions
export const SET_DECKLIST = "SET_DECKLIST";
export const TRANSFER_CARD = "TRANSFER_CARD";
export const LOAD_DECK = "LOAD_DECK";
export const SET_UNSAVED = "SET_UNSAVED";
export const NEW_RESULTS = "NEW_RESULTS";
export const RERENDER_SEARCH = "RERENDER_SEARCH";

// league socket actions
export const ENTER_QUEUE = "EnterQueue";
export const NEW_GAME = "NewGame";

// game socket actions
export const CONNECTED = "CONNECTED";
export const MULTIPLE_ACTIONS = "MULTIPLE_ACTIONS";
export const REDIRECT = "REDIRECT";
export const JOIN_MATCH = "JoinMatch";
export const NEW_CHAT_MESSAGE = "NewChatMessage";
export const NEW_PHASE = "NewPhase";
export const SEND_LP_CHANGE = "SendLpChange";
export const SEND_TOKENS = "SendTokens";
export const SEND_REVEAL = "SendReveal";
export const SEND_CARD_MOVE = "SendCardMove";
export const SEND_DRAW_PHASE = "SendDrawPhase";
export const SEND_POS_CHANGE = "SendPosChange";
export const SEND_ATTACK = "SendAttack";
export const SEND_CLEAR = "SendClear";
export const REORDER_DECK = "ReorderDeck";
export const MILL = "Mill";
export const PLAYER_CONCEDED = "PlayerConceded";
export const CLEANUP_GAME = "CleanupGame";
export const SEND_ENTIRE_GAMESTATE = "SendEntireGamestate";
export const SEND_SELECTION = "SendSelection";
export const REMOVE_SELECTION = "RemoveSelection";
export const SEND_COUNTERS = "SendCounters";

// ItemTypes
export const OFF_FIELD = "offField";
export const allTypes = [MONSTER, SPELL_TRAP, FIELD_SPELL, OFF_FIELD + MONSTER, OFF_FIELD + SPELL_TRAP, EXTRA_DECK, DECK];

// colors
export const OVER_COLOR = "#00FF00";
export const HERO_SELECTION_COLOR = "#003CFF";
export const VILLAIN_SELECTION_COLOR = "red";
export const REVEAL_COLOR = "white";
export const cardTypeColors = {
   effectMonster: "rgb(155,86,31)",
   st: "rgb(21,115,78) rgb(126,38,98) rgb(126,38,98) rgb(21,115,78)",
   Spell: "rgb(21,115,78)"
};

// scrolling
export const BUFFER = 10;

// phases
export const DRAW = "Draw";
export const STANDBY = "Standby";
export const MAIN1 = "Main 1";
export const BATTLE = "Battle";
export const MAIN2 = "Main 2";
export const END = "End";
export const NEXT_TURN = "Next Turn";
export const phases = [DRAW, STANDBY, MAIN1, BATTLE, MAIN2, END, NEXT_TURN];

// axios
export const API_URL = "https://s97v6wjzec.execute-api.us-east-2.amazonaws.com/";
export const LEAGUE_SOCKET_URL = "wss://6wxdc56ju2.execute-api.us-east-2.amazonaws.com/";
export const GAME_SOCKET_URL = "wss://piii9xe4hj.execute-api.us-east-2.amazonaws.com/";
export const headers = { "Content-Type": "application/json" };

// script names
export const SEARCH_DECK = "Search_Deck";
export const BANISH_ALL = "Banish_All";
export const MILL_UNTIL = "Mill_Until";
export const TOKENS = "Make_Tokens";
export const RANDOM_DISCARD = "Random_Discard";
export const FLIP_COINS = "Flip_Coins";

// leagues
export const OFFICIAL_UNRANKED = {
   id: "GoatsDuels_FunTesting",
   name: "GoatsDuels Fun/Testing",
   description: "Set up some fun testing games with your friends here"
};
