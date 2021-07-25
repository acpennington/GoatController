import { setUnsaved } from "../shared/settings.js";
import { rerenderSearch } from "./searchResults.js";

import { SEARCH_RESULTS, SET_DECKLIST, TRANSFER_CARD } from "utils/constants.js";

function setDecklist(decklist) {
   return { type: SET_DECKLIST, data: decklist };
}

function transferCard(cardName, to, from) {
   return (dispatch) => {
      dispatch({ type: TRANSFER_CARD, data: { to, from, cardName } });
      if (to !== from) dispatch(setUnsaved(true));
      if (from === SEARCH_RESULTS || to === SEARCH_RESULTS) dispatch(rerenderSearch());
   };
}

export { setDecklist, transferCard };
