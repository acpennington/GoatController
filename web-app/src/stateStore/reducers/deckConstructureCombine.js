import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import hoverCard from "./shared/hoverCard.js";
import selectedCard from "./shared/selectedCard.js";
import searchResults from "./deckConstructorOnly/searchResults.js";
import decklist from "./deckConstructorOnly/decklist.js";

export default (history) =>
   combineReducers({
      router: connectRouter(history),
      hoverCard,
      selectedCard,
      searchResults,
      decklist
   });
