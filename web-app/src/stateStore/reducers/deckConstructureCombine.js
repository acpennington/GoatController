import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import hoverCard from "./shared/hoverCard.js";
import selectedCard from "./shared/selectedCard.js";
import settings from "./shared/settings.js";
import searchResults from "./deckConstructor/searchResults.js";
import decklist from "./deckConstructor/decklist.js";

export default (history) =>
   combineReducers({
      router: connectRouter(history),
      hoverCard,
      selectedCard,
      settings,
      searchResults,
      decklist
   });
