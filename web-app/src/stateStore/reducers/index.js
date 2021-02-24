// All of the reducers
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import hoverCard from "./hoverCard.js";
import selectedCard from "./selectedCard.js";
import field from "./field.js"

export default (history) =>
   combineReducers({
      router: connectRouter(history),
      field,
      hoverCard,
      selectedCard
   });
