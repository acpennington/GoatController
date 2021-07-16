// game settings
const GAME_RATIO = 1.8;
const VILLAIN_HAND_SIZE = 0.5;
const MODAL_CARD_SIZE = 0.82;
const CARD_RATIO = 1.45;

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
const EXTRA_DECK = "Fusion Deck";
const deckZones = [DECK, EXTRA_DECK];
const GRAVEYARD = "graveyard";
const BANISHED = "banished";
const discardZones = [GRAVEYARD, BANISHED];
const dndZones = [DECK, ...discardZones];
const dynamicZones = [HAND, DECK, ...discardZones];
const toExtraZones = [HAND, ...deckZones];

// actions
const ADD_MESSAGE = "ADD_MESSAGE";
const SET_CHAT_TO = "SET_CHAT_TO";
const RESET_CHAT = "RESET_CHAT";
const SET_GAMESTATE_TO = "SET_GAMESTATE_TO";
const MOVE_CARD = "MOVE_CARD";
const DRAW_PHASE_DRAW = "DRAW_PHASE_DRAW";
const CREATE_TOKEN = "CREATE_TOKEN";
const SWITCH_POSITION = "SWITCH_POSITION";
const ADJUST_LP = "ADJUST_LP";
const REVEAL_HAND = "REVEAL_HAND";
const NEW_SOLO_GAME = "NEW_SOLO_GAME";
const DRAW_CARD = "DRAW_CARD";
const NEW_HOVER = "NEW_HOVER";
const CLEAR_HOVER = "CLEAR_HOVER";
const NEW_SELECTION = "NEW_SELECTION";
const CLEAR_SELECTION = "CLEAR_SELECTION";
const SWITCH_DISCARD = "SWITCH_DISCARD";
const SWITCH_NAMES = "SWITCH_NAMES";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const PREPOP_LP = "PREPOP_LP";
const CONCEDE_GAME = "CONCEDE_GAME";
const SET_TURN = "SET_TURN";
const NEXT_PHASE = "NEXT_PHASE";
const PREV_PHASE = "PREV_PHASE";
const RESET_TURN = "RESET_TURN";
const SHUFFLE_DECK = "SHUFFLE_DECK";
const SET_DECK = "SET_DECK";

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
const PUSH_NEXT_PHASE = "PushNextPhase";
const PUSH_PREV_PHASE = "PushPrevPhase";
const SEND_LP_CHANGE = "SendLpChange";
const SEND_TOKENS = "SendTokens";
const SEND_REVEAL = "SendReveal";
const SEND_CARD_MOVE = "SendCardMove";
const SEND_POS_CHANGE = "SendPosChange";
const REORDER_DECK = "ReorderDeck";
const MILL = "Mill";
const PLAYER_CONCEDED = "PlayerConceded";
const CLEANUP_GAME = "CleanupGame";
const SEND_ENTIRE_GAMESTATE = "SendEntireGamestate";

// ItemTypes
const OFF_FIELD = "offField";
const allTypes = [MONSTER, ST, FIELD_SPELL, OFF_FIELD + MONSTER, OFF_FIELD + ST, EXTRA_DECK, DECK];

// colors
const OVER_COLOR = "#00FF00";
const HERO_SELECTION_COLOR = "#003CFF";
const VILLAIN_SELECTION_COLOR = "red";
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

// axios
const API_URL = "https://s97v6wjzec.execute-api.us-east-2.amazonaws.com/";
const LEAGUE_SOCKET_URL = "wss://6wxdc56ju2.execute-api.us-east-2.amazonaws.com/";
const GAME_SOCKET_URL = "wss://piii9xe4hj.execute-api.us-east-2.amazonaws.com/";
const headers = { "Content-Type": "application/json" };

// script names
const SEARCH_DECK = "Search_Deck";
const BANISH_ALL = "Banish_All";
const MILL_UNTIL = "Mill_Until";
const TOKENS = "Make_Tokens";
const RANDOM_DISCARD = "Random_Discard";

// leagues
const OFFICIAL_UNRANKED = {
   id: "GoatsDuels_FunTesting",
   name: "GoatsDuels Fun/Testing",
   description: "Set up some fun testing games with your friends here"
};

export {
   // game settings
   GAME_RATIO,
   VILLAIN_HAND_SIZE,
   MODAL_CARD_SIZE,
   CARD_RATIO,
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
   SET_CHAT_TO,
   RESET_CHAT,
   SET_GAMESTATE_TO,
   MOVE_CARD,
   DRAW_PHASE_DRAW,
   CREATE_TOKEN,
   SWITCH_POSITION,
   REVEAL_HAND,
   ADJUST_LP,
   NEW_SOLO_GAME,
   DRAW_CARD,
   NEW_HOVER,
   CLEAR_HOVER,
   NEW_SELECTION,
   CLEAR_SELECTION,
   SWITCH_DISCARD,
   SWITCH_NAMES,
   OPEN_MODAL,
   CLOSE_MODAL,
   PREPOP_LP,
   CONCEDE_GAME,
   SET_TURN,
   NEXT_PHASE,
   PREV_PHASE,
   RESET_TURN,
   SHUFFLE_DECK,
   SET_DECK,
   // league socket actions
   ENTER_QUEUE,
   NEW_GAME,
   // game socket actions
   CONNECTED,
   MULTIPLE_ACTIONS,
   REDIRECT,
   JOIN_MATCH,
   NEW_CHAT_MESSAGE,
   NEW_PHASE,
   PUSH_NEXT_PHASE,
   PUSH_PREV_PHASE,
   SEND_LP_CHANGE,
   SEND_TOKENS,
   SEND_REVEAL,
   SEND_CARD_MOVE,
   SEND_POS_CHANGE,
   REORDER_DECK,
   MILL,
   PLAYER_CONCEDED,
   CLEANUP_GAME,
   SEND_ENTIRE_GAMESTATE,
   // ItemTypes
   OFF_FIELD,
   allTypes,
   // colors
   OVER_COLOR,
   HERO_SELECTION_COLOR,
   VILLAIN_SELECTION_COLOR,
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
   phases,
   // axios
   API_URL,
   LEAGUE_SOCKET_URL,
   GAME_SOCKET_URL,
   headers,
   // script names
   SEARCH_DECK,
   BANISH_ALL,
   MILL_UNTIL,
   TOKENS,
   RANDOM_DISCARD,
   // leagues
   OFFICIAL_UNRANKED
};
