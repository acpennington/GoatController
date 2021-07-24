import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import hoverCard from "./hoverCard.js";
import selectedCard from "./selectedCard.js";

export default (history) =>
   combineReducers({
      router: connectRouter(history),
      hoverCard,
      selectedCard
   });
