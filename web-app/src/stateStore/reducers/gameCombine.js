import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import hoverCard from "./shared/hoverCard.js";
import selectedCard from "./shared/selectedCard.js";
import field from "./gameOnly/field.js";
import chat from "./gameOnly/chat.js";
import settings from "./gameOnly/settings.js";
import turn from "./gameOnly/turn.js";

export default (history) =>
   combineReducers({
      router: connectRouter(history),
      field,
      hoverCard,
      selectedCard,
      chat,
      settings,
      turn
   });
