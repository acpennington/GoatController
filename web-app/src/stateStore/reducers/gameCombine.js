import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import hoverCard from "./shared/hoverCard.js";
import selectedCard from "./shared/selectedCard.js";
import field from "./game/field.js";
import chat from "./game/chat.js";
import settings from "./shared/settings.js";
import turn from "./game/turn.js";

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
