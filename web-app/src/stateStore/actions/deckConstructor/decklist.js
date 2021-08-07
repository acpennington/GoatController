import { setUnsaved } from "../shared/settings.js";
import { rerenderSearch } from "./searchResults.js";

import { SEARCH_RESULTS, SET_DECKLIST, SET_PUBLIC, TRANSFER_CARD } from "utils/constants.js";
import { clearSelection } from "../shared/selectedCard.js";

function setDecklist(decklist) {
   return { type: SET_DECKLIST, data: decklist };
}

function setPublic(data) {
   return { type: SET_PUBLIC, data };
}

function transferCard(cardName, to, from) {
   return (dispatch) => {
      dispatch({ type: TRANSFER_CARD, data: { to, from, cardName } });
      if (to !== from) {
         dispatch(clearSelection());
         dispatch(setUnsaved(true));
         if (from === SEARCH_RESULTS || to === SEARCH_RESULTS) dispatch(rerenderSearch());
      }
   };
}

export { setDecklist, setPublic, transferCard };
